/**
* js-xml-serializer is free software provided under the MIT license.
*	See LICENSE file for full text of the license.
*	Copyright 2010 Dan Newcome.
*/
window.jxs = (function()
{
	function serialize( parent, member, obj, rules, namespaces ) {
		if( rules == undefined ) {
			return serialize_default( obj );
		}

		// write namespaces in the root element
		var xmlns = "";
		if( parent == null ) {
			for( var namespace in namespaces ) {
				var prefix = namespaces[ namespace ];
				xmlns += "xmlns";
				if( prefix != "" )
				 	xmlns += ":" + prefix
				xmlns += "='" + namespace + "' ";
			}
		}

		var retval = "";
		var rule;
		if( obj == null ) {
			// don't serialize null values
			return retval;
		}

		if( parent != null ) {
			rule = rules[ getName( parent ) ][ member ];
			if (rules[getName(obj)] != undefined /*&& rule.type == undefined*/) {
				var oRule = rules[getName(obj)]["__def__"];
				if(oRule != undefined) {
					rule.type = getName(obj);
				}
			}
		}
		else {
			rule = rules[ getName( obj ) ][ "__def__" ];
		}
		if( rule == undefined ) {
			rule = rules[ getName( obj ) ][ "__def__" ];
		}
		if( rule.nodetype == "element" ) {
			var prefix = namespaces[ rule.namespace ] || "";
			if( prefix != "" ) {
				prefix += ":";
			}
			
			//console.log("element:", rule);

			// TODO: if prefix not found, we should set xmlns: to the namespace of the element, if
			// element is in a namespace
			retval = "\n" + "<" + prefix + rule.nodename;

			// console.log("rule: ", rule);

			if(rule.type != undefined) {
				var tRule = rules[rule.type]["__def__"];
				var tPrefix = namespaces[ tRule.namespace ] || "";
				var tXmlType = tRule.nodename;
				if( tPrefix != "" ) {
					tPrefix += ":";
				}
				if (tPrefix != prefix && tXmlType != undefined)
					retval += ' xsi:type="' + tPrefix + tXmlType + '"';
			}
			retval += processAttributes( obj, rules, namespaces ) + getXmlns( xmlns ) + ">";

			// console.log("Retval 1:", retval);

			var isArray = rule.multiple || false;

			if(isArray)
			{
				var n = obj.length;
				for(var i=0; i<n; i++) {
					for( var item in obj[i] ) {
						retval += serialize( obj[i], item, obj[i][item], rules, namespaces );
					}
				}
			} else {
				if( typeOf( obj ) == 'object' ) {
					var oRule = rules[getName(obj)];
					if(oRule != undefined) {
						for( var ok in oRule ) {
							if(ok == '__def__') {
								continue;
							}
							retval += serialize(obj, ok, obj[ok] || '', rules, namespaces);
						}
					}
					// for( var item in obj ) {
					// 	retval += serialize( obj, item, obj[item] || '', rules, namespaces );
					// }
				} else {
					retval += obj;
				}
			}
			// closing tag
			retval += "</" + prefix + rule.nodename + ">";

			//console.log("Retval 2:", retval);
		}
		else if( rule.nodetype == "content" ) {
			retval += obj;
		}

		//console.log("RetVal last:", retval);

		// remove empty tags
		retval = retval.replace(/<[^>^/]+><\/[^>]+>/ig,'');
		// remove double new line
		retval = retval.replace(/\n{2,}/g,'\n');

		return retval;
	}

	function processAttributes( obj, rules, namespaces ) {
		var retval = "";
		var objRule = rules[getName(obj)];
		if(objRule == undefined)
			return retval;
		for( var item in obj ) {
			var rule = objRule[ item ];
			if( rule && rule.nodetype == "attribute" ) {
				var prefix = namespaces[ rule.namespace ] || rule.namespace || "";
				if( prefix != "" ) {
					prefix += ":";
				}
				retval += " " + prefix + rule.nodename + "='" + obj[ item ] + "'";
			}
		}
		return retval;
	}

	function serialize_default( obj ) {
		var retval = "<" + getName( obj ) + ">\n";
		if( typeOf( obj ) == 'object' || typeOf( obj ) == 'array' ) {
			for( var item in obj ) {
				retval += serialize_default( obj[item] );
			}
		}
		else {
			retval += obj + "\n";
		}
		retval += "</" + getName( obj ) + ">\n";
		return retval;
	}

	/**
	* Performs some formatting on the namespace
	*/
	function getXmlns( name ) {
		if( name == "" ) {
			return "";
		}
		else {
			return " " + name;
		}
	}

	/**
	* getname from stack overflow
	* http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
	*/
	function getName( obj ) {
	   var funcNameRegex = /function (.{1,})\(/;
	   var results = (funcNameRegex).exec((obj).constructor.toString());
	   return (results && results.length > 1) ? results[1] : "";
	};

	function getNodeName(xml) {
		var n = xml.nodeName;
		nNS = n.split(":");
		if(nNS.length == 2)
			n = nNS[1];
		return n;
	}

	function getClassOfXmlElement(xml, rules) {
		var klass = xml.getAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "type");
		if(klass != undefined) {
			ns_klass = klass.split(":");
			if(ns_klass.length == 2)
			{
				klass = ns_klass[1];
			}
		}
		var xmlName = klass || getNodeName(xml);
		for(var r in rules)
		{
  		if(rules[r]["__def__"].nodename == xmlName)
			{
				klass = r;
				break;
			}
		}

		return klass;
	}

	function deserialize(xml, rules, klassDefault) {
		var obj;

		var xmlName = getNodeName(xml);
		var klass;

		if(xml.nodeType == 1)
		{
			klass = getClassOfXmlElement(xml, rules);
			if(klass == undefined)
			{
				var pKlass = getClassOfXmlElement(xml.parentNode, rules);
				if(pKlass != undefined)
				{
					var kRule = rules[pKlass];
					for(var r in kRule)
					{
						if(kRule[r].nodename == xmlName && kRule[r].type != undefined)
						{
							klass = kRule[r].type;
							break;
						}
					}
				}
			}
			klass = klass || klassDefault;

			// var klass = xml.getAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "type");
			// for(var r in rules)
			// {
			// 	if(rules[r]["__def__"].nodename == xml.nodeName)
			// 	{
			// 		klass = r;
			// 		break;
			// 	}
			// }
			if(klass == undefined)
			{
				if(xml.firstElementChild == null && xml.firstChild != null && xml.firstChild.nodeType == 3)
					obj = xml.firstChild.nodeValue;
				return obj;
			}

			// console.log("Klass: ", klass);
			// 
			obj = new window[klass];

			var rule = rules[klass];

			for(var el in rule)
			{
				if(el == "__def__")
					continue;

				var elRule = rule[el];

				var tagName = elRule.nodename;
				var tagNS = elRule.namespace || rule.namespace || ""
				var children = xml.getElementsByTagNameNS(tagNS, tagName);
				var isArray = elRule.multiple || false;
				var klass = elRule.type;
				if(isArray)
				{
					obj[el] = [];
				}
				for(var i=0; i<children.length; i++)
				{
					var n = children.item(i);
					var value = deserialize(n, rules, klass);
					// Set obj.el = value
					if(isArray)
					{
						obj[el].push(value);
					} else {
						obj[el] = value;
						break;
					}
				}
				// debugging elements
				//console.log(el + "=" + obj[el]);
			}

			return obj;
		}
	}

	/**
 	* export a simplified serialize function
 	*/
	return {
		serialize: function( obj, rule, ns ) {
			return serialize( null, null, obj, rule, ns );
		},
		deserialize: function(xml, rules) {
			var dom = null;
			try {
				dom = (new DOMParser()).parseFromString(xml, "text/xml");
			}catch(e){
				alert(e);
			}
			// dom.nodeType  must be 9
			// dom.childNodes.length must be 1
			//return xmlToJson(null, dom, rules);
			return deserialize(dom.childNodes.item(0), rules);
		}
	};
})();
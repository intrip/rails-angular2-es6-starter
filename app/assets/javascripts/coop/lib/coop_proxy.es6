/**
 * Proxy class used to exchange XML data with a SOAP WS
 */
 class CoopProxy{
  constructor(from, to, {serializer, debug} = {}) {
    this.from = from;
    this.to = to;
    // default options
    this.serializer = serializer || window.jxs;
    this.debug = debug || false;
  }

  get sessionId() {
    return this._sessionId;
  }
  set sessionId(value) {
    this._sessionId = this.from.identificativo = value;
  }

  doCommandAsync(command, body) {
    let req = this._createRichiesta(command, body);
    let xmlReq = this._serialize(req);
    let that = this;

    return new Promise(function(resolve, reject){
      try { 
        CommandAsync(xmlReq, function(xmlRes, uid) {
          let res = that._deserialize(xmlRes);
          
          if(that.debug === true)
            console.log(`*********************\n*  Message:\n*********************\nuid: ${uid}\nreq_js: ${JSON.stringify(req)}\nreq_xml: ${xmlReq}\nres_js: ${JSON.stringify(res)}\nres_xml: ${xmlRes}`);

          if(res.hasOwnProperty("errori")){
            reject({errors: res["errori"]});
          }
          else {
            resolve(res["body"]);
          }
      });
      }
      catch(err)
      {
        reject({errors: err});
      }      
    });

  }

  _serialize(obj) {
    return this.serializer.serialize(obj, CoopProxy.rules, CoopProxy.namespaces);
  }

  _deserialize(xml) {
    return this.serializer.deserialize(xml, CoopProxy.rules);
  }

  _createRichiesta(comando, body) {
    let r = new it_intersail_coop_RichiestaType();
    r.id = this._generateUUID();
    r.timeStamp = new Date().toISOString();
    r.mittente = this.from;
    r.destinatario = this.to;
    r.comando = comando;
    r.body = body;

    return r;
  }

  _generateUUID() {
    let d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
      d += performance.now();; //use high-precision timer if available
    }
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c==='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  //Class Methods
  static addDefaultNamespace(ns) {
    CoopProxy.namespaces[ns] = "";
  }

  static addNamespaces(ns) {
    if(!(ns.constructor === Array))
      throw "Argument must be an array";

    let l = ns.length;
    for(let i=0; i<l; i++) {
      CoopProxy.addNamespace(ns[i]);
    }
  }

  static addNamespace(ns) {
    if(ns in CoopProxy.namespaces)
      return;

    let n = Object.keys(CoopProxy.namespaces).length + 1;
    CoopProxy.namespaces[ns] = "q" + n;
  }

  static addRules(rule) {
    for(let k in rule)
    {
      let r = rule[k];
      if(!("__def__" in r))
        throw "Missing __def__ rule";

      if(k in CoopProxy.rules)
        throw "Existing key in rules: " + k;

      CoopProxy.rules[k] = r;
    }

    CoopProxy.initRules();
  }

  static inheritRules(klassFrom, klassTo) {
    let fRule = CoopProxy.rules[klassFrom];
    let tRule = CoopProxy.rules[klassTo];

    if(fRule === undefined || tRule === undefined)
      return;

    for(let r in fRule)
    {
      if(r !== "__def__")
        tRule[r] = fRule[r];
    }
  }

  static inheritedRules(klassFrom) {
    let fRule = CoopProxy.rules[klassFrom];

    if(fRule === undefined)
      return {};

    let res = {};
    for(let r in fRule)
    {
      if(r !== "__def__")
        res[r] = fRule[r];
    }
    return res;
  }

  static initRules() {
    for(let ruleName in CoopProxy.rules)
    {
      let rule = CoopProxy.rules[ruleName];
      let inh = rule["__inherits__"];
      if(inh === undefined)
        continue;

      let inherited = this.inheritedRules(inh);

      let newRule = {};
      for(let r in rule) {
        if(r === '__inherits__')
        {
          for(let ir in inherited) {
            newRule[ir] = inherited[ir];
          }
        } else {
          newRule[r] = rule[r];
        }
      }

      // delete CoopProxy.rules[ruleName];
      CoopProxy.rules[ruleName] = newRule;

      // this.inheritRules(inh, ruleName);
      // delete rule["__inherits__"];
    }
  }
}

// Defaul class variables
CoopProxy.namespaces = { "http://www.w3.org/2001/XMLSchema-instance": "xsi" };
CoopProxy.rules = {};
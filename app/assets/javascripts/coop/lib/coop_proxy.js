"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Proxy class used to exchange XML data with a SOAP WS
 */
var CoopProxy = function () {
  function CoopProxy(from, to) {
    var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var serializer = _ref.serializer;
    var debug = _ref.debug;

    _classCallCheck(this, CoopProxy);

    this.from = from;
    this.to = to;
    // default options
    this.serializer = serializer || window.jxs;
    this.debug = debug || false;
  }

  _createClass(CoopProxy, [{
    key: "doCommandAsync",
    value: function doCommandAsync(command, body) {
      var req = this._createRichiesta(command, body);
      var xmlReq = this._serialize(req);
      var that = this;

      return new Promise(function (resolve, reject) {
        try {
          CommandAsync(xmlReq, function (xmlRes, uid) {
            var res = that._deserialize(xmlRes);

            if (that.debug === true) console.log("*********************\n*  Message:\n*********************\nuid: " + uid + "\nreq_js: " + JSON.stringify(req) + "\nreq_xml: " + xmlReq + "\nres_js: " + JSON.stringify(res) + "\nres_xml: " + xmlRes);

            if (res.hasOwnProperty("errori")) {
              reject({ errors: res["errori"] });
            } else {
              resolve(res["body"]);
            }
          });
        } catch (err) {
          reject({ errors: err });
        }
      });
    }
  }, {
    key: "_serialize",
    value: function _serialize(obj) {
      return this.serializer.serialize(obj, CoopProxy.rules, CoopProxy.namespaces);
    }
  }, {
    key: "_deserialize",
    value: function _deserialize(xml) {
      return this.serializer.deserialize(xml, CoopProxy.rules);
    }
  }, {
    key: "_createRichiesta",
    value: function _createRichiesta(comando, body) {
      var r = new it_intersail_coop_RichiestaType();
      r.id = this._generateUUID();
      r.timeStamp = new Date().toISOString();
      r.mittente = this.from;
      r.destinatario = this.to;
      r.comando = comando;
      r.body = body;

      return r;
    }
  }, {
    key: "_generateUUID",
    value: function _generateUUID() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();; //use high-precision timer if available
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }

    //Class Methods

  }, {
    key: "sessionId",
    get: function get() {
      return this._sessionId;
    },
    set: function set(value) {
      this._sessionId = this.from.identificativo = value;
    }
  }], [{
    key: "addDefaultNamespace",
    value: function addDefaultNamespace(ns) {
      CoopProxy.namespaces[ns] = "";
    }
  }, {
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (!(ns.constructor === Array)) throw "Argument must be an array";

      var l = ns.length;
      for (var i = 0; i < l; i++) {
        CoopProxy.addNamespace(ns[i]);
      }
    }
  }, {
    key: "addNamespace",
    value: function addNamespace(ns) {
      if (ns in CoopProxy.namespaces) return;

      var n = Object.keys(CoopProxy.namespaces).length + 1;
      CoopProxy.namespaces[ns] = "q" + n;
    }
  }, {
    key: "addRules",
    value: function addRules(rule) {
      for (var k in rule) {
        var r = rule[k];
        if (!("__def__" in r)) throw "Missing __def__ rule";

        if (k in CoopProxy.rules) throw "Existing key in rules: " + k;

        CoopProxy.rules[k] = r;
      }

      CoopProxy.initRules();
    }
  }, {
    key: "inheritRules",
    value: function inheritRules(klassFrom, klassTo) {
      var fRule = CoopProxy.rules[klassFrom];
      var tRule = CoopProxy.rules[klassTo];

      if (fRule === undefined || tRule === undefined) return;

      for (var r in fRule) {
        if (r !== "__def__") tRule[r] = fRule[r];
      }
    }
  }, {
    key: "inheritedRules",
    value: function inheritedRules(klassFrom) {
      var fRule = CoopProxy.rules[klassFrom];

      if (fRule === undefined) return {};

      var res = {};
      for (var r in fRule) {
        if (r !== "__def__") res[r] = fRule[r];
      }
      return res;
    }
  }, {
    key: "initRules",
    value: function initRules() {
      for (var ruleName in CoopProxy.rules) {
        var rule = CoopProxy.rules[ruleName];
        var inh = rule["__inherits__"];
        if (inh === undefined) continue;

        var inherited = this.inheritedRules(inh);

        var newRule = {};
        for (var r in rule) {
          if (r === '__inherits__') {
            for (var ir in inherited) {
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
  }]);

  return CoopProxy;
}();

// Defaul class variables


CoopProxy.namespaces = { "http://www.w3.org/2001/XMLSchema-instance": "xsi" };
CoopProxy.rules = {};
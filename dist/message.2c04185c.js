// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"XHdR":[function(require,module,exports) {
!function () {
  var model = {
    init: function init() {
      AV.init({
        appId: "6QEhBTOEUrHYTwQvuKyrn0rT-gzGzoHsz",
        appKey: "BmT8ng5MmIRlQvDltuvys8Ro",
        serverURL: "https://6qehbtoe.lc-cn-n1-shared.com"
      });
    },
    // 获取数据
    fetch: function fetch() {
      var query = new AV.Query("message");
      return query.find(); // Promise 对象
    },
    // 创建数据
    save: function save(name, content) {
      var Message = AV.Object.extend("message"); //连接对应数据库名字

      var message = new Message();
      return message.save({
        //要存的信息
        name: name,
        content: content
      });
    }
  };
  var view = document.querySelector("section.message");
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;
      this.messageList = view.querySelector("#messageList");
      this.form = view.querySelector("#postMessageForm");
      this.model.init();
      this.bindEvents();
      this.loadMessages();
    },
    loadMessages: function loadMessages() {
      var _this = this;

      this.model.fetch().then(function (messages) {
        var array = messages.map(function (item) {
          return item.attributes;
        });
        array.forEach(function (item) {
          var li = document.createElement("li");
          li.innerText = "".concat(item.name, ": ").concat(item.content);

          _this.messageList.appendChild(li);
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.form.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      var _this3 = this;

      var myForm = this.form;
      var name = myForm.querySelector("input[name=name]").value;
      var content = myForm.querySelector("input[name=content]").value;

      if (name === "" && content === "") {
        alert("你是谁？想说啥？");
      } else if (name === "") {
        alert("你是谁？");
      } else if (content === "") {
        alert("想说啥？");
      } else {
        this.model.save(name, content).then(function (object) {
          var li = document.createElement("li");
          li.innerText = "".concat(object.attributes.name, ": ").concat(object.attributes.content);

          _this3.messageList.appendChild(li);

          myForm.querySelector("input[name=content]").value = "";
        }, function (error) {
          return console.log(error);
        });
      }
    }
  };
  controller.init(view, model);
}.call();
},{}]},{},["XHdR"], null)
//# sourceMappingURL=message.2c04185c.js.map
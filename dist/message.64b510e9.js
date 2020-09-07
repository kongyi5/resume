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
AV.init({
  appId: "6QEhBTOEUrHYTwQvuKyrn0rT-gzGzoHsz",
  appKey: "BmT8ng5MmIRlQvDltuvys8Ro",
  serverURL: "https://6qehbtoe.lc-cn-n1-shared.com"
}); // 示例代码
// let x = AV.Object.extend("jerry");
// let o = new x();
// o.save().then((o) => {
//   console.log("保存成功。");
// });

var query = new AV.Query("message");
query.find().then(function (messages) {
  var array = messages.map(function (item) {
    return item.attributes;
  });
  array.forEach(function (item) {
    var li = document.createElement("li");
    li.innerText = "".concat(item.name, ": ").concat(item.content);
    var messageList = document.querySelector("#messageList");
    messageList.appendChild(li);
  });
});
var myForm = document.querySelector("#postMessageForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = myForm.querySelector("input[name=name]").value;
  var content = myForm.querySelector("input[name=content]").value;
  var Message = AV.Object.extend("message");
  var message = new Message();
  message.save({
    name: name,
    content: content
  }).then(function (object) {
    var li = document.createElement("li");
    li.innerText = "".concat(object.attributes.name, ": ").concat(object.attributes.content);
    var messageList = document.querySelector("#messageList");
    myForm.querySelector("input[name=content]").value = "";
    messageList.appendChild(li);
  });
});
},{}]},{},["XHdR"], null)
//# sourceMappingURL=message.64b510e9.js.map
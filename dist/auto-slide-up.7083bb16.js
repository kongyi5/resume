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
})({"fXTw":[function(require,module,exports) {
!function () {
  // 添加 offset 类
  var specialTags = document.querySelectorAll("[data-x]");

  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("offset");
  }

  findClosestAndRemoveOffset();
  window.addEventListener("scroll", function () {
    findClosestAndRemoveOffset();
  });
  /* helper */

  function findClosestAndRemoveOffset() {
    var specialTags = document.querySelectorAll("[data-x]");
    var minIndex = 0;

    for (var _i = 1; _i < specialTags.length; _i++) {
      if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _i;
      }
    } // minIndex 就是离窗口顶部最近的元素


    specialTags[minIndex].classList.remove("offset");
    var id = specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentNode;
    var brotherAndMe = li.parentNode.children;

    for (var _i2 = 0; _i2 < brotherAndMe.length; _i2++) {
      brotherAndMe[_i2].classList.remove("highLight");
    }

    li.classList.add("highLight");
  }

  var liTags = document.querySelectorAll("nav.menu > ul >li");

  for (var _i3 = 0; _i3 < liTags.length; _i3++) {
    liTags[_i3].onmouseenter = function (x) {
      x.currentTarget.classList.add("active");
    };

    liTags[_i3].onmouseleave = function (x) {
      x.currentTarget.classList.remove("active");
    };
  }
}.call();
},{}]},{},["fXTw"], null)
//# sourceMappingURL=auto-slide-up.7083bb16.js.map
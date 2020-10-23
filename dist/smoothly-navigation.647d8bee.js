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
})({"uX9r":[function(require,module,exports) {
!function () {
  var view = document.querySelector("nav.menu");
  var controller = {
    view: null,
    aTags: null,
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;
      var currentTop = window.scrollY;
      var targetTop = top - 80;
      var s = targetTop - currentTop;
      var t = Math.abs(s / 100 * 300);

      if (t > 500) {
        t = 500;
      }

      var coords = {
        y: currentTop
      };
      var tween = new TWEEN.Tween(coords).to({
        y: targetTop
      }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll("nav.menu > ul> li>a");

      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault(); // 阻止默认动作

          var a = x.currentTarget;
          var href = a.getAttribute("href"); // '#siteAbout'

          if (href === "#") {} else {
            var element = document.querySelector(href);

            _this.scrollToElement(element);
          }
        };
      }
    }
  };
  controller.init(view);
}.call();
},{}]},{},["uX9r"], null)
//# sourceMappingURL=smoothly-navigation.647d8bee.js.map
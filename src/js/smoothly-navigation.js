!function () {
  const view = document.querySelector("nav.menu");

  const controller = {
    view: null,
    aTags: null,
    init: function (view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function (element) {
      let top = element.offsetTop;
      let currentTop = window.scrollY;
      let targetTop = top - 80;
      let s = targetTop - currentTop;
      let t = Math.abs((s / 100) * 300);
      if (t > 500) {
        t = 500;
      }
      const coords = { y: currentTop };
      const tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y);
        })
        .start();
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll("nav.menu > ul> li>a");
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault(); // 阻止默认动作
          let a = x.currentTarget;
          let href = a.getAttribute("href"); // '#siteAbout'
          if (href === "#") {
          } else {
            let element = document.querySelector(href);
            this.scrollToElement(element);
          }
        };
      }
    },
  };
  controller.init(view);
}.call();

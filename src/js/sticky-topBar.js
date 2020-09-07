!function () {
  const view = document.querySelector("#topNavBar");

  const controller = {
    view: null,
    init: function (view) {
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function () {
      var view = this.view;
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          this.active();
        } else {
          this.deactive();
        }
      });
      // 箭头函数内外this不变
    },
    active: function () {
      this.view.classList.add("sticky");
    },
    deactive: function () {
      this.view.classList.remove("sticky");
    },
  };

  controller.init(view);
}.call();

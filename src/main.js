portfolio1.onclick = function () {
  portfolioBar.className = "bar state-1";
};
portfolio2.onclick = function () {
  portfolioBar.className = "bar state-2";
};
portfolio3.onclick = function () {
  portfolioBar.className = "bar state-3";
};

setTimeout(() => {
  siteWelcome.classList.remove("active");
}, 3000);

window.onscroll = (xxx) => {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
};

let liTags = document.querySelectorAll("nav.menu > ul >li");
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = (x) => {
    x.currentTarget.classList.add("active");
  };
  liTags[i].onmouseleave = (x) => {
    x.currentTarget.classList.remove("active");
  };
}

let aTags = document.querySelectorAll("nav.menu > ul> li>a");

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = (x) => {
    x.preventDefault(); // 阻止默认动作
    let a = x.currentTarget;
    let href = a.getAttribute("href"); // '#siteAbout'
    let element = document.querySelector(href);
    let top = element.offsetTop;
    if (href === "#") {
    } else {
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
    }
  };
}

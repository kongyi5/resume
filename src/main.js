portfolio1.onclick = function () {
  portfolioBar.className = "bar state-1";
};
portfolio2.onclick = function () {
  portfolioBar.className = "bar state-2";
};
portfolio3.onclick = function () {
  portfolioBar.className = "bar state-3";
};

// 添加 offset 类
let specialTags = document.querySelectorAll("[data-x]");
for (let i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add("offset");
}

findClosest();

window.onscroll = () => {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
  findClosest();
};

function findClosest() {
  let specialTags = document.querySelectorAll("[data-x]");
  let minIndex = 0;
  for (let i = 1; i < specialTags.length; i++) {
    if (
      Math.abs(specialTags[i].offsetTop - window.scrollY) <
      Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
    ) {
      minIndex = i;
    }
  }
  // minIndex 就是离窗口顶部最近的元素
  specialTags[minIndex].classList.remove("offset");
  let id = specialTags[minIndex].id;
  let a = document.querySelector('a[href="#' + id + '"]');
  let li = a.parentNode;
  let brotherAndMe = li.parentNode.children;
  for (let i = 0; i < brotherAndMe.length; i++) {
    brotherAndMe[i].classList.remove("highLight");
  }
  li.classList.add("highLight");
}

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
    if (href === "#") {
    } else {
      let element = document.querySelector(href);
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
    }
  };
}

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
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = (x) => {
    x.preventDefault(); // 阻止默认动作
    let a = x.currentTarget;
    let href = a.getAttribute("href"); // '#siteAbout'
    if (href === "#") {
    } else {
      let element = document.querySelector(href);
      let top = element.offsetTop;
      if (href === "#") {
      } else {
        let n = 20; // 一共动多少次
        let t = 500 / n; // 多少时间动一次
        let currentTop = window.scrollY;
        let targetTop = top - 80;
        let S = targetTop - currentTop;
        let s = S / n;
        let i = 0;
        // console.log(targetTop);
        // console.log(currentTop);
        // console.log(n);
        // console.log(s);
        let id = setInterval(() => {
          if (i === n) {
            window.clearInterval(id);
            return;
          }
          i = i + 1;
          window.scrollTo(0, currentTop + s * i);
        }, t);
      }
    }
  };
}

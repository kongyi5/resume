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

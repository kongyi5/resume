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

window.scrollTo = () => {
  console.log(window.scrollY);
};

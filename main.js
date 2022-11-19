const script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

window.onload = function load() {
  const menuBtn = document.querySelector(".hamberger-menu");
  const mobileNav = document.querySelector(".mobile-menu");
  const onClickHandler = document.querySelector(".nav-menu-link");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
    onClickHandler.classList.toggle("is-active");
  });

  // close hamburger menu after click a
  $(".mobile-menu a").on("click", () => {
    $("#hamburger-menu").click();
  });
};

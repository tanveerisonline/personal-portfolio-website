var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

window.onload = function () {
  const menu_btn = document.querySelector(".hamberger-menu");
  const mobile_nav = document.querySelector(".mobile-menu");
  const onClickHandler = document.querySelector(".nav-menu-link");
  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_nav.classList.toggle("is-active");
    onClickHandler.classList.toggle("is-active");
  });

  // close hamburger menu after click a
  $(".mobile-menu a").on("click", function () {
    $("#hamburger-menu").click();
  });
};

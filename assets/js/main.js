// Formspree code

// SKILLS

// QUALIFICATION TABS

// PORTFOLIO SWIPER
// let swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   loop: true,

//   navigation:  ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   }{
//     nextEl:,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   mousewheel: true,
//   keyboard: true,
// });

// SCROLL SECTIONS ACTIVE LINK
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     let sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav_menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav_menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

// // HEADER SHADOW
// function scrollHeader() {
//   const nav = document.getElementById("header");
//   if (this.scrollY >= 80) nav.classList.add("scroll-header");
//   else nav.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
// function scrollUpfunc() {
//   const scrollUp = document.getElementById("scroll-up");
//   if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollUpfunc);

// // DARK/LIGHT THEME
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const iconTheme = "uil-sun";

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // obtain the current theme
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// if (selectedTheme) {
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activate/Deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//   // Add or remove the dark icon/theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });

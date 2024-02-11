const leftBtn = document.querySelector(".article__left");
const rightBtn = document.querySelector(".article__right");
const heroImg = document.querySelector(".hero");

const heroMenu = document.querySelector(".hero__menu");
const heroNav = document.querySelector(".hero__nav");
const heroItems = document.querySelectorAll(".hero__item");
const fade = document.querySelector(".fade");
let isOpen = false;

function changeImg() {
  let x = 1;
  leftBtn.addEventListener("click", () => {
    x--;
    if (x < 1) x = 3;
    window.innerWidth > 768
      ? (heroImg.style.backgroundImage = `url(images/desktop-image-hero-${x}.jpg)`)
      : (heroImg.style.backgroundImage = `url(images/mobile-image-hero-${x}.jpg)`);
  });

  rightBtn.addEventListener("click", () => {
    x++;
    if (x > 3) x = 1;
    window.innerWidth > 768
      ? (heroImg.style.backgroundImage = `url(images/desktop-image-hero-${x}.jpg)`)
      : (heroImg.style.backgroundImage = `url(images/mobile-image-hero-${x}.jpg)`);
  });
}

heroMenu.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    heroMenu.src = "images/icon-close.svg";
    document.body.style.overflowY = "hidden";
  } else {
    heroMenu.src = "images/icon-hamburger.svg";
    document.body.style.overflowY = "auto";
  }
  heroNav.classList.toggle("openNav");
  fade.classList.toggle("openFade");
  heroItems.forEach((item) => {
    item.addEventListener("click", () => {
      heroMenu.src = "images/icon-hamburger.svg";
      heroNav.classList.remove("openNav");
      fade.classList.remove("openFade");
      document.body.style.overflowY = "auto";
      isOpen = false;
    });
  });
  console.log(isOpen);
});

changeImg();

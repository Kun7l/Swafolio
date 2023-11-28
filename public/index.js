const nav_home = document.querySelector(".home");
const nav_about = document.querySelector(".about");
const nav_work = document.querySelector(".work");
const nav_contact = document.querySelector(".contact");
const nav_ul = document.querySelector(".nav-ul");
const hero_img = document.querySelector(".hero-img");
const black_scale = document.querySelector(".black-scale");
const btn = document.querySelector("#theme-btn");
const btn_span = document.querySelector(".inner-span");
let black = document
  .querySelector(":root")
  .style.setProperty("--black", "#000000", "important");
let cream = document
  .querySelector(":root")
  .style.setProperty("--cream", "#dcdcdc", "important");

//     NAV BEHAVIOUR
nav_home.addEventListener("click", () => {
  nav_home.classList.add("active");
  nav_about.classList.remove("active");
  nav_work.classList.remove("active");
  nav_contact.classList.remove("active");
});
nav_about.addEventListener("click", () => {
  nav_home.classList.remove("active");
  nav_about.classList.add("active");
  nav_work.classList.remove("active");
  nav_contact.classList.remove("active");
});
nav_work.addEventListener("click", () => {
  nav_home.classList.remove("active");
  nav_about.classList.remove("active");
  nav_work.classList.add("active");
  nav_contact.classList.remove("active");
});
nav_contact.addEventListener("click", () => {
  nav_home.classList.remove("active");
  nav_about.classList.remove("active");
  nav_work.classList.remove("active");
  nav_contact.classList.add("active");
});

let transparent = "hsla(45, 17%, 95%, .3)";
let nav_bg = "hsla(45, 17%, 95%, .4)";
window.addEventListener("scroll", () => {
  const nav_scroll = window.scrollY;
  console.log(nav_scroll);
  if (nav_scroll > 60) {
    document.getElementById("nav-ul").style.backgroundColor = nav_bg;
  } else {
    document.getElementById("nav-ul").style.backgroundColor = "transparent";
  }
});

// "/" KEY TO NAVIGATE HOME
window.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key == "/") {
    nav_home.click();
  }
});

// DARK MODE BUTTON
changeLight = () => {
  document.querySelector(":root").style.setProperty("--black", "#dcdcdc");
  document.querySelector(":root").style.setProperty("--light-cream", "#000000");
  document.querySelector(":root").style.setProperty("--theme-orange", "#75C2F6");
};
changeDark = () => {
  document.querySelector(":root").style.setProperty("--black", "#000000");
  document.querySelector(":root").style.setProperty("--light-cream", "#dcdcdc");
  document.querySelector(":root").style.setProperty("--theme-orange", "#FFC288");
};

let btn_val = 0;
btn.addEventListener("click", () => {
  if (btn_val % 2 == 0) {
    btn_span.style.left = "23px";
    changeLight();
    transparent = "hsla(359 , 100% , 0% ,.6)";
    nav_bg = "hsla(359 , 100% , 0% ,.6)";
    btn_val++;
  } else {
    btn_span.style.left = "0";
    changeDark();
    transparent = "hsla(45, 17%, 95%,.6)";
    nav_bg = "hsla(45, 17%, 95%, .4)";
    btn_val++;
  }
});

//   HERO IMAGE SCALING ON SCROLL

window.addEventListener("scroll", () => {
  value_sc = window.scrollY / 100 + 1;
  if (value_sc >= 1 && value_sc < 3) {
    hero_img.style.transform =
      "scale(" + value_sc + ") translateX(" + value_sc * 15 + "px)";
  }
  if (value_sc <= 1) {
    hero_img.style.transform = "scale(1)";
  }
  if (value_sc > 3) {
    hero_img.style.transform = "scale(1.5) translateX(40px)";
  }
});

// REAVILING ANIMAMTION

window.addEventListener("scroll", () => {
  let scroll_value = window.scrollY;
  if (scroll_value > 550) {
    document.querySelector(".about-hero").classList.add("animate");
    document.querySelector(".about-heading").classList.add("animate");
    document.querySelector(".about-sub-heading").classList.add("animate");
    document.querySelector(".about-p").classList.add("animate");
    document.querySelector(".about-p2").classList.add("animate");
    document.querySelector(".spotify").classList.add("animate");
  }
});

//    ROTATING LOGO ANIMATION
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 12}deg)">${char}</span>`
  )
  .join("");

var lastScroll = 0;
window.onscroll = function () {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

  if (currentScroll > 0 && lastScroll <= currentScroll) {
    lastScroll = currentScroll;
    document.querySelector(".text").style.animation =
      "rotateTextAnClk 10s linear infinite";

    if (window.innerWidth > 768) {
      if (currentScroll > 1500) {
        document.getElementById("1").classList.add("fx");
      }
      if (currentScroll > 1600) {
        document.getElementById("2").classList.add("fx");
      }
      if (currentScroll > 1700) {
        document.getElementById("3").classList.add("fx");
      }
      if (currentScroll > 1800) {
        document.getElementById("4").classList.add("fx");
      }
    }

    if (window.innerWidth <= 768) {
      if (currentScroll > 1600) {
        document.getElementById("1").classList.add("fx");
      }
      if (currentScroll > 1700) {
        document.getElementById("2").classList.add("fx");
      }
      if (currentScroll > 1900) {
        document.getElementById("3").classList.add("fx");
      }
      if (currentScroll > 2100) {
        document.getElementById("4").classList.add("fx");
      }
    }
  } else {
    lastScroll = currentScroll;
    document.querySelector(".text").style.animation =
      "rotateTextClk 10s linear infinite";

    if (window.innerWidth > 768) {
      if (currentScroll <= 1500) {
        document.getElementById("1").classList.remove("fx");
      }
      if (currentScroll <= 1600) {
        document.getElementById("2").classList.remove("fx");
      }
      if (currentScroll <= 1700) {
        document.getElementById("3").classList.remove("fx");
      }
      if (currentScroll <= 1800) {
        document.getElementById("4").classList.remove("fx");
      }
    }
    if (window.innerWidth<=768) {
      if (currentScroll <= 1600) {
        document.getElementById("1").classList.remove("fx");
      }
      if (currentScroll <= 1700) {
        document.getElementById("2").classList.remove("fx");
      }
      if (currentScroll <= 1900) {
        document.getElementById("3").classList.remove("fx");
      }
      if (currentScroll <= 2100) {
        document.getElementById("4").classList.remove("fx");
      }
    }
  }
};

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
  document
    .querySelector(":root")
    .style.setProperty("--theme-orange", "#75C2F6");
};
changeDark = () => {
  document.querySelector(":root").style.setProperty("--black", "#000000");
  document.querySelector(":root").style.setProperty("--light-cream", "#dcdcdc");
  document
    .querySelector(":root")
    .style.setProperty("--theme-orange", "#FFC288");
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

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = [
    ".about-hero",
    ".about-heading",
    ".about-sub-heading",
    ".about-p",
    ".about-p2",
    ".spotify"
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Prevent repeat animation
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  elementsToAnimate.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) observer.observe(el);
  });
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
let scrollTimeout;
let topRightRotation = 0;
let bottomLeftRotation = 0;
const rotationSpeed = 2; // degrees per scroll event

window.onscroll = function () {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

  // Clear the timeout on new scroll
  clearTimeout(scrollTimeout);

  if (currentScroll > 0 && lastScroll <= currentScroll) {
    lastScroll = currentScroll;
    document.querySelector(".text").style.animation =
      "rotateTextAnClk 10s linear infinite";
    
    // Increment rotation for scrolling down
    topRightRotation += rotationSpeed;
    bottomLeftRotation += rotationSpeed;
    
    // Apply rotations
    document.querySelector(".top-right").style.transform = `rotate(${topRightRotation}deg)`;
    document.querySelector(".bottom-left").style.transform = `rotate(${bottomLeftRotation}deg)`;

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
      
    // Decrement rotation for scrolling up
    topRightRotation -= rotationSpeed;
    bottomLeftRotation -= rotationSpeed;
    
    // Apply rotations
    document.querySelector(".top-right").style.transform = `rotate(${topRightRotation}deg)`;
    document.querySelector(".bottom-left").style.transform = `rotate(${bottomLeftRotation}deg)`;

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
    if (window.innerWidth <= 768) {
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

  // Set timeout to detect scroll stop
  scrollTimeout = setTimeout(function() {
    // No need to reset anything - stars will stay at their current rotation
  }, 150);
};

// Add hover effect handling
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('mouseenter', function() {
    // Store the current rotation
    this.dataset.previousRotation = this.style.transform;
    // Apply hover rotation
    this.style.transform = 'rotate(45deg)';
  });
  
  star.addEventListener('mouseleave', function() {
    // Restore the previous rotation
    this.style.transform = this.dataset.previousRotation;
  });
});

// Hour Lines Footer
function createHourLines() {
  const container = document.querySelector('.lines-container');
  const currentHour = new Date().getHours();
  
  // Create 24 lines with varying heights
  for (let i = 0; i < 24; i++) {
    const line = document.createElement('div');
    line.className = 'hour-line';
    
    // Set random height between 30% and 100%
    const height = Math.floor(Math.random() * (70 - 30) + 20);
    line.style.height = `${height}%`;
    
    // Add active class to current hour's line
    if (i === currentHour) {
      line.classList.add('active');
    }
    
    container.appendChild(line);
  }
}

// Update active line every hour
function updateActiveLine() {
  const currentHour = new Date().getHours();
  const lines = document.querySelectorAll('.hour-line');
  
  lines.forEach((line, index) => {
    if (index === currentHour) {
      line.classList.add('active');
    } else {
      line.classList.remove('active');
    }
  });
}

// Initialize hour lines
createHourLines();

// Check for hour changes every minute
setInterval(() => {
  updateActiveLine();
}, 60000);

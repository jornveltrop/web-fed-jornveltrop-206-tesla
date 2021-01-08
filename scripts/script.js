// 1. HAMBURGER MENU

let menu = document.querySelector("header button");
let nav = document.querySelector("header nav:last-of-type");
let menuItems = document.querySelectorAll("header nav:last-of-type ul li a");
let html = document.querySelector("html");
let main = document.querySelector("main");
let meerNav = document.querySelector("header nav:last-of-type");
let i;

for (i = 0; i < menuItems.length; i++) {
  menuItems[i].setAttribute("tabindex", "-1");
}


// 1.1 LICK MENU OPEN

menu.addEventListener("click", open);

function open() {
  menu.classList.toggle("open");
  nav.classList.toggle("showNav");
  nav.classList.toggle("hideNav");
  main.classList.toggle("overflow");
  main.classList.toggle("navOverlay");
  menu.classList.toggle("filterReset");

  setTimeout(function() {
    document.activeElement.blur();
  }, 300);

  // 1.2 SET TABINDEX
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].setAttribute("tabindex", "0");
  }
};


// 1.3 CLICK MENU CLOSE

main.addEventListener("click", close);

function close() {
  menu.classList.toggle("open", false);
  nav.classList.toggle("showNav", false);
  nav.classList.toggle("hideNav", true);
  main.classList.toggle("overflow", false);
  main.classList.toggle("navOverlay", false);

  // 1.3.1 RESET TABINDEX
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].setAttribute("tabindex", "-1");
  }
}


// 1.4 ESC CLOSE

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    close();
  }
};


// 2. SPEEDOMETER ANIMATIE

let naald = document.querySelectorAll("#modelS main ul li section g > svg:nth-child(3)");
let n;

function naaldAni() {
  for (n = 0; n < naald.length; n++) {
    naald[n].classList.toggle("naaldAnimatie");
    naald[n].classList.toggle("naaldReset");
  }
}

window.addEventListener('load', function () {
  naaldAni();
});


// 3. OPACITY SCROLL-SNAP FORMULE

let overlay1 = document.querySelector("#home main > section:nth-child(1) > section");
let overlay2 = document.querySelector("#home main > section:nth-child(2) > section");
let overlay3 = document.querySelector("#home main > section:nth-child(3) > section");
let overlay4 = document.querySelector("#home main > section:nth-child(4) > section");
let overlay5 = document.querySelector("#home main > section:nth-child(5) > section");
let overlay6 = document.querySelector("#home main > section:nth-child(6) > section");

let section1 = document.querySelector("#home main > section:nth-child(1)");
let section2 = document.querySelector("#home main > section:nth-child(2)");
let section3 = document.querySelector("#home main > section:nth-child(3)");
let section4 = document.querySelector("#home main > section:nth-child(4)");
let section5 = document.querySelector("#home main > section:nth-child(5)");
let section6 = document.querySelector("#home main > section:nth-child(6)");

let footer = document.querySelector("#home footer");

let viewport = window.innerHeight;
let viewportHalf = window.innerHeight/2;
let viewportVijfde = window.innerHeight/5;
let viewportOnder = viewportHalf - viewportVijfde;

if (document.querySelector("#home")) {
  window.addEventListener('scroll', scrollActions);
}

function scrollActions() {

  let distance1 = section1.getBoundingClientRect().top;
  let distance11 = section1.getBoundingClientRect().bottom - viewportHalf;
  let distance2 = section2.getBoundingClientRect().top;
  let distance21 = section2.getBoundingClientRect().bottom - viewportHalf;
  let distance3 = section3.getBoundingClientRect().top;
  let distance31 = section3.getBoundingClientRect().bottom - viewportHalf;
  let distance4 = section4.getBoundingClientRect().top;
  let distance41 = section4.getBoundingClientRect().bottom - viewportHalf;
  let distance5 = section5.getBoundingClientRect().top;
  let distance51 = section5.getBoundingClientRect().bottom - viewportHalf;
  let distance6 = section6.getBoundingClientRect().top;


  if (distance1 < viewportHalf) {
    let procent1 = 1 - (distance1 / viewportHalf);
    overlay1.style.opacity = procent1;
    overlay1.style.pointerEvents = "auto";
  }

  else {
    overlay1.style.opacity = 0;
    overlay1.style.display = "none";
  }

  if (distance11 < viewportOnder) {
    let procent11 = (distance11 / viewportOnder);
    overlay1.style.opacity = procent11;
  }


  if (distance2 < viewportHalf) {
    let procent2 = 1 - (distance2 / viewportHalf);
    overlay2.style.opacity = procent2;
    overlay2.style.display = "flex";
    overlay1.style.pointerEvents = "none";
  }

  else {
    overlay2.style.opacity = 0;
    overlay2.style.display = "none";
  }

  if (distance21 < viewportOnder) {
    let procent21 = (distance21 / viewportOnder);
    overlay2.style.opacity = procent21;
  }


  if (distance3 < viewportHalf) {
    let procent3 = 1 - (distance3 / viewportHalf);
    overlay3.style.opacity = procent3;
    overlay3.style.display = "flex";
    overlay2.style.display = "none";
  }
  else {
    overlay3.style.opacity = 0;
    overlay3.style.display = "none";
  }

  if (distance31 < viewportOnder) {
    let procent31 = (distance31 / viewportOnder);
    overlay3.style.opacity = procent31;
  }


  if (distance4 < viewportHalf) {
    let procent4 = 1 - (distance4 / viewportHalf);
    overlay4.style.opacity = procent4;
    overlay4.style.display = "flex";
    overlay3.style.display = "none";
  }

  else {
    overlay4.style.opacity = 0;
    overlay4.style.display = "none";
  }

  if (distance41 < viewportOnder) {
    let procent41 = (distance41 / viewportOnder);
    overlay4.style.opacity = procent41;
  }


  if (distance5 < viewportHalf) {
    let procent5 = 1 - (distance5 / viewportHalf);
    overlay5.style.opacity = procent5;
    overlay5.style.display = "flex";
    overlay4.style.display = "none";
  }

  else {
    overlay5.style.opacity = 0;
    overlay5.style.display = "none";
  }

  if (distance51 < viewportOnder) {
    let procent51 = (distance51 / viewportOnder);
    overlay5.style.opacity = procent51;
  }


  if (distance6 < viewportHalf) {
    const procent6 = 1 - (distance6 / viewportHalf);
    overlay6.style.opacity = procent6;
    overlay6.style.display = "flex";
    overlay5.style.display = "none";
    footer.style.display = "block";
  }

  else {
    overlay6.style.opacity = 0;
    overlay6.style.display = "none";
    footer.style.display = "none";
  }
}


// 4. SCROLL UP ASIDE

let oud = 0;
let aside = document.querySelector("#modelS main > aside");

if (document.querySelector("#modelS")) {

  window.addEventListener('scroll', function(e) {

    nieuw = window.pageYOffset;

    if (nieuw < 200){
      console.log("Niks");
        aside.classList.toggle("showAside", false);
        aside.classList.toggle("hideAside", true);
    } 

    else if (oud - nieuw > 0){
        console.log("Omhoog");
        aside.classList.toggle("showAside", true);
        aside.classList.toggle("hideAside", false);
    }  

    else if (oud - nieuw < 0){
        console.log("Omlaag");
        aside.classList.toggle("showAside", false);
        aside.classList.toggle("hideAside", true);
    }

    oud = nieuw;
  });
}



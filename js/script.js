/* ------------------ NAVBAR SHADOW ------------------ */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) nav.classList.add("nav-shadow");
  else nav.classList.remove("nav-shadow");
});

/* ------------------ DARK MODE ------------------ */
const toggleDark = document.querySelector(".toggle-dark");

toggleDark?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

/* ------------------ MOBILE MENU ------------------ */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu ul");

hamburger?.addEventListener("click", () => {
  navMenu.style.left =
    navMenu.style.left === "0px" ? "-100%" : "0px";
});

/* ------------------ POPUP (Index Page) ------------------ */
const cvBtn = document.getElementById("cvBtn");
const popup = document.getElementById("popup");

if (cvBtn) {
  cvBtn.onclick = () => {
    popup.style.display = "flex";
    setTimeout(() => {
      /* simulate download */
    }, 1500);
  };
}

function closePopup() {
  popup.style.display = "none";
}

/* ---------------------------
   CLOSE NAV ON LINK CLICK
---------------------------- */
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

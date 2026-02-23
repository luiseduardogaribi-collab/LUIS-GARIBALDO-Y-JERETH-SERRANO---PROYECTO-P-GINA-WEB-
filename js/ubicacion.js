// ===== LOADER =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 800);
});

// ===== NAVBAR GLASS =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 80){
        navbar.style.background = "rgba(2,16,36,0.95)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.padding = "10px";
        navbar.style.borderRadius = "20px";
    } else {
        navbar.style.background = "transparent";
    }
});

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all 1s ease";
    observer.observe(section);
});

// ===== PARALLAX HEADER =====
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    document.querySelector("header").style.transform =
        `translateY(${scroll * 0.15}px)`;
});

// ===== BOTÓN VOLVER ARRIBA =====
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// ===== SPOTLIGHT MAPA Y HORARIO =====
const overlay = document.getElementById("spotlightOverlay");
const mapCard = document.querySelector(".map-card");
const horarioCard = document.querySelector(".horario-card");

function activateSpotlight(element){
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
    element.classList.add("active-spotlight");
}

function deactivateSpotlight(){
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    mapCard.classList.remove("active-spotlight");
    horarioCard.classList.remove("active-spotlight");
}

mapCard.addEventListener("click", () => {
    activateSpotlight(mapCard);
});

horarioCard.addEventListener("click", () => {
    activateSpotlight(horarioCard);
});

overlay.addEventListener("click", deactivateSpotlight);

// ===== EFECTO FLOTANTE MAPA =====
mapCard.addEventListener("mousemove", (e)=>{
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    mapCard.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
});

mapCard.addEventListener("mouseleave", ()=>{
    mapCard.style.transform = "translate(0,0) scale(1)";
});
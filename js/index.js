// ===== LOADER SUAVE =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 800);
});

// ===== NAVBAR INTELIGENTE =====
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

// ===== SCROLL REVEAL PREMIUM =====
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
    section.style.transform="translateY(60px)";
    section.style.transition="all 1s ease";
    observer.observe(section);
});

// ===== PARALLAX HEADER =====
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    document.querySelector("header").style.transform =
        `translateY(${scroll * 0.2}px)`;
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

// ===== EFECTO IMÁGENES FLOTANTES =====
const images = document.querySelectorAll("section img");

images.forEach(img=>{
    img.addEventListener("mousemove", (e)=>{
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });

    img.addEventListener("mouseleave", ()=>{
        img.style.transform = "translate(0,0) scale(1)";
    });
});
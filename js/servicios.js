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

// ===== SCROLL REVEAL FILAS =====
const rows = document.querySelectorAll(".tabla-servicios tr");

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

rows.forEach(row=>{
    row.style.opacity="0";
    row.style.transform="translateY(40px)";
    row.style.transition="all 0.8s ease";
    observer.observe(row);
});

// ===== SPOTLIGHT SERVICIOS =====
const overlay = document.getElementById("spotlightOverlay");

rows.forEach((row, index) => {

    if(index === 0) return; // Saltar encabezado

    row.addEventListener("click", () => {

        const isActive = row.classList.contains("active-spotlight");

        rows.forEach(r => r.classList.remove("active-spotlight"));

        if(!isActive){
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "auto";
            row.classList.add("active-spotlight");
        } else {
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
        }

    });

});

// Cerrar spotlight al hacer click fuera
overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    rows.forEach(r => r.classList.remove("active-spotlight"));
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

// ===== EFECTO IMÁGENES PREMIUM =====
const images = document.querySelectorAll(".imagenes img");

images.forEach(img=>{
    img.addEventListener("mousemove", (e)=>{
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });

    img.addEventListener("mouseleave", ()=>{
        img.style.transform = "translate(0,0) scale(1)";
    });
});
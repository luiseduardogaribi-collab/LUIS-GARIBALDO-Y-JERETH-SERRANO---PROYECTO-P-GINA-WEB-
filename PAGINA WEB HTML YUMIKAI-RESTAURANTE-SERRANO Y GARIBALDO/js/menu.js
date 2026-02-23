// ===== LOADER SUAVE =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 800);
});

// ===== NAVBAR GLASS DINÁMICO =====
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

// ===== SCROLL REVEAL SUAVE =====
const menuItems = document.querySelectorAll(".menu-item");

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

menuItems.forEach(item=>{
    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="all 0.8s ease";
    observer.observe(item);
});

// ===== ACORDEÓN INTELIGENTE (solo uno abierto) =====
menuItems.forEach(item=>{
    item.addEventListener("toggle", () => {
        if(item.open){
            menuItems.forEach(other=>{
                if(other !== item){
                    other.removeAttribute("open");
                }
            });
        }
    });
});

// ===== PARALLAX SUTIL EN HEADER =====
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
const images = document.querySelectorAll(".menu-content img");

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
// ===== SPOTLIGHT EFECTO PREMIUM =====
const overlay = document.getElementById("spotlightOverlay");

menuItems.forEach(item => {
    item.addEventListener("toggle", () => {

        if(item.open){

            // Activar overlay
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "auto";

            // Quitar spotlight de otros
            menuItems.forEach(other=>{
                other.classList.remove("active-spotlight");
            });

            // Activar spotlight al actual
            item.classList.add("active-spotlight");

        } else {

            // Si ninguno está abierto, quitar overlay
            const anyOpen = [...menuItems].some(i => i.open);

            if(!anyOpen){
                overlay.style.opacity = "0";
                overlay.style.pointerEvents = "none";
            }

            item.classList.remove("active-spotlight");
        }

    });
});
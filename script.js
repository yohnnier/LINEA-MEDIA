// Obtener el botón "volver arriba"
const backToTopBtn = document.getElementById("backToTopBtn");

// Cuando el usuario hace scroll hacia abajo 200px desde el top, muestra el botón
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Cuando el usuario hace clic en el botón, desplaza la página hacia arriba
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
});

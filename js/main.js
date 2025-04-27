/* ==========================================================================
   Header
========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.Header-toggle');
    const header = document.querySelector('.Header');
    const mobileMenu = document.querySelector('.Header-mobileMenu');

    toggleButton.addEventListener('click', function () {
        header.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Bloquear scroll cuando el menú está abierto
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Cerrar menú al hacer click en enlaces
    document.querySelectorAll('.Header-link, .Header-contact-mobile').forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});


/* ==========================================================================
   Efecto txt hero
========================================================================== */
let heroEffect = "¡Hola! Soy César Córdova"
let i = 0;
function escribir() {
    if (i < heroEffect.length) {
        document.getElementById("heroEffect").textContent += heroEffect[i++]
        setTimeout(escribir, 100)
    }
}
escribir()


/* ==========================================================================
   Footer
========================================================================== */
fetch('/html/components/footer.html')
.then(response => response.text())
.then(footer => {
    document.getElementById("footer__component").innerHTML = footer;
});

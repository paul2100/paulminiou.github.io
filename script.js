// Pour le bouton avec la flèche (si tu en as d'autres avec des classes similaires)
document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut

        // Défilement fluide vers l'élément correspondant à l'ID dans data-target
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('.nav-link[href="#top"]').addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le comportement par défaut

    // Calcul de la hauteur de la barre de navigation pour ajuster le scroll
    const navBarHeight = document.querySelector('.navBar').offsetHeight;

    // Scroll en ajustant l'offset
    window.scrollTo({
        top: document.body.offsetTop - navBarHeight, // Ajuste la position en fonction de la hauteur de la navbar
        behavior: 'smooth'
    });
});



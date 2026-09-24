document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MODE SOMBRE
    // =========================

    // On récupère le bouton.
    const themeButton = document.getElementById("theme-button");

    // On vérifie qu'il existe avant de l'utiliser.
    if (themeButton) {

        // On récupère le thème enregistré dans le navigateur.
        const savedTheme = localStorage.getItem("theme");

        // On remet le mode sombre s'il avait été activé.
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");

            themeButton.textContent = "Mode clair";

            themeButton.setAttribute("aria-pressed", "true");
        }


        // Quand l'utilisateur clique sur le bouton.
        themeButton.addEventListener("click", function () {

            // Active ou désactive la classe "dark-mode".
            document.body.classList.toggle("dark-mode");

            // Vérifie si le mode sombre est actif.
            const darkModeActive =
                document.body.classList.contains("dark-mode");


            if (darkModeActive) {

                // Change le texte du bouton.
                themeButton.textContent = "Mode clair";

                // Met à jour l'accessibilité du bouton.
                themeButton.setAttribute("aria-pressed", "true");

                // Enregistre le choix.
                localStorage.setItem("theme", "dark");

            } else {

                themeButton.textContent = "Mode sombre";

                themeButton.setAttribute("aria-pressed", "false");

                localStorage.setItem("theme", "light");
            }

        });
    }


    // =========================
    // ANNÉE AUTOMATIQUE
    // =========================

    // On récupère l'emplacement de l'année.
    const currentYear = document.getElementById("current-year");

    // On vérifie qu'il existe.
    if (currentYear) {

        // Affiche automatiquement l'année actuelle.
        currentYear.textContent = new Date().getFullYear();
    }


    // =========================
    // ANIMATION AU SCROLL
    // =========================

    // On récupère toutes les sections à révéler.
    const elementsToReveal =
        document.querySelectorAll(".reveal");


    // IntersectionObserver détecte quand
    // un élément devient visible à l'écran.
    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                // Si l'élément est visible.
                if (entry.isIntersecting) {

                    // On lui ajoute la classe qui déclenche l'animation.
                    entry.target.classList.add("visible");

                    // On n'a plus besoin de surveiller cet élément.
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            // L'animation commence lorsque 15 %
            // de l'élément est visible.
            threshold: 0.15
        }
    );


    // On observe chaque élément.
    elementsToReveal.forEach(function (element) {
        observer.observe(element);
    });

});
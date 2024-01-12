document.addEventListener('DOMContentLoaded', function () {
    // Déclarer la variable countdownInterval à l'extérieur de la fonction
    let countdownInterval;

    // Récupérer la date du compte à rebours à partir du stockage local, ou utiliser la date par défaut
    let countdownDate = localStorage.getItem('countdownDate') || new Date('2024-01-12T09:30:00').getTime();

    // Fonction pour initialiser le compte à rebours
    function initializeCountdown() {
        // Mettez à jour le compte à rebours toutes les 1 seconde
        countdownInterval = setInterval(function () {
            const currentDate = new Date().getTime();
            const timeDifference = countdownDate - currentDate;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const countdownElement = document.getElementById('countdown');
            countdownElement.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;

            // Si le compte à rebours est terminé, affichez un message
            if (timeDifference < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = 'Le compte à rebours est terminé!';

                // Affichez le bouton une fois que le compte à rebours est terminé
                document.getElementById('restartButton').classList.remove('hidden');
            } else {
                // Désactiver le bouton de relance tant que le compte à rebours est actif
                document.getElementById('restartButton').disabled = true;
            }
        }, 1000);
    }

    // Appeler la fonction pour initialiser le compte à rebours lors du chargement de la page
    initializeCountdown();

    // Ajouter un gestionnaire d'événements pour le bouton de relance
    document.getElementById('restartButton').addEventListener('click', function () {
        // Changez la date limite pour le nouveau compte à rebours (remplacez par votre nouvelle date)
        countdownDate = new Date('2024-01-15T10:00:00').getTime();

        // Enregistrez la nouvelle date dans le stockage local
        localStorage.setItem('countdownDate', countdownDate);

        // Réinitialisez le compte à rebours avec la nouvelle date
        clearInterval(countdownInterval);
        document.getElementById('restartButton').classList.add('hidden'); // Cacher le bouton de relance
        initializeCountdown();
    });
});

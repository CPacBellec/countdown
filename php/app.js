document.addEventListener('DOMContentLoaded', function () {
    let countdownDate = localStorage.getItem('countdownDate');

    // Si la date n'est pas enregistrée localement, utilisez une date par défaut
    if (!countdownDate) {
        countdownDate = new Date('2024-08-16T23:59:59').getTime();
        localStorage.setItem('countdownDate', countdownDate);
    }

    // Mettez à jour le compte à rebours toutes les 1 seconde
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Mettez à jour le compte à rebours
    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = countdownDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;

        // Si le compte à rebours est terminé, affichez le lien vers la page survey
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Le compte à rebours est terminé!';
            document.getElementById('surveyLink').classList.remove('hidden');
            // Réinitialisez la date du compte à rebours ici
            countdownDate = new Date('2024-08-16T23:59:59').getTime();
            localStorage.setItem('countdownDate', countdownDate);
            // Désactivez le bouton de redémarrage après la réinitialisation
            document.getElementById('restartCountdownBtn').disabled = true;
        }
    }

    // Bouton pour modifier le compte à rebours
    document.getElementById('modifyCountdownBtn').addEventListener('click', function () {
        const newCountdownDate = prompt('Entrez une nouvelle date (format YYYY-MM-DD HH:mm:ss) :');
        if (newCountdownDate) {
            countdownDate = new Date(newCountdownDate).getTime();
            localStorage.setItem('countdownDate', countdownDate);
            updateCountdown();
        }
    });

    // Bouton pour relancer le compte à rebours
    document.getElementById('restartCountdownBtn').addEventListener('click', function () {
        // Réinitialisez la date du compte à rebours ici
        countdownDate = new Date('2024-08-16T23:59:59').getTime();
        localStorage.setItem('countdownDate', countdownDate);
        // Désactivez le bouton de redémarrage après la réinitialisation
        this.disabled = true;
        // Mettez à jour le compte à rebours immédiatement après la réinitialisation
        updateCountdown();
    });
});

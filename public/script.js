// Navigation mobile
function toggleMenu() {
    const menu = document.getElementById('menuLiens');
    if (!menu) return;
    menu.classList.toggle('active');
}

// Afficher les avis sur la page d'accueil
function afficherAvis() {
    const conteneur = document.getElementById('avisClients');
    if (!conteneur) return;

    let html = '';
    for (let i = 0; i < Math.min(3, lesAvis.length); i++) {
        const avis = lesAvis[i];
        const etoiles = '⭐'.repeat(avis.note);
        const date = new Date(avis.date).toLocaleDateString('fr-FR');
        
        html += `
            <div class="carte-avantage">
                <div>${etoiles}</div>
                <p>"${avis.commentaire}"</p>
                <strong>${avis.auteur}</strong>
                <p style="font-size: 0.85em; color: #999;">${date}</p>
            </div>
        `;
    }
    conteneur.innerHTML = html;
}

// Lancer au chargement
if (document.getElementById('avisClients')) {
    afficherAvis();
}

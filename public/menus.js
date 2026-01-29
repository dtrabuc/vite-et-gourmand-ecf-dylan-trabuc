let categorieActive = "tous";

function afficherMenus(categorie = "tous") {
  categorieActive = categorie;
  const conteneur = document.getElementById("listeMenus");
  if (!conteneur) return;

  let menusFiltres = lesMenus;
  if (categorie !== "tous") {
    menusFiltres = lesMenus.filter(menu => menu.categorie === categorie);
  }

  let html = "";
  for (let i = 0; i < menusFiltres.length; i++) {
    const menu = menusFiltres[i];
    html += genererCarteMenu(menu);
  }

  conteneur.innerHTML = html;
}

function genererCarteMenu(menu) {
  let html = '<div class="carte-menu">';
  html += '<img src="' + menu.image + '" alt="' + menu.nom + '" class="image-menu">';
  html += '<div class="contenu-carte">';
  html += '<h3>' + menu.nom + '</h3>';
  
  // Tags
  html += '<div class="tags">';
  for (let i = 0; i < menu.tags.length; i++) {
    html += '<span class="tag">' + menu.tags[i] + '</span>';
  }
  html += '</div>';
  
  html += '<p class="description">' + menu.description + '</p>';
  
  // Plats
  html += '<div class="plats">';
  html += '<strong>Entrées :</strong><ul>';
  for (let i = 0; i < menu.plats.entrees.length; i++) {
    html += '<li>' + menu.plats.entrees[i] + '</li>';
  }
  html += '</ul>';
  
  html += '<strong>Plats :</strong><ul>';
  for (let i = 0; i < menu.plats.plats.length; i++) {
    html += '<li>' + menu.plats.plats[i] + '</li>';
  }
  html += '</ul>';
  
  html += '<strong>Desserts :</strong><ul>';
  for (let i = 0; i < menu.plats.desserts.length; i++) {
    html += '<li>' + menu.plats.desserts[i] + '</li>';
  }
  html += '</ul>';
  html += '</div>';
  
  // Pied de carte
  html += '<div class="pied-carte">';
  html += '<div>';
  html += '<div class="prix">' + menu.prix.toFixed(2) + ' €</div>';
  html += '<div class="prix-info">par personne</div>';
  html += '</div>';
  html += '<a href="commander.html?menu=' + menu.id + '" class="btn btn-principal">Commander</a>';
  html += '</div>';
  
  html += '</div>';
  html += '</div>';
  
  return html;
}

function activerFiltre(categorie) {
  // Mettre à jour les boutons
  const boutons = document.querySelectorAll('.filtre');
  for (let i = 0; i < boutons.length; i++) {
    boutons[i].classList.remove('actif');
  }
  
  const boutonActif = document.querySelector('[data-filtre="' + categorie + '"]');
  if (boutonActif) {
    boutonActif.classList.add('actif');
  }
  
  afficherMenus(categorie);
}

// Initialisation
document.addEventListener("DOMContentLoaded", function() {
  afficherMenus();
  
  // Événements sur les filtres
  const boutonsFiltres = document.querySelectorAll('.filtre');
  for (let i = 0; i < boutonsFiltres.length; i++) {
    boutonsFiltres[i].addEventListener('click', function() {
      const categorie = this.getAttribute('data-filtre');
      activerFiltre(categorie);
    });
  }
});

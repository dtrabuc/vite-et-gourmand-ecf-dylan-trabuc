let menuSelectionne = null;

function afficherMenusPourCommande() {
  const conteneur = document.getElementById("selectionMenus");
  if (!conteneur) return;

  let html = "";
  for (let i = 0; i < lesMenus.length; i++) {
    const menu = lesMenus[i];
    const classe = menuSelectionne && menuSelectionne.id === menu.id ? "menu-option selectionne" : "menu-option";
    
    html += '<div class="' + classe + '" onclick="selectionnerMenu(' + menu.id + ')">';
    html += '<h4>' + menu.nom + '</h4>';
    html += '<p>' + menu.description + '</p>';
    html += '<div class="prix-menu">' + menu.prix.toFixed(2) + ' € / pers.</div>';
    html += '</div>';
  }

  conteneur.innerHTML = html;
}

function selectionnerMenu(idMenu) {
  // Trouver le menu
  for (let i = 0; i < lesMenus.length; i++) {
    if (lesMenus[i].id === idMenu) {
      menuSelectionne = lesMenus[i];
      break;
    }
  }

  afficherMenusPourCommande();
  mettreAJourRecapitulatif();
}

function mettreAJourRecapitulatif() {
  const recapMenu = document.getElementById("recapMenu");
  const recapPrixUnitaire = document.getElementById("recapPrixUnitaire");
  const recapPersonnes = document.getElementById("recapPersonnes");
  const recapTotal = document.getElementById("recapTotal");

  const personnes = parseInt(document.getElementById("personnes").value) || 10;

  if (menuSelectionne) {
    recapMenu.textContent = menuSelectionne.nom;
    recapPrixUnitaire.textContent = menuSelectionne.prix.toFixed(2) + " €";
    recapPersonnes.textContent = personnes;
    
    const total = menuSelectionne.prix * personnes;
    recapTotal.textContent = total.toFixed(2) + " €";
  } else {
    recapMenu.textContent = "Aucun";
    recapPrixUnitaire.textContent = "0 €";
    recapPersonnes.textContent = personnes;
    recapTotal.textContent = "0,00 €";
  }
}

function validerCommande() {
  if (!menuSelectionne) {
    alert("Veuillez sélectionner un menu");
    return false;
  }

  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const personnes = document.getElementById("personnes").value;
  const adresse = document.getElementById("adresse").value;
  const ville = document.getElementById("ville").value;
  const codePostal = document.getElementById("codePostal").value;

  if (!date || !heure || !personnes || !adresse || !ville || !codePostal) {
    alert("Veuillez remplir tous les champs obligatoires");
    return false;
  }

  const dateCommande = new Date(date);
  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);

  if (dateCommande < aujourdhui) {
    alert("La date de l'événement doit être dans le futur");
    return false;
  }

  alert("Commande envoyée avec succès !\n\n" +
        "Menu : " + menuSelectionne.nom + "\n" +
        "Date : " + date + " à " + heure + "\n" +
        "Personnes : " + personnes + "\n" +
        "Total : " + (menuSelectionne.prix * personnes).toFixed(2) + " €");

  window.location.href = "compte.html";
  return false;
}

// Initialisation
document.addEventListener("DOMContentLoaded", function() {
  afficherMenusPourCommande();

  // Pré-sélection via URL
  const params = new URLSearchParams(window.location.search);
  const menuId = params.get("menu");
  if (menuId) {
    selectionnerMenu(parseInt(menuId));
  }

  // Événement sur le nombre de personnes
  const champPersonnes = document.getElementById("personnes");
  if (champPersonnes) {
    champPersonnes.addEventListener("input", mettreAJourRecapitulatif);
  }

  // Date minimum = aujourd'hui
  const champDate = document.getElementById("date");
  if (champDate) {
    const aujourdhui = new Date();
    const annee = aujourdhui.getFullYear();
    let mois = aujourdhui.getMonth() + 1;
    let jour = aujourdhui.getDate();
    
    if (mois < 10) mois = "0" + mois;
    if (jour < 10) jour = "0" + jour;
    
    champDate.min = annee + "-" + mois + "-" + jour;
  }
});

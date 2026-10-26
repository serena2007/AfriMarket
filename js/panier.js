function ajouterAuPanier(id) {
  const panier = JSON.parse(localStorage.getItem('panier') || '[]');
  panier.push(id);
  localStorage.setItem('panier', JSON.stringify(panier));
  const compteur = document.getElementById('compteur-panier');
  if (compteur) compteur.textContent = panier.length;
}

function afficherCompteur() {
  const panier = JSON.parse(localStorage.getItem('panier') || '[]');
  const compteur = document.getElementById('compteur-panier');
  if (compteur) compteur.textContent = panier.length;
}

document.addEventListener('DOMContentLoaded', afficherCompteur);
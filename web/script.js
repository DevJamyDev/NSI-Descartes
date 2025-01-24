// Charger les données depuis le fichier JSON
async function chargerEcoles() {
  try {
    const response = await fetch('../universites.json'); // Charger les données JSON
    const ecoles = await response.json();
    afficherEcoles(ecoles); // Afficher les écoles dans le tableau
    activerTriColonnes(); // Activer la fonctionnalité de tri
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
}

// Afficher les écoles dans le tableau
function afficherEcoles(ecoles) {
  const tbody = document.querySelector('#table-ecoles tbody');
  tbody.innerHTML = ''; // Réinitialiser les lignes du tableau

  ecoles.forEach(ecole => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td data-column="nom">${ecole.nom}</td>
      <td data-column="ville">${ecole.ville}</td>
      <td data-column="type">${ecole.type}</td>
      <td data-column="prepa">${ecole.prepa}</td>
      <td data-column="prix">${ecole.prix}</td>
      <td data-column="site_web"><a href="${ecole.site_web}" target="_blank">Visiter</a></td>
    `;

    tbody.appendChild(row);
  });
}

// Activer le tri des colonnes lors du clic sur les en-têtes
function activerTriColonnes() {
  const table = document.getElementById('table-ecoles');
  const headers = table.querySelectorAll('thead th[data-column]');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const column = header.getAttribute('data-column'); // Colonne à trier
      const order = header.getAttribute('data-order'); // Ordre actuel (asc ou desc)
      const tbody = table.querySelector('tbody');

      // Récupérer et trier les lignes
      const rows = Array.from(tbody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        const aValue = a.querySelector(`td[data-column="${column}"]`)?.textContent.trim();
        const bValue = b.querySelector(`td[data-column="${column}"]`)?.textContent.trim();

        // Tri numérique ou alphabétique
        if (column === 'prix') {
          return (order === 'asc' ? 1 : -1) * (parseFloat(aValue) - parseFloat(bValue));
        } else {
          return (order === 'asc' ? 1 : -1) * aValue.localeCompare(bValue);
        }
      });

      // Réinsérer les lignes triées dans le tableau
      rows.forEach(row => tbody.appendChild(row));

      // Alterner l'ordre de tri pour la prochaine fois
      header.setAttribute('data-order', order === 'asc' ? 'desc' : 'asc');
    });
  });
}

// Charger les données et activer les fonctionnalités au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  chargerEcoles();
});

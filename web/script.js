// Charger les données depuis le fichier JSON
fetch('../../Écoles/universites.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('universites-table');
    const typeFilter = document.getElementById('type');
    const prepaFilter = document.getElementById('prepa');
    const prixSlider = document.getElementById('prix-slider');
    const prixMaxLabel = document.getElementById('prix-max');

    // Fonction pour afficher les données fitlrées
    const displayData = () => {
      const typeValue = typeFilter.value;
      const prepaValue = prepaFilter.value;
      const prixMax = parseInt(prixSlider.value, 10);

      // Filtrer les données
      const filteredData = data.filter(universite => {
        return (
          (!typeValue || universite.type === typeValue) &&
          (!prepaValue || universite.prepa === prepaValue) &&
          universite.prix <= prixMax
        );
      });

      // Metre à jour le tableau
      tableBody.innerHTML = '';
      filteredData.forEach(universite => {
        const row = `
          <tr>
            <td>${universite.nom}</td>
            <td>${universite.ville}</td>
            <td>${universite.type}</td>
            <td>${universite.prepa}</td>
            <td>${universite.prix}€</td>
            <td><a href="${universite.site_web}" target="_blank">Visiter</a></td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    };

    // Mettre à jour le prix maximum affichée
    prixSlider.addEventListener('input', () => {
      prixMaxLabel.textContent = prixSlider.value;
      displayData();
    });

    // Appliquer les filtres
    typeFilter.addEventListener('change', displayData);
    prepaFilter.addEventListener('change', displayData);

    // Afficher toutes les universités par défaut
    displayData();
  });

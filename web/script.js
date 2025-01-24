fetch('../universites.json')
  .then(response => {
    if (!response.ok) throw new Error('Erreur de chargement des données');
    return response.json();
  })
  .then(data => {
    const tableBody = document.getElementById('universites-table');
    const typeFilter = document.getElementById('type');
    const prepaFilter = document.getElementById('prepa');
    const prixSlider = document.getElementById('prix-slider');
    const prixMaxLabel = document.getElementById('prix-max');

    const displayData = () => {
      const typeValue = typeFilter.value;
      const prepaValue = prepaFilter.value;
      const prixMax = parseInt(prixSlider.value, 10);

      const filteredData = data.filter(univ => {
        return (
          (!typeValue || univ.type === typeValue) &&
          (!prepaValue || univ.prepa === prepaValue) &&
          univ.prix <= prixMax
        );
      });

      tableBody.innerHTML = '';
      filteredData.forEach(univ => {
        const row = `
          <tr>
            <td>${univ.nom}</td>
            <td>${univ.ville}</td>
            <td>${univ.type}</td>
            <td>${univ.prepa}</td>
            <td>${univ.prix}€</td>
            <td><a href="${univ.site_web}" target="_blank">Visiter</a></td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    };

    prixSlider.addEventListener('input', () => {
      prixMaxLabel.textContent = prixSlider.value;
      displayData();
    });

    typeFilter.addEventListener('change', displayData);
    prepaFilter.addEventListener('change', displayData);

    displayData();
  })
  .catch(error => console.error('Erreur :', error));

// Gérer l'ajout d'une nouvelle école
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-ajout-ecole');
  const message = document.getElementById('message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Empêche le rechargement de la page

      // Récupération des données du formulaire
      const nouvelleEcole = {
        nom: document.getElementById('nom').value,
        ville: document.getElementById('ville').value,
        type: document.getElementById('type').value,
        prepa: document.getElementById('prepa').value,
        prix: parseInt(document.getElementById('prix').value, 10),
        site_web: document.getElementById('site_web').value
      };

      // Envoi des données au backend
      try {
        const response = await fetch('https://nsi-descartes.onrender.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(nouvelleEcole)
        });

        if (response.ok) {
          message.style.display = 'block';
          form.reset(); // Réinitialise le formulaire
        } else {
          alert("Une erreur s'est produite lors de l'ajout de l'école.");
        }
      } catch (error) {
        console.error('Erreur :', error);
        alert("Impossible de se connecter au serveur.");
      }
    });
  }
});

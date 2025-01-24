const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint pour ajouter une école
app.post('/ajouter-ecole', (req, res) => {
  const nouvelleEcole = req.body;

  fs.readFile('./universites.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur serveur');
    }

    const universites = JSON.parse(data);
    universites.push(nouvelleEcole);

    fs.writeFile('./universites.json', JSON.stringify(universites, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erreur serveur');
      }

      res.status(201).send('École ajoutée avec succès');
    });
  });
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

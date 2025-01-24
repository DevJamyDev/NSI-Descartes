---

# 🎓 Répertoire NSI : Cours et Universités  

Bienvenue dans le projet **Répertoire NSI** ! Ce repository est conçu pour aider les étudiants et enseignants à centraliser des **cours**, des **ressources éducatives** et un **répertoire des universités/écoles** proposant des formations liées à NSI (Numérique et Sciences Informatiques).  

## 🌟 Fonctionnalités principales  
- 📚 **Cours et ressources par chapitre** : Ajoutez ou consultez des cours pour différents sujets liés à NSI.  
- 🏫 **Répertoire des universités/écoles** : Recherchez les établissements proposant des formations NSI avec des **filtres avancés** (type, prix, prépa, etc.).  
- 🤝 **Collaboration communautaire** : Partagez vos idées, posez des questions et améliorez les contenus en participant activement.
- 🛠️ **Outils et ressources** : Utilisez les outils validés par les promos de NSI précédentes.

---

## 🛠️ Structure du projet  
Voici l'organisation du repository :  

```
/ (racine)
|-- universites.json        # Données des universités/écoles avec informations et filtres
|-- web/                    # Interface utilisateur pour la navigation
|   |-- index.html          # Page principale
|   |-- script.js           # Logique pour les filtres et affichage dynamique
|   |-- style.css           # Style pour améliorer l'apparence (optionnel)
|-- Cours/                  # Dossier contenant les ressources et cours
|   |-- chapitre1/          # Exemple : Cours du chapitre 1
|   |-- chapitre2/          # Exemple : Cours du chapitre 2
|-- README.md               # Documentation principale du projet
|-- CONTRIBUTING.md         # Instructions pour contribuer
```

---

## 🚀 Comment utiliser ce projet ?  

### 1. **Pour les utilisateurs**  
- Consultez les cours dans le dossier `Cours/`.  
- Explorez le **répertoire des universités** en ouvrant `web/index.html` via un serveur local.  

### 2. **Pour les contributeurs**  
#### Étape 1 : Forker le repository  
Cliquez sur le bouton **Fork** en haut à droite pour créer une copie dans votre compte GitHub.  

#### Étape 2 : Cloner le projet  
Téléchargez le projet localement en exécutant :  
```bash
git clone https://github.com/votre-utilisateur/nom-du-repo.git
```

#### Étape 3 : Ajouter vos modifications  
- Pour un cours : ajoutez un fichier dans le dossier `Cours/`.  
- Pour une université : modifiez `universites.json` en respectant le format JSON.

#### Étape 4 : Créez une Pull Request  
Une fois vos modifications terminées, poussez-les dans votre fork, puis créez une **Pull Request** dans le repository principal.  

---

## ⚙️ Lancer le projet localement  

1. **Installer un serveur local** :  
   Si vous utilisez **Python** :  
   ```bash
   python -m http.server
   ```
   Cela rendra le projet accessible via `http://localhost:8000`.

2. **Ouvrir le projet dans un navigateur** :  
   Allez à l’adresse fournie par le serveur pour visualiser `web/index.html`.  

---

## 📋 Contributions  
Nous accueillons toutes les contributions respectant les règles suivantes :  
- Respecter les formats existants (cours, universités, etc.).  
- Assurez-vous que vos ajouts sont **valides** et **pertinents** pour le projet.  
- Soyez respectueux envers les autres membres de la communauté.

Pour en savoir plus, consultez le fichier [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

## 📝 Licence  
Ce projet est sous licence **GPL-3**. Vous êtes libre de l'utiliser et de le modifier tant que vous respectez les conditions de la licence.  

---

### Merci pour votre contribution ! 💻🚀

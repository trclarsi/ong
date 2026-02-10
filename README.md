# ONG Studio - Site Premium

Ce projet est le site web officiel de **ONG Studio**, un studio de création visuelle basé à Montréal spécialisé dans la photographie haute définition et le marketing digital.

## 🚀 Installation et Lancement

Suivez ces instructions pour faire fonctionner le projet sur votre machine locale.

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre système.

### Étapes

1. **Cloner le projet**
   ```bash
   git clone https://github.com/trclarsi/ong.git
   cd ong
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npm run dev
   ```
   L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

## ⚙️ Administration du contenu

Le site a été conçu pour être facilement administrable sans avoir à toucher à la structure complexe du code React. Tout le contenu (textes, images, listes) est centralisé dans le dossier `src/data/`.

Pour mettre à jour le site, il vous suffit de modifier les fichiers suivants :

- **`src/data/home.ts`** : Statistiques, témoignage client et contenu de la bannière d'accueil.
- **`src/data/about.ts`** : Vos compétences, votre parcours (timeline), votre équipement et vos valeurs.
- **`src/data/services.ts`** : Liste des prestations, descriptions, prix et avantages concurrentiels.
- **`src/data/portfolio.ts`** : Gestion des catégories et ajout/suppression de projets dans la galerie.

**Procédure :** 
1. Ouvrez le fichier correspondant dans votre éditeur.
2. Modifiez le texte ou l'URL de l'image entre les guillemets.
3. Enregistrez le fichier. Le site se mettra à jour automatiquement si le serveur est lancé.

## 🛠️ Technologies utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations fluides
- **Lucide React** - Icônes minimalistes
- **React Router** - Gestion de la navigation (SPA)

## 🎨 Architecture du projet

- `src/data/` : **Back-office simulé** (données du site)
- `src/pages/` : Composants de pages (Accueil, À Propos, Portfolio, etc.)
- `src/layout/` : Composants structurels (Navbar, Footer, Layout)
- `src/utils/` : Utilitaires (ScrollToTop, configuration serveur, etc.)
- `src/index.css` : Styles globaux et configuration des polices Premium

---
© 2026 ONG Studio. Designed for Excellence.

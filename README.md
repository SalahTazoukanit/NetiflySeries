# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Déploiement d'un site React sur Netlify

### Prérequis
- Un projet React fonctionnel.
- Un compte Netlify (tu peux t'inscrire avec GitHub pour simplifier la connexion).
- Ton projet est déjà hébergé sur GitHub.

### Étapes de déploiement

1. **Créer un build de production**  
   Exécute la commande suivante dans le terminal à la racine de ton projet pour générer une version optimisée du site :
   ```bash
   
 npm run build

2. **Se connecter à Netlify**
  Ajouter un projet via gitHub en clickant *Add new site*

3.**Configurer les paramètres de build**

Choisis la branche à déployer (par défaut, c'est souvent main ou master).

Dans la section "Build Command", entre :

npm run build

Dans la section "Publish directory", entre :

build

4. **Ton site sera en ligne**

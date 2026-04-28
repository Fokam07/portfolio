# 🚀 Démarrage Rapide

Bienvenue ! Voici comment démarrer avec votre portfolio.

## ⚡ 30 Secondes pour Commencer

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:5173
```

Voilà ! Votre portfolio tourne maintenant en local ! 🎉

## 📝 5 Minutes pour Personnaliser

1. Ouvrir `src/config.js`
2. Modifier les informations :
   - Votre nom
   - Vos réseaux sociaux
   - Vos compétences
   - Vos projets

3. Sauvegarder et voir les changements en direct (HMR) !

## 🛠️ Commandes Disponibles

```bash
# Développement
npm run dev              # Lancer le serveur de dev

# Production
npm run build           # Compiler pour production
npm run preview         # Prévisualiser le build

# Linting
npm run lint            # Vérifier le code avec ESLint
```

## 📂 Structure Importante

```
src/
├── components/         # Tous les composants du portfolio
├── App.jsx            # Composant principal
├── index.css          # Styles globaux et couleurs
└── config.js          # Configuration personnelle ⭐
```

## 🎯 Prochaines Étapes

1. **Personnaliser** → Voir [PERSONNALISATION.md](./PERSONNALISATION.md)
2. **Ajouter CV** → Placer `cv.pdf` dans le dossier `public/`
3. **Déployer** → Voir la section Déploiement ci-dessous
4. **Optimiser** → Tester avec Lighthouse

## 🌐 Déploiement (3 Options)

### Option 1 : Vercel (⭐ Recommandé - 1 minute)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Option 2 : Netlify (2 minutes)

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy --prod --dir=dist
```

### Option 3 : GitHub Pages (3 minutes)

```bash
# Ajouter au package.json :
"homepage": "https://votre-username.github.io/portfolio-prince",

# Modifier vite.config.js :
base: '/portfolio-prince/'

# Créer un repo GitHub et push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/portfolio-prince.git
git push -u origin main

# Créer un GitHub Action pour déployer automatiquement
```

## 🐛 Dépannage

### Le serveur de dev ne démarre pas
```bash
# Vérifier Node.js
node --version  # Doit être >= 16

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les styles ne s'appliquent pas
```bash
# Rafraîchir le navigateur
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)
```

### Port 5173 déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- --port 3000
```

## 📱 Tester la Responsivité

### Dans le navigateur
1. Ouvrir DevTools (F12)
2. Cliquer sur l'icône de responsive design (Ctrl+Shift+M)
3. Tester sur différentes tailles

### Tester sur appareil réel
```bash
# Obtenir l'IP locale
ipconfig getifaddr en0  (Mac)
ipconfig                 (Windows)

# Ouvrir dans le navigateur du téléphone
http://<YOUR_IP>:5173
```

## 📚 Documentation

- [README.md](./README.md) - Documentation complète
- [PERSONNALISATION.md](./PERSONNALISATION.md) - Guide de personnalisation détaillé
- [React Docs](https://react.dev) - Documentation React
- [Vite Docs](https://vitejs.dev) - Documentation Vite

## 🎨 Personnalisation Rapide

### Changer les couleurs
Fichier: `src/index.css` - Variables CSS

### Changer le texte
Fichier: `src/config.js` - Configuration

### Changer le logo
Fichier: `src/components/Navbar.jsx` - Ligne avec le logo

## ✨ Fonctionnalités Disponibles

- ✅ Design responsive parfait
- ✅ Animations fluides
- ✅ Scroll reveal
- ✅ Navbar sticky
- ✅ Formulaire de contact (simulation)
- ✅ Timeline élégante
- ✅ Grille de projets
- ✅ Cartes de compétences
- ✅ Performance optimisée
- ✅ SEO friendly

## 🤝 Besoin d'Aide ?

### Questions Courantes

**Q: Comment changer la police ?**
A: Modifier `src/index.css` - propriété `font-family`

**Q: Comment ajouter plus de projets ?**
A: Ajouter à `src/config.js` - array `projects`

**Q: Le formulaire de contact fonctionne ?**
A: Il affiche juste un message pour l'instant. Voir PERSONNALISATION.md pour ajouter un vrai backend.

**Q: Comment ajouter Google Analytics ?**
A: Ajouter le script dans `index.html` avant `</body>`

## 🎉 Prêt à Déployer ?

```bash
# 1. Build
npm run build

# 2. Tester localement
npm run preview

# 3. Déployer
# Voir la section Déploiement ci-dessus
```

## 📜 License

© 2026 Prince Orland FOKAM FOTSO

---

**Vous avez des questions ? Consultez PERSONNALISATION.md ou la documentation officielle ! 🚀**

**Bonne chance avec votre portfolio ! ✨**

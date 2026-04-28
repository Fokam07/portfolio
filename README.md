# 🚀 Portfolio - Prince Orland FOKAM FOTSO

Portfolio web moderne, premium et professionnel pour un développeur Full Stack / DevOps en recherche d'alternance ou stage.

## ✨ Caractéristiques

### Design Premium
- 🎨 **Thème Modern Tech** : Palette de couleurs premium (Bleu Nuit #0F172A, Vert Moderne #00C896, Bleu Tech #3B82F6)
- ✨ **Glassmorphism** : Effets glassmorphism légers et élégants
- 🎭 **Dark Mode** : Dark mode premium par défaut
- 📱 **Responsive** : Parfaitement responsive sur mobile, tablette et desktop
- ⚡ **Animations Fluides** : Animations smooth et scroll reveal

### Sections Complètes

1. **🏠 Hero Section**
   - Grand titre impactant avec gradient
   - Sous-titre personnalisé
   - Boutons CTA (Télécharger CV, Voir projets)
   - Avatar avec effets flottants
   - Cartes flottantes (Frontend, Backend, DevOps, IA)
   - Statistiques animées
   - Scroll indicator

2. **👤 À Propos**
   - Présentation du profil
   - 6 cartes de qualités (Esprit d'analyse, Autonomie, Rigueur, Curiosité, Travail en équipe, Adaptation)

3. **💻 Compétences**
   - 7 catégories de compétences
   - Tags technologiques
   - Frontend, Backend, Bases de données, DevOps, IA, Design, Outils

4. **🎯 Projets**
   - Galerie de projets moderne
   - Cartes avec descriptions et stack technique
   - Boutons Démo et GitHub
   - 6 projets d'exemple

5. **📊 Parcours**
   - Timeline élégante
   - Expériences professionnelles et académiques
   - Badges d'achievements

6. **📍 Disponibilité**
   - Informations de disponibilité
   - Localisation et type de contrat

7. **📧 Contact**
   - Formulaire de contact
   - Liens réseaux sociaux (LinkedIn, GitHub, Email, Téléphone)
   - Temps de réponse

8. **🔗 Footer**
   - Navigation rapide
   - Réseaux sociaux
   - Copyright

## 🛠️ Stack Technique

- **Framework** : React 19
- **Build Tool** : Vite 8
- **Styling** : CSS3 (Variables CSS, Grid, Flexbox)
- **Animations** : CSS Keyframes
- **Design** : Responsive & Mobile-First

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 16+
- npm ou yarn

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build pour Production
```bash
npm run build
```

### Aperçu Production
```bash
npm run preview
```

## 📁 Structure du Projet

```
src/
├── components/              # Composants React
│   ├── Navbar.jsx          # Barre de navigation
│   ├── Hero.jsx            # Section héro
│   ├── About.jsx           # À Propos
│   ├── Skills.jsx          # Compétences
│   ├── Projects.jsx        # Projets
│   ├── Experience.jsx      # Parcours
│   ├── Availability.jsx    # Disponibilité
│   ├── Contact.jsx         # Contact
│   └── Footer.jsx          # Footer
├── App.jsx                 # Composant principal
├── App.css                 # Styles App
├── index.css               # Styles globaux
└── main.jsx               # Point d'entrée
```

## 🎨 Personnalisation

### Couleurs
Modifier les variables CSS dans `src/index.css` :
```css
:root {
  --primary-dark: #0F172A;
  --secondary-dark: #111827;
  --accent-green: #00C896;
  --accent-blue: #3B82F6;
  --text-light: #F3F4F6;
  --text-gray: #9CA3AF;
}
```

### Contenu
Les données sont directement dans les composants JSX :
- Modifier le texte dans les sections
- Ajouter/supprimer des projets dans `Projects.jsx`
- Actualiser les informations de contact

### Liens
Remplacer les placeholders :
- LinkedIn : https://linkedin.com/in/prince-fokam
- GitHub : https://github.com/prince-dev
- Email : fokaprince39@gmail.com
- Téléphone : +33 6 00 00 00 00

## 📱 Responsive Design

Le portfolio est optimisé pour :
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## ⚙️ Fonctionnalités

- ✅ Navigation fluide avec scroll smooth
- ✅ Navbar sticky
- ✅ Scroll reveal animations
- ✅ Formulaire de contact (simulation)
- ✅ Boutons CTA fonctionnels
- ✅ SEO friendly
- ✅ Performance optimisée
- ✅ Accessibilité (a11y)

## 🌐 Déploiement

### Sur Vercel
1. Push le code sur GitHub
2. Connecter le repo à Vercel
3. Vercel détecte automatiquement Vite
4. Déploiement automatique

### Sur Netlify
1. Push le code sur GitHub
2. Connecter le repo à Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📋 À Faire

- [ ] Remplacer les liens placeholder par les vrais URLs
- [ ] Ajouter un vrai CV PDF dans `public/cv.pdf`
- [ ] Mettre à jour les informations de contact
- [ ] Ajouter des images screenshot des projets
- [ ] Configurer le formulaire de contact (backend)
- [ ] Ajouter Google Analytics
- [ ] Tester la responsivité sur plusieurs appareils

## 💡 Conseils

1. **CV PDF** : Créer un PDF et le placer dans `public/cv.pdf`
2. **Projets** : Remplacer les emojis par des images/screenshots
3. **SEO** : Modifier les meta tags dans `index.html`
4. **Performance** : Utiliser les Lighthouse dev tools

## 📜 License

© 2026 Prince Orland FOKAM FOTSO - Tous droits réservés

---

**Built with passion & code. ❤️**

Made with React + Vite

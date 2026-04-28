# 🎨 Guide de Personnalisation du Portfolio

Ce guide vous aidera à personnaliser le portfolio à vos besoins.

## 1️⃣ Configuration Rapide

Le fichier `src/config.js` contient toutes les informations personnelles facilement modifiables.

### Étape 1 : Informations Personnelles

```javascript
// src/config.js
export const config = {
  name: "Votre Nom",
  title: "Votre Titre",
  description: "Votre Description",
  // ...
};
```

### Étape 2 : Réseaux Sociaux

```javascript
socials: {
  linkedin: "https://www.linkedin.com/in/votre-profil",
  github: "https://github.com/votre-profil",
  twitter: "https://twitter.com/votre-profil",
  email: "votre-email@example.com",
  phone: "+33 6 XX XX XX XX"
}
```

### Étape 3 : Disponibilité

```javascript
availability: {
  status: "Immédiate",
  location: "Mobile en France",
  contractType: "Alternance ou Stage 3-4 mois"
}
```

## 2️⃣ Personnaliser les Sections

### 📝 Modifier le Texte du Hero

Fichier: `src/components/Hero.jsx`

```jsx
<h1 className="hero-title scroll-reveal">
  Je conçois des applications 
  <span className="gradient-text"> performantes, modernes et évolutives</span>
</h1>
```

### 📊 Ajouter/Modifier les Projets

Fichier: `src/config.js` - Section `projects`

```javascript
{
  id: 7,
  title: "Mon Nouveau Projet",
  description: "Description du projet...",
  stack: ["Tech1", "Tech2", "Tech3"],
  image: "🎯",
  link: "https://mon-projet.com",
  github: "https://github.com/mon-projet"
}
```

### 🛠️ Modifier les Compétences

Fichier: `src/config.js` - Section `skills`

```javascript
skills: {
  frontend: ["HTML5", "CSS3", "React", ...],
  backend: ["Nest.js", "Express", ...],
  // ... autres catégories
}
```

### 📋 Modifier l'Expérience

Fichier: `src/config.js` - Section `experiences`

```javascript
{
  period: "2024 - 2025",
  title: "Mon Titre",
  company: "Ma Société",
  description: "Description de l'expérience...",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

## 3️⃣ Personnaliser le Design

### 🎨 Modifier les Couleurs

Fichier: `src/index.css`

```css
:root {
  --primary-dark: #0F172A;      /* Fond principal */
  --secondary-dark: #111827;     /* Fond secondaire */
  --accent-green: #00C896;       /* Couleur d'accent principale */
  --accent-blue: #3B82F6;        /* Couleur d'accent secondaire */
  --text-light: #F3F4F6;         /* Texte principal */
  --text-gray: #9CA3AF;          /* Texte secondaire */
}
```

### 🎭 Personnaliser les Polices

Fichier: `src/index.css`

```css
body {
  font-family: "Votre Fonte", -apple-system, BlinkMacSystemFont, ...;
}
```

## 4️⃣ Ajouter un CV PDF

1. Créer votre CV en PDF
2. Placer le fichier dans le dossier `public/` (ex: `public/cv.pdf`)
3. Le bouton "Télécharger mon CV" fonctionnera automatiquement

## 5️⃣ Ajouter des Images de Projets

### Option A : Utiliser des Emojis (Actuel)
Les projets utilisent actuellement des emojis. Pas de changement nécessaire.

### Option B : Ajouter des Images

1. Créer un dossier `src/assets/projects/`
2. Placer vos images dedans
3. Modifier `Projects.jsx` :

```jsx
import projectImage1 from "../assets/projects/projet1.jpg";

// Dans la carte du projet
<div className="project-image">
  <img src={projectImage1} alt="Nom du projet" />
</div>
```

## 6️⃣ Mettre à Jour les Meta Tags SEO

Fichier: `index.html`

```html
<meta name="description" content="Votre Description">
<meta name="keywords" content="vos, mots-clés">
<meta name="author" content="Votre Nom">
<title>Votre Titre - Portfolio</title>
```

## 7️⃣ Configurer le Formulaire de Contact

### Actuellement : Simulation Locale
Le formulaire affiche juste un message de succès.

### Ajouter un Vrai Backend

1. **Option Formspree** (Simple)
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option EmailJS** (Recommandé)
   - Installer: `npm install @emailjs/browser`
   - Configurer dans `Contact.jsx`

3. **Option Custom Backend**
   - Créer une API (Node.js, Python, etc.)
   - Envoyer les données du formulaire à votre API

## 8️⃣ Déployer Votre Portfolio

### 🚀 Sur Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### 🚀 Sur Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 🚀 Sur GitHub Pages

1. Modifier `vite.config.js` :
```javascript
export default {
  base: '/portfolio-prince/',
}
```

2. Créer un workflow GitHub Actions
3. Déployer avec `npm run build`

## 9️⃣ Tests et Validation

### ✅ Responsive Design
```bash
# Tester sur tous les appareils
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)
```

### ✅ Performance
- Utiliser Lighthouse (DevTools > Lighthouse)
- Score cible : 90+

### ✅ SEO
- Google Search Console
- Vérifier les meta tags
- Sitemap.xml

### ✅ Accessibilité
- WAVE Browser Extension
- Vérifier le contraste des couleurs
- Tester la navigation au clavier

## 🔟 Checklist Finale

- [ ] Informations personnelles mises à jour
- [ ] Réseaux sociaux configurés
- [ ] Projets ajoutés
- [ ] Compétences personnalisées
- [ ] Expérience mise à jour
- [ ] CV PDF téléchargeable
- [ ] Formulaire de contact fonctionnel
- [ ] Couleurs personnalisées
- [ ] Testé sur mobile
- [ ] Performance optimisée
- [ ] Déployé

## 💡 Conseils Supplémentaires

1. **Gardez-le à jour** : Mettez à jour votre portfolio régulièrement
2. **Avec images** : Ajoutez des screenshots de vos projets
3. **Authentique** : Soyez honnête sur vos compétences
4. **Accessible** : Assurez-vous que c'est mobile-friendly
5. **Rapide** : Optimisez les images et le code

## 📞 Besoin d'Aide ?

- Documentation React : https://react.dev
- Documentation Vite : https://vitejs.dev
- Conseils CSS : https://developer.mozilla.org/fr/docs/Web/CSS

---

**Bon courage pour la personnalisation ! 🚀**

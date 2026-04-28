// Configuration des liens et informations personnelles
export const config = {
  // Informations personnelles
  name: "Prince Orland FOKAM FOTSO",
  title: "Développeur Full Stack | DevOps",
  description: "Étudiant en Mastère spécialisé en développement logiciel, passionné par la création d'applications web modernes, l'automatisation, l'architecture logicielle, le cloud et les nouvelles technologies.",
  
  // Réseaux sociaux
  socials: {
    linkedin: "https://www.linkedin.com/in/prince-fokam-9bb412369",
    github: "https://github.com/Fokam07",
    twitter: "https://twitter.com/",
    email: "fokaprince39@gmail.com",
    phone: "+33 7 84 75 58 34"
  },

  // CV
  cvUrl: "/cv.pdf",

  // Localisation et Disponibilité
  availability: {
    status: "Immédiate",
    location: "Mobile en France",
    contractType: "Alternance ou Stage 3-4 mois"
  },

  // Compétences
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "Tailwind CSS"],
    backend: ["Nest.js", "Express.js", "Java", "Spring Boot", "Symfony", "Laravel", "FastAPI", "C"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    devops: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux", "AWS"],
    ai: ["LLM", "Python IA Tools", "OpenAI API", "Machine Learning"],
    design: ["MERISE", "UML", "BPMN", "Figma", "Responsive Design"],
    tools: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "Jira"]
  },

  // Projets
  projects: [
    {
      id: 1,
      title: "Application E-commerce Premium",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion d'inventaire.",
      stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Plateforme de Supervision Réseau",
      description: "Dashboard de monitoring en temps réel pour infrastructure cloud.",
      stack: ["Vue.js", "Express", "Docker", "Kubernetes"],
      image: "📊",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Chatbot IA Intelligent",
      description: "Assistant conversationnel utilisant OpenAI API avec contexte persistant.",
      stack: ["React", "Python", "OpenAI", "FastAPI"],
      image: "🤖",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Dashboard DevOps CI/CD",
      description: "Interface de gestion pour pipelines CI/CD et déploiements automatisés.",
      stack: ["Next.js", "GitHub Actions", "Docker", "Kubernetes"],
      image: "⚙️",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "API REST Microservices",
      description: "Architecture microservices scalable avec authentification et permissions.",
      stack: ["Nest.js", "TypeScript", "MongoDB", "Docker"],
      image: "🔌",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Système de Gestion Académique",
      description: "Plateforme complète pour gestion des étudiants, cours et évaluations.",
      stack: ["Symfony", "React", "MySQL", "AWS"],
      image: "🎓",
      link: "#",
      github: "#"
    }
  ],

  // Expérience
  experiences: [
    {
      period: "2024 - Présent",
      title: "Étudiant - Mastère Spécialisé",
      company: "École d'Ingénierie",
      description: "Formation approfondie en développement logiciel, architecture système et DevOps.",
      achievements: ["Projets Full Stack", "Architecture Cloud", "DevOps & CI/CD"]
    },
    {
      period: "2023 - 2024",
      title: "Projets Académiques Full Stack",
      company: "Université",
      description: "Réalisation de plusieurs projets complexes en environnement d'équipe.",
      achievements: ["Leadership technique", "Gestion de projet", "Mentoring"]
    },
    {
      period: "2022 - 2023",
      title: "Expérience Bancaire",
      company: "Banque - Cameroun",
      description: "Expérience dans le secteur financier, système d'information et sécurité.",
      achievements: ["Systèmes critiques", "Conformité", "Sécurité"]
    },
    {
      period: "Maintenant",
      title: "En Recherche Active",
      company: "Alternance / Stage 3-4 Mois",
      description: "Disponible immédiatement pour rejoindre une équipe dynamique et performante.",
      achievements: ["Mobilité France", "Flexibilité", "Motivation"]
    }
  ],

  // Qualités
  qualities: [
    { icon: "🧠", title: "Esprit d'analyse", desc: "Résolution de problèmes complexes avec logique" },
    { icon: "🚀", title: "Autonomie", desc: "Capable de travailler indépendamment" },
    { icon: "⚙️", title: "Rigueur", desc: "Code propre et bien structuré" },
    { icon: "🔍", title: "Curiosité", desc: "Toujours en quête d'apprentissage" },
    { icon: "👥", title: "Travail en équipe", desc: "Collaboration et communication fluide" },
    { icon: "🎯", title: "Adaptation", desc: "Flexible face aux défis nouveaux" }
  ],

  // Statistiques
  stats: [
    { number: "10+", label: "Projets réalisés" },
    { number: "15+", label: "Technologies" },
    { number: "∞", label: "Passion" }
  ]
};

export default config;

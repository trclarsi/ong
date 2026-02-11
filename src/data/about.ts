import { Award, Target, Zap } from 'lucide-react';

export const skills = [
  { name: "Photographie", level: 95 },
  { name: "Adobe Lightroom", level: 90 },
  { name: "Photoshop", level: 88 },
  { name: "Design graphique", level: 85 },
  { name: "Branding", level: 82 },
  { name: "UI/UX Design", level: 78 },
];

export const timeline = [
  { 
    year: "2024", 
    title: "Directeur Artistique", 
    company: "Freelance", 
    desc: "Pilotage de la stratégie créative et de la direction artistique pour des clients d'envergure internationale, fusionnant vision esthétique et impératifs marketing." 
  },
  { 
    year: "2020", 
    title: "Photographe Senior", 
    company: "Studio Lumière", 
    desc: "Expertise approfondie en portrait corporate et photographie d'architecture, capturant l'essence des structures et des personnalités avec une précision technique absolue." 
  },
  { 
    year: "2017", 
    title: "Designer Graphique", 
    company: "Agence Créative", 
    desc: "Création d'identités visuelles percutantes et de systèmes de design cohérents, optimisant la communication de marque sur tous les supports numériques et physiques." 
  },
  { 
    year: "2014", 
    title: "Assistant Photographe", 
    company: "Photo Lab Paris", 
    desc: "Maîtrise rigoureuse de la gestion de la lumière en studio et des processus complexes de post-production numérique et argentique." 
  },
];

export const equipment = [
  { category: "Boîtiers", items: ["Canon EOS R5", "Sony A7 IV"] },
  { category: "Logiciels", items: ["Adobe Creative Suite", "Figma", "Capture One", "DaVinci Resolve"] },
  { category: "Spécialités", items: ["Objectifs Série L", "Éclairage Profoto", "Stabilisation DJI"] }
];

export const values = [
  { 
    icon: Award, 
    title: "Authenticité", 
    text: "Chaque image reflète la vérité de votre marque. Nous croyons que la sincérité visuelle est le fondement de toute connexion durable avec votre audience." 
  },
  { 
    icon: Zap, 
    title: "Créativité", 
    text: "Repousser les limites du conventionnel. Notre approche consiste à explorer de nouveaux territoires visuels pour créer des identités uniques et mémorables." 
  },
  { 
    icon: Target, 
    title: "Excellence", 
    text: "Un engagement absolu envers la qualité supérieure. De la première esquisse à la livraison finale, aucun détail n'est laissé au hasard." 
  }
];

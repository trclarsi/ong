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
  { year: "2024", title: "Directeur Artistique", company: "Freelance", desc: "Direction de projets visuels complexes pour des marques internationales." },
  { year: "2020", title: "Photographe Senior", company: "Studio Lumière", desc: "Spécialisation en portrait corporate et photographie d'architecture." },
  { year: "2017", title: "Designer Graphique", company: "Agence Créative", desc: "Conception d'identités visuelles et de supports marketing." },
  { year: "2014", title: "Assistant Photographe", company: "Photo Lab Paris", desc: "Apprentissage des techniques d'éclairage et de post-production." },
];

export const equipment = [
  { category: "Boîtiers", items: ["Canon EOS R5", "Sony A7 IV"] },
  { category: "Logiciels", items: ["Adobe Creative Suite", "Figma", "Capture One", "DaVinci Resolve"] },
];

export const values = [
  { icon: Award, title: "Authenticité", text: "Chaque image reflète la vérité de votre marque, sans artifice ni compromis." },
  { icon: Zap, title: "Créativité", text: "Repousser les limites du conventionnel pour créer des visuels uniques et mémorables." },
  { icon: Target, title: "Excellence", text: "Un engagement absolu envers la qualité, du concept à la livraison finale." }
];

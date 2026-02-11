import { Camera, Video, Palette, Printer, Zap, Clock, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  features: string[];
  price: string;
  bg: string;
}

export const services: Service[] = [
  {
    id: 0,
    title: "Shooting Photo Premium",
    icon: Camera,
    desc: "Portrait, mode ou corporate. Des images qui captent l'essence de votre personnalité avec une direction artistique pointue.",
    features: ["Direction artistique sur mesure", "Retouches avancées HD", "Usage commercial inclus", "Livraison express 48h"],
    price: "À partir de 150$",
    bg: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 1,
    title: "Captation Événementielle",
    icon: Video,
    desc: "Capturer l'éternité de vos moments les plus précieux, du mariage au gala d'entreprise, avec une discrétion absolue.",
    features: ["Couverture multicaméra", "Étalonnage cinématographique", "Montage dynamique", "Formats réseaux sociaux"],
    price: "À partir de 500$",
    bg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Identité de Marque",
    icon: Palette,
    desc: "L'art du branding stratégique. Nous créons des univers visuels qui racontent votre histoire et engagent votre audience.",
    features: ["Logo & Charte graphique", "Recherche typographique", "Palette de couleurs unique", "Supports de communication"],
    price: "À partir de 600$",
    bg: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Solution Corporate",
    icon: Printer,
    desc: "Valoriser votre expertise et votre infrastructure à travers des visuels qui inspirent confiance et professionnalisme.",
    features: ["Reportage en entreprise", "Portrait de collaborateurs", "Packshot produits", "Architecture & Immobiler"],
    price: "À partir de 150$",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  }
];

export const advantages = [
  { icon: Zap, title: "Rigueur Technologique", text: "Issu des télécommunications, je n'ignore aucun détail technique. Vos fichiers sont optimisés pour une performance maximale sur chaque plateforme numérique." },
  { icon: Clock, title: "Réactivité Garantie", text: "Dans un environnement digital en constante évolution, la vitesse est un avantage stratégique. Nous garantissons une livraison des premiers jets sous 48h." },
  { icon: ShieldCheck, title: "Qualité Intransigeante", text: "Le standard n'est pas notre limite. Nous visons l'excellence visuelle absolue à chaque étape, de la pré-production à la livraison finale." }
];

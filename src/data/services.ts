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
    title: "Shooting Photo",
    icon: Camera,
    desc: "Sublimation de votre image personnelle.",
    features: ["Direction artistique", "Retouches professionnelles", "Fichiers haute résolution", "Livraison express 48h"],
    price: "150$",
    bg: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 1,
    title: "Mariage",
    icon: Video,
    desc: "Capturer l'éternité de votre union.",
    features: ["Étalonnage couleur", "Motion design", "Sound design", "Formats multi-plateformes"],
    price: "500$",
    bg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Mode",
    icon: Palette,
    desc: "L'art du style et de la direction artistique.",
    features: ["Recherche conceptuelle", "3 propositions initiales", "Révisions illimitées", "Fichiers vectoriels (SVG/AI)"],
    price: "600$",
    bg: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Corporate",
    icon: Printer,
    desc: "Valoriser votre expertise et votre image.",
    features: ["Design sur mesure", "Fichiers prêt à imprimer", "Plusieurs formats inclus", "Suivi avec l'imprimeur"],
    price: "150$",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  }
];

export const advantages = [
  { icon: Zap, title: "Rigueur Technologique", text: "Issu des télécommunications, je n'ignore aucun détail technique. Vos fichiers sont optimisés pour chaque plateforme." },
  { icon: Clock, title: "Réactivité Garantie", text: "Dans un monde digital rapide, la vitesse est un luxe. Livraison des premiers jets sous 48h pour la photographie." },
  { icon: ShieldCheck, title: "Qualité Intransigeante", text: "Le 'bon' ne suffit pas. Je vise l'excellence visuelle à chaque étape de la production." }
];

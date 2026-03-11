import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  highlight: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface ProfileData {
  name: string;
  instagram: string;
  instagramHandle: string;
  headline: string;
  subheadline: string;
  stats: string[];
  location: string;
  whatsappNumber: string;
  whatsappLink: string;
  whatsappPrefill: string;
  heroImage: string;
  cardSubtitle: string;
}

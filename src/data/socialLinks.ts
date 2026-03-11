import { Gem, Instagram, MapPin, MessageCircle, Sparkles, Star, ThumbsUp } from 'lucide-react';

import { SocialLink } from '@/types';

export const cardLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/kamilamakes',
    icon: Instagram
  },
  {
    label: 'Perfumes Árabes',
    href: '#perfumes',
    icon: Gem
  },
  {
    label: 'Micropigmentação',
    href: '#micropigmentacao',
    icon: Star
  },
  {
    label: 'Remoção a Laser',
    href: '#remocao',
    icon: Sparkles
  },
  {
    label: 'Feedbacks',
    href: '#feedbacks',
    icon: ThumbsUp
  },
  {
    label: 'Localização',
    href: 'https://maps.google.com/?q=Rua+Dr.+Fuas+de+Mattos+Sabino+2-36+Bauru+SP',
    icon: MapPin
  },
  {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5514991495050',
    icon: MessageCircle
  }
];

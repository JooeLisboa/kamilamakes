import { ProfileData, Testimonial } from '@/types';

export const profile: ProfileData = {
  name: 'Kamila Miguel',
  instagram: 'https://instagram.com/kamilamakes',
  instagramHandle: '@kamilamakes',
  headline: 'Beleza que realça sua essência.',
  subheadline: 'Micropigmentação natural, remoção a laser e perfumes árabes selecionados.',
  stats: ['2.877 publicações', '60,9 mil seguidores', '+1.000 remoções a laser'],
  location: 'Rua Dr. Fuas de Mattos Sabino, 2-36 · Bauru/SP',
  whatsappNumber: '5514991495050',
  whatsappLink: 'https://wa.me/5514991495050',
  whatsappPrefill: 'Olá Kamila! Vim pelo seu site e gostaria de saber mais sobre os atendimentos.',
  heroImage:
    '/kamila-hero.svg',
  cardSubtitle: 'Beleza autoral · Estética premium'
};

export const chips = ['+1000 atendimentos', 'Micropigmentação de assinatura', 'Perfumes árabes originais', 'Studio premium em Bauru'];

export const testimonials: Testimonial[] = [
  {
    name: 'Larissa P.',
    quote: 'A Kamila traduz elegância em cada detalhe. O resultado ficou sofisticado, leve e extremamente natural.'
  },
  {
    name: 'Renata M.',
    quote: 'Atendimento impecável, ambiente refinado e técnica de alto nível. A remoção a laser foi segura e eficiente.'
  },
  {
    name: 'Carolina S.',
    quote: 'Os perfumes árabes são uma experiência sensorial. Fragrâncias marcantes com presença realmente memorável.'
  }
];

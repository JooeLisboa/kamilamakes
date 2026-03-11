import { ProfileData, Testimonial } from '@/types';

export const profile: ProfileData = {
  name: 'Kamila Miguel',
  instagram: 'https://instagram.com/kamilamakes',
  instagramHandle: '@kamilamakes',
  headline: 'Beleza que realça sua essência.',
  subheadline:
    'Micropigmentação natural, remoção a laser e perfumes árabes selecionados.',
  stats: ['2.877 posts', '60,9 mil seguidores', '+1.000 remoções a laser realizadas'],
  location: 'Rua Dr. Fuas de Mattos Sabino, 2-36 · Bauru/SP',
  whatsappNumber: '5514991495050',
  whatsappLink: 'https://wa.me/5514991495050',
  whatsappPrefill:
    'Olá Kamila! Vim pelo seu site e gostaria de saber mais sobre os atendimentos.',
  heroImage:
    'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80',
  cardSubtitle: 'Influenciadora de beleza · Especialista em estética'
};

export const chips = [
  '+1000 atendimentos',
  'Especialista em micropigmentação',
  'Perfumes árabes originais',
  'Studio em Bauru'
];

export const testimonials: Testimonial[] = [
  {
    name: 'Larissa P.',
    quote:
      'A Kamila entregou uma micropigmentação sofisticada e super natural. Meu olhar ganhou presença!'
  },
  {
    name: 'Renata M.',
    quote:
      'Cheguei para remoção a laser insegura e saí confiante. Atendimento premium do início ao fim.'
  },
  {
    name: 'Carolina S.',
    quote:
      'Os perfumes árabes têm uma assinatura única. Recebo elogios em todos os lugares.'
  }
];

import type { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Kamila Miguel | Beleza Premium',
  description:
    'Landing page premium de Kamila Miguel: micropigmentação natural, remoção a laser e perfumes árabes.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

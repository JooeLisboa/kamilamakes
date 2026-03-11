# Kamila Miguel — Landing Page + Cartão Interativo Premium

Projeto desenvolvido com Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion e Lucide.

## Rotas

- `/` → Landing page premium
- `/cartao` → Cartão interativo estilo link-in-bio

## Estrutura

```text
src/
  app/
    page.tsx
    cartao/page.tsx
  components/
    layout/
    sections/
    card/
    ui/
  data/
    profile.ts
    services.ts
    socialLinks.ts
  lib/
    whatsapp.ts
  styles/
    globals.css
  types/
    index.ts
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Deploy na Vercel

1. Suba o projeto em um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com), clique em **Add New Project**.
3. Importe o repositório e mantenha as configurações padrão para Next.js.
4. Clique em **Deploy**.
5. Após publicar, configure domínio personalizado se desejar.

## Qualidade técnica aplicada

- Arquitetura modular por domínio (layout, sections, card, ui).
- Dados centralizados em `src/data` sem hardcode espalhado.
- Tipagem forte em `src/types`.
- CTA do WhatsApp gerado por utilitário em `src/lib/whatsapp.ts`.
- Microinterações e animações suaves com Framer Motion.
- Interface mobile first com estética premium/luxo.

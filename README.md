# GMC — Granja Multi Core

Landing page para a plataforma GMC, construída com Next.js 15, React, TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e configure:

- `NEXT_PUBLIC_SITE_URL` — URL canônica do site
- `NEXT_PUBLIC_GTM_ID` — ID do container Google Tag Manager (opcional)

## Build

```bash
npm run build
npm start
```

## Formulário de contato

O envio usa Server Actions (`app/actions/contact.ts`). Para integrar e-mail ou CRM, substitua o `console.info` por Resend, Formspree ou sua API interna. Há também um endpoint REST em `POST /api/contact`.

## SEO

- Metadata e Open Graph em `lib/metadata.ts`
- JSON-LD `SoftwareApplication` em `lib/jsonld.ts`
- `app/sitemap.ts` e `app/robots.ts`

Coloque uma imagem OG em `public/og-image.png` (1200×630).

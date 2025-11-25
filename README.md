# Appeddy Landing (PWA)

Mobile-first Landingpage für appeddy.de. Zeigt kommende PWAs und Play-Store-Apps. PWA-ready mit Manifest & Service Worker.

## Lokal starten

1. npm install
2. npm run dev
3. Öffnen: http://localhost:5173

## Build

- npm run build
- npm run preview (Test des Build)

## Service Worker

Der SW ist minimal (Cache für Assets, Netzwerk-first für HTML). Passe `sw.js` nach Bedarf an.

## Vercel Deployment

1. Repo initialisieren:
   - git init
   - git add .
   - git commit -m "Initial landing"
   - git branch -M main
   - git remote add origin https://github.com/DEIN-USER/appeddy-landing.git
   - git push -u origin main

2. Vercel:
   - https://vercel.com → New Project → Importiere das Repo
   - Framework: Vite/React wird automatisch erkannt
   - Build: `npm run build`
   - Output: `dist`

3. Domain verbinden:
   - Vercel Project → Settings → Domains → `appeddy.de` hinzufügen
   - Beim Domain-Registrar:
     - A-Record oder CNAME gemäß Vercel-Hinweisen setzen
   - Warten, bis DNS propagiert → Seite live unter `https://appeddy.de`

## Subdomains für PWAs

- In Vercel: Project → Settings → Domains → `lotto.appeddy.de`, `terminplaner.appeddy.de`, etc.
- Je Subdomain entweder:
  - auf dieses Landing-Projekt zeigen (Alias), oder
  - eigene Vercel-Projekte deployen und Subdomain zuordnen

## Hinweise

- Icons im Ordner `public/icons` austauschen.
- `public/logo.png` durch dein echtes Logo ersetzen.
- Textinhalte in `App.jsx` bei Bedarf anpassen.
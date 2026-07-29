# 🍔 Raph Burger v2

Application Next.js du restaurant **Raph Burger** — cuisine ivoirienne authentique à Abidjan.

## ✨ Fonctionnalités

- Menu interactif avec carrousel (Plats · Boissons · Desserts)
- Panier avec gestion des quantités
- Commande directe via WhatsApp (+225 05 94 97 95 30)
- Design terracotta responsive

## 🚀 Développement local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## 🌐 Déploiement Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub.
2. **Add New… → Project** → sélectionnez `raph-burger-v2`.
3. Vercel détecte Next.js automatiquement — cliquez sur **Deploy**.
4. Votre site est en ligne en ~1 minute à `raph-burger-v2.vercel.app`.

À chaque `git push` sur `main`, Vercel redéploie automatiquement.

## 📁 Structure

```
app/
├── layout.tsx      # Layout global + polices Google
├── page.tsx        # Page d'accueil
├── menu/page.tsx   # Menu interactif + panier
└── globals.css     # Styles globaux (Tailwind + animations)
lib/
└── menu.ts         # Données du menu (22 produits)
```

## ✏️ Modifier le menu

Éditez `lib/menu.ts` — ajoutez, modifiez ou supprimez des entrées dans le tableau `MENU`. Commit + push → Vercel redéploie tout seul.

---

Fait avec ❤️ à Abidjan.

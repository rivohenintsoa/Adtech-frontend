# AdTech Frontend

> Interface web pour la gestion et diffusion de campagnes publicitaires.  
> Frontend développé avec **Next.js**, **Tailwind CSS**, **Axios** et **Zod** pour la validation.

---

## Technologies utilisées

| Technologie | Rôle |
|---|---|
| Next.js | Framework React pour le frontend |
| React | UI & composants |
| Tailwind CSS | Styles & design responsive |
| Axios | Communication avec l'API backend |
| Zod | Validation des formulaires |
| TypeScript | Typage et sécurité du code |

---

## Installation et lancement

### 1. Cloner le projet

```bash
git clone 
cd adtech-frontend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer l'API

Créer un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> Cette variable pointe vers le backend NestJS.

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Le frontend sera disponible sur : **`http://localhost:3001`** (ou port par défaut Next.js)

---

## Structure du projet

```
  /components       # Composants réutilisables (Navbar, DashboardCard...)
  /campaigns        # Page liste des campagnes
  /campaigns/create # Page création de campagne
  /app              # Page stats & dashboard
  /services         # Appels API via Axios
  /schemas          # Validation Zod
  /types            # Types TypeScript partagés
```

---

## Fonctionnalités

### Liste des campagnes
- Affiche : nom, annonceur, statut, impressions, budget
- Récupération depuis `GET /campaigns`

### Création d'une campagne
- Formulaire avec validation via **Zod**
- Envoi des données avec `POST /campaigns`
- Redirection vers la liste en cas de succès

### Dashboard
- Affiche : campagnes totales, campagnes actives, impressions totales, top advertiser
- Récupération via `GET /stats`
- Composant client avec `useEffect` (CSR)

---

## Améliorations possibles

1. Pagination et recherche sur la liste des campagnes
2. Gestion des erreurs globales avec un toast ou modal
3. Authentification et rôle admin pour sécuriser certaines pages
4. Optimisation SSR/ISR pour le dashboard et les stats
5. Tests unitaires avec React Testing Library
6. Animations et transitions UI plus fluides
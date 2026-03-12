# Document de Décisions Techniques — Frontend AdTech

## Objectif

Ce document décrit les choix techniques, arbitrages et difficultés rencontrées lors du développement du frontend de l'application AdTech.

---

## 1. Choix du framework

Le frontend est développé avec **Next.js**.

**Raisons :**
- Structure claire pour les applications React
- Support SSR et CSR
- Routing intégré
- Bonne performance

> Dans ce projet, l'approche **CSR** (Client Side Rendering) est utilisée pour charger les données depuis l'API.

---

## 2. Gestion des appels API

Les appels API sont centralisés dans un fichier :

```
/services/api.ts
```

**Avantages :**
- Éviter la duplication du code
- Centraliser la configuration Axios
- Faciliter la maintenance

La communication avec le backend se fait via **Axios**.

---

## 3. Utilisation des variables d'environnement

Initialement, l'API était appelée avec une URL fixe :

```
http://localhost:3000
```

**Problème :** Cette approche ne permet pas de gérer plusieurs environnements.

**Solution :** Utilisation d'une variable d'environnement :

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Puis dans la configuration Axios :

```ts
baseURL: process.env.NEXT_PUBLIC_API_URL
```

Cela permet d'adapter l'application facilement pour les environnements **dev / staging / production**.

---

## 4. Validation des formulaires

La validation des formulaires est réalisée avec **Zod**.

**Avantages :**
- Validation typée
- Intégration facile avec TypeScript
- Validation côté client

**Problème rencontré :**

Une erreur est apparue :

```
invalid_type_error does not exist
```

**Solution :** Simplification de la validation :

```ts
z.string().min(1, "Field is required")
```

---

## 5. Organisation des composants

Une décision importante a été de séparer les composants UI des pages.

**Structure du projet :**

```
app/
components/
services/
```

Cela permet :
- Une meilleure réutilisabilité
- Un code plus lisible
- Une maintenance plus simple

---

## 6. Choix du design

Le design est réalisé avec **Tailwind CSS**.

**Raisons :**
- Rapidité de développement
- Responsive design simple
- Peu de CSS personnalisé

---

## 7. Améliorations possibles

- pagination des campagnes
- gestion globale des erreurs
- notifications utilisateur
- tests frontend
- optimisation du dashboard avec cache.
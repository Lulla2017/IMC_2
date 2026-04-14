# 🏋️ IMC Calculator - Phase 2 React + Vite

**Calculatrice d'Indice de Masse Corporelle (IMC) - Application React moderne avec Vite**

## 📋 À propos du projet

Application web pour calculer l'Indice de Masse Corporelle (IMC) basée sur le poids et la taille. Développée en **React 19** avec **Vite**, cette application offre une interface moderne et responsive avec une validation robuste des données.

**Cours** : LP DWCA - UE 6.3.1 Frameworks et approfondissement web  
**Auteurs** : Catherine Braun, Laurent Boyer  
**Date** : Phase 2 - 14/04/2026

---

## ✨ Fonctionnalités principales

✅ **Calcul IMC automatique**
- Formule : IMC = poids (kg) / (taille (m))²
- Résultat affiché avec 1 décimale

✅ **Classification IMC**
- 6 catégories de résultats
- Couleurs différenciées par catégorie
- Messages explicatifs en français

✅ **Validation robuste**
- Validation des entrées utilisateur
- Messages d'erreur clairs
- Gestion des cas limites

✅ **Interface moderne**
- Design responsive (mobile, tablet, desktop)
- Fond noir avec contraste optimisé
- Header et Footer centrés
- Animations fluides (slideIn)

✅ **Accessibilité**
- ARIA labels pour lecteurs d'écran
- Navigation au clavier
- Gestion des états de focus

---

## 🎯 Catégories IMC

| Catégorie       | IMC       | Couleur      | Classe CSS             |
|-----------------|-----------|--------------|------------------------|
| Maigreur        | < 18.5    | Bleu clair   | `.imc-result-maigreur` |
| Normal          | 18.5 - 25 | Vert         | `.imc-result-normal`   |
| Surpoids        | 25 - 30   | Orange       | `.imc-result-surpoids` |
| Obésité modérée | 30 - 35   | Orange foncé | `.imc-result-modere`   |
| Obésité sévère  | 35 - 40   | Rouge        | `.imc-result-severe`   |
| Obésité morbide | ≥ 40      | Rouge foncé  | `.imc-result-morbide`  |

---

## 🚀 Démarrage rapide

### Prérequis
- **Node.js** >= 16.x
- **npm** >= 8.x

### Installation

```bash
# 1. Cloner ou télécharger le projet
cd imc-app-phase-2

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# → http://localhost:5173
```

### Build production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📚 Commandes disponibles

```bash
npm run dev      # 🚀 Démarrer le serveur de développement
npm run build    # 🏗️  Builder pour la production
npm run lint     # 🔍 Vérifier le code avec ESLint
npm run preview  # 📺 Prévisualiser le build
```

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── button.jsx          # Bouton réutilisable avec PropTypes
│   ├── form.jsx            # Formulaire avec inputs taille/poids
│   ├── input.jsx           # Input avec validation et ARIA
│   ├── Header.jsx          # En-tête centré
│   └── Footer.jsx          # Pied de page
├── hooks/
│   └── useIMCCalculator.js # Hook personnalisé pour la logique IMC
├── layouts/
│   └── Layout.jsx          # Layout principal avec outlet
├── pages/
│   ├── Home.jsx            # Page d'accueil
│   └── main.jsx            # Point d'entrée React
├── script/
│   ├── calc/
│   │   └── imc.js         # Fonction de calcul IMC
│   └── constant/
│       └── slice.js        # Configuration des tranches IMC
├── style/
│   ├── App.css            # Styles de la carte IMC
│   └── index.css          # Styles globaux + design noir
├── Router.jsx             # Configuration React Router
└── main.jsx              # Point d'entrée application
```

---

## 🔧 Technologie utilisée

| Technologie      | Version | Utilisation          |
|------------------|---------|----------------------|
| **React**        | ^19.2.4 | Framework UI         |
| **Vite**         | ^8.0.4  | Build tool           |
| **React Router** | ^7.14.1 | Navigation           |
| **PropTypes**    | ^15.8.1 | Validation des types |
| **ESLint**       | ^9.39.4 | Linting              |
| **Babel**        | ^7.29.0 | Transpilation        |

---

## 💻 Utilisation

### Calculer l'IMC

1. **Entrer les valeurs**
   - Taille en centimètres (50-250 cm)
   - Poids en kilogrammes (20-500 kg)

2. **Cliquer sur "Calculer"**
   - Validation automatique
   - Message d'erreur si invalide

3. **Voir le résultat**
   - IMC calculé avec 1 décimale
   - Catégorie avec couleur
   - Description du statut

4. **Réinitialiser**
   - Bouton "Réinitialiser" pour recommencer
   - Efface tous les champs et résultats

---

## 🔄 Flux de l'application

```
┌──────────────────┐
│   Home.jsx       │  Affiche le formulaire et résultat
├──────────────────┤
│                  │
│  [Inputs]        │  → setPoidsValue() / setTailleValue()
│  [Calculer] btn  │  → calculateIMC()
│                  │
└──────────────────┘
         ↓
┌──────────────────────────────────────────────────┐
│  useIMCCalculator hook                           │
├──────────────────────────────────────────────────┤
│  • validateInputs()                              │
│  • calculateIMC() → imc.js                       │
│  • resetForm()                                   │
│                                                  │
│  Retourne: poids, taille, resultat, errors      │
└──────────────────────────────────────────────────┘
         ↓
┌──────────────────────────────────────────────────┐
│  imc.js (Logique métier)                         │
├──────────────────────────────────────────────────┤
│  • Conversion taille cm → m                      │
│  • Calcul IMC = poids / (taille²)               │
│  • Recherche catégorie dans slice.js            │
│  • Retourne: {valeur, classe, texte}            │
└──────────────────────────────────────────────────┘
         ↓
┌──────────────────┐
│  Affichage       │  Résultat coloré avec catégorie
└──────────────────┘
```

---

## 📊 Exemple d'utilisation

**Entrée :**
- Taille : 180 cm
- Poids : 75 kg

**Calcul :**
```
IMC = 75 / (1.80 × 1.80)
    = 75 / 3.24
    = 23.1
```

**Résultat :**
- IMC : 23.1
- Catégorie : Corpulence normale
- Couleur : Vert
- Classe CSS : `imc-result-normal`

---



## 🧪 Tests

### Tests manuels recommandés

```bash
# 1. Calcul normal
Taille: 180, Poids: 75 → IMC: 23.1 (Normal) ✓

# 2. Validation
Taille: vide, Poids: 75 → Erreur affichée ✓

# 3. Reset
Calculer → Réinitialiser → Champs vides ✓

# 4. Responsive
Redimensionner la fenêtre → Layout adapté ✓
```

### Linting

```bash
npm run lint
# Doit afficher : 0 erreur
```

---

## 🎓 Points d'apprentissage

### React patterns
- ✅ Functional components et hooks
- ✅ Custom hooks (useIMCCalculator)
- ✅ PropTypes pour validation
- ✅ State management avec useState
- ✅ Optimization avec useCallback

### CSS
- ✅ Flexbox pour centrage
- ✅ CSS variables
- ✅ Responsive design (media queries)
- ✅ Animations (keyframes)
- ✅ Organisation modulaire

### JavaScript
- ✅ Validation des entrées
- ✅ Gestion d'erreurs
- ✅ Séparation des responsabilités
- ✅ JSDoc pour documentation

---

## 🐛 Dépannage

**L'app ne démarre pas**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Erreur: Cannot find module 'prop-types'**
```bash
npm install prop-types
```

**Erreur: Cannot find module 'react-router-dom'**
```bash
npm install react-router-dom
```

**ESLint errors**
```bash
npm run lint -- --fix
```

---

## 📝 Conventions de code

### Nommage
- Composants : PascalCase (Home.jsx, Form.jsx)
- Fonctions : camelCase (calculateIMC, validateInputs)
- Constantes : UPPER_SNAKE_CASE (IMC_MAX, PADDING)
- Classes CSS : kebab-case (.imc-result, .btn-calculate)

### Structure
- Un composant par fichier
- Exports nommés pour les hooks
- PropTypes en bas du composant
- Commentaires pour sections importantes

---

## 🚀 Déploiement

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Vercel
```bash
npm run build
vercel
```

### Serveur statique
```bash
npm run build
# Servir le dossier 'dist/'
```

---

## 📄 Licence

Projet pédagogique - LP DWCA  
Université de Strasbourg

---

## 👥 Auteurs

- **Catherine Braun**
- **Laurent Boyer**

Cours : LP DWCA - UE 6.3.1 Frameworks et approfondissement web  
Date : 2026

---

**Dernière mise à jour** : 14/04/2026  
**Status** : ✅ Production Ready (v1.0)


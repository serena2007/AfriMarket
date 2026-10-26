# 🌍 AfriMarket

Site vitrine présentant des **produits africains** (épices, miel, cosmétiques naturels, café, cacao, textile) avec leur origine, leur catégorie et un prix indicatif.

> Projet pédagogique réalisé en équipe de 4 dans le cadre du TP de versionning avec Git et GitHub.
> Le but principal est de pratiquer le travail collaboratif : commits, push, pull, résolution de conflit, tags et releases.

## 📌 Présentation

AfriMarket est un site **statique** (HTML, CSS, JavaScript, sans serveur). Il évolue en trois versions :

| Version | Nom | Contenu principal |
|---------|-----|-------------------|
| **v1.0.0** | Vitrine statique | 3 pages (accueil, produits, contact), 6 produits, style de base |
| **v2.0.0** | Catalogue dynamique | Catalogue JSON de 12 produits, affichage avec JavaScript, recherche et filtre par catégorie |
| **v3.0.0** | Site adaptatif et publié | Version mobile (responsive), formulaire validé, mini-panier, mise en ligne avec GitHub Pages |

**Version actuelle : v1.0.0**

## 👥 L'équipe

| Membre | GitHub | Rôle | Responsabilités |
|--------|--------|------|-----------------|
| Membre-A | [@pseudo-serena](https://github.com/serena2007) | Cheffe de projet | Dépôt, structure du projet, README, versions et étiquettes |
| Membre-B | [@pseudo-yann](https://github.com/yannobato-arch) | Contenu et données | descriptions, fichier JSON |
| Membre-C | [@pseudo-yllane](https://github.com/Yllane17) | Design | Feuille de style, page contact, filtres, adaptation mobile |
| Membre-D | [@pseudo-marc](https://github.com/marctiam653) | contact | ajout du panier et des produits |

## 🗂️ Structure du projet

```
afrimarket/
├── index.html          # Page d'accueil
├── produits.html       # Page produits
├── contact.html        # Page contact
├── css/
│   └── style.css       # Feuille de style commune
├── js/                 # Scripts (à partir de la v2.0.0)
├── data/               # Données JSON (à partir de la v2.0.0)
├── images/             # Images des produits
├── README.md
├── CHANGELOG.md
└── .gitignore
```

## 🚀 Lancer le site en local

### 1. Récupérer le projet

```bash
git clone https://github.com/serena2007/afrimarket.git
cd afrimarket
```

### 2. Ouvrir le site

**v1.0.0** : ouvrez simplement `index.html` dans votre navigateur (double-clic).

**À partir de la v2.0.0**, le site charge un fichier JSON avec `fetch`, ce qui ne fonctionne pas en ouvrant le fichier directement (`file://`). Utilisez l'une de ces deux méthodes :

- **Live Server** (extension de Visual Studio Code) : clic droit sur `index.html`, puis *Open with Live Server* ;
- **Python** :
  ```bash
  python -m http.server 8000
  ```
  puis ouvrez <http://localhost:8000>.

## 🤝 Règles de travail de l'équipe

Tout le monde travaille directement sur sa branche. Les règles :

1. `git pull` avant de commencer à travailler et avant chaque `git push`.
2. Un commit = une modification logique.
3. Messages de commit explicites, en français, au présent, moins de 70 caractères.
4. Jamais de `git push --force` sur `main`.
5. Annoncer à l'équipe ce que l'on modifie pour éviter les conflits.

### Convention des messages de commit

| Préfixe | Usage | Exemple |
|---------|-------|---------|
| `feat:` | Nouvelle fonctionnalité ou nouvelle page | `feat: ajout de la page contact` |
| `fix:` | Correction d'un défaut | `fix: chemins des images` |
| `style:` | Mise en forme (CSS) | `style: grille des cartes produits` |
| `docs:` | Documentation | `docs: README complet` |
| `chore:` | Tâche technique ou de configuration | `chore: activation de GitHub Pages` |

### Cycle de travail

```bash
git pull                          # récupérer le travail des autres
# ... modifier les fichiers ...
git status                        # voir ce qui a changé
git add fichier                   # choisir les fichiers
git commit -m "feat: message"     # enregistrer localement
git pull                          # se resynchroniser
git push                          # envoyer sur GitHub
```

## 🏷️ Versions et releases

Les versions livrables sont marquées par des étiquettes (tags) Git et publiées dans l'onglet [Releases](../../releases) :

- `v1.0.0` : vitrine statique
- `v2.0.0` : catalogue dynamique
- `v3.0.0` : site adaptatif et publié

Le détail des changements est dans [CHANGELOG.md](CHANGELOG.md).

## 🖼️ Crédits

Les images utilisées sont libres de droits (par exemple issues de [Wikimedia Commons](https://commons.wikimedia.org/)). Les prix affichés sont indicatifs.

## 📄 Licence

Projet pédagogique, sans visée commerciale.

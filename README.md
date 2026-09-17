# La 4L Sans Freins — Site web

Site officiel de l'association étudiante **La 4L Sans Freins**, engagée dans la 30ème édition du 4L Trophy en février 2027.

Quatre étudiants du BUT GEA de l'IUT d'Orléans, deux Renault 4, 6 000 km entre Biarritz et Marrakech, pour acheminer des fournitures scolaires aux enfants du sud marocain.

---

## Publier le site sur GitHub Pages

Le site est un seul fichier HTML autonome (`index.html`) qui contient tout : styles, scripts, images (encodées en base64). Aucune dépendance externe à installer.

### Étapes

1. **Créer un nouveau dépôt** sur GitHub :
   - Va sur [github.com/new](https://github.com/new)
   - Nom : `4l-sans-freins` (ou ce que tu veux)
   - Coche **Public**
   - Coche **Add a README file** (on l'écrasera après)
   - Clique **Create repository**

2. **Uploader les fichiers** :
   - Sur la page du dépôt, clique **Add file** → **Upload files**
   - Glisse `index.html` et `README.md` dans la zone
   - Descends en bas de page, clique **Commit changes**

3. **Activer GitHub Pages** :
   - Va dans **Settings** (onglet en haut à droite)
   - Menu de gauche → **Pages**
   - Sous **Source**, sélectionne **Deploy from a branch**
   - Sous **Branch**, sélectionne **main** et **/ (root)**
   - Clique **Save**

4. **Attendre 1 à 2 minutes**, puis ton site sera accessible à l'adresse :
   ```
   https://TON-PSEUDO-GITHUB.github.io/4l-sans-freins/
   ```

---

## Utiliser un nom de domaine personnalisé (optionnel)

Si tu achètes un nom de domaine (par exemple `4lsansfreins.fr` chez OVH ou Gandi, ~10 €/an) :

1. Dans **Settings → Pages → Custom domain**, ajoute ton domaine
2. Chez ton registrar (OVH, Gandi…), ajoute un enregistrement DNS :
   - Type `CNAME`
   - Nom `www`
   - Valeur `TON-PSEUDO-GITHUB.github.io`
3. Attendre quelques heures que le DNS se propage.

---

## Modifier le site après publication

Le fichier `index.html` s'ouvre dans n'importe quel éditeur de texte (Notepad, VS Code, Sublime Text…). Voici les modifications les plus courantes :

### Ajuster le compte à rebours

Cherche cette ligne dans le fichier :

```javascript
const target = new Date('2027-02-17T15:00:00+01:00').getTime();
```

Change `15:00:00` par l'heure officielle de départ si elle diffère. Change `2027-02-17` si la date évolue.

### Changer un membre de l'équipe

Cherche `class="member-name"` dans le fichier. Chaque membre a un bloc avec son nom, son rôle et sa photo (encodée en base64).

### Mettre à jour le budget

Cherche `budget-item` dans le fichier. Modifie les montants dans les balises `<div class="budget-item-amount">`. Pense à mettre à jour le total en bas.

### Ajouter un vrai lien Facebook (si tu crées un compte)

Actuellement le site ne référence que Instagram et TikTok. Pour ajouter Facebook :
- Dans le footer, ajoute une ligne `<a href="TON-URL-FACEBOOK">Facebook</a>` à côté d'Instagram et TikTok
- Dans le Chapitre 10 « Suivez-nous », duplique une carte existante et modifie-la

---

## Republier après modification

Chaque modification du fichier `index.html` nécessite un nouveau commit :

1. Sur GitHub, ouvre `index.html` dans ton dépôt
2. Clique sur l'icône crayon (**Edit this file**)
3. Colle le nouveau contenu (ou modifie directement)
4. Descends en bas, clique **Commit changes**

Le site en ligne se met à jour automatiquement en 1 à 2 minutes.

Alternative plus pratique : installer **GitHub Desktop** (gratuit, [desktop.github.com](https://desktop.github.com)) pour synchroniser un dossier local avec ton dépôt.

---

## Contact

- **Email** : 4lsansfreins@gmail.com
- **Instagram** : [@4lsansfreins](https://www.instagram.com/4lsansfreins/)
- **TikTok** : [@4l.sans.freins](https://www.tiktok.com/@4l.sans.freins)
- **Cagnotte** : [leetchi.com/fr/c/4lsansfreins-4189768](https://www.leetchi.com/fr/c/4lsansfreins-4189768)

---

## Contenu technique

- **Un seul fichier** : `index.html` (2 Mo, tout inclus)
- **Aucune dépendance** : aucun `npm install`, aucune bibliothèque à charger
- **Compatible** : tous les navigateurs modernes (Chrome, Firefox, Safari, Edge)
- **Responsive** : optimisé mobile, tablette et desktop
- **Polices** : Fraunces, Bricolage Grotesque, JetBrains Mono (chargées depuis Google Fonts)
- **Fonctionne hors-ligne** une fois chargé (sauf les polices Google)

---

_Site créé pour La 4L Sans Freins, association étudiante — 30ème édition du 4L Trophy, février 2027._

# Calculateur de charge glycémique

## Installation

Il vous suffit de cloner mon repository :wink:

Prérequis : [Installation de l'environnement Angular](https://angular.io/guide/setup-local) ==> jusqu'à l'étape 1 (incluse).

<span style='color:red'> **/!\ Ne pas oubliez**</span> de lancer juste après le clonage du repository, la commande suivante dans le répertoire `angular-glycemie` :

```bash
npm install
```

## Avancement

### Etape 1 : Liste des aliments

#### Affichage de la liste des aliments

- [x] Créez un composant responsable de l'affichage de la liste des aliments et affichez le dans le composant racine
- [x] Créer une interface `Aliment` avec les propriétés suivantes : `name`, `ig` et `carbs`
- [x] Créez un service contenant une liste avec trois aliment pour tester
- [x] Affichez les aliments dans le composant grâce à un tableau
- [ ] Importez la [vraie liste des aliments](./aliments.json) dans votre service
  - [x] Récupération de la liste des aliments depuis un fichier ts mis en forme
  - [ ] Récupération de la liste des aliments depuis un fichier json

#### Modification de la liste des aliments

- [x] Créez un formulaire qui permet d'ajouter un aliment à la liste
- [x] Ajouter une colonne au tableau permettant de supprimer un aliment
  - [x] suppression de l'aliment de la liste
  - [x] décrément de la charge Total suite à la suppression de l'aliment

### Etape 2 : Le calculateur

#### Gérer le routing

- [x] Créez un menu permettant d'afficher le calculateur ou la liste des aliments (grâce au router)
- [x] Dans le composant racine, remplacez l'appel à la liste des aliments par le `router-outlet`
- [x] Créez un composant responsable de l'affichage du calculateur

#### Créer le calculateur

- [x] Créez un formulaire permettant de choisir un aliment et sa portion pour l'ajour au calculateur
- [x] Affichez le calcul de la charge glycémique avec les portions
- [x] Affichez la liste des portions ajoutées
- [x] Ajoutez un bouton permettant de supprimer une portion de la liste

### Etapes bonus

#### Bonus 1 : Une application plus sympa à utiliser

- [x] Ajoutez des validateurs sur le formulaire aliment (un IG est compris entre 0 et 200, une proportion de glucide entre 0 et 100)
- [x] Ajoutez des validateurs sur le formulaire de calcul
- [x] Formattez proprement les chiffres à virgule avec des `pipes`
- [ ] Triez la liste de sélection d'aliment par ordre alphabétique
- [ ] Proposez des tris du tableau sur chaque colonne

#### Bonus 2 : Une application qui garde la mémoire

- [ ] Proposez d'enregistrer le résultat de votre calcul sous forme de repas
- [ ] Sauvegardez toutes les données dans le local storage
- [ ] Créez un composant pour affichez la liste des repas enregistrés

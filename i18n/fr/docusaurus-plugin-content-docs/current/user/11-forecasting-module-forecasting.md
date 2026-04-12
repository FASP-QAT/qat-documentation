---
id: forecasting-module-forecasting
title: "Module de prévision : Prévision"
sidebar_label: "Module de prévision : Prévision"
sidebar_position: 11
---
# Module de prévision : Prévision

## Prévisions de consommation
Les prévisions basées sur la consommation utilisent des données historiques pour projeter la demande future. Cette méthode est idéale pour les programmes stables avec au moins 24 mois de données de consommation mensuelles fiables.

**Le flux de travail :**
1. **Importer/Saisie :** Importez les chiffres réels historiques à partir du module Planification des approvisionnements ou saisissez-les manuellement.
2. **Ajuster :** Tenez compte de la sous-déclaration, des ruptures de stock et des points de données manquants.
3. **Extrapoler :** Appliquer des modèles statistiques pour projeter la « consommation ajustée » dans le futur.

### Saisie et importation de données
Vous pouvez renseigner les chiffres réels historiques via deux méthodes :

#### Méthode 1 : Importer à partir du plan d'approvisionnement
**Navigation :** **Prévisions basées sur la consommation** > **Importer à partir du plan d'approvisionnement QAT**.
- **Cartographie :** Liez les unités du plan d'approvisionnement aux unités de prévision. Vous pouvez utiliser la bascule « Ne pas importer tous les éléments non mappés » pour les grands ensembles de données.
- **Répartition régionale :** Sélectionnez les régions à importer et le pourcentage de consommation à attribuer à la prévision.
- **Gestion des conflits :** Les données déjà présentes sont surlignées en **jaune**. L'importation remplacera les enregistrements existants.

#### Méthode 2 : Saisie manuelle des données
**Navigation :** **Prévisions basées sur la consommation** > **Saisie et ajustements des données**.
- **Interface :** Sélectionnez le programme et la période d'examen (par défaut : 36 mois suivants).
- **Expansion :** Développez les lignes pour accéder aux données régionales.
- **Conversion d'unités :** Utilisez le lien « Modifier » pour basculer la saisie entre les unités de planification (PU) ou les unités de prévision (FU).

![Data Entry Interface](/img/media/image242.png)
*Figure 1 : Tableau de saisie des données de consommation historique*

### Ajustements statistiques
Les données brutes doivent être nettoyées pour créer une série de « Consommation Ajustée » fiable. QAT gère trois types d'ajustements :

#### 1. Sous-déclaration
Si le taux de déclaration est inférieur à 100 %, QAT gonfle la consommation proportionnellement, en supposant que les installations non déclarantes consomment au même rythme que celles déclarantes.

#### 2. Ruptures de stock
QAT ajuste la consommation en fonction des jours passés en rupture de stock pour estimer la véritable demande.
- **Taux de rupture de stock** = `Stocked Out (Days)` / `Days in Month`
- **Consommation ajustée** = `Actual Consumption` / `Reporting Rate` / (1 - `Stock Out Rate`)

#### 3. Valeurs manquantes (interpolation)
Le bouton **Interpoler** comble les lacunes de vos données à l'aide d'une formule linéaire entre les valeurs connues les plus proches.
> [!NOTE]
> QAT n'interpolera pas les mois où la consommation réelle est nulle (car cela peut être un point de données valide). Il ne remplit que les cellules vides « manquantes ».

### Concepts d'extrapolation
QAT propose plusieurs modèles statistiques pour projeter la demande future. Choisissez un modèle en fonction de la disponibilité de vos données et de vos habitudes de consommation :

- **Modèles simples (données de plus de 3 mois) :**
  - **Moyenne mobile :** Idéal pour les données stables sans tendances fortes ni saisonnalité.
  - **Semi-moyennes/Régression linéaire :** Idéal pour identifier une croissance ou un déclin régulier (tendances).
- **Modèles avancés :**
  - **ARIMA (données de plus de 13 mois) :** Modèle flexible qui prend en compte les tendances et les cycles saisonniers.
  - **Triple lissage exponentiel (données de plus de 24 mois) :** Idéal pour les données complexes présentant à la fois des tendances fortes et une saisonnalité annuelle.

### Interprétation des erreurs de prévision
QAT calcule plusieurs mesures d'erreur pour vous aider à sélectionner la meilleure solution.

| Métrique | Définition | Idéal pour... |
| :--- | :--- | :--- |
| **MAP** | Erreur moyenne absolue en pourcentage. | Comparaison de la précision sur différentes échelles de données. |
| **WAPE** | Pourcentage d’erreur absolu pondéré. | Ensembles de données avec des valeurs faibles ou intermittentes. |
| **RMSE** | Erreur quadratique moyenne. | Mettre en évidence et pénaliser les grandes valeurs aberrantes. |
| **R²** | Coefficient de corrélation. | Mesurer dans quelle mesure le modèle correspond aux modèles historiques. |

---

## Prévisions d'arbres
La prévision basée sur les arbres est une méthode flexible utilisée lorsque la consommation historique n'est pas disponible ou peu fiable. Il prend en charge les méthodologies **morbidité, services et démographie** en vous permettant de créer un « arbre » logique de facteurs qui aboutissent à une demande de produits.

### Créer et gérer des arbres
**Navigation :** **Arbre de prévision** > **Gérer l'arborescence**.

Vous pouvez gérer vos arbres à travers les actions suivantes :
- **Dessinez le vôtre :** Commencez à partir d'une toile vierge.
- **Modèle :** Utilisez une structure arborescente prédéfinie (par exemple, pour des programmes de santé spécifiques).
- **Dupliquer :** Copier une arborescence existante dans un autre programme (nécessite le téléchargement des deux programmes).
- **Table arborescente :** Accédez à une vue de type feuille de calcul pour modifier en masse les valeurs des nœuds sans modifier la structure.

> [!NOTE]
> Les arbres sont d'abord enregistrés localement. Vous devez **Télécharger la version** pour enregistrer votre travail sur le serveur.

### Types de nœuds et hiérarchie
Un arbre est construit de haut en bas à l’aide de types de nœuds spécifiques. Chaque arbre doit se terminer par des **Unités de planification** pour générer une prévision.

| Type de nœud | Fonction | Enfants autorisés | Options avancées |
| :--- | :--- | :--- | :---: |
| **∑ Agrégation** | Résume tous les enfants. | Agrégation, Nombre. | - |
| **# Numéro** | Une valeur fixe (par exemple, la population totale). | Pourcentage, FU. | ⇅, Transfert |
| **% Pourcentage** | Un pourcentage de la valeur parent. | Pourcentage, FU. | ⇅, Transfert |
| **Entonnoir** | Additionne les valeurs des nœuds sources liés. | Pourcentage, FU. | - |
| **FU (Unité de prévision)** | Paramètres d'utilisation (Continu/Discret). | Unité de planification. | ⇅, décalage |
| **PU (Unité de Planification)** | La sortie du produit final. | Aucun. | Remplacer |

#### Actions des nœuds
- **Supprimer :** Supprime le nœud et tous ses enfants.
- **Copier/Déplacer :** Déplace une branche vers une autre arborescence ou parent.
- **Ajouter un modèle de branche :** Insère une branche prédéfinie (par exemple, un régime médicamenteux standard).
- **Réduire/Agrandir :** Simplifie la vue visuelle de l'arborescence.

### Attributs du nœud
Chaque nœud possède des champs modifiables qui définissent sa valeur et son comportement :

- **# Number Node :** Définissez l'**Unité de nœud** (patients, personnes, etc.) et sa **Valeur** pour un mois de départ spécifique.
- **% Nœud de pourcentage :** Définissez le pourcentage de la valeur parent. QAT l'utilise pour calculer la valeur absolue du nœud.
- **Nœud d'unité de prévision (FU) :**
  - **Type d'utilisation :** 
    - **Continu :** Utilisation quotidienne/hebdomadaire (par exemple, une pilule chaque jour).
    - **Discret :** Utilisation occasionnelle (par exemple, 5 flacons par cure).
  - **Lag :** Retarde le début de l'utilisation du produit par rapport au pilote parent (par exemple, l'utilisation du produit commence 2 mois après le diagnostic).
- **Nœud d'unité de planification (PU) :** La valeur par défaut est la conversion du système mais peut être remplacée manuellement si nécessaire.

### Modifications dynamiques (modélisation et transferts)
Les arbres ne sont pas statiques ; les valeurs peuvent changer au fil du temps pour refléter la croissance ou les transitions du programme.

#### 1. Types de modélisation
| Tapez | Comportement | Idéal pour... |
| :--- | :--- | :--- |
| **Linéaire (#)** | Ajoute/soustrait un nombre fixe chaque mois. | Croissance locale soutenue. |
| **Linéaire (%)** | Ajoute/soustrait un % fixe de la valeur *de départ*. | Des taux de croissance constants. |
| **Exponentiel (%)** | Multiplie le mois *précédent* par un pourcentage. | Croissance composée. |
| **Linéaire (points de %)** | Ajuste la valeur d'un nœud de pourcentage (par exemple, 30 % -> 31 %). | Les parts de marché évoluent. |

#### 2. Transferts
Les transferts relient deux nœuds de même niveau (pour les nœuds Nombre) ou de même parent (pour les nœuds Pourcentage). À mesure que le nœud « Source » diminue, le nœud « Destination » augmente proportionnellement. Ceci est essentiel pour les transitions de régime.

#### 3. Saisonnalité et modifications manuelles
Vous pouvez affiner davantage les données mensuelles en cliquant sur **Afficher les données mensuelles** :
- **Indice de saisonnalité :** Saisissez un pourcentage (par exemple, `20%` pour une augmentation de 20 % par rapport à la référence) pour refléter la demande cyclique.
- **Modification manuelle :** Remplacez la valeur d'un mois spécifique pour des événements ponctuels (par exemple, une campagne antidrogue massive).

### Calculatrice de modélisation
Si vous ne connaissez pas le tarif mensuel, utilisez le **Calculateur de modélisation** (⇅) pour le dériver :
- **Valeur finale :** Saisissez votre valeur de départ, votre date cible et votre valeur cible finale. QAT calcule le tarif mensuel.
- **Cible annuelle :** Saisissez un objectif cumulatif annuel (réel + année cible). QAT interpole une transition mensuelle en douceur pour éviter les schémas en « escalier ».

### Techniques avancées
#### Retard d'utilisation
Disponible dans les **nœuds FU**. Utilisez le champ **Lag** pour retarder l'utilisation du produit par rapport au pilote parent. 
- *Exemple :* Si les patients sont diagnostiqués au cours du mois 1 mais commencent le traitement au mois 3, saisissez un décalage de `2`.

#### Méthodes de calcul (utilisation discrète)
- **Tout au cours du premier mois :** Charge en avance la totalité du traitement dans le premier mois du patient. (Par défaut)
- **Mois par mois :** Répartit l'utilisation sur toute la durée du cours (par exemple, 1 pilule/mois pendant 6 mois).

#### Nœuds d'entonnoir
Les nœuds d'entonnoir vous permettent de regrouper les nœuds sources de différentes branches (ou même de différentes arborescences) en un seul flux pour des calculs plus approfondis.
- *Cas d'utilisation :* Différents groupes démographiques (adultes, enfants) qui utilisent tous les mêmes instruments de test de charge virale.

### Validations et modèles
#### Validations
- **Validation de la modélisation :** Graphiques montrant l'évolution de vos facteurs (population, patients) au fil du temps.
- **Validation du produit :** Vue agrégée de toutes les unités de planification dans l'arborescence pour les contrôles de cohérence.

#### Modèles
- **Modèles d'arbres :** Structures globales prédéfinies pour les programmes standards (par exemple, arbres de morbidité liés au paludisme).
- **Modèles de branches :** Branches réutilisables spécifiques au régime (par exemple, « Régime standard de première intention pour adultes »).
- **Modèles d'utilisation :** Préréglages pour les nœuds FU (paramètres discrets/continus) pour garantir la cohérence au sein de l'équipe.
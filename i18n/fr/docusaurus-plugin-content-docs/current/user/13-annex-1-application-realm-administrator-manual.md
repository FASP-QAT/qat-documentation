---
id: annex-1-application-realm-administrator-manual
title: "Annexe 1 : Manuel de l'administrateur d'application et de domaine"
sidebar_label: "Annexe 1 : Manuel de l'administrateur d'application et de domaine"
sidebar_position: 13
---
# Annexe 1 : Manuel de l'administrateur d'application et de domaine

## Présentation
Cette annexe fournit des conseils sur les fonctionnalités administratives réservées aux **administrateurs d'application** et aux **administrateurs de domaine**.
- **Application Masters** : paramètres globaux affectant tous les domaines (administrateur de l'application uniquement).
- **Realm Level Masters** : données spécifiques à un royaume, affectant ses programmes et plans d'approvisionnement (administrateurs d'application et de royaume).
- **Program Level Masters** : paramètres gérés par les administrateurs de programme pour des programmes spécifiques.

## Tableaux de bord administratifs
Les administrateurs voient des vignettes uniques sur leurs tableaux de bord pour gérer les données globales et au niveau du domaine.

| Tuile | Niveau administrateur | Fonction |
| :--- | :--- | :--- |
| **Utilisateur du programme** | Application et domaine | Gérez les rôles et les autorisations des utilisateurs. |
| ** Royaumes totaux ** | Application | Créez et configurez des domaines d'application. |
| **Langue** | Application | Gérez les langues d'interface utilisateur prises en charge. |
| **Pays** | Royaume | Cartographiez les pays du monde vers des domaines spécifiques. |
| **Domaine technique** | Royaume | Définir les domaines prioritaires du programme (par exemple, le VIH, le paludisme). |
| **Organisation** | Royaume | Gérer les entités partenaires et gouvernementales. |
| **Programme total** | Royaume | Aperçu et mise à jour groupée des informations sur le programme. |
| **Programme d'installation** | Royaume | Assistant principal pour l'intégration de nouveaux programmes. |

---

## Gestion des données de base
QAT utilise une hiérarchie à trois niveaux pour la gestion des données.

### 1. Application Masters (mondial)
Ces paramètres s’appliquent à l’ensemble de l’application dans tous les domaines.

#### Gestion des traductions
- **Traduction de base de données** : utilisé pour les « Étiquettes dynamiques » (éléments de la liste déroulante). L'anglais est requis; d'autres sont recommandés.
- **Traduction d'étiquette** : utilisé pour les "étiquettes statiques" (en-têtes de tableau, éléments de menu). Les changements se reflètent immédiatement.

#### Entités globales (CRUD)
Les entités suivantes suivent un workflow standard **Liste > Ajouter (+) > Mettre à jour** :
- **Pays** : gérez la liste mondiale des pays. Remarque : utilisez des codes ISO à 3 lettres (par exemple, AGO) et à 2 lettres (par exemple, AO).
- **Devise** : gérez les taux de conversion. Utilisez « Sync Online » pour mettre à jour automatiquement les taux par rapport au dollar américain.
- **Langue** : Activer/Désactiver les langues de l'interface utilisateur (anglais, français, espagnol, portugais).
- **Dimension et unité** : définissez les valeurs mesurables (poids, volume) et les unités (mL, gm, boîte).
- **Période d'utilisation** : définissez les intervalles de temps (mois, semaine) utilisés dans les calculs de prévision.

#### Gestion des utilisateurs et rôles
- **Utilisateurs** : ajoutez de nouveaux utilisateurs par e-mail, en leur attribuant un rôle, un domaine et une langue principaux.
- **Rôles** : les administrateurs peuvent modifier les règles métier associées aux rôles. 
  > [!NOTE]
  > Pour une répartition complète des autorisations, voir [Annexe 3 : Matrice des rôles d'utilisateur] (15-annex-3-user-role-matrix.md).

---

### 2. Maîtres de domaine (logique métier)
Les paramètres de domaine régissent les produits spécifiques, les bailleurs de fonds et la logique d'approvisionnement pour un groupe de programmes.

#### Catalogue de produits
La hiérarchie des produits est au cœur des opérations QAT :
1. **Unité de prévision (FU)** : l'unité de base (par exemple, 1 tablette).
2. **Unité de Planification (UP)** : Le pack de distribution (par exemple, Flacon de 30 comprimés). 
   - *Mapping :* De nombreux PU peuvent être mappés sur un seul FU.
   - *Volumétrie :* Les administrateurs doivent mapper les données de volume/poids aux PU pour les calculs d'expédition.
3. **Unité d'approvisionnement** : description au niveau de l'article, y compris les données spécifiques au fabricant (GTIN, SKU) et les délais de livraison.
4. **Catégorie d'unité de planification** : grands regroupements (par exemple, « Produits pharmaceutiques ARV »).
5. **Catégorie Traceur** : clusters spécifiques (par exemple, « Adulte de première ligne »).

#### Unités d'équivalence (UE)
Les UE permettent de regrouper des produits disparates à des fins de reporting (par exemple, en convertissant les flacons et les tubes en « mois de traitement standard »).
- **Logique :** Les mappages au niveau du domaine s'appliquent à tous les programmes, sauf s'ils sont remplacés par un mappage spécifique au programme.

#### Logistique & Partenaires
- **Agents d'approvisionnement** : gérez les délais de livraison, les codes couleur et l'intégration du catalogue.
- **Sources de financement** : définissez les entités payant les expéditions.
- **Organisations** : Gérer les organismes spécifiques (ministère de la Santé, ONG) qui exécutent les programmes.
- **Méthodes de prévision** : Définir les méthodologies disponibles (ARIMA, TES, etc.) pour le domaine.

---

## Configuration d'un nouveau programme
Les administrateurs lancent des programmes via l'assistant **Programme d'installation**.

### Flux de travail :
1. **Choisissez le domaine et le pays** : attribuez le programme à son contexte clinique/géographique.
2. **Définir le domaine technique** : sélectionnez un ou plusieurs domaines (par exemple, VIH + tuberculose).
3. **Sélectionnez l'organisation et les régions** : Déterminez l'organisme de gestion et la portée géographique (nationale ou infranationale).
4. **Configurer les données du programme** :
   - **Pour la planification des approvisionnements** : définissez les délais, les niveaux de stock et les unités de planification.
   - **Pour les prévisions** : définissez les dates de début/fin des prévisions et les périodes de révision.
5. **Soumettre** : le programme est désormais disponible pour que les administrateurs du programme puissent le gérer.

---

## Outils utilitaires
### Réinitialisation du QPL
Les administrateurs peuvent réinitialiser en masse la **liste des problèmes QAT (QPL)** pour rouvrir les problèmes « résolus » pour un nouveau cycle de révision.
- **Utilisation :** Généralement effectué au début d'une nouvelle période de soumission pour les versions approuvées.
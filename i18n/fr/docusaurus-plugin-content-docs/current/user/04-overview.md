---
id: overview
title: "Aperçu"
sidebar_label: "Aperçu"
sidebar_position: 4
---
# Aperçu

## Présentation

Le programme Global Health Supply Chain – Procurement and Supply Management (GHSC-PSM) est un projet officiel de l’Agence des États-Unis pour le développement international (USAID). Mis en œuvre par Chemonics International et les membres de son consortium, GHSC-PSM garantit un approvisionnement ininterrompu en produits de santé pour soutenir les initiatives de santé publique financées par le gouvernement américain dans le monde entier.

L’initiative de modernisation de l’outil de prévision et de planification des approvisionnements (FASP) a été soutenue par le Plan d’urgence du président américain pour la lutte contre le sida (PEPFAR), l’Initiative présidentielle américaine contre le paludisme (PMI), le programme de planification familiale et de santé reproductive (FP/RH) de l’USAID et le programme de santé maternelle et infantile (MCH) de l’USAID.

### Contexte et objectifs
Des projets antérieurs financés par l'USAID, tels que Supply Chain Management Systems (SCMS) et DELIVER, ont mis en œuvre avec succès une suite d'outils FASP. Cependant, ces outils étaient souvent cloisonnés, avaient des interfaces utilisateur incohérentes et nécessitaient un échange manuel de données.

L'objectif principal de cette initiative était de créer une plateforme FASP de nouvelle génération qui soit :
- **Évolutif et modulaire** : construit sur une architecture moderne et indépendante du système d'exploitation.
- **Basé sur le Web avec fonctionnalités hors ligne** : garantir l'accessibilité même dans les environnements à faible connectivité.
- **Interopérable** : conçu pour un partage transparent des données entre les parties prenantes et les systèmes de santé publique.
- **Centrée sur l'utilisateur** : axé sur la convivialité et l'automatisation pour assurer une visibilité des données de bout en bout et une prise de décision fondée sur des preuves.

## Prévisions et planification des approvisionnements

- **Prévision** : Une estimation ou une prévision des quantités de produits à consommer par les clients ou les consommateurs sur une période future.
- **Planification de l'approvisionnement** : composante de la gestion de la chaîne d'approvisionnement axée sur le respect des exigences du plan de demande. L’objectif est d’équilibrer l’offre et la demande pour atteindre les objectifs financiers et de prestation de services du programme de santé.

## Qu'est-ce que QAT et que peut-il faire pour vous ?

L'outil d'analyse de quantification (QAT) est une solution modernisée pour les prévisions et la planification des approvisionnements dirigées par les pays. QAT exploite des technologies avancées pour améliorer les fonctionnalités des outils existants tels que PipeLine et Quantimed en fournissant :
- **Prévisions flexibles** : arborescences personnalisables et méthodologies d'extrapolation avancées (ARIMA, Holt-Winters, etc.).
- **Planification de scénarios** : outils robustes pour modéliser et comparer différents scénarios de chaîne d'approvisionnement.
- **Fonctionnalité hors ligne** : saisie et gestion de données fiables sans connexion réseau constante.
- **Standardisation** : gestion des données de base pour assurer la cohérence entre tous les programmes.

### Fonctions principales
- **Prévisions** : prévisions multi-méthodes, comparaison visuelle des résultats et outils de consensus des parties prenantes.
- **Surveillance** : suivi en temps réel des soldes de stock, des paramètres de stock minimum/maximum et identification automatisée des problèmes (par exemple, déficits en attente).
- **Planification des achats** : calculs des déficits, suivi des actions basé sur les délais et modélisation des coûts d'expédition/de fret estimés.

## Qui devrait utiliser QAT ?

QAT permet aux responsables de programmes locaux de prendre en charge leurs propres prévisions et planification des achats. Bien que les gestionnaires de programmes soient les principaux utilisateurs, le système fournit des informations vitales aux décideurs politiques, aux directeurs nationaux, aux acheteurs et aux donateurs.

| Terme | Définition |
| :--- | :--- |
| **Unité de reporting alternative (ARU)** | Le produit et l'unité dans lesquels les données d'un pays (consommation ou stock) sont déclarées. Cela peut différer de l’unité de planification. QAT permet aux utilisateurs de définir un ARU et un facteur de conversion (multiplicateur) vers l'unité de planification. Par exemple, si l'unité de planification est une bouteille de 30 comprimés et que l'inventaire est déclaré en boîtes de 20 bouteilles, le multiplicateur est de 20. Voir la section 4.A3 (Autre unité de déclaration) pour plus de détails. |
| **Consommation mensuelle moyenne (AMC)** | Une valeur dynamique calculée de mois en mois en fonction de l'utilisation moyenne du produit sur une période spécifique. Par défaut, QAT calcule l'AMC en utilisant les trois derniers mois, le mois en cours et les deux mois suivants. Les données mensuelles manquantes sont traitées comme « nulles » plutôt que nulles. Les administrateurs peuvent ajuster la fenêtre de calcul jusqu'à 12 mois dans le passé et le futur.<br/>![AMC Formula](/img/media/image6.png) |
| **Source de données** | L'origine des données saisies dans QAT. Les sources de données doivent être appliquées à tous les enregistrements transactionnels (consommation, inventaire, ajustements et expéditions). La sélection dépend du type de source de données spécifique de l'enregistrement. |
| **Progiciel de gestion intégré (ERP)** | QAT est conçu pour s'interfacer avec divers systèmes de gestion des achats (ERP). Actuellement, une interface avec ARTMIS permet l'importation directe des données sur les produits et les expéditions de l'USAID, ce qui réduit les efforts de planification manuelle en mettant à jour automatiquement les dates et les statuts de livraison. |
| **Source de financement** | Toute institution financière ou entité fournissant des installations ou un financement pour le programme. Chaque expédition doit se voir attribuer une source de financement. |
| **Délais de livraison** | Mappés sur les statuts de planification des approvisionnements, les délais sont saisis par produit, agent d'approvisionnement ou programme. Les calculs incluent :<br/>- **Prévu à soumis** : Délai entre l'identification d'un besoin et l'entrée dans le système d'approvisionnement.<br/>- **Soumis à approuvé** : Délai entre l'entrée et l'approbation de l'approvisionnement.<br/>- **Approuvé à l'expédition** : Délai entre l'approbation et l'expédition du fournisseur.<br/>- **Expédié à l'arrivée (mer/air)** : Temps de transit jusqu'au port de Entry.<br/>- **Arrivé à Reçu** : Délai de dédouanement et de livraison à la destination finale. |
| **Niveaux de stock minimum et maximum** | **Le niveau de stock minimum** (en mois) est déterminé par unité de planification au niveau du programme. <br/>![Min Stock Formula](/img/media/image7.png)<br/>**Le niveau de stock maximum** est calculé dynamiquement comme le niveau de stock minimum plus l'intervalle de réapprovisionnement.<br/>![Max Stock Formula](/img/media/image8.png) |
| **Quantité minimum de commande (MOQ)** | Le nombre minimum d'unités dans lesquelles un produit doit être commandé. |
| **Mois de stock (MOS)** | Une mesure des niveaux de stock par rapport à la consommation, conceptuellement similaire à PipeLine mais utilisant la méthodologie QAT AMC mise à jour.<br/>![MOS Formula](/img/media/image9.png) |
| **Plan par MOS** | Idéal pour les produits à forte consommation avec des expirations minimes où les expéditions remplacent principalement le stock consommé. La planification se concentre sur le maintien des paramètres de stock mensuels. Voir la section 4.A2 pour la configuration. |
| **Planifier par quantité** | Idéal pour les produits à faible consommation avec des taux de péremption élevés (par exemple, les médicaments d'urgence). La planification se concentre sur le maintien d'une quantité fixe de stock (par exemple, 2 unités par installation) plutôt que sur des mois de stock. Voir la section 4.A2 pour la configuration. |
| **Intervalle de réapprovisionnement** | Le nombre de mois défini par l'utilisateur entre les expéditions (la valeur par défaut est 1 mois). Cette valeur est utilisée pour calculer les niveaux de stock maximum pour la planification basée sur le MOS et la quantité. |
| **Statuts d'expédition** | Suivi d'un envoi tout au long de son cycle de vie via neuf statuts : Suggéré (avertissement automatisé), Planifié (confirmé pour la projection), Soumis (commandé), Approuvé, Expédié, Arrivé (au port), Reçu (à destination), Annulé et En attente. |
| **Demande non satisfaite** | Quantités qui auraient été consommées si le stock était disponible. QAT suit séparément la demande non satisfaite lorsque :<br/>a) La consommation prévue dépasse le stock disponible.<br/>b) La consommation réelle inclut les périodes de rupture de stock.<br/>c) Un ajustement négatif

Le solde financier dépasse le solde final projeté. |
| **Volumétrie** | Fonctionnalité permettant aux utilisateurs de définir les volumes de produits pour estimer la taille physique totale et les exigences logistiques des commandes. |

| Groupe d'utilisateurs | Objectif |
| :--- | :--- |
| **Planificateurs d'approvisionnement / Gestionnaires de programmes** | Gérez les achats auprès de plusieurs sources de financement et agents d’approvisionnement. QAT offre une visibilité sur l’état des stocks à long terme et réduit le risque de déséquilibres de stocks. |
| **Planificateurs de prévisions/demandes** | Estimez la demande à l’aide de modèles flexibles et de validations intégrées. Comparez les méthodologies et sélectionnez les prévisions finales sur les produits à l'aide de visualisations intégrées. |
| **Décideurs politiques/directeurs** | Comparez visuellement les prévisions et analysez les implications des contraintes budgétaires ou des nouveaux objectifs du programme. |
| **Acheteurs et donateurs** | Bénéficiez d’une visibilité claire sur l’état actuel des approvisionnements et les besoins futurs en matière d’approvisionnement. |

*Tableau 1 : Utilisateurs QAT recommandés et objectif*

## Concepts et termes QAT importants

### Termes transversaux

| Terme | Définition |
| :--- | :--- |
| **Unité de prévision** | Unité de base utilisée pour une période de prévision spécifiée (par exemple, un comprimé, un millilitre). |
| **Données de base (synchronisation)** | Un ensemble standardisé de données (par exemple, listes de produits, noms des bailleurs de fonds) partagées dans tout le système. Les utilisateurs peuvent demander des mises à jour via un mécanisme de ticket. QAT synchronise les données principales lors de la connexion ou des déclencheurs manuels. Notez que les ensembles de données complets de prévisions ou de plans d’approvisionnement doivent être téléchargés pour une utilisation locale. |
| **Unité de planification** | Le produit prévu dans QAT, décrit jusqu'au niveau du conditionnement primaire (par exemple un flacon de 30 comprimés). |
| **Programmes** | Semblable à une « base de données de plans d’approvisionnement » dans les outils existants. Chaque programme comprend un pays, des domaines techniques spécifiques, une région (par exemple, le niveau national) et une organisation (par exemple, le ministère de la Santé). |
| **Royaume** | Une subdivision de haut niveau dans QAT (par exemple, Global Health) régie par ses propres données de base. |
| **Région** | Niveaux sous-nationaux utilisés pour structurer les données du programme. Pour définir une région, les données de consommation et d'inventaire doivent être saisies à ce niveau pour l'agrégation nationale. |
| **Domaine technique** | Synonyme de groupes de produits (par exemple, ARV, paludisme, planification familiale) utilisés pour catégoriser les programmes. |
| **Billets** | Le mécanisme permettant de signaler des bogues ou de demander des mises à jour des données de base. Les tickets sont résolus par les administrateurs système. |
| **Rôles utilisateur** | Affectations dédiées qui définissent l'accès aux données et les autorisations fonctionnelles au sein de l'application. |

### Conditions de planification des approvisionnements

### Conditions de prévision

| Terme | Définition |
| :--- | :--- |
| **Prévisions basées sur la consommation** | Une prévision de la demande future basée sur des données historiques de consommation réelle à l'aide de méthodologies d'extrapolation linéaire et non linéaire. |
| **Prévision des arbres** | Structures de prévision flexibles utilisées pour convertir divers types de données (données démographiques, morbidité, services) en besoins en produits en modélisant les parcours de services. |
| **Modèle d'arbre** | Arbres de prévision prédéfinis qui peuvent être téléchargés et personnalisés en fonction du contexte d'un utilisateur spécifique. |
| **Modèle d'utilisation** | Taux d'utilisation prédéfinis pour des produits spécifiques qui peuvent être appliqués de manière cohérente sur différents arbres et programmes. |
| **Utilisation continue et discrète** | Lors de la définition des tarifs d'utilisation, les utilisateurs peuvent choisir entre des applications **Continue** (en cours) ou **Discrète** (période spécifique ou à usage unique). |

### Acronymes

Pour une liste complète des acronymes utilisés dans l'application et la documentation QAT, veuillez consulter la page [Acronymes](18-acronyms.md).
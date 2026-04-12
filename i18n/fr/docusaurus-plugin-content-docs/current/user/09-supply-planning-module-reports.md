---
id: supply-planning-module-reports
title: "Supply Planning Module: Reports"
sidebar_label: "Supply Planning Module: Reports"
sidebar_position: 9
---
# Module de planification des approvisionnements : Rapports

Les rapports QAT permettent à l'utilisateur d'extraire et d'afficher ses données de planification des approvisionnements sous forme de graphiques, de tableaux et d'autres formats visuels. L'utilisateur pourra également naviguer, trier, filtrer et visualiser les données pour des besoins spécifiques. Les rapports QAT produisent des visualisations et affichent les données de manière à faciliter la prise de décision.

Les rapports sont divisés en **Rapports globaux** et **Rapports spécifiques au programme**. Les rapports spécifiques au programme sont affichés hors ligne et en ligne. Toutefois, les rapports globaux sont affichés uniquement en mode en ligne et ne sont disponibles que pour les utilisateurs globaux, tels que l'administrateur de domaine et l'administrateur d'application.

**Remarque :** Tous les rapports QAT peuvent être exportés dans un fichier Excel CSV ainsi qu'au format PDF. De plus, tous les graphiques permettent à l'utilisateur de survoler un visuel pour afficher une info-bulle contenant plus d'informations.

## Liste des problèmes QAT
La **Liste des problèmes QAT** est un outil d'assurance qualité intégré. Il identifie les incohérences des données et les problèmes de planification des approvisionnements qui doivent être résolus avant qu'un plan d'approvisionnement puisse être finalisé et téléchargé.

**Principales caractéristiques :**
- **Recalculer :** Actualisez la liste après avoir apporté des modifications à la saisie des données.
- **Niveaux de criticité :** Les éléments sont signalés comme **Élevé (rouge)**, **Moyen (orange)** ou **Faible (jaune)**.
- **Piste d'audit :** Cliquez avec le bouton droit sur un problème pour afficher les notes internes et consulter l'historique.

### Statuts des problèmes
| Statut | Définition | Action requise |
| :--- | :--- | :--- |
| **Ouvert** | État par défaut pour les problèmes nouveaux ou signalés automatiquement. | Nécessite la saisie de données ou une note. |
| **Conforme** | Problème résolu automatiquement via la saisie des données. | Aucun (fermeture automatique). |
| **Adressé** | Problème reconnu par une note explicative. | La remarque est obligatoire. |
| **Résolu** | L'examinateur confirme que le problème est résolu de manière permanente. | Statut de réviseur uniquement. |
| **Révisé** | L'évaluateur a inspecté l'entrée. | Statut de réviseur uniquement. |

### Problèmes courants et solutions
- **Données manquantes :** Consommation réelle ou inventaire manquant au cours des 3 derniers mois. *Solution : saisissez les données manquantes.*
- **Écarts de prévision :** Valeurs de prévision manquantes au cours des 18 prochains mois. *Solution : saisissez les prévisions ou les zéros en cas de suppression progressive.*
- **Envois passés :** Envois avec des dates de « Reçu » dans le passé qui sont toujours marquées comme « Commandé » ou « Expédié ». *Solution : Mettre à jour le statut sur "Reçu".*
- **Violations des délais de livraison :** Expéditions qui auraient dû être soumises avant une certaine date. *Solution : mettre à jour le statut ou repousser la date de réception.*
- **Violations de stock :** Le plan tombe en dessous des paramètres minimum ou au-dessus des paramètres maximum. *Solution : Ajuster les expéditions ou la consommation.*

![QAT Problem List Interface](/img/media/image198.png)
*Figure 1 : Vue de haut niveau de la liste des problèmes*

## Catalogue de programmes
Le **Catalogue de programmes** fournit une liste standardisée de toutes les unités de planification et de prévision au sein d'un programme, y compris leurs attributs correspondants.

**Navigation :** **Rapports** > **Catalogue de programmes**.

## Rapports sur l'état des stocks
Ces rapports offrent différentes perspectives sur la santé des stocks au fil du temps.

### État des stocks au fil du temps
Visualise les niveaux de stock pour une ou plusieurs unités de planification sur une période définie.
- **Conseil :** Limitez la sélection à moins de 10 produits pour conserver la clarté du graphique.

### Matrice de l'état des stocks
Fournit une « carte thermique » de haut niveau de l’état des stocks (MOS ou quantité) sous forme de grille.
- **Codage visuel :**
  - **Rouge :** En rupture de stock.
  - **Orange :** En sous-stockage.
  - **Vert :** Idéal.
  - **Jaune :** En surstock.
  - **Gris :** N/A (données manquantes).

### Aperçu de l'état des stocks
Une vue ponctuelle (un seul mois) de toutes les unités de planification d'un programme.

### Aperçu de l'état des stocks (mondial)
Semblable au Snapshot mais permet des comparaisons entre programmes (accès au niveau du domaine).

![Stock Status Matrix](/img/media/image209.png)
*Figure 2 : Carte thermique de la matrice de l'état des stocks*

## Rapports de consommation
Ces rapports analysent la manière dont les produits sont utilisés par rapport aux prévisions.

### Consommation (mondiale)
Visualise la consommation dans plusieurs pays pour identifier les tendances régionales.

### Erreur de prévision (mensuelle et par unité de planification)
Analyse l'exactitude des prévisions à l'aide de la méthode **Pourcentage d'erreur moyen pondéré (WAPE)**.

**Mesures et fonctionnalités clés :**
- **Visuels :** Barres rouges (réel), barres bleues (prévisions), ligne verte (% d'erreur).
- **Seuils :** Les pourcentages d'erreur dépassant le seuil défini par l'administrateur du programme sont surlignés en **Rouge**.
- **Consommation ajustée :** Activez cette option pour afficher la consommation ajustée en fonction des jours de rupture de stock.
- **Formule WAPE :** Mesure l'écart absolu des prévisions par rapport à la réalité, pondéré par le volume total.

![Forecast Error Report](/img/media/image213.png)
*Figure 3 : Erreur de prévision (mensuelle) avec seuil*

## Rapports d'expédition
Ces rapports suivent le volume des achats, les coûts et la logistique.

### Expédition (mondiale et aperçu)
Regroupe les données d’approvisionnement par source de financement, agent et pays.
- **Global :** Vue transversale des quantités et des coûts.
- **Présentation :** Résumé de haut niveau utilisant des diagrammes circulaires pour la répartition des sources de financement.

### Détails de l'expédition et détails des coûts
Fournit des listes granulaires des expéditions avec leur statut et leur ventilation financière.
- **Tableau récapitulatif :** Coûts par source de financement pour la période sélectionnée.
- **Tableau détaillé :** Désagrégé par unité de planification et statut d'expédition.

### Rapport budgétaire
Suit les dépenses par rapport aux budgets de programme prédéfinis.
- **Visuels :** Affiche les fonds alloués par rapport aux fonds restants.
- **Multi-programme :** Prend en charge les budgets partagés entre plusieurs programmes.

### Délai de livraison de l'agent d'approvisionnement
Un rapport de référence montrant les délais établis pour chaque combinaison agent/unité de planification.

![Shipment Details Report](/img/media/image221.png)
*Figure 4 : Suivi détaillé des expéditions*

## Rapports d'inventaire
Ces rapports surveillent le stock disponible, les risques d'expiration et la capacité de l'entrepôt.

### Rapport sur les expirations
Fournit des quantités estimées de produits expirant dans le futur en fonction de la durée de vie du lot/de conservation.
- **Projection :** Calcule l'expiration en fonction des projections de stock et de la consommation prévue.
- **Interactif :** Cliquez sur une quantité expirée pour ouvrir le **Batch Ledger**.

### Coût de l'inventaire
Calcule la valeur estimée du stock disponible (réel ou projeté) en fonction des prix catalogue.

### Rotations des stocks
Mesure la vélocité de la chaîne d’approvisionnement (efficacité de la gestion).
- **Tours planifiés :** Tours cibles en fonction des paramètres MIN et d'intervalle de réorganisation.
- **Tours réels :** Calculés sur la base du stock et de la consommation moyens.
- **Interprétation :** Des chiffres d'affaires élevés indiquent généralement une chaîne d'approvisionnement plus saine et plus réactive.

### Rapport d'ajustement des stocks
Répertorie tous les ajustements de stock saisis manuellement.
> [!NOTE]
> Les ajustements calculés automatiquement (à partir des écarts d'inventaire) ne sont pas affichés ici.

### Capacité de l'entrepôt
Affiche l'utilisation du volume de stockage (m³) par région ou pays. Nécessite un accès au niveau du domaine pour la vue globale.

![Warehouse Capacity Report](/img/media/image232.png)
*Figure 5 : Utilisation de la capacité des entrepôts régionaux*
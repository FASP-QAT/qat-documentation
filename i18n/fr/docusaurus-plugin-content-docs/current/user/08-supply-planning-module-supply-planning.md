---
id: supply-planning-module-supply-planning
title: "Module de planification des approvisionnements : Planification des approvisionnements"
sidebar_label: "Module de planification des approvisionnements : Planification des approvisionnements"
sidebar_position: 8
---
# Module de planification des approvisionnements : Planification des approvisionnements

## Planification des approvisionnements : un aperçu
L'écran Planification des approvisionnements est la plaque tournante centrale où la consommation, les stocks et les expéditions convergent vers les niveaux de stock du projet.

**Qui :** Administrateurs de domaine/programme, réviseurs et utilisateurs du programme.
**Quand :** À tout moment (assistance hors ligne via PWA).

**Fonctionnalités clés de l'interface :**
- **Onglets Local ou Serveur :** Modifiez le **Plan d'approvisionnement local** ; le **Plan d'approvisionnement du serveur** est en lecture seule à des fins de comparaison.
- **Tableau interactif :** Cliquez sur les cellules pour modifier les données directement ou afficher des fenêtres contextuelles détaillées.
- **Légende dynamique :** Basculez les éléments de données dans le graphique en cliquant sur les éléments de légende.

### Calculs du solde des stocks
QAT utilise une logique standard pour calculer la progression mensuelle :

| Composant | Descriptif | Indicateur visuel |
| :--- | :--- | :--- |
| **Solde d'ouverture** | Stock de début de mois. | **Gras** = Réel ; Régulier = Projeté. |
| **Solde final** | Stock de fin de mois. | **Gras** = Réel ; Régulier = Projeté. |
| **Demande non satisfaite** | Stock nécessaire mais indisponible. | Capture les scénarios boursiers « négatifs ». |

### Légende de l'état des stocks
L'état du stock est codé par couleur en fonction de la méthode de planification :
- **Plan par MOS :** Transitions : **Rupture de stock (rouge)** → **Sous-stock (jaune)** → **Idéal (vert)** → **Surstock (bleu)**.
- **Planifier par quantité (Min/Max) :** Code couleur basé sur les quantités minimales et maximales calculées définies par l'utilisateur.

![Supply Planning Interface](/img/media/image153.png)
*Figure 1 : Vue du plan par mois de stock (MOS)*

## Planification des approvisionnements : consommation et expéditions
Le tableau Planification des approvisionnements permet un contrôle granulaire des transactions.

### Consommation
- **Consommation prévue :** Texte violet en italique.
- **Consommation réelle :** Texte noir non italique.

**Pour modifier la consommation :**
1. Cliquez sur la cellule du mois dans la ligne **Consommation**.
2. Dans la fenêtre contextuelle, modifiez les quantités par région.
3. Cliquez sur **Soumettre** pour mettre à jour le plan.

### Expéditions
Les expéditions sont regroupées par défaut. Cliquez sur **** à côté de **Expéditions** pour développer :
- **Suggéré :** Calculé automatiquement par QAT pour maintenir les niveaux de stock.
- **Planifié, Soumis, Expédié, Arrivé, Reçu :** Jalons suivis.

#### Indicateurs visuels
| Icône | Signification |
| :--- | :--- |
| **Triangle rouge** | Expédition d'urgence (dans les délais). |
| **Icône de lien** | Envoi lié à l’ERP (lecture seule). |
| **Icône L** | Achats locaux. |
| **Cellule verte** | Plusieurs expéditions dans le même mois. |

#### Logique des expéditions suggérées
QAT suggère des expéditions pour maintenir le plan entre les niveaux **Minimum** et **Maximum**.
- **Déclencheur :** Si le stock tombe en dessous du minimum pendant 3 mois consécutifs.
- **Quantité :** Calcule le montant nécessaire pour atteindre le niveau **Max**.

**Pour convertir une suggestion en ordre planifié :**
1. Cliquez sur la cellule de ligne **Suggérée**.
2. Mettez à jour le statut et cliquez sur **Soumettre**.

![Shipment Details Pop-up](/img/media/image174.png)
*Figure 2 : Modification des détails de l'envoi*

## Planification des approvisionnements : inventaire et ajustements
Les stocks et les ajustements peuvent être gérés directement à partir du tableau de planification des approvisionnements.

**Pour ajouter/modifier des enregistrements :**
1. Cliquez sur la cellule du mois dans la ligne **Ajustements** ou **Solde de fin**.
2. Dans la fenêtre contextuelle, ajustez les quantités par région.
3. **Nombre d'inventaire :** La saisie d'un inventaire mettra en **gras** le solde de clôture et remplacera les projections.
4. **Ajustements :** Des notes sont requises pour toutes les entrées d'ajustement.

### Projection des expirations
La ligne **Stocks expirés projetés** met en évidence les pertes potentielles.
- **Action :** Cliquez sur une cellule pour voir les **Détails d'expiration**.
- **Correction :** Cliquez sur le numéro de lot pour accéder à l'envoi source et mettre à jour la date d'expiration ou la quantité.
- **Batch Ledger :** Cliquez sur la cellule **Quantité expirée** pour afficher l'historique complet mois par mois de ce lot.

![Expiry Management Pop-up](/img/media/image189.png)
*Figure 3 : Détails sur l'expiration des lots*

## Planification de scénarios
La planification de scénarios permet aux utilisateurs de simuler les modifications apportées à leur plan d'approvisionnement sans modifier la version actuelle.

**Scénarios disponibles :**
- **Modifications de la consommation :** Augmentez ou diminuez la consommation prévue d'un pourcentage fixe.
- **Phase In/Out :** Interpolation linéaire entre deux valeurs de consommation sur une période définie.
- **Nettoyage des expéditions :** Supprimez en masse les expéditions non financées, planifiées ou soumises qui ne respectent pas les délais de livraison.
- **Replanifier :** Génère automatiquement de nouvelles expéditions pour résoudre les violations de niveau de stock.

**Pour utiliser des scénarios :**
1. Accédez à **Planification des approvisionnements** > **Planification des scénarios**.
2. Sélectionnez un scénario dans la liste déroulante et configurez les paramètres.
3. Cliquez sur **Ajouter** pour visualiser l'impact.
4. Si vous êtes satisfait, cliquez sur **Soumettre** pour enregistrer le scénario en tant que nouvelle version du plan d'approvisionnement.

![Scenario Planning interface](/img/media/image191.png)
*Figure 4 : Comparaison des scénarios*

## Rapport sur le plan d'approvisionnement
Le rapport sur le plan d'approvisionnement fournit une vue complète de l'état des stocks dans un ou plusieurs programmes.

### Vues du rapport
- **Programme unique :** Vue détaillée d'un programme et d'une unité de planification.
- **Multi-Programme :** Agrège les données pour la même unité de planification sur plusieurs programmes.
- **Unité d'équivalence (UE) :** Agrége différentes unités de planification à l'aide de facteurs de conversion standardisés (par exemple, mois-patient CYP ou ARV).

**Navigation :** **Planification des approvisionnements** > **Rapport sur le plan d'approvisionnement**.

**Principales caractéristiques :**
- **Vues tabulaires et graphiques :** Les données sont présentées à la fois sous forme de graphique interactif et de tableau de données détaillé.
- **Envois désagrégés :** Consultez les détails de l'envoi individuel (source de financement, statut, agent d'approvisionnement) directement dans le tableau.
- **Exportation :** Prend en charge les exportations PDF et CSV avec diverses options d'agrégation.

![Supply Plan Report](/img/media/image193.png)
*Figure 5 : Rapport sur le plan d'approvisionnement d'un programme unique*
---
id: forecasting-module-reports-and-outputs
title: "Forecasting Module: Reports and Outputs"
sidebar_label: "Forecasting Module: Reports and Outputs"
sidebar_position: 12
---
# Module de prévision : rapports et résultats

Après avoir défini vos méthodologies et paramètres, la dernière étape consiste à comparer les modèles disponibles, à sélectionner la prévision la plus précise et à examiner les exigences d'approvisionnement qui en résultent.

## Comparez et sélectionnez
**Navigation :** **Arbre de prévision** > **Comparer et sélectionner**.

Cet écran vous permet de comparer plusieurs prévisions (basées sur la consommation ou basées sur un arbre) côte à côte pour faire votre sélection finale.

### Indicateurs clés pour la sélection
- **Erreur de prévision (%) :** Utilise le calcul **WAPE**. Un surlignage vert indique le modèle avec l’erreur historique la plus faible.
- **Comparer à la consommation :** Pour les prévisions d'arbres, QAT signale si la production est nettement supérieure ou inférieure aux tendances historiques de consommation. Le texte rouge indique que la variance dépasse vos seuils définis.
- **Audit visuel :** Utilisez le **Graphique** pour voir l'évolution des différentes prévisions par rapport aux chiffres historiques. La ligne en gras représente votre modèle actuellement sélectionné.

### Règles de sélection
- **Une région à la fois :** La sélection est effectuée par unité de planification et par région.
- **Arbres multiples :** Vous pouvez sélectionner et regrouper plusieurs prévisions d'arbres (par exemple, pour différents groupes de patients).
- **Exclusivité mutuelle :** Vous ne pouvez pas combiner une prévision basée sur la consommation avec une prévision basée sur une arborescence pour la même région/unité.

> [!ASTUCE]
> Utilisez le bouton **Afficher les données** sous le graphique pour voir les données mensuelles sous forme de tableau. Les valeurs en italique violet désignent la période de prévision officielle.

---

## Prévisions mensuelles
**Navigation :** **Arbre de prévision** > **Prévisions mensuelles**.

Utilisez ce rapport pour vérifier globalement vos prévisions finales sélectionnées. Il s’agit de l’outil principal pour un dernier contrôle de cohérence avant de terminer la quantification.

- **Agrégation :** Additionne automatiquement les prévisions régionales en un total national.
- **Unités d'équivalence (UE) :** Consultez les prévisions en UE (par exemple, « Mois de traitement standard ») pour comparer différentes variantes de produits.
- **Vues d'analyse :** Basculez entre les unités de planification et les unités de prévision, ou agrégez les données par année civile/fiscale.

---

## Résumé des prévisions
**Navigation :** **Arbre de prévisions** > **Résumé des prévisions**.

Cet écran fournit deux vues de haut niveau de vos résultats de quantification sur toute la période de prévision.

### 1. Vue régionale
- Fournit un aperçu sous forme de feuille de calcul de toutes les unités de planification dans toutes les régions.
- Vous pouvez directement mettre à jour les méthodes de prévision ou ajouter des notes de justification dans ce tableau.

### 2. Vue nationale (analyse des écarts)
Cette vue fournit une analyse de haut niveau des excédents/écarts d'approvisionnement basée sur vos prévisions et vos données d'approvisionnement existantes.

> [!AVERTISSEMENT]
> Il s'agit d'un outil de haut niveau. Pour une planification granulaire des approvisionnements (planification des expéditions, suivi de la durée de conservation), vous devez importer cette prévision dans le module **Supply Planning**.

#### Formules et logique
QAT utilise la logique suivante pour estimer les besoins en approvisionnement :

1. **Stock projeté** = (Stock de départ + expéditions existantes) - Quantité prévue
2. **Stock souhaité** = (Quantité prévue × Mois de stock souhaités) / Mois de la période
3. **Écart d'approvisionnement** = Stock projeté - Stock souhaité

#### Estimation des coûts
S'il existe un écart, QAT estime les coûts en fonction de vos prix unitaires et pourcentages de fret définis :
- **Coût du produit** = Écart d'approvisionnement × Prix unitaire
- **Coût de transport** = Coût du produit × % de transport
- **Coût total** = Coût du produit + Coût du transport
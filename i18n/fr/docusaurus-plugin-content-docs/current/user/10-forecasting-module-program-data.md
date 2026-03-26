---
id: forecasting-module-program-data
title: "Forecasting Module: Program Data"
sidebar_label: "Forecasting Module: Program Data"
sidebar_position: 10
---
# Module de prévision : données du programme

## Présentation
Une prévision est une estimation des quantités de produits requises par les clients sur une période future. Dans QAT, les prévisions suivent un flux de travail structuré : **Configuration** → **Sélection de méthodologie** → **Saisie de données** → **Analyse et sélection**.

### Méthodologies de prévision
QAT prend en charge deux méthodologies principales, qui peuvent être utilisées individuellement ou combinées pour chaque produit :

| Méthodologie | Idéal pour... | Exigences |
| :--- | :--- | :--- |
| **Basé sur la consommation** | Programmes matures et stables avec des données fiables. | Plus de 24 mois de données historiques de consommation. |
| **Basé sur une arborescence** | Nouveaux programmes, mises à l’échelle ou demande variable. | Données de morbidité, de service ou démographiques ; tendances démographiques. |

Une fois les prévisions préparées, elles sont comparées dans la section **Analyse des prévisions** pour sélectionner le plan final.

## Informations sur le programme
Les administrateurs du programme peuvent mettre à jour les métadonnées de base (nom, responsable, notes) et basculer l'état du programme (actif/désactivé).
> [!NOTE]
> Les modifications apportées au domaine technique, à l'organisation ou au nom d'affichage nécessitent un [ticket d'assistance] (05-getting-started.md#qat-helpdesk-and-tickets).

## Paramètres de version
L'écran **Paramètres de version** permet aux utilisateurs de définir les paramètres de la prévision actuelle et de consulter les versions précédentes. Seule la **Version locale** est modifiable ; les versions du serveur sont en lecture seule.

### Paramètres techniques
- **Période de prévision :** Définissez la **Date de début** et le **Nombre de mois**. QAT calcule automatiquement la **Date de fin**.
- **Jours du mois :** Définir entre 15 et 31 jours (par défaut : jours calendaires). Utile pour ajuster la consommation en fonction des jours de service.
- **Pourcentage de fret :** Estimation facultative pour les calculs des coûts d'approvisionnement.
- **Seuil de prévision :** Utilisé dans l'écran **Comparer et sélectionner**. QAT signale les prévisions d'arbre qui s'écartent considérablement (élevé/faible) des prévisions de consommation. Les valeurs hors seuil sont mises en évidence en **Rouge**.

### Historique des versions
Les utilisateurs peuvent afficher le cycle de vie historique du programme et cliquer avec le bouton droit sur n'importe quelle version pour afficher le résumé de **Validation des prévisions** (répertoriant les données manquantes et les notes de validation) sans télécharger cette version spécifique.

![Version Settings Interface](/img/media/image235.png)
*Figure 1 : Ensemble de versions de prévision## Unités de planification
L'écran **Unités de planification** vous permet de définir les produits à prévoir. Les produits peuvent être ajoutés manuellement ou copiés à partir du module Planification des approvisionnements.

### Paramètres de l'unité de planification
Configurez ces paramètres pour activer des méthodologies et des calculs financiers spécifiques :

| Paramètre | Descriptif | Impact |
| :--- | :--- | :--- |
| **Facteur de conversion** | Rapport entre l'Unité de Planification (PU) et l'Unité de Prévision (FU). | Standardise la saisie des données entre les unités. |
| **Méthodologie de prévision** | Activez la méthodologie **Consommation** et/ou **Tree**. | Détermine quels écrans de saisie de données sont actifs. |
| **Stock disponible** | Solde d'ouverture au début de la période de prévision. | Utilisé pour calculer l’écart d’approvisionnement. |
| **Expéditions existantes** | Quantités totales engagées pour la période de prévision. | Réduit le vide total à combler. |
| **MOS souhaité** | Niveau de stock cible (mois de stock) en fin de période. | Définit l'objectif du calcul de l'écart. |
| **Prix et type** | Prix ​​catalogue ou prix personnalisé par agent d'approvisionnement. | Estimation du coût total de l’écart en matière d’approvisionnement. |

> [!ASTUCE]
> Effectuez toujours une **Master Data Sync** après la mise à jour de ces paramètres pour vous assurer qu'ils se propagent aux écrans d'analyse.
 Paramètres de l'unité de planification

## Unités d'équivalence
**Les unités d'équivalence (UE)** vous permettent de regrouper des données sur des produits différents mais liés (par exemple, différentes tailles d'emballage ou concentrations). Cela permet une vue unifiée des prévisions dans la section **Rapports et résultats**.

### Cartographie et conflits
- **Mappages au niveau du domaine :** Mappages universels fournis par QAT.
- **Mappages au niveau du programme :** Remplacements créés par les administrateurs du programme pour des besoins spécifiques. Les mappages au niveau du programme sont toujours prioritaires.

### Exemples d'équivalence
Si un schéma thérapeutique nécessite 14 comprimés d'un produit OU 1 tube d'un autre, les deux peuvent être mappés à une UE appelée « Traitement régime ».

| Unité d'équivalence | Unité de prévision | Facteur de conversion |
| :--- | :--- | :---: |
| Traitement du régime | 1 comprimé de produit A | 14 |
| Traitement du régime | 1 tube de Produit B | 1 |

### Gérer les UE
1. **Vérifiez les données principales :** Recherchez les UE existantes dans **Realm Masters** > **Unités d'équivalence**.
2. **Ajouter une UE personnalisée :** S'il n'est pas trouvé, utilisez **Gérer l'unité d'équivalence** pour créer une unité spécifique au programme.
3. **Unités cartographiques :** Cliquez sur **Ajouter une ligne** sur l'écran principal pour lier vos unités de prévision à l'UE.
4. **Sync :** Cliquez sur **Soumettre** et effectuez une **Synchronisation des données principales**.

### Utilisation dans les rapports
- **Comparez et sélectionnez :** Affichez la demande totale en UE au lieu d'unités individuelles.
- **Prévisions mensuelles :** Regroupez les produits disparates en une seule ligne « exigence totale ».
- **Planification de l'approvisionnement :** Consultez la consommation réelle et prévue dans l'UE pour identifier les tendances de haut niveau.
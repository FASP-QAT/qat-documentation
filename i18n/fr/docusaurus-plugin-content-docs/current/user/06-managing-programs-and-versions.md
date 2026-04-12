---
id: managing-programs-and-versions
title: "Gestion des programmes et des versions"
sidebar_label: "Gestion des programmes et des versions"
sidebar_position: 6
---
# Gestion des programmes et des versions

## Travailler avec les données du programme

QAT vous permet de gérer les données du programme via quatre actions principales : le téléchargement, le chargement, l'importation et l'exportation.

| Actions | Mode | Descriptif |
| :--- | :---: | :--- |
| **Télécharger** | En ligne | Récupérez les données du programme du serveur sur votre appareil local. |
| **Télécharger** | En ligne | Enregistrez vos modifications locales sur le serveur. |
| **Exporter** | Hors ligne | Enregistrez les données locales dans un fichier compressé (`.zip`) pour les partager. |
| **Importer** | Hors ligne | Chargez les données d'un fichier `.zip` exporté dans QAT. |

> [!NOTE]
> Les programmes de prévision et de planification des approvisionnements sont des modules distincts. Assurez-vous que vous êtes dans le bon module avant d’effectuer toute opération sur les données.

### Résumé du flux de travail
- **Télécharger :** Nécessaire pour commencer à travailler sur n'importe quel programme.
- **Télécharger :** Partagez votre travail avec l'équipe. Le téléchargement en tant que « Final » dans la planification des approvisionnements démarre le processus de révision ; dans Forecasting, il rend les données disponibles pour importation dans Supply Planning.
- **Exporter/Importer :** Principalement utilisé pour partager des données dans des environnements hors ligne (par exemple via une clé USB).

## Télécharger et supprimer des programmes

### Aperçu
- **Qui :** Administrateurs, utilisateurs du programme et réviseurs. 
- **Quand :** Obligatoire pour les téléchargements en ligne. Nécessaire même lorsque vous travaillez en ligne pour permettre la saisie de données et la planification de scénarios.
- **Indicateurs d'état :** 
  - ![Red Icon](/img/media/image89.png) **Rouge :** Votre version locale est obsolète.
  - ![Blue Icon](/img/media/image90.png) **Bleu :** Vous disposez de la dernière version ou aucune version n'a été téléchargée.

### Comment télécharger un programme
1. Accédez à **Gestion des programmes** > **Télécharger/Supprimer le programme** (ou cliquez sur l'icône de téléchargement en haut à droite).
2. L'écran affiche les programmes avec du texte codé par couleur :
   - **Vert :** Dernière version téléchargée.
   - **Rouge :** Version obsolète téléchargée.
   - **Noir :** Pas encore téléchargé.
3. Cochez la case du programme cible. QAT utilise par défaut la dernière version.
4. (Facultatif) Développez le triangle à côté d'un programme pour sélectionner une version historique spécifique.
5. Cliquez sur **Télécharger**.

![Load Program Screen](/img/media/image91.png)
*Figure 1 : Télécharger l'interface du programme*

### Téléchargement d'un sous-ensemble de données (Planification des approvisionnements uniquement)
Pour améliorer les performances des programmes volumineux, vous pouvez télécharger une version tronquée d'un plan d'approvisionnement.
- Cochez **Télécharger une plage spécifique de données du plan d'approvisionnement**.
- Sélectionnez une date de début (au moins 18 mois dans le passé).
- **Remarque :** Les données plus anciennes restent en sécurité sur le serveur et sont fusionnées lors des prochains téléchargements.

### Suppression et nettoyage
- **Supprimer :** Cliquez sur l'icône de la corbeille à côté d'une version spécifique.
- **Nettoyer :** Cliquez sur l'icône en forme de balai pour supprimer toutes les versions locales, à l'exception de la dernière.

> [!AVERTISSEMENT]
> Si vous voyez un avertissement « Version du serveur plus récente » pendant la synchronisation, cliquer sur **OK** écrasera vos modifications locales avec les données du serveur. Cliquez sur **Annuler** pour conserver vos modifications locales.

![More recent server warning](/img/media/image97.png)
*Figure 2 : Avertissement de conflit de version du serveur*
## Téléchargement des données du programme

### Objectif du téléchargement
- **Version préliminaire :** Enregistrez votre travail en cours sur le serveur et partagez-le avec d'autres utilisateurs.
- **Version finale (planification des approvisionnements) :** marque le plan d'approvisionnement comme terminé et lance le processus de révision.
- **Version finale (Prévision) :** Rend la prévision disponible pour importation dans le module Planification des approvisionnements.

### Comment télécharger (Planification des approvisionnements)
1. Accédez à **Gestion du programme** > **Télécharger la version** (ou cliquez sur l'icône de téléchargement en haut à droite).
2. Sélectionnez votre programme et le **Type de version** (Brouillon ou Final).
3. Ajoutez des **Notes** décrivant les modifications apportées.
4. Consultez les onglets de comparaison (**Consommation, Inventaire, Expédition, QPL**).
5. Résolvez tous les conflits (mis en surbrillance en **Jaune**) en cliquant avec le bouton droit sur la ligne et en sélectionnant **Résoudre le conflit**.
6. Cliquez sur **Télécharger**.

> [!IMPORTANT]
> Vous ne pouvez pas télécharger une version « finale » s'il y a des problèmes « ouverts » dans la liste des problèmes QAT. Vous devez d'abord les traiter ou les marquer comme « Conforme ».

### Comment télécharger (Prévisions)
1. Accédez à **Gestion du programme** > **Télécharger la version**.
2. Sélectionnez le programme et le type de version.
3. Examinez les modifications dans les onglets (**Paramètres de version, Unité de planification, Consommation, Arborescence, Prévisions sélectionnées**).
4. Résolvez les conflits et cliquez sur **Télécharger**.
5. Remplissez la liste de contrôle **Validation des prévisions** pour garantir l'intégrité des données et cliquez sur **OK** pour finaliser le téléchargement.

![Forecast Validation](/img/media/image105.png)
*Figure 3 : Écran de validation des prévisions*

## Version et révision du plan d'approvisionnement (module du plan d'approvisionnement uniquement)

- <u>Who?</u> Cette fonction est disponible pour **Application/Royaume/Programme
## Version et révision du plan d'approvisionnement (planification des approvisionnements uniquement)

### Aperçu
- **Qui :** Administrateurs, utilisateurs du programme, réviseurs et spectateurs.
- **Quand :** Utilisé en ligne pour suivre le statut de soumission et d'approbation des plans d'approvisionnement.
- **Pourquoi :** 
  - **Planificateurs :** Surveillez l'état d'approbation et les commentaires.
  - **Réviseurs :** Gérez la file d'attente de révision et approuvez/rejetez les soumissions.

### Comment réviser un plan d'approvisionnement
1. Accédez à **Gestion du programme** > **Version et révision du plan d'approvisionnement**.
2. Sélectionnez les filtres (Période, Pays, type de version) pour trouver le plan cible.
3. Cliquez sur une ligne pour afficher les détails.

#### Pour les évaluateurs :
- **Onglet Planification des approvisionnements :** Consultez l'état des stocks et les données pour chaque unité de planification.
- **Onglet Liste des problèmes QAT :** Examinez tous les problèmes signalés.
- **Action :** Cochez la case **Révisé** pour chaque problème. Vous pouvez ajouter des **Notes du réviseur** ou mettre à jour le **Statut du problème** (par exemple, marquer comme « Résolu »).
- **Problèmes manuels :** Cliquez sur l'icône **+** pour ajouter des problèmes non détectés par la validation automatique.
- **Approbation :** définissez le statut sur **Approuvé** ou **Needs Revision**, ajoutez des notes obligatoires et cliquez sur **Mettre à jour**.

![Supply Plan Review Interface](/img/media/image106.png)
*Figure 4 : Versions du plan d'approvisionnement et écran de révision*

### Notifications par e-mail
QAT informe automatiquement les utilisateurs concernés lorsqu'un plan est :
- **Téléchargé (final) :** Les évaluateurs ont été informés.
- **Révision nécessaire :** Planificateur averti.
- **Approuvé :** Planificateur et équipe informés.

## Exportation et importation de données

### Exportation de programmes
Utilisez Exporter pour enregistrer les données du programme sur votre appareil pour un partage hors ligne (par exemple via USB).
1. Accédez à **Gestion des programmes** > **Programme d'exportation**.
2. Sélectionnez le programme téléchargé dans la liste déroulante.
3. Choisissez le cryptage :
   - **Chiffré (par défaut) :** Sécurisé ; requis pour la réimportation dans QAT.
   - **Non chiffré :** Pour l'analyse de données externes (par exemple, Excel).
4. Cliquez sur **Soumettre** et sélectionnez un emplacement de sauvegarde.

![Export Program Screen](/img/media/image110.png)
*Figure 5 : Interface d'exportation*

### Importation de programmes
Utilisez Importer pour charger un fichier `.zip` dans votre instance QAT locale.
1. Accédez à **Gestion des programmes** > **Importer un programme**.
2. Cliquez sur **Parcourir** et sélectionnez le fichier `.zip`.
3. Cliquez sur **Suivant**, sélectionnez le(s) programme(s) dans le fichier, puis cliquez sur **Importer**.

![Import Program Screen](/img/media/image111.png)
*Figure 6 : Interface d'importation*

## Comparaison des versions (prévisions uniquement)

Utilisez l'écran **Comparaison des versions** pour afficher les différences entre deux versions du même programme de prévisions.

1. Accédez à **Gestion des programmes** > **Comparaison des versions**.
2. Sélectionnez le programme et les deux versions que vous souhaitez comparer.
   - **Remarque :** Les versions finales sont marquées d'un astérisque (`*`).
   - Vous pouvez comparer les versions locales et celles du serveur, ainsi que les versions brouillon et finale.
3. Consultez le tableau de comparaison, qui récapitule la prévision sélectionnée, la quantité prévue et les notes pour chaque combinaison unité de planification/région.
4. (Facultatif) Cliquez sur les icônes en haut à droite pour exporter la comparaison au format **PDF** ou **CSV**.

![Version Comparison Interface](/img/media/image112.png)
*Figure 7 : Comparaison des versions de prévision*
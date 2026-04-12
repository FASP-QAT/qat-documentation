---
id: annex-5-pipeline-program-import
title: "Annex 5: PipeLine Program Import"
sidebar_label: "Annex 5: PipeLine Program Import"
sidebar_position: 17
---
# Annexe 5 : Importation du programme PipeLine

Cette annexe détaille le processus de migration des anciennes bases de données **PipeLine** vers QAT. Il s'agit d'un processus en trois étapes : conversion, téléchargement et mappage des données.

> [!IMPORTANT]
> **Prérequis :**
> - **Logiciel :** Java JDK 1.8 ou supérieur doit être installé sur votre machine.
> - **Qualité des données :** Votre base de données PipeLine (.accdb) ne doit pas contenir de valeurs d'inventaire négatives. Assurez-vous que toutes les données d’expédition, de stock et de consommation sont finalisées avant de commencer.

---

## Étape 1 : Convertir .accdb en JSON
QAT nécessite des données au format JSON. Utilisez l'**outil de conversion PipeLine** pour cette conversion.

1. Accédez à **Gestion des programmes > Importation du programme PipeLine**.
2. Cliquez sur le bouton **Ajouter (+)**, puis cliquez sur l'icône **Télécharger (↓)** en haut à droite.
3. Sélectionnez votre système d'exploitation (Windows ou Linux) et téléchargez le fichier `.zip`.
4. Extrayez et exécutez le convertisseur (exécutable ou fichier `.jar`).
5. **Dans le convertisseur :**
   - **Source :** Parcourez et sélectionnez votre fichier `.accdb`.
   - **Destination :** Sélectionnez le dossier dans lequel le fichier `.json` résultant doit être enregistré.
   - Cliquez sur **Convertir**. Une notification apparaîtra en cas de succès.

---

## Étape 2 : Importer sur QAT
Une fois que vous disposez du fichier `.json`, vous devez le télécharger sur le serveur QAT.

1. Dans QAT, revenez à **Gestion des programmes > Importation de programmes PipeLine**.
2. Cliquez sur **Ajouter (+)**.
3. Parcourez et sélectionnez votre fichier `.json` converti.
4. Cliquez sur **Soumettre**. Vous recevrez un message de réussite et le nouveau programme apparaîtra dans la liste d'importation.

---

## Étape 3 : Assistant de mappage de données
La dernière étape consiste à mapper les champs PipeLine existants aux données principales au niveau du domaine de QAT.

Cliquez sur la ligne de votre programme importé pour lancer l'**Mapping Wizard**. Vous naviguerez à travers les écrans suivants :
1. **Informations sur le programme** : cartographiez les domaines techniques et les organisations.
2. **Unités de planification** : liez les produits PipeLine aux unités de planification QAT.
3. **Données et sources de financement** : cartographiez les partenaires logistiques et financiers.
4. **Expéditions et inventaire** : examen final des enregistrements importés.

> [!ASTUCE]
> Utilisez les boutons **Suivant** et **Retour** pour naviguer. Si le système détecte un stock négatif lors de la dernière étape, un avertissement apparaîtra ; vous devez résoudre ces écarts dans les données sources ou lors du mappage.

Une fois terminé, le programme sera entièrement actif dans **Gestion du programme > Mettre à jour les informations sur le programme**, où il pourra être téléchargé pour une planification active des approvisionnements.
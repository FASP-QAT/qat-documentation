---
id: annex-5-pipeline-program-import
title: "Annex 5: PipeLine Program Import"
sidebar_label: "Annex 5: PipeLine Program Import"
sidebar_position: 17
---
# Annexe 5 : Importation du programme PipeLine

Dans certains cas, les utilisateurs recevront un ensemble spécial d'informations d'identification leur permettant d'importer des bases de données PipeLine s'ils souhaitent configurer leur programme de cette manière (voir Configuration d'un nouveau programme dans l'Annexe 1).

## Étape 1 : Convertissez le fichier .accdb en fichier JSON :

*À propos de l'outil de conversion PipeLine Access DB en JSON :* Étant donné que le système QAT est uniquement capable d'importer les données du programme au format JSON et que les bases de données PipeLine sont au format .accdb, QAT dispose d'un outil téléchargeable pour convertir le fichier .accdb en fichier JSON, permettant ainsi l'importation dans QAT. Une fois installé, cet outil ne nécessite pas d'accès Internet pour fonctionner. De plus, cet outil permet à l'utilisateur de choisir sa langue préférée.

1. Confirmez que vous disposez de la configuration système requise appropriée :
   - Système d'exploitation : *Windows / Linux / Ubuntu*
   - Autres logiciels : *Java JDK 1.8 et supérieur.*
2. Confirmez que vos données PipeLine sont entièrement mises à jour :
   - La base de données ne peut pas avoir de valeurs d'inventaire négatives.
   - Toutes les données d'expédition, de stock, de consommation doivent être mises à jour.
3. Allez dans « Gestion des programmes » et cliquez sur « Importation de programmes PipeLine ».
4. Dans le coin supérieur droit, cliquez sur le bouton « Ajouter ». Cela mènera à un écran de saisie de fichier.
5. Cliquez sur la flèche vers le bas dans le coin supérieur droit.
6. Cliquez sur « Télécharger PipeLine Converter » à l'écran, puis sélectionnez le système d'exploitation de votre ordinateur (Windows ou Linux). Le convertisseur sera téléchargé dans un fichier zip.
7. Ouvrez le fichier du convertisseur et exécutez l'outil (fichier .exe / fichier exécutable .java), l'écran suivant s'affichera :

<div style={{textAlign: 'center'}}>

![Caution Message during PipeLine Import](/img/media/image406.png)

*Figure 251: Caution Message during PipeLine Import*

</div>

<div style={{textAlign: 'center'}}>

![PipeLine Import Screen](/img/media/image407.jpg)

*Figure 252: PipeLine Import Screen*

</div>

8. Cliquez sur le premier bouton Parcourir pour rechercher le fichier .accdb souhaité à importer.

<div style={{textAlign: 'center'}}>

![PipeLine Import Screen – Browse](/img/media/image408.png)

*Figure 253: PipeLine Import Screen – Browse*

</div>

9. Cliquez sur le deuxième bouton Parcourir pour sélectionner l'emplacement où le fichier converti sera stocké sur l'ordinateur local de l'utilisateur.
10. Cliquez sur Convertir. Lorsque le fichier est converti au format .json, vous recevrez la notification ci-dessous :

<div style={{textAlign: 'center'}}>

![Successful Import PipeLine Screen](/img/media/image409.jpg)

*Figure 254: Successful Import PipeLine Screen*

</div>

## Étape 2 : Téléchargez le fichier JSON dans QAT :

11. Dans QAT, accédez à l'élément de menu "Program Management" &gt; "PipeLine Program Import".
12. Cliquez sur le bouton "Ajouter" et un nouvel écran s'ouvrira. Parcourez pour trouver le fichier JSON converti (de l’étape 1) à partir de la machine locale. Cliquez sur "Envoyer".
13. Une fois le processus terminé, l'utilisateur recevra un message indiquant que le programme a été importé avec succès.
14. Ce programme sera affiché sous forme de ligne dans la liste des programmes. Cliquez sur cette ligne pour passer à l'étape 3.

Remarque : lors de la configuration du programme, l'utilisateur de QAT peut sélectionner plusieurs domaines techniques dans la liste déroulante des domaines techniques.

<div style={{textAlign: 'center'}}>

![PipeLine program import, multiple technical areas](/img/media/image410.png)

*Figure 255: PipeLine program import, multiple technical areas*

</div>

## Étape 3 : Configurer les données à importer dans QAT

Après avoir importé les données PipeLine, l'utilisateur naviguera à travers une série d'écrans où il sera invité à saisir des données. Après avoir modifié les données sur un écran, l'utilisateur doit cliquer sur « Suivant » pour passer à l'écran de saisie de données suivant. Si nécessaire, accédez aux écrans précédents en cliquant sur « Retour ». L'utilisateur doit naviguer à travers les écrans suivants : informations sur le programme, unités de planification, source de données, source de financement, agent d'approvisionnement, consommation, inventaire et expéditions.

<div style={{textAlign: 'center'}}>

![PipeLine Import - Country](/img/media/image411.jpg)

*Figure 256: PipeLine Import - Country*

</div>

Chacun de ces écrans principaux comporte des sous-écrans dans lesquels les utilisateurs doivent saisir des données et mapper les données PipeLine actuelles aux données principales au niveau du domaine QAT ; par exemple, les produits PipeLine doivent être mappés aux unités de planification de QAT. À la dernière étape (écran d'expédition), une fenêtre contextuelle s'affichera si un programme contient un inventaire négatif.

<div style={{textAlign: 'center'}}>

![Pipeline Import - Planning Units](/img/media/image412.jpg)

*Figure 257: Pipeline Import - Planning Units*

</div>

## Une fois le fichier importé avec succès dans QAT :

1. Les utilisateurs peuvent accéder à « Gestion du programme ».
2. Cliquez sur l'élément de menu "Programmes".
3. La liste des programmes affichera le programme importé.
4. L'utilisateur peut désormais « Télécharger », « Importer » et « Exporter » ce programme.
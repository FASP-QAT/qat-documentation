---
id: managing-programs-and-versions
title: "3. Managing Programs and Versions"
sidebar_label: "3. Managing Programs and Versions"
sidebar_position: 3
---
# Section 3. Gestion des programmes et des versions

## A. Travailler avec les données du programme

|                      | En ligne | Hors ligne |
| :--------------------------------- | :------- | :------ |
| Données provenant d'autrui | Télécharger | Importer |
| Données des utilisateurs | Télécharger | Exporter |


![Left Menu Bar](/img/media/image87.png)

Les données du programme peuvent être téléchargées, téléchargées, importées et exportées dans QAT.

- Notez que les programmes de prévision sont totalement différents des programmes de planification des approvisionnements. Assurez-vous que vous êtes dans le bon module avant de télécharger, charger, importer ou exporter.
- Les utilisateurs doivent **Télécharger** les données du programme pour commencer la planification ou la prévision des approvisionnements et doivent **Télécharger** leurs données sur le serveur pour partager leur travail avec d'autres.
- Le téléchargement peut être « brouillon » ou « final ». Le téléchargement d'un programme de plan d'approvisionnement comme « final » lance le processus de révision du plan d'approvisionnement. L'état des versions du plan d'approvisionnement peut être consulté dans l'écran **Version et révision du plan d'approvisionnement** — il s'agit de la seule fonction décrite dans cette section qui est disponible pour les visualiseurs de rapports. Le téléchargement d'un programme de prévisions comme « final » permet aux utilisateurs d'importer cette prévision directement dans le module du plan d'approvisionnement. Voir [Importation de prévisions QAT](07-supply-planning-module-program-data.md#importing-forecasts-into-supply-plans) pour plus d'instructions sur la façon d'importer une prévision dans un plan d'approvisionnement.
- Lorsqu'aucune connexion Internet n'est disponible, la fonctionnalité **Exporter** permet aux utilisateurs de partager leurs données avec d'autres utilisateurs via des périphériques externes tels qu'une clé USB/une clé USB, qui peuvent ensuite utiliser la fonction **Importer** de données pour ouvrir ce fichier sur leur ordinateur.
- Ces fonctions sont accessibles à partir de la barre de menu de gauche sous **Gestion des programmes**.
- De plus, Download & Upload est accessible à partir de la barre de menu supérieure.

<div style={{textAlign: 'center'}}>

![Top Menu Bar](/img/media/image88.png)

_Top Ribbon Menu Bar_

</div>

## B. Télécharger/Supprimer

- <u>Qui ?</u> Cette fonction est disponible pour les **administrateurs de domaine/programme, les utilisateurs du programme et les réviseurs de plans d'approvisionnement.** Non disponible ou nécessaire pour les **observateurs de rapports**
- <u>Quand ?</u> L'utilisateur doit être en ligne pour télécharger un programme.
- <u>Pourquoi ?</u> Les utilisateurs doivent télécharger un programme s'ils souhaitent saisir ou mettre à jour des données, ou prévoir ou planifier activement (au lieu de simplement consulter des rapports). Les utilisateurs peuvent télécharger un programme lorsqu'ils remarquent que leur version locale n'est pas la dernière (c'est-à-dire lorsque l'icône de téléchargement est rouge au lieu du bleu habituel). Le téléchargement de programmes permet à l'utilisateur de travailler hors ligne. Notez cependant que les programmes <u>doivent</u> être téléchargés pour remplir les fonctions suivantes, <u>même</u> si l'utilisateur est en ligne :
  - Planification des approvisionnements :
    - Saisir/mettre à jour les données (consommation, inventaire/ajustements, expéditions). Par exemple, si l'utilisateur travaille sur « Détails de consommation », il doit sélectionner un programme dans la liste donnée. La liste affichera les données uniquement pour les « Programmes » qui ont été téléchargés dans la base de données d'index locale.
    - Plan d'approvisionnement/scénario
    - Afficher la liste des problèmes QAT
    - Dans les rapports, visualisation des données sur l'ordinateur local (et non sur le serveur)
  - Prévisions :
    - Saisir/mettre à jour les données (saisir/importer la consommation réelle, ajouter/éditer des arbres de prévisions, extrapoler, etc.)
    - Dans les rapports de validation ou d'analyse prévisionnelle, visualisation des données sur l'ordinateur local (et non sur le serveur)

- <u>Que se passe-t-il lorsqu'un utilisateur télécharge un programme ?</u> Lorsque l'utilisateur télécharge un programme, il est stocké dans la base de données d'index locale au format JSON.

- <u>Comment télécharger un programme :</u>
  1. Déterminez si vous souhaitez télécharger à partir du module de prévision ou de planification des approvisionnements, et accédez au module approprié (voir <u>Section 2.J Navigation et barre de menus</u>). Si vous n'avez accès qu'à un seul module, vous pouvez ignorer cette étape.
  2. Accédez à « Gestion du programme » &gt; « Télécharger/Supprimer le programme ». (Vous pouvez également accéder à cet écran en cliquant sur l'icône ![download icon](/img/media/image89.png) dans la barre supérieure droite de QAT). L'écran affichera les données du programme comme indiqué dans la figure ci-dessous.
     - <span style={{color: 'red'}}>Texte rouge</span> indique que le programme téléchargé n'est pas la dernière version. <span style={{color: 'green'}}>Le texte vert</span> indique que le programme téléchargé est la dernière version. Le texte noir indique que le programme n'est pas téléchargé.

<div style={{textAlign: 'center'}}>

![Load Program Screen](/img/media/image91.png)

_Load Program Screen_

</div>

3. Pour télécharger
   une. Cochez la case à côté du programme que vous souhaitez télécharger. Par défaut, QAT téléchargera la dernière version du programme sélectionné.
   b. *(facultatif)* Cliquez sur le bouton triangulaire ![triangle button](/img/media/image90.png) à côté du programme pour voir toutes les versions du programme. Les cinq dernières versions seront affichées. Cliquez sur « voir plus » pour afficher les anciennes versions. Utilisez la case à cocher pour sélectionner la ou les versions spécifiques que vous souhaitez télécharger.

<div style={{textAlign: 'center'}}>

![Version Tree – how to expand](/img/media/image92.png)

_Version Tree – how to expand_

</div>

   c. Cliquez sur le bouton **Télécharger** pour télécharger le programme sur votre système.

4. Pour supprimer ou nettoyer :
   une. Cliquez sur le bouton triangle à côté du programme pour voir toutes les versions du programme.
   b. Sélectionnez l'icône de la corbeille ![trashcan icon](/img/media/image93.png) à côté de la version du programme que vous souhaitez supprimer. Si vous disposez de plusieurs versions, vous avez également la possibilité de cliquer sur l'icône de nettoyage ![clean-up icon](/img/media/image94.png) pour supprimer toutes les versions à l'exception de la dernière version locale.

<div style={{textAlign: 'center'}}>

![Download Screen Version Tree – clean up and delete icons](/img/media/image95.png)

_Download Screen Version Tree – clean up and delete icons_

</div>

5. *(facultatif)* Dans le module de planification des approvisionnements, les utilisateurs peuvent télécharger un sous-ensemble de leurs plans d'approvisionnement à mesure que leurs programmes commencent à disposer de plus de données historiques.
   - Pour cela, l'utilisateur clique sur « Télécharger une plage spécifique de données du plan d'approvisionnement » et sélectionne le mois/l'année de début des données qu'il va télécharger.
   - Si la case « Télécharger une plage spécifique de données du plan d'approvisionnement » est cochée, la version du programme sélectionnée affichera uniquement les données à partir de la date souhaitée (minimum 18 mois dans le passé).

<div style={{textAlign: 'center'}}>

![Download specific range of data](/img/media/image96.png)

_Download specific range of data_

</div>

   - La sélection de la plage de dates s'appliquerait à TOUS les programmes sélectionnés pour le téléchargement. Si l'utilisateur souhaite télécharger un programme complet (programme A) et un programme tronqué (programme B), il doit effectuer le processus de téléchargement deux fois : une pour le programme complet et une autre pour le programme tronqué.
   - Les données plus anciennes non téléchargées existent toujours sur le serveur et ne peuvent pas être supprimées ou écrasées.
   - Lorsque l'utilisateur télécharge un programme tronqué (v1), le met à jour et télécharge une nouvelle version (v2), la version du serveur inclura l'intégralité des données, tandis que la nouvelle version locale restera tronquée avec la date de début précédemment sélectionnée. L'utilisateur peut supprimer cette version et télécharger la v2 complète à partir du serveur, ou la v2 avec une plage de données différente, selon les besoins.

**Remarque** : Si vous téléchargez une ancienne version ou si un autre utilisateur télécharge une version ultérieure sur le serveur après le téléchargement, vous verrez un message comme celui ci-dessous dans la figure 36 à chaque fois que la synchronisation des données de base se produit (lors de la connexion, lors du téléchargement d'un nouveau programme ou si l'utilisateur le demande manuellement).
- Si vous sélectionnez « OK », la dernière version du serveur sera téléchargée et votre version locale sera définitivement supprimée. Veuillez sélectionner « OK » uniquement si vous acceptez d'annuler vos modifications ou si vous n'avez apporté aucune modification.
- Si vous sélectionnez « annuler », aucune action ne sera entreprise et vous resterez avec votre version locale.

<div style={{textAlign: 'center'}}>

![More recent server warning](/img/media/image97.png)

_“More recent server” warning on user login_

</div>

## C. Télécharger

- <u>Qui ?</u>
  - **Planification des approvisionnements :** Administrateurs d'applications/domaines/programmes et utilisateurs du programme. Non disponible ou nécessaire pour les visionneuses de rapports
  - **Prévisions :** Administrateurs d'applications/domaines/programmes et utilisateurs du programme. Non disponible ou nécessaire pour les visionneuses de prévisions
- <u>Pourquoi ?</u>
  - **Téléchargement en tant que brouillon :**
    - **Plans/Prévisions d'approvisionnement :** Partagez la version locale des données du programme avec le serveur et d'autres utilisateurs (téléchargement en tant que brouillon)
  - **Téléchargement final :**
    - **Planification de l'approvisionnement :** Indiquez à tous les utilisateurs que le plan d'approvisionnement a été entièrement mis à jour et lancez également le processus de révision du plan d'approvisionnement.
    - **Prévisions :** Permet d'importer les prévisions finales dans le plan d'approvisionnement
- <u>Que se passe-t-il lorsqu'un utilisateur télécharge un programme ?</u> Lorsque l'utilisateur télécharge un programme, celui-ci devient la dernière version sur le serveur et peut être téléchargé ou visualisé par tous les autres utilisateurs.
  - Notez que si une version tronquée du programme du plan d'approvisionnement a été téléchargée (par exemple v10), lorsque l'utilisateur télécharge sa version locale (devenant v11), la nouvelle version sur le serveur contiendra toutes les données, pas seulement le sous-ensemble avec lequel l'utilisateur a travaillé.
- <u>Quand ?</u> L'utilisateur doit être en ligne pour télécharger un programme

**Module de plan d'approvisionnement** - Comment télécharger un programme :

1. Assurez-vous que vous êtes dans le module Plan d'approvisionnement

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Go to "Program Management" > "Upload Version."</li>
<li>Or, Click the <img src="/img/media/image98.png" alt="upload icon" style={{ verticalAlign: 'middle' }} /> icon in the top right bar in QAT</li>
</ol>

<div style={{ display: 'flex', flexDirection: 'row', gap: '2%', flexWrap: 'wrap' }}>

<div style={{ flex: '1 1 50%', minWidth: '300px' }}>

2. Use **Program** dropdown to select the appropriate program, if it is not already selected (only downloaded programs will be visible)
3. Select a **Version Type** using the dropdown:

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Draft Version:</b> Indicates the supply plan is a work in progress. Use this to share a supply plan with others, but not ready to be submitted into the supply plan review process.</li>
<li><b>Final Version:</b> Indicates that the supply plan has reached a final status, and is being submitted to the supply plan review process. Note that QAT will not allow the user to upload as final with any “Open” issues in the QAT Problem List. Please use the QAT problem list (see <a href="08-supply-planning-module-supply-planning.md#closing-and-addressing-problems">Closing and Addressing Problems</a>) to mark any open issue as "Addressed" with an explanatory note, or move issue to "in compliance" via data entry first.</li>
</ol>
</div>

<div style={{ flex: '1 1 45%', minWidth: '300px' }}>

<div style={{textAlign: 'center'}}>

![Upload Version](/img/media/image99.png)

_Supply Planning - Upload Version_

</div>

| Fonctionnalité | PROJET | FINALE |
| :--------------------------------------------------- | :---: | :---: |
| Doit être en ligne pour télécharger la version locale sur le serveur |   ✓ |   ✓ |
| Données envoyées au(x) système(s) ERP lié(s) |   ✕ |   ✓ |
| Problèmes « ouverts » autorisés sur la liste des problèmes QAT |   ✓ |   ✕ |
| L'examinateur du plan d'approvisionnement sera informé |   ✕ |   ✓ |

<div style={{textAlign: 'center'}}>

_Uploading Supply Plan as Draft vs Final_

</div>

</div>

</div>

4. Dans **Remarques**, saisissez toutes les remarques générales sur cette version, par exemple en résumant les principales modifications apportées au plan d'approvisionnement et le raisonnement derrière ces modifications.
5. Dans les 4 onglets – Consommation, Inventaire, Expédition, Liste des problèmes QAT – QAT affichera une comparaison détaillée des détails du plan d'approvisionnement entre la « Version locale » et la « Version du serveur ». Examinez chaque onglet pour tous les enregistrements en surbrillance. Les enregistrements <span style={{backgroundColor: '#ffff00'}}>Jaune</span> nécessitent votre action avant que vous puissiez télécharger le plan d'approvisionnement.

<div style={{ marginLeft: '20px', marginTop: '10px' }}>
     <b>Legend Explanation:</b>

<ul style={{ marginTop: '5px', listStyleType: 'disc' }}>
<li><span style={{backgroundColor: '#c2e0c6'}}>Green</span>: represents changes that have been made in the local version; by uploading your program, these changes will save to the online server as a new version.</li>
<li><span style={{backgroundColor: '#cfe2f3'}}>Light blue</span>: represents changes made by another user that has already been uploaded to the live/online version - because this is a data point that you did not edit, the server version will persist for this/these records.</li>
<li><span style={{backgroundColor: '#ffff00'}}>Yellow</span>: represents a conflict in data between the local version and the server version for the same data cell. You must resolve all yellow conflicts before the Upload button appears. To resolve a conflict, right click on the relevant row, and select "Resolve Conflict." In the pop-up screen, choose whether to keep the <span style={{backgroundColor: '#c2e0c6'}}>local version of the data</span> or the <span style={{backgroundColor: '#cfe2f3'}}>server version of the data</span>.</li>
</ul>
</div>

<div style={{textAlign: 'center'}}>

![Resolving Conflict while uploading supply plan](/img/media/image100.png)

_Resolving Conflict while uploading supply plan_

</div>

6. Après avoir examiné toutes les mises à jour et résolu tous les conflits, cliquez sur le bouton « Télécharger ». QAT fournira un message de confirmation.
7. **(Pour la version finale)** Les planificateurs d'approvisionnement et les réviseurs du plan d'approvisionnement recevront une notification par courrier électronique confirmant que leur plan d'approvisionnement a été téléchargé comme final.
8. **(Pour la version finale)** Les planificateurs d'approvisionnement, les administrateurs de programme et les réviseurs de plan d'approvisionnement, les administrateurs de domaine, les utilisateurs de programme, les visualiseurs de données et les visualiseurs de plan d'approvisionnement recevront une notification par e-mail lorsque leur plan d'approvisionnement est rejeté. Ils peuvent également vérifier l'état de la révision de leur plan d'approvisionnement dans le rapport [Version et révision du plan d'approvisionnement](06-managing-programs-and-versions.md#d-supply-plan-version-and-review-supply-plan-module-only).

**Module de prévision** – Comment télécharger un programme :

1. Assurez-vous que vous êtes dans le module de prévisions

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Go to “Program Management” > “Upload Version.”</li>
<li>Or, Click the <img src="/img/media/image102.png" alt="upload icon" style={{ verticalAlign: 'middle' }} /> or <img src="/img/media/image103.png" alt="upload icon alternative" style={{ verticalAlign: 'middle' }} /> icon in the top right bar in QAT</li>
</ol>

<div style={{ display: 'flex', flexDirection: 'row', gap: '2%', flexWrap: 'wrap' }}>

<div style={{ flex: '1 1 50%', minWidth: '300px' }}>

2. Use **Program** dropdown to select the appropriate program, if it is not already selected (only downloaded programs will be visible)
3. Select a **Version Type** using the dropdown:

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Draft Version:</b> Indicates the forecast is a work in progress. Use this to share a forecast with others.</li>
<li><b>Final Version:</b> Indicates that the forecast has reached a final status and can be imported into the supply plan. Note that QAT will not allow the user to upload as final if no there are no changes between the latest server version and the version being uploaded.</li>
</ol>

</div>

<div style={{ flex: '1 1 45%', minWidth: '300px' }}>

<div style={{textAlign: 'center'}}>

![Upload Version](/img/media/image101.png)

_Forecasting - Upload Version_

</div>

| | PROJET | FINALE |
| :--- | :---: | :---: |
| Doit être en ligne pour télécharger la version locale sur le serveur | ✓ | ✓ |
| La consommation prévue peut être importée dans le module de planification des approvisionnements | ✕ | ✓ |

<div style={{textAlign: 'center'}}>

_Uploading Forecast as Draft vs Final_

</div>

</div>

</div>

4. Dans **Remarques**, saisissez toutes les remarques générales sur cette version, par exemple en résumant les principales modifications apportées aux prévisions et le raisonnement derrière ces modifications.
5. Dans les 5 onglets – Paramètres de version, Unité de planification, Consommation, Arborescence, Prévisions sélectionnées – QAT affichera une comparaison détaillée des détails entre la « Version locale » et la « Version du serveur ». Examinez chaque onglet pour tous les enregistrements en surbrillance. Les enregistrements <span style={{backgroundColor: '#ffff00'}}>jaunes</span> nécessitent votre action avant que vous puissiez télécharger votre version.

<div style={{ marginLeft: '20px', marginTop: '10px' }}>
     <b>Legend Explanation:</b>

<ul style={{ marginTop: '5px', listStyleType: 'disc' }}>
<li><span style={{backgroundColor: '#c2e0c6'}}>Green</span>: represents changes that have been made in the local version; by uploading your program, these changes will save to the online server as a new version.</li>
<li><span style={{backgroundColor: '#cfe2f3'}}>Light blue</span>: represents changes made by another user that has already been uploaded to the live/online version - because this is a data point that you did not edit, the server version will persist for this/these records.</li>
<li><span style={{backgroundColor: '#ffff00'}}>Yellow</span>: represents a conflict in data between the local version and the server version for the same data cell. You must resolve all yellow conflicts before the Upload button appears. To resolve a conflict, right click on the relevant row, and select "Resolve Conflict." In the pop-up screen, choose whether to keep the <span style={{backgroundColor: '#c2e0c6'}}>local version of the data</span> or the <span style={{backgroundColor: '#cfe2f3'}}>server version of the data</span>.</li>
</ul>
</div>

<div style={{textAlign: 'center'}}>

![Resolving Conflict while uploading forecast](/img/media/image104.png)

_Resolving Conflict while uploading forecast_

</div>

6. Après avoir examiné le tableau et confirmé les prévisions sélectionnées, cliquez sur le bouton « Télécharger ». Cela ouvrira une fenêtre contextuelle distincte (« Validation des prévisions »). L'écran **Validation des prévisions** offre aux utilisateurs la possibilité de vérifier leur travail et tout ce qu'ils auraient pu manquer lors de la création et de la sélection des prévisions. L'utilisateur a la possibilité d'afficher les différentes validations pour uniquement les <u>prévisions sélectionnées</u> pour chaque unité de planification, ou d'afficher les validations pour <u>toutes</u> prévisions dans le programme. Pour modifier ce paramètre, cochez/décochez la case en haut de l'écran. Pour faciliter l'accès, les validations en police <span style={{color: 'blue'}}>bleue</span> sont liées à la page de QAT où la validation est signalée. Par exemple, si une prévision n'est pas sélectionnée pour l'une des unités de planification, cliquer sur l'unité de planification dans la page de validation vous dirigera vers l'écran Comparer et sélectionner où vous pourrez sélectionner une prévision.

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Section 1</b> flags any active planning units that do not have a selected forecast.</li>
<li><b>Section 2</b> looks at all active planning units that use consumption-based forecasting. 2a will flag if any of the consumption forecasts are missing actual consumption values (gap). 2b will flag any planning units that do not have at least 24 months of consumption data. If the checkbox at the top is selected, then only the planning units with a selected consumption forecast will be flagged. Planning units with a selected tree forecast will not be flagged in this section.</li>
<li><b>Section 3</b> looks at all active planning units that use tree forecasting. Planning units with a selected consumption forecast will not be flagged in this section. 3a flags any planning units that do not appear on any tree. 3b flags any tree branches that are missing a planning unit. 3c flags any tree nodes where the parent’s child nodes don’t add up to exactly 100%. In section 3c, clicking on the + icon will expand a table with details on which nodes and % are being flagged.</li>
<li><b>Section 4</b> compiles all of the notes across the different screens in the forecasting module. 4a will display notes from the Data Entry & Adjustment screen. 4b will display notes from the ‘Manage Tree’ screen. These notes include both tree specific notes and scenario specific notes. 4c will display notes from the ‘Manage Tree’ screen, specifically the notes in each node.</li>
</ol>

<div style={{textAlign: 'center'}}>

![Forecast Validation](/img/media/image105.png)

_Forecast Validation_

</div>

7. Après avoir examiné toutes les validations et résolu tous les problèmes, cliquez sur le bouton « OK » pour télécharger. QAT fournira un message de confirmation.

## D. Version et révision du plan d'approvisionnement (module du plan d'approvisionnement uniquement)

- <u>Qui ?</u> Cette fonction est disponible pour les **administrateurs d'application/domaine/programme, utilisateurs du programme, réviseurs de plan d'approvisionnement et visualiseurs de plan d'approvisionnement**
- <u>Quand ?</u> L'utilisateur doit être en ligne. Les réviseurs du plan d'approvisionnement recevront un e-mail de QAT chaque fois qu'un plan d'approvisionnement sera téléchargé comme final (c'est-à-dire prêt à être examiné).
- <u>Pourquoi ?</u> Cette fonction permet aux utilisateurs de **examiner l'état de révision du plan d'approvisionnement des plans d'approvisionnement.**
  - Les **planificateurs d'approvisionnement** (administrateurs et utilisateurs du programme) peuvent vérifier l'état de leur examen
  - Les **réviseurs du plan d'approvisionnement** peuvent consulter la file d'attente de révision
  - Les **observateurs du plan d'approvisionnement** peuvent vérifier l'état des révisions du plan d'approvisionnement.
- <u>Comment ?</u>
  1. Allez dans « Gestion du programme » &gt; « Version et révision du plan d'approvisionnement » et l'écran ci-dessous s'affichera. Sélectionnez la période du rapport, le pays, le programme, le type de version et le statut. Dans ce tableau, les utilisateurs peuvent voir l'état de tous les plans d'approvisionnement et les commentaires de version. Les utilisateurs peuvent également utiliser les options de recherche, de filtrage et de tri (voir [Navigation et barre de menus](05-getting-started.md#j-navigation-and-menu-bar)) pour rechercher des programmes spécifiques.

<div style={{textAlign: 'center'}}>

![Supply Plan Versions and Review](/img/media/image106.png)

_Supply Plan Versions and Review_

</div>

2. Cliquez sur n'importe quelle ligne du tableau pour ouvrir les détails de ce plan d'approvisionnement.
   _**Pour les réviseurs du plan d'approvisionnement UNIQUEMENT –**_

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Use the first tab “Supply Planning” to review the stock status and data elements of any given planning unit</li>
<li>
       Use the second tab “QAT Problem List” to review any issues within the supply plan.

<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Use the “Reviewed” column and check the checkbox in each row as you review them. All issues other than “in compliance” or “resolved” must be checked as “reviewed” in order for you to approve or reject the plan.</li>
<li>Use the “Enter Reviewer Notes” column to note any feedback for the supply planner.</li>
<li>Update the “Problem Status” as needed – Leave issues as “Addressed” if you want the supply planner to review them again in the next review cycle (the issue will become “open” in the next version). Mark issues as “Resolved” if they don’t need to be reviewed again even in future review cycles. Mark issues as “Open” if you want to communicate to the reviewer that they need to update their comments.</li>
<li>
           If there is a problem that should be addressed by the supply planner, but is not automatically flagged by the QAT Problem List, the reviewer can add a manual problem by clicking the “+” symbol <img src="/img/media/image103.png" alt="plus symbol" style={{ verticalAlign: 'middle' }} /> in the top right of the screen.

<ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
<li>Manual problems must have an associated planning unit, criticality, description, and suggestion. These problems will be added as a separate row in the QAT Problem List for supply planners to address.</li>
</ol>
</li>
</ol>
</li>
<li>
Après examen, changez le statut du plan d'approvisionnement en Approuvé ou Nécessite une révision, fournissez des notes (obligatoire) et cliquez sur « Mettre à jour ».
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>
Utilize the Version Notes History to view overall notes on the supply plan through time.

<div style={{textAlign: 'center'}}>

![View Notes History Button](/img/media/image107.png)

_View Notes History Button_

</div>

<div style={{textAlign: 'center'}}>

![Version Notes History Example](/img/media/image108.png)

_Version Notes History Example_

</div>
</li>
<li>
<b>Note:</b> There is an additional status for “No Review Needed” that can be used when a duplicate supply plan is uploaded or a supply plan is uploaded outside of the submission period window.

<div style={{textAlign: 'center'}}>

![Supply Plan Version and Review (second screen)](/img/media/image109.png)

_Supply Plan Version and Review (second screen)_

</div>
</li>
</ol>
</li>
</ol>

3. L'utilisateur qui a soumis le plan d'approvisionnement pour examen sera informé par e-mail lorsque sa soumission est approuvée, nécessite une révision ou aucune révision n'est nécessaire. Les règles relatives aux notifications par courrier électronique de révision du plan d'approvisionnement sont les suivantes :
<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>
Notification of <b>Uploaded</b> final supply plan
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: All supply plan reviewers with access to that program.</li>
<li>Cc'd: User who uploaded the version</li>
<li>Bcc'd: All program admins with access to that program.</li>
</ol>
</li>
<li>
Notification du plan d'approvisionnement <b>à réviser</b> :
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the supply plan.</li>
<li>Cc'd: Reviewer who requested revisions to the version</li>
<li>Bcc'd: All reviewers with access to that program as well as admins with access to that program.</li>
</ol>
</li>
<li>
Notification du plan d'approvisionnement <b>approuvé</b> :
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the plan.</li>
<li>Cc'd: All users who have access to that program except for app admins and reports viewer.</li>
</ol>
</li>
<li>
Notification du plan d'approvisionnement de <b>Aucun examen nécessaire</b> :
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the plan</li>
<li>Cc'd: The supply plan reviewer</li>
</ol>
</li>
</ol>

## E. Exporter

- <u>Qui ?</u> Cette fonction est disponible pour les **administrateurs d'application/domaine/programme, les utilisateurs du programme et les réviseurs de plans d'approvisionnement.** Cette fonction n'est pas disponible ou nécessaire pour les **observateurs de rapports.**
- <u>Pourquoi ?</u> La fonction « Exporter le programme » est utilisée lorsque l'utilisateur souhaite exporter le programme vers sa machine locale. En utilisant la fonction Exporter, les données du programme peuvent être partagées avec d'autres personnes hors ligne. Par exemple, l'utilisateur A peut exporter un programme et enregistrer ce fichier sur une clé USB pour le partager avec l'utilisateur B, qui est hors ligne.
- <u>Quoi ?</u> Le fichier de données du programme sera exporté au format zip. Le fichier zip contient toutes les données de cette version du programme. Les utilisateurs peuvent choisir d'exporter au format crypté ou non crypté. Ce fichier peut ensuite être partagé avec d'autres pour être importé dans QAT ou, s'il n'est pas chiffré, analysé en dehors de QAT.
  - **Remarque :** si l'utilisateur a téléchargé une version avec une plage de données sélectionnée, l'exportation concernera également cette plage de données sélectionnée.)

<div style={{textAlign: 'center'}}>

![Export Program Screen](/img/media/image110.png)

_Export Program Screen_

</div>

- <u>Comment exporter un programme :</u>
<ol style={{ paddingLeft: '20px' }}>
<li>Determine whether you would like to export from the forecasting or the supply planning module, and navigate to the correct module (See [Section 2.J Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar)). If you only have access to one module, you can ignore this step.</li>
<li>Go to “Program Management” > “Export Program”</li>
<li>
Select the program to be exported using the dropdown. Programs must be first downloaded before exporting is available. (See [Section 3.B Download/Delete Program](06-managing-programs-and-versions.md#b-downloaddelete-program)).
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li>If the program was downloaded with a subset of data, the export will also be limited to that same subset.</li>
</ul>
</li>
<li>
Determine whether or not you need an unencrypted version.
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li>For importing back into QAT, leave the “Do you want to encrypt” checkbox checked</li>
<li>For analyzing data outside of QAT, uncheck the “Do you want to encrypt” checkbox</li>
</ul>
</li>
<li>Click on the “Submit” button to save the changes.</li>
<li>A browse window will pop up. Select the folder you want to save the exported file in. Then click “Save.”</li>
<li>The .zip file will now be saved in the selected folder.</li>
<li>Share the .zip file with others as needed.</li>
</ol>

## F. Importer

<ul>
<li><u>Who?</u> This function is available for <b>Application/Realm/Program Admins, Program Users and Supply Plan Reviewers.</b> Not available or needed for <b>Report Viewers</b></li>
<li>
<u>Pourquoi ?</u> La fonction « Importer un programme » est utilisée lorsque l'utilisateur travaille sur le programme en mode hors ligne et souhaite ouvrir un programme exporté dans un fichier .zip.
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li><b>Note:</b> The program data file must be saved in the zip format). For example, user B can (while offline) import a program that user A exported and saved to an external device</li>
<li><b>Note:</b> If the user exported a version with a selected range of data, the import will also be for that selected range of data.</li>
</ul>
</li>
<li><u>When?</u> This function can be used when offline or online.</li>
</ul>

<div style={{textAlign: 'center'}}>

![Import Program Screen](/img/media/image111.png)

_Import Program Screen_

</div>

- <u>Comment importer un programme :</u>
<ol style={{ paddingLeft: '20px' }}>
<li>Determine whether you would like to export from the forecasting or the supply planning module, and navigate to the correct module (See [Section 2.J Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar)). If you only have access to one module, you can ignore this step.</li>
<li>Go to “Program Management” > “Import Program”</li>
<li>Click “Browse”. Choose the required file that needs to be imported. The selected file must be in the zip format. The zip file may have multiple programs.</li>
<li>Click “Next”</li>
<li>Select the required program to import. (if only one program is in the file, it will be auto selected)</li>
<li>Click on the “Import” button to import the program into the local machine.</li>
</ol>

## G. Comparaison des versions

**Objectif :** Permettre aux utilisateurs de visualiser et de comparer 2 versions différentes du même programme de prévisions. Dans cet écran, les utilisateurs sélectionneront un programme de prévision à afficher et à partir de là, sélectionneront 2 versions de ce programme à comparer. L'utilisateur peut sélectionner à la fois les versions locales et celles du serveur, ainsi que les versions brouillon et finale. Si la version est précédée d'un \*, cela indique que la version est définitive. Une fois que l'utilisateur a sélectionné toutes les listes déroulantes, un tableau apparaîtra comparant les deux versions de prévisions. Pour chaque combinaison d'unité de planification et de région, le tableau affichera la prévision sélectionnée, la quantité prévue et les notes pour chacune des 2 versions de prévision. Cet écran est uniquement destiné à des fins de visualisation et aucune modification ne peut être apportée aux prévisions sélectionnées dans cet écran.

<div style={{textAlign: 'center'}}>

![Version Comparison Interface](/img/media/image112.png)

_Version Comparison_

</div>

<u>**Utilisation de cet écran :**</u>

1. Tout d’abord, sélectionnez parmi les filtres de sortie dans les listes déroulantes. Cet écran ne compare qu'un seul programme à la fois, mais permet à l'utilisateur de comparer plusieurs versions de ce programme. L'utilisateur a la possibilité de comparer n'importe quelle combinaison de versions finales et préliminaires ainsi que de versions locales et serveur. Si la version est précédée d'un \*, cela indique que la version est définitive. Les notes de version et la période de prévision apparaîtront grisées car ce sont des champs non modifiables. Pour mettre à jour ces champs, accédez à « Paramètres de version ».
2. Une fois toutes les listes déroulantes sélectionnées, un tableau apparaîtra avec les données des deux versions de prévisions sélectionnées. Pour chaque combinaison d'unité de planification et de région, le tableau affiche la prévision sélectionnée, la quantité totale prévue pour la période de prévision et toutes les notes de prévision pour cette prévision sélectionnée. Chaque côté du tableau représente 1 des 2 versions de prévisions sélectionnées. La ligne supérieure du tableau indique pour quelle version le côté affiche les données.
3. Cet écran peut être exporté au format PDF et CSV en cliquant sur les icônes en haut à droite de la page.
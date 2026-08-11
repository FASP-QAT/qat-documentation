---
id: supply-planning-module-reports
title: "6. Supply Planning Module: Reports"
sidebar_label: "   6. Supply Plan Reports"
sidebar_position: 7
---
# Section 6. Module de planification des approvisionnements : Rapports

Les rapports QAT permettent à l'utilisateur d'extraire et d'afficher ses données de planification des approvisionnements sous forme de graphiques, de tableaux et d'autres formats visuels. L'utilisateur pourra également naviguer, trier, filtrer et visualiser les données pour des besoins spécifiques. Les rapports QAT produisent des visualisations et affichent les données de manière à faciliter la prise de décision.

Les rapports sont divisés en **Rapports globaux** et **Rapports spécifiques au programme**. Les rapports spécifiques au programme sont affichés hors ligne et en ligne. Toutefois, les rapports globaux sont affichés uniquement en mode en ligne et ne sont disponibles que pour les utilisateurs globaux, tels que l'administrateur de domaine et l'administrateur d'application.

**Remarque :** Tous les rapports QAT peuvent être exportés dans un fichier Excel CSV ainsi qu'au format PDF. De plus, tous les graphiques permettent à l'utilisateur de survoler un visuel pour afficher une info-bulle contenant plus d'informations.

## A. **Liste des problèmes QAT**

**Objectif :** Un examen du plan d'approvisionnement intégré à QAT qui permet un contrôle de qualité pour identifier facilement les données/problèmes problématiques et les corriger avant de télécharger un plan d'approvisionnement sur le serveur en tant que version « ébauche » ou « finale ».

- **Accessible à :** Administrateurs de domaine, administrateurs de programme et utilisateurs du programme
- **Navigation :** Rapports → Liste des problèmes QAT

![Figure 120: QAT Problem List](/img/media/image198.png)
*Figure 120 : Liste des problèmes QAT*

**Remarque :** Seul le problème associé aux programmes téléchargés par l'utilisateur sur son ordinateur local apparaîtra dans la liste des problèmes QAT. Pour plus de détails sur la façon de télécharger des programmes et des versions spécifiques, reportez-vous à la section [Télécharger le programme] (./06-managing-programs-and-versions.md#b-downloaddelete) du manuel de l'utilisateur.

### R1. **Bases de la liste des problèmes QAT**
Chaque problème signalé dans la liste des problèmes QAT aura une ligne distincte. Celui-ci contiendra l'unité de planification associée, une description du problème, une suggestion sur la façon de résoudre le problème, l'état du problème, des notes d'utilisateur, une case à cocher pour identifier si le problème a été examiné, les dernières notes du réviseur (le cas échéant), la date de sa dernière révision et la criticité.

![Figure 121: Aspects QAT Problem List](/img/media/image199.png)
*Figure 121 : Liste des problèmes liés au QAT*

Les problèmes QAT peuvent être subdivisés en quatre catégories principales : qualité des données, calendrier d'approvisionnement, planification des approvisionnements et autres. Ils sont également affectés à différents niveaux de criticité : faible (jaune), moyen (orange) et élevé (rouge). La criticité informe les utilisateurs dans quelle mesure un problème affecte la qualité du plan d'approvisionnement. Cependant, quelle que soit leur gravité, tous les problèmes doivent être « Conforme » ou « Résolus » dans la liste des problèmes QAT pour être téléchargés en tant que version finale. Il existe cinq statuts principaux associés aux problèmes individuels dans la liste des problèmes QAT :

1. **Conforme** – Le problème a été résolu grâce à la saisie des données par l'utilisateur. Le statut sera automatiquement modifié et les notes ne seront pas requises.

   Exemple – *Il manque une consommation réelle dans une unité de planification au cours des 3 derniers mois. Un utilisateur saisit les données de consommation réelle des 3 derniers mois. QAT marque automatiquement cela comme « conforme ».*
2. **Résolu** – Le problème a été marqué manuellement par le réviseur comme « résolu ». L'examinateur utilise ce statut s'il est peu probable que ce problème soit corrigé via la saisie des données et qu'il ne nécessite pas non plus de notes supplémentaires à l'avenir. Seul un évaluateur peut marquer un problème comme « résolu ».

   Exemple – *Une unité de planification est signalée pour ne pas suivre les prévisions dynamiques. L'utilisateur saisit une note indiquant que cette unité de planification ne suit pas les prévisions dynamiques car il ne s'agit pas d'un produit saisonnier. L'évaluateur marque ce problème comme résolu car l'explication ne changera probablement pas à l'avenir.*
3. **Adressé** – Le problème a été marqué manuellement par le réviseur ou l'utilisateur comme « résolu ». L'utilisateur applique ce statut lorsqu'il ne peut pas résoudre le problème via la saisie de données. Ce statut doit être accompagné d'une note. L'évaluateur utilise ce statut si le problème ne peut pas être résolu au cours de cette période d'évaluation, mais qu'il le sera à l'avenir, très probablement dans quelques périodes, plutôt qu'avant la prochaine évaluation.

Exemple – *Une unité de planification en cours de suppression n'a que 8 mois de consommation prévue dans le futur au lieu de 18. Ceci est acceptable car il s'agit d'une unité de planification en cours de suppression, mais l'utilisateur devra toujours désactiver l'unité de planification une fois qu'elle sera complètement supprimée, c'est pourquoi le problème est marqué comme « résolu » au lieu de « résolu ».*
4. **Ouvert** – Ce problème a été automatiquement signalé par QAT, ou le problème a été marqué manuellement par le réviseur comme « Ouvert ». Le réviseur peut utiliser ce statut lorsqu'il rejette un plan d'approvisionnement pour indiquer que les notes ne sont pas acceptées.

   Exemple – *Un utilisateur dispose d'une unité de planification pour laquelle il manque des données de consommation réelle au cours des 3 derniers mois. QAT le signalera automatiquement comme « Ouvert ». Si le problème a été « résolu » lors du téléchargement et de l'approbation, le problème reviendra au statut « Ouvert » pour la prochaine soumission.*
5. **Révisé** - Le problème a été examiné par l'examinateur du plan d'approvisionnement. Ce champ est modifiable uniquement par le réviseur du plan d'approvisionnement.

###A2. **Clôture et résolution des problèmes**

1. **Clôture d'un problème via la saisie de données :** pour remplacer un problème « Ouvert » par un problème « Conforme », l'utilisateur devra compléter la suggestion fournie dans la colonne « Suggestion » pour le problème spécifique. Par exemple, la suggestion peut être de « fournir la consommation réelle » pour des mois spécifiques. Ainsi, l'utilisateur devra :

   ![Figure 122: Closing a Problem Example](/img/media/image200.png)
   *Figure 122 : Clôture d'un exemple de problème*

   <ol style={{listStyleType: 'lower-alpha'}}>
     <li>Navigate to the Consumption Data Entry screen by either clicking directly on the Problem (which will open a new QAT window) or by clicking on Supply Plan Data → Consumption Data.</li>
     <li>From the consumption data entry screen, the user will add actual consumption for the requested months. For instructions on how to add consumption, please refer to <a href="./07-supply-planning-module-program-data.md#consumption-data">Consumption Data</a>.</li>
     <li>Navigate back to the QAT Problem List and click Recalculate to refresh the QAT Problem List to include the most recent addition of actual consumption data. The previously flagged problem should now be “In-compliance” and no longer be flagged by the QAT Problem List.</li>
   </ol>

   ![Figure 123: QAT Problem List Recalculate/Refresh](/img/media/image201.png)
   *Figure 123 : Recalculer/Actualiser la liste des problèmes QAT*

2. **Résoudre un problème avec un commentaire :** Si un problème qui a été signalé dans la liste des problèmes QAT ne peut pas être résolu et rendu « conforme » via la saisie de données comme recommandé dans la colonne « Suggestion », un utilisateur peut fournir un commentaire et modifier manuellement le statut en « Adressé ». Par exemple, une unité de planification peut être en surstock/sous-stock et la suggestion de « réévaluer le plan d'approvisionnement pour répondre aux paramètres min/max » est présentée. Si un utilisateur ne parvient pas à résoudre ce problème via la saisie de données, il devra résoudre le problème :
   <ol style={{listStyleType: 'lower-alpha'}}>
     <li>Double-click on the Problem Status dropdown for that problem and choose "Addressed." Users must provide an explanatory note in the Notes column for all problems marked as "Addressed."</li>
   </ol>

   ![Figure 124: Addressing a Problem & Adding a Note](/img/media/image202.png)
   *Figure 124 : Résoudre un problème et ajouter une note*

   **Remarque :** l'utilisateur peut également voir l'écran « Détails de la transaction problématique » en cliquant avec le bouton droit sur le problème. Cette zone affichera à l'utilisateur les notes passées, les réviseurs, les dates de révision, etc.

   ![Figure 125: Problem Transaction Right Click](/img/media/image203.png)
   *Figure 125 : Transaction problématique, clic droit*

   ![Figure 126: Problem Transaction Details](/img/media/image204.png)
   *Figure 126 : Détails de la transaction problématique*

   <ol style={{listStyleType: 'lower-alpha'}} start="2">
     <li>Click "Update." The QAT Problem List will now include the most recent addition of explanatory notes and the status.</li>
   </ol>

###A3. **Liste des problèmes QAT : explication des problèmes**

- **Données de consommation réelles récentes manquantes (au cours des 3 derniers mois)**
  Si une unité de planification manque de données de consommation réelles récentes au cours des trois derniers mois, elle sera signalée dans la liste des problèmes QAT. Si les données sont renseignées pour l'un de ces trois derniers mois, qu'il s'agisse d'un mois ou de l'ensemble des trois mois, le problème ne sera pas signalé par le système.

- **Éventuels écarts au cours des 6 derniers mois (consommation réelle)**
  QAT vérifie s'il manque à une unité de planification un ou plusieurs mois d'entrées de consommation réelle récentes entre deux entrées de consommation réelle dans la plage de 6 mois spécifiée. Ce problème consiste à rechercher des écarts accidentels dans les intrants de consommation réels. S'il existe des écarts dans les données de consommation réelle au cours des 6 derniers mois, la liste des problèmes QAT le signalera comme un problème. Par exemple, un utilisateur saisit la consommation réelle pour septembre 2022, décembre 2022 et janvier 2023. Cela sera signalé par la liste des problèmes QAT car il existe un écart d'entrées de consommation réelle manquantes pour octobre 2022 et novembre 2022.

- **Entrée d'inventaire récente manquante (au cours des 3 derniers mois)**
  Si une unité de planification ne dispose pas d'entrées de données d'inventaire réelles récentes au cours des trois derniers mois, elle sera signalée dans la liste des problèmes QAT. Si les données sont renseignées pour l'un de ces trois derniers mois, qu'il s'agisse d'un mois ou de l'ensemble des trois mois, le problème ne sera pas signalé par le système.

- **Le plan d'approvisionnement ne prévoit pas de consommation au cours des 18 prochains mois**
  Si une unité de planification ne dispose pas des entrées de consommation prévues pour un ou plusieurs mois sur une période de 18 mois à compter du mois en cours, QAT le signalera comme un problème. QAT vérifiera les écarts pour s'assurer que tous les 18 mois à venir ont des valeurs de consommation prévues.

  **Remarque :** *Si une unité de planification est en cours de suppression progressive, il est recommandé à l'utilisateur de mettre zéro comme consommation prévue, jusqu'à ce qu'elle soit complètement supprimée, auquel cas l'unité de planification devra être désactivée.*

- **Envois avec des dates de réception passées**
  QAT vérifiera les dates de réception de tous les envois pour voir s'il y en a dans le passé en fonction de la date actuelle. Si la date de réception d'un envoi est antérieure, elle sera signalée dans la liste des problèmes QAT. Par exemple, il existe une unité de planification avec une date de réception du 31 décembre <sup>st</sup> 2022. Comme cette date est passée, QAT la signalera et l'utilisateur devra soit modifier le statut de l'expédition sur « Reçu », soit modifier la date de réception pour une date ultérieure.

  **Remarque :** *il existe un délai tampon de quatorze jours pour que QAT reconnaisse que la date de réception de l'envoi est passée et que le problème soit signalé.*

- **Envois qui auraient dû être soumis avant la date cible**
  QAT vérifiera les dates d'expédition estimées, qui sont calculées sur la base des délais de livraison prédéfinis du programme, pour voir s'il y a eu des expéditions avec une date de « Soumission » estimée dans le passé. Si la date estimée de soumission de l'envoi est antérieure, elle sera signalée dans la liste des problèmes QAT. Par exemple, il existe une unité de planification dont la date de soumission cible est le 15<sup>janvier</sup> 2023. Comme cette date est située dans le passé, QAT la signalera et l'utilisateur devra soit modifier le statut de l'expédition sur « Soumis », soit modifier la date de réception pour une date ultérieure. Si vous modifiez la date de réception à une date ultérieure, QAT recalculera automatiquement les dates d'expédition cibles. S'il n'est pas possible de modifier le statut ou la date de réception, un utilisateur peut « résoudre » le problème (voir [Clôture et résolution des problèmes] (#a2-closing-and-addressing-problems)).

  **Remarque :** *Il existe un délai tampon de quatorze jours pour que QAT reconnaisse que la date de soumission de l'envoi est passée et que le problème soit signalé.*

- **La prévision dynamique n'est pas utilisée (pour les groupes de produits Paludisme, ARV, VMMC)**
  Pour tous les produits appartenant aux catégories de traceurs suivantes : Paludisme, ARV ou VMMC, QAT vérifiera les prévisions dynamiques. GHSC-PSM encourage les prévisions avec des valeurs mensuelles dynamiques, afin de montrer que des facteurs tels que la saisonnalité, la mise à l'échelle du programme ou les campagnes ont été pris en compte. Si une unité de planification de l'un de ces trois groupes de produits connaît quatre mois consécutifs de consommation statique, elle sera signalée dans la liste des problèmes QAT.

- **Le plan d'approvisionnement ne suit pas les paramètres minimum/maximum**
  Si une unité de planification est en surstock, en sous-stock ou en rupture de stock à tout moment au cours des 18 prochains mois, elle sera signalée dans la liste des problèmes QAT. QAT comptera le nombre de mois pendant lesquels l'unité de planification est en surstock et en sous-stock, en la subdivisant en deux fenêtres temporelles différentes : les mois compris dans le délai d'exécution (1 à 6 mois) et ceux compris dans la fenêtre de planification (7 à 18 mois). La liste des problèmes QAT indiquera également le nombre d’envois reçus au cours des 1 à 6 prochains mois et des 7 à 18 prochains mois. Les ruptures de stock seront signalées comme un problème distinct dans la liste des problèmes QAT. QAT indiquera directement quels mois sont en rupture de stock dans les périodes subdivisées de 1 à 6 mois et de 7 à 18 mois. La liste des problèmes QAT indiquera également le nombre d’envois reçus au cours des 1 à 6 prochains mois et des 7 à 18 prochains mois.

**Planifier par MOS :** Le surstockage est défini par le MOS &gt; MOS maximum. Le sous-stockage est défini par le MOS &lt; MOS minimum. Voir ci-dessous un exemple de problème et le graphique du plan d'approvisionnement qui l'accompagne :

  <div style={{border: '1.5px solid #000', padding: '15px', margin: '20px auto', maxWidth: '500px', backgroundColor: '#ffffff', textAlign: 'center', color: '#000'}}>
    <p style={{fontWeight: 'bold', fontSize: '1.15em', margin: '0 0 10px 0'}}>Flagged in Feb 2021</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 1-6 months (Mar 21 - Aug 21), inventory is...</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 5px 0'}}>understocked for 2 month(s)</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 10px 0'}}>overstocked for 1 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 7-18 months (Sep 21 - Aug 22), inventory is...</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 5px 0'}}>understocked for 0 month(s)</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 15px 0'}}>overstocked for 3 month(s)</p>
    <br/>
    <p style={{margin: '0', fontStyle: 'italic'}}><b>Note:</b> There are 2 shipment(s) in the next 1-6 months, and<br/>there are 3 shipment(s) in the next 7-18 months.</p>
  </div>

  ![Figure 127: Supply Plan does not follow min/max MOS parameter example](/img/media/image205.png)
  *Figure 127 : Le plan d'approvisionnement ne suit pas l'exemple du paramètre MOS min/max*

  **Remarque :** *Si la valeur MOS pour un mois donné est « N/A », alors tous ces cas sont exclus lors du calcul des problèmes de surstock, de sous-stock ou de rupture de stock.*

  **Exemple de planification par quantité :** Le surstock est défini par la quantité du solde final &gt; quantité maximale. Le sous-stockage est défini par la quantité du solde de clôture &lt; quantité minimale. Notez que QAT ne signalera le surstock que si ce surstock se produit plus que le délai de distribution consécutif (par exemple, si le délai est de 2 mois, alors QAT signalera s'il y a un excédent de stock plus de 2 mois d'affilée - mais ne signalera pas le problème si le surstock est tous les deux mois). Voir ci-dessous un exemple de problème et le graphique du plan d'approvisionnement qui l'accompagne :

  <div style={{border: '1.5px solid #000', padding: '15px', margin: '20px auto', maxWidth: '550px', backgroundColor: '#ffffff', textAlign: 'center', color: '#000'}}>
    <p style={{fontWeight: 'bold', fontSize: '1.15em', margin: '0 0 10px 0'}}>Flagged in Feb 2021 (Distribution lead time is 1 month)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 1-6 months (Mar-23 to Aug-23), inventory is...</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>* over the max stock qty + distribution lead time for 1 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 15px 0'}}>* under the min stock qty for 0 month(s)</p>
    <br/>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 7-18 months (Sep-23 to Aug-24), inventory is...</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>* over the max stock qty + distribution lead time for 6 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 0 0'}}>* under the min stock qty for 0 month(s)</p>
  </div>

  ![Figure 128: Supply Plan does not follow min/max quantity parameter example](/img/media/image206.png)
  *Figure 128 : Le plan d'approvisionnement ne suit pas l'exemple du paramètre de quantité min/max*

- **Autre – Manuel**
  Il s'agit de questions ou de clarifications spécifiques saisies manuellement par le réviseur du plan d'approvisionnement qui ne sont pas automatiquement signalées par QAT. Ces problèmes peuvent être des éléments que l'examinateur du plan d'approvisionnement souhaite résoudre ce trimestre avant de finaliser ou un rappel pour la prochaine soumission trimestrielle. La description du problème, la suggestion et la criticité sont déterminées par l'examinateur du plan d'approvisionnement.

## B. Catalogue des programmes

**Objectif :** afficher une liste standardisée de toutes les unités de planification et unités de prévision d'un programme QAT et de leurs attributs correspondants.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme
- **Navigation :** Rapports ➔ Catalogue de programmes
- **Remarques :** Un utilisateur peut sélectionner toutes les catégories d'unités de planification et catégories de traceur, ou choisir une catégorie spécifique à afficher. Si un utilisateur souhaite ajouter une unité de planification qui n'apparaît pas dans le rapport du catalogue de programmes, veuillez vous référer à [Tickets pour l'ajout/la mise à jour des utilisateurs et des données de base](./05-getting-started.md#i1-tickets-for-addingupdating-users-and-master-data).

![Figure 129: Program Catalog Report](/img/media/image207.png)
*Figure 129 : Rapport sur le catalogue de programmes*

## C. Rapports sur l'état des stocks

###C1. État des stocks au fil du temps
**Objectif :** comparer un ou plusieurs produits et leurs niveaux de stock sur une période donnée.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme
- **Navigation :** Rapports ➔ État du stock ➔ État du stock au fil du temps
- **Remarques :** L'unité de planification peut être unique, à sélection multiple ou tout sélectionner. L'option « Sélectionner tout » peut ne pas être avantageuse si le programme comporte de nombreuses unités de planification, car le graphique ne pourra pas discerner les lignes individuelles du graphique. Nous vous suggérons de choisir moins de dix produits à la fois. Plus précisément, ce rapport peut être utile pour comparer les catégories.

![Figure 130: Stock Status Over Time Report](/img/media/image208.png)
*Figure 130 : Rapport sur l'état des stocks au fil du temps*

###C2. Matrice de l'état des stocks
**Objectif :** fournir un aperçu rapide des mois de stock au fil du temps dans un format de tableau facile à lire.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme
- **Navigation :** Rapports ➔ État des stocks ➔ Matrice de l'état des stocks
- **Remarques :**
  - Une ligne est affichée pour chaque combinaison d'unité de planification et d'année, en fonction de ce qui est sélectionné dans les filtres supérieurs.
  - QAT affichera le MOS ou la quantité pour chaque unité de planification selon que le produit est planifié par quantité ou par MOS, comme sélectionné dans l'écran Mettre à jour les unités de planification (voir Section 4.A2).
  - Les couleurs correspondent aux niveaux de stock du mois en question :
    - Rouge – En rupture de stock
    - Orange – Sous-stocké
    - Vert – Stocké selon le plan
    - Jaune – Surstocké
    - Gris – N/A (QAT est incapable de calculer la valeur en raison de données manquantes)
  - Bien que le CSV n'exporte pas les couleurs formatées conditionnellement, le PDF contient les couleurs et les utilisateurs peuvent copier et coller le tableau pour conserver toutes les couleurs et le formatage.

![Figure 131: Stock Status Snapshot Report](/img/media/image209.png)
*Figure 131 : Rapport instantané sur l'état des stocks*

###C3. Aperçu de l'état des stocks
**Objectif :** donner une vue d'ensemble de l'état des stocks d'un programme dans les unités de planification à un moment donné (un mois).

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme
- **Navigation :** Rapports ➔ État des stocks ➔ Aperçu de l'état des stocks
- **Remarques :**
  - Les différentes couleurs correspondent aux niveaux de stock du mois en question :
    - Rouge – En rupture de stock
    - Orange – Sous-stocké
    - Vert – Stocké selon le plan
    - Jaune – Surstocké
    - Gris – N/A (QAT est incapable de calculer la valeur en raison de données manquantes)
  - Bien que les fichiers PDF et CSV n'exportent pas les couleurs formatées conditionnellement, les utilisateurs peuvent copier et coller le tableau pour conserver toutes les couleurs et le formatage.

![Figure 132: Stock Status Snapshot Report](/img/media/image210.png)
*Figure 132 : Rapport instantané sur l'état des stocks*

###C4. Aperçu de l'état des stocks (mondial)
**Objectif :** donner une vue d'ensemble de l'état des stocks d'un programme dans les unités de planification à un moment donné (un mois) pour plusieurs programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseurs de rapports
- **Navigation :** Rapports ➔ État des stocks ➔ Aperçu de l'état des stocks (mondial)
- **Remarques :**
  - Les différentes couleurs correspondent aux niveaux de stock du mois en question :
    - Rouge – En rupture de stock
    - Orange – Sous-stocké
    - Vert – Stocké selon le plan
    - Jaune – Surstocké
  - Bien que les fichiers PDF et CSV n'exportent pas les couleurs formatées conditionnellement, les utilisateurs peuvent copier et coller le tableau pour conserver toutes les couleurs et le formatage.

![Figure 133: Stock Status Snapshot (Global) Report](/img/media/image211.png)
*Figure 133 : Rapport instantané sur l'état des stocks (mondial)*

## D. Rapports de consommation

###DI. Consommation (mondiale)
**Objectif :** afficher visuellement la consommation d'une ou de plusieurs unités de planification dans différents pays.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseurs de rapports
- **Navigation :** Rapports ➔ Rapports de consommation ➔ Consommation (mondiale)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The various colors stacked in the horizontal bars represent different countries. Users can determine which country by referencing the graph legend.</li><li>The x-axis corresponds to the consumption quantity (in millions) for each country.</li></ul></li></ul>

###D2. Erreur de prévision (mensuelle)
**Objectif :** afficher visuellement l'exactitude des prévisions à l'aide de la méthode du pourcentage d'erreur moyen pondéré (WAPE), au fil du temps, tout en comparant la consommation prévue à la consommation réelle.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme
- **Navigation :** Rapports ➔ Rapports de consommation ➔ Erreur de prévision (mensuel)

![Figure 135: Forecast Error (Monthly) Report](/img/media/image213.png)
*Figure 135 : Rapport d'erreur de prévision (mensuel)*

<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>In the graph, the red vertical bars represent the actual consumption, the blue vertical bars represents the forecasted consumption, the green line (which uses the right axis), represents the forecast error, and the turquoise dotted line represents the forecast error threshold (see Figure 115: Forecast Error (Monthly) Report).</li><li>The forecast error threshold (%) per planning unit is set by the Program Admin in the Update Planning Units screen. If a forecast error is above the set forecast error threshold (%), it will appear in red text in the data table.</li><li>The Report View can be viewed in multiple ways:<ul style={{listStyleType: 'square'}}><li><strong>Forecasting unit.</strong> A user may want to choose forecasting unit when comparing in base units, such as with medicines that have different bottle sizes (planning units) sharing the same forecasting unit (e.g. the antiretroviral TLD30 vs TLD90 - See Figure 116.)</li><li><strong>Equivalency Unit:</strong> A user may want to choose forecasting unit when comparing products with different forecasting units, but some programmatic link (e.g. malaria treatments AL 6x1 vs 6x2 – see Figure 117.)</li><li><strong>“Show consumption adjusted for stock out?”:</strong> If this checkbox is checked, QAT uses the adjusted actual consumption instead of the actual consumption. QAT calculates the total days in the month based on the calendar.</li></ul></li><li>Missing Data:<ul style={{listStyleType: 'circle'}}><li>If data is missing for either forecasted or actual consumption, there will be a missing segment of the line or a missing bar in the graph</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user may see a gap in the line graph</li></ul></li><li><strong>Formula:</strong> Forecast Error uses the Weighted Average Percent Error (WAPE) formula. The example below uses the time windows of 6 months.<ul style={{listStyleType: 'square'}}><li><strong>Time Window:</strong> For non-seasonal products with predictable consumption pattern, use a short time window, but consider using a longer time window for those products with a more variable consumption or those with seasonality (use a time window at least long enough to consider the entire season).</li><li>For more details on the logic QAT uses to calculate this report, see the “Show Formulae” in the tool.</li></ul></li></ul></li></ul>

![Figure 136: WAPE Formula with 6-month time window as example](/img/media/image214.png)

*Figure 136 : Formule WAPE avec une fenêtre de temps de 6 mois à titre d'exemple*

![Figure 137: Forecast Error (Monthly) Report – displayed by forecasting unit](/img/media/image215.png)
*Figure 137 : Rapport d'erreur de prévision (mensuel) – affiché par unité de prévision*

![Figure 138: Forecast Error (Monthly) Report – displayed by equivalency unit](/img/media/image216.png)
*Figure 138 : Rapport d'erreur de prévision (mensuel) – affiché par unité d'équivalence*

###D3. Erreur de prévision (par unité de planification)
**Objectif :** évaluer l'exactitude des prévisions pour des produits sélectionnés au cours d'un mois spécifique dans tous les pays et programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme
- **Navigation :** Rapports ➔ Rapports de consommation ➔ Erreur de prévision (par unité de planification)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>For the time window, non-seasonal products with predictable consumption pattern can have a short time window, but those that have a more variable consumption/those with seasons should have a long-time window, or at least long enough to consider the entire season.</li><li>In the table, the forecast error percentages that are above the forecast error threshold (%), set by a Program Admin in the Update Planning Units screen, will be highlighted red</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user will see an error message in the table.</li><li>Forecast Error uses the Weighted Average Percent Error (WAPE) formula:</li></ul></li></ul>

![Figure 139: WAPE Formula](/img/media/image217.png)

*Figure 139 : Formule WAPE*

![Figure 140: Forecast Error (by Planning Unit) Report](/img/media/image218.png)
*Figure 140 : Rapport sur les erreurs de prévision (par unité de planification)*

## E. Rapports d'expédition

### IE. Expédition (mondiale)
**Objectif :** regrouper les quantités d'approvisionnement par source de financement, agent d'approvisionnement et type d'agent d'approvisionnement dans tous les pays et programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseurs de rapports
- **Navigation :** Rapports ➔ Rapports d'expédition ➔ Envois (mondiaux)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The two graphs that appear first in the Shipments (Global) Report depict the aggregated quantity of shipments per country and cost of the shipments (in USD) per funding source for a single planning unit. For a tabular view of the data, the user may find details in the bottom two tables.</li><li>If a country does not procure the selected planning unit, it will not appear in the graph of the tables in the report.</li></ul></li></ul>

![Figure 141: Shipment (Global) Report](/img/media/image219.png)
*Figure 141 : Rapport sur les expéditions (globales)*

### E2. Aperçu de l'expédition
**Objectif :** regrouper les quantités d'approvisionnement par source de financement ou par type d'agent d'approvisionnement dans tous les pays et programmes.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins/Users, and Report Viewers</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Once navigating to the Shipment Overview screen, Users will see dropdowns in which they must fill out to show specific data. Once selecting certain dropdowns or all, users are shown a graph and a pie chart. The graph that appears first in the Shipments Overview Report depicts the aggregated quantity of shipments across countries and cost (in USD) of the shipments per funding source across planning units. The pie chart shows percentages of Funding Source depending on user selections while also being able to hover over to see the total amount (in USD). Users may also choose to group the data by Procurement Agent Type or Funding Source Type. For a tabular view of the data, the user may find details in the bottom table.</li></ul></li></ul>

![Figure 142: Shipment Overview Report](/img/media/image220.png)
*Figure 142 : Rapport de synthèse des expéditions*

### E3. Détails de l'expédition
**Objectif :** fournir une vue complète de toutes les expéditions pour un programme.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The top graphs shows total USD per month by shipment status</li><li>There are two tables below the graph: the first one provides a summary and the second one provides detailed information on shipments.<ul style={{listStyleType: 'square'}}><li>The summary table shows the total number of shipments, and total costs per funding source, for the selected time period.</li><li>The detailed table contains the shipments disaggregated by planning unit, etc.</li></ul></li></ul></li></ul>

![Figure 143: Shipment Details Report](/img/media/image221.png)
*Figure 143 : Rapport sur les détails de l'expédition*

###E4. Détails des frais d'expédition
**Objectif :** fournir une vue simple de toutes les expéditions pour un programme et de leurs coûts totaux.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Can be displayed by funding source, procurement agent, or planning unit.</li></ul></li></ul>

![Figure 144: Shipment Cost Details Report](/img/media/image222.png)
*Figure 144 : Rapport détaillé sur les coûts d'expédition*

###E5. Aperçu des frais d'expédition
**Objectif :** fournir une vue générale des coûts totaux d'expédition par année civile pour un programme et une unité de planification, par source de financement.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report can be viewed in PDF or Excel (CSV) format</li><li>This report can be based on either the shipment receive date, or the shipment submitted date</li></ul></li></ul>

![Figure 145: Shipment Cost Overview Report](/img/media/image223.png)
*Figure 145 : Rapport d'aperçu des coûts d'expédition*

### E6. Budget
**Objectif :** afficher les différents budgets attribués à un ou plusieurs programmes, les montants alloués aux expéditions, le montant dépensé en trop (le cas échéant) et les montants restants estimés. Cette liste déroulante de programmes dans ce rapport est à sélection multiple puisque plusieurs programmes peuvent partager le même budget.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Budget</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The graph shows every predefined Budget in a program and whether it is allocated to shipments (planned or ordered) and the remaining amount.</li><li>The tabular view of the graph also provides information on the funding source for each budget, start and end date, and other detailed information.</li></ul></li></ul>

![Figure 146: Budget Report](/img/media/image224.png)
*Figure 146 : Rapport budgétaire*

### E7. Délai de livraison de l'agent d'approvisionnement
**Objectif :** afficher les délais de livraison détaillés (en mois) pour toutes les unités de planification, par agent d'approvisionnement.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Procurement Agent Lead Time</li></ul>

![Figure 147: Procurement Agent Lead Time Report](/img/media/image225.png)
*Figure 147 : Rapport sur les délais de livraison de l'agent d'approvisionnement*

## F. Rapports d'inventaire

###F1. Expirations
**Objectif :** fournir aux planificateurs des quantités estimées d'unités de planification expirant dans le futur en fonction de la durée de vie du lot/de conservation.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Expiries</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report pulls from data previously entered by including batch information on shipments, inventory, and actual consumption, and shelf life per planning unit. It displays the batch numbers, the receive date of the batch, shelf life of that batch (or planning unit), expiry date, and cost of the expired product.</li><li>The report can include quantities in planned shipments expected to arrive and expiry during the selected timeframe.</li><li>It will calculate (based on shelf life, stock projections, and forecast consumption) how much of a particular batch is expected to expire and when.<ul style={{listStyleType: 'square'}}><li>For the expiry calculation, refer to <a href="./14-annex-2-business-rules.md">Annex 2: Business Rules</a>.</li></ul></li><li>The report will calculate a cost of expired product, based on the quantity expired and the planning unit default price set by the user in the Update Planning Units screen.</li><li>The table is interactive. When the user clicks on the expired quantity, QAT will open a pop up with the batch ledger.</li></ul></li></ul>

![Figure 148: Expiries Report](/img/media/image226.png)
*Figure 148 : Rapport sur les expirations*

###F2. Coût de l'inventaire
**Objectif :** pour un mois sélectionné, fournit un coût estimé du stock basé sur le stock disponible réel ou projeté et le prix catalogue de l'unité de planification.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Cost of Inventory</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The report can include quantities in planned shipments expected to arrive during the selected timeframe.</li><li>The stock column could be based on an actual inventory or projected ending balance.</li><li>This report uses the following formula:</li></ul></li></ul>

![Figure 149: Cost of Inventory Formula](/img/media/image227.png)

*Figure 149 : Formule du coût des stocks*

![Figure 150: Cost of Inventory Report](/img/media/image228.png)
*Figure 150 : Rapport sur le coût des stocks*

###F3. Rotations des stocks
**Objectif :** afficher le nombre de rotations de stock par unité de planification, programme, pays ou catégorie d'unité de planification à un moment donné. Les rotations de stocks sont un moyen de mesurer la vitesse des plans d’approvisionnement. La rotation des stocks est une mesure de performance clé souvent utilisée pour signaler l’efficacité de la gestion de la chaîne d’approvisionnement. Il s'agit généralement d'une mesure rétrospective, mais comme QAT utilise des données prévisionnelles pour estimer les projections de stocks dans le futur, le rapport peut également être utilisé pour afficher les rotations de stocks estimées en fonction des plans. En général, des rotations plus élevées signifient une chaîne d'approvisionnement plus saine : les produits se déplacent vers l'aval et sont remplacés plus fréquemment par des produits frais. Un faible chiffre d’affaires implique une faible consommation, voire des stocks excédentaires – cela pourrait par exemple indiquer que les objectifs du programme sont trop ambitieux.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Inventory Turns</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report calculates inventory turns at various levels: at the individual planning unit level, at an aggregate level for an entire program (multiple planning units), and at an aggregate level for an entire country (multiple programs), or commodity category.</li><li><strong>Planned Inventory turns:</strong> Are the possible months of stock for each month over 12 months if the inventory rules worked perfectly considering the Planning Unit’s MIN and Reorder Interval.<ul style={{listStyleType: 'square'}}><li>At the planning unit level, the report utilizes the MIN and Reorder Interval from Planning Unit Settings to calculate the “Planned” inventory turns.</li><li>At the program level (multiple planning units) QAT utilizes the mode of all planned inventory turns of all Planning units under a specific program.</li><li>At the country and/or Planning Unit Category level QAT utilizes the mode of all planned inventory turns of all Planning units under a specific country / PU Category.</li></ul></li><li><strong>Actual inventory turns:</strong><ul style={{listStyleType: 'square'}}><li>At the planning unit level, QAT uses the following formula for each planning unit to calculate the actual inventory turns:</li></ul></li></ul></li></ul>

![Figure 151: Inventory Turns Formula at the planning unit level](/img/media/image229.png)

*Figure 151 : Formule de rotation des stocks au niveau de l'unité de planification*

<ul><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'circle'}}><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'square'}}><li>For each planning unit, the report compares the actual and planned turns, and calculates the MAPE and MSE.</li><li>To calculate the actual inventory turns at the program level, QAT will look for the mode across all planning units in that program. If no mode can be found, QAT will use the average from all planning units as that program’s actual inventory turns.</li><li>To calculate the actual inventory turns at the country (or commodity category) level, QAT will look for the mode across all programs. If no mode can be found, QAT will use the average.</li></ul></li></ul></li></ul>

![Figure 152: Inventory Turns Report](/img/media/image230.png)
*Figure 152 : Rapport sur les rotations des stocks*

###F4. Ajustement des stocks
**Objectif :** afficher une liste de tous les ajustements de stock saisis manuellement dans un programme. *Remarque : les ajustements calculés automatiquement ne s'afficheront pas sur ce rapport.*

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Stock Adjustment</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Automatically calculated adjustments (as a result of a difference between projected ending balance and an inventory count) do not appear in this report.</li></ul></li></ul>

![Figure 153: Stock Adjustment Report](/img/media/image231.png)
*Figure 153 : Rapport d'ajustement des stocks*

### F5. Capacité de l'entrepôt (par programme)
**Objectif :** affiche le volume (en mètres cubes) de toutes les régions d'un pays (si un utilisateur saisit ces informations lors de la configuration d'un programme).

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Program)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 154: Warehouse Capacity (by Program)](/img/media/image232.png)
*Figure 154 : Capacité de l'entrepôt (par programme)*

### F6. Capacité de l'entrepôt (par pays)
**Objectif :** affiche le volume (en mètres cubes) de tous les pays et régions d'un pays (accès au niveau du domaine requis).

<ul><li><strong>Accessible to:</strong> Realm Admins and Report Viewers</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Country)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 155: Warehouse Capacity (by Country)](/img/media/image233.png)
*Figure 155 : Capacité des entrepôts (par pays)*
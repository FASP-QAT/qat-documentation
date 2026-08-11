---
id: supply-planning-module-program-data
title: "4. Supply Planning Module: Program Data"
sidebar_label: "   4. Supply Plan Program Data"
sidebar_position: 5
---
# Section 4. Module de planification des approvisionnements : données du programme

Comme défini précédemment dans [Concepts et termes importants du QAT] (./04-overview.md#e-important-qat-concepts-and-terms), un programme dans le QAT est défini par un pays, un ou plusieurs domaines techniques, une région (généralement au niveau national, mais peut être infranational) et une organisation (généralement le ministère de la Santé). 

Il existe deux grandes catégories de données de programme : les données de base (modifiables par les administrateurs du programme) et les données transactionnelles (les « trois grands » – consommation, inventaire, expéditions – qui sont modifiables par les administrateurs du programme et les utilisateurs).

<table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0' }}>
  <thead>
    <tr>
      <th style={{ border: 'none', backgroundColor: 'transparent', width: '20%' }}></th>
      <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold', width: '25%', backgroundColor: '#eaeaea' }}>Data Category</th>
      <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold', width: '55%', backgroundColor: '#eaeaea' }}>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="3" style={{ border: '1px solid #ccc', padding: '10px', verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#eaeaea', fontWeight: 'normal', color: '#000' }}>
        Background Data
      </td>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Program Info</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Program Manager, Freight %, Lead Times</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Product Info</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Planning units – min, reorder interval, alternate reporting units</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Budget</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Funding source, amounts, beginning and ending dates, etc.</td>
    </tr>
    <tr>
      <td rowSpan="3" style={{ border: '1px solid #ccc', padding: '10px', verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#eaeaea', fontWeight: 'normal', color: '#000' }}>
        Transactional Data<br/>(“Big 3”)<br/>for each product
      </td>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Consumption</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>
        Forecasted consumption<br/>
        And actual consumption, as it becomes available
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Stock</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Inventory counts & Adjustments</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Shipments</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>
        Quantities, receive date, status, procurement agent, funder & associated budget<br/>
        (if available) batch #s & expiry dates
      </td>
    </tr>
  </tbody>
</table>

*Tableau 7 : Données au niveau du programme*

## A. Données de base

Chaque programme du domaine de la santé mondiale est régi par les mêmes données principales standardisées, telles que le catalogue de produits, les agents d'approvisionnement, les sources de financement, les sources de données, etc. Cependant, les administrateurs du programme peuvent sélectionner un sous-ensemble des données principales du domaine à utiliser pour leur programme et fournir des paramètres supplémentaires. 

**Remarques :** 
- Toutes les données d'arrière-plan doivent être mises à jour lorsqu'un utilisateur est en ligne. Il est recommandé aux utilisateurs de cliquer sur « Synchronisation des données principales » après avoir effectué toute mise à jour des données en arrière-plan afin que cela soit reflété dans l'ensemble de l'outil.
- Pour en savoir plus sur les rôles d'utilisateur, voir [Annexe 3 : Matrice des rôles d'utilisateur](./15-annex-3-user-role-matrix.md)). 

### R1. Paramètres du programme

Les gestionnaires de programme dans QAT peuvent définir leurs paramètres généraux de programme, en les sélectionnant dans une liste déroulante contenant des données principales au niveau du domaine pour chacun des champs. Ces paramètres généraux du module de planification des approvisionnements incluent le nom du programme, le responsable du programme, les pourcentages de fret par défaut pour le fret aérien, maritime et routier, les délais par statut d'expédition et les notes. Les paramètres généraux du module de prévision incluent le nom du programme, le gestionnaire du programme et les notes. Les **utilisateurs du programme** pourront répertorier/afficher tous les programmes auxquels ils ont accès, tandis que seuls les **administrateurs du programme** pourront mettre à jour les paramètres généraux du programme.

Mettre à jour les informations sur le programme :
1. Cliquez sur "Gestion du programme" puis sélectionnez "Mettre à jour les informations sur le programme".
2. Cliquez sur le programme qui doit être mis à jour<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Program Admins can add/remove procurement agents and funding sources that already exist<br/>in QAT to their program. This will in turn, add/remove the procurement agents to the<br/>dropdown fields in the [Shipment Data entry](#b3-shipment-data) screens. If a user would like to add a<br/>procurement agent to their program that does not exist in QAT, they can take out a ticket<br/>with the [QAT HelpDesk](./05-getting-started.md#i-qat-helpdesk-and-tickets) system.</li>
    </ol>

<div style={{textAlign: 'center'}}>

![Update Program Info - Supply Planning Module](/img/media/image113.png)

Figure 67: Update Program Info - Supply Planning Module

</div>

![Update Program Info - Supply Planning Module](/img/media/image114.png)

3. Les administrateurs du programme peuvent faire défiler vers le bas pour voir une liste des utilisateurs qui ont accès à leur programme. Les administrateurs du programme sont encouragés à consulter cette liste régulièrement pour s'assurer que tous les utilisateurs répertoriés ont un objectif commercial leur permettant d'afficher, de modifier ou de gérer ce plan d'approvisionnement.

4. Mettez à jour les champs comme vous le souhaitez et cliquez sur « Soumettre »

**Remarque :** QAT permet uniquement aux administrateurs au niveau du domaine ou aux administrateurs au niveau de l'application de mettre à jour les champs grisés dans l'écran Mettre à jour les informations sur le programme. Si un utilisateur souhaite que ces champs soient mis à jour, il peut souscrire un ticket auprès du système [QAT HelpDesk](./05-getting-started.md#i-qat-helpdesk-and-tickets).

###A2. Unités de planification

L'unité de planification est le produit utilisé dans QAT comme base pour planifier les achats et afficher la consommation, les expéditions, les stocks et les ajustements. Le nom d'une unité de planification comprend généralement une description complète allant jusqu'à l'emballage primaire ; ainsi, sa nomenclature suit de près la taille du conditionnement dans lequel la distribution a lieu, c'est-à-dire un flacon de 30 comprimés, un blister de 10x10 gélules, etc.

Le catalogue d'unités de planification QAT est considéré comme des données de base au niveau du domaine, ce qui signifie que tous les ajouts/modifications/soustractions de ce catalogue sont gérés au niveau du domaine et s'appliquent à tous les programmes de ce domaine.

Chaque programme doit avoir au moins une unité de planification que les **administrateurs de programme** peuvent sélectionner dans le catalogue au niveau du domaine pour l'ajouter à leurs programmes ou la désactiver de leurs programmes. Les **administrateurs du programme** peuvent également mettre à jour tout paramètre lié à une unité de planification particulière, notamment la fréquence de réapprovisionnement, les mois minimum de stock, le calcul de la consommation mensuelle moyenne, le délai de livraison de l'agent d'approvisionnement local, la durée de conservation et le prix. Les unités de planification peuvent être désactivées du programme si elles ne sont plus utilisées, permettant aux administrateurs du programme de conserver toutes les données héritées. Si l'unité de planification n'existe pas dans le catalogue QAT, veuillez créer un ticket via le Helpdesk QAT afin qu'elle puisse être créée pour l'ensemble du domaine. Pour en savoir plus sur la billetterie, consultez la section [QAT Helpdesk et tickets] (./05-getting-started.md#i-qat-helpdesk-and-tickets).

<div style={{textAlign: 'center'}}>

![Parameters to update per planning unit](/img/media/image115.png)

Figure 69: Parameters to update per planning unit.

</div>

**Paramètres de l'unité de planification :**
- **Conversion Factor (FU:PU) :** Un champ non modifiable renseignant sur le facteur de conversion entre le PU choisi et son FU associé
- **Planifier par :** choisissez entre « MOS » pour les unités de planification consommées en grandes quantités ou « Quantité » pour les unités de planification consommées en faibles quantités ou à des fins d'urgence avec des expirations élevées.
- **Intervalle de réapprovisionnement (en mois) :** le nombre de mois entre les expéditions. Intervalle de réapprovisionnement + Min MOS = Max MOS
- **Min Months of Stock (MOS) :** la quantité minimale de stock, en mois, qui doit être disponible pour répondre à la demande et éviter les ruptures de stock.
- **Quantité minimale :** la quantité minimale de stock qui est déterminée comme étant nécessaire en stock
- **Calcul de la consommation mensuelle moyenne (AMC) :** qui correspond à la quantité moyenne qu'un produit est utilisé sur une période de temps sélectionnée, prendra la moyenne des valeurs saisies par l'administrateur du programme pour les « Mois futurs (y compris le mois en cours) » et les « Mois passés ».
- **Délai d'approvisionnement local :** le délai total (« prévu à la réception »), en mois, pour les unités de planification achetées localement. Idéalement, pour un achat local, le délai de livraison serait beaucoup plus court que pour un achat international.
- **Délai de distribution :** Nombre de mois entre la réception de l'expédition et le produit à distribuer jusqu'au niveau le plus bas. Utilisé pour les expéditions suggérées avant le sous-stockage.
- **Durée de conservation :** nombre de mois à compter de la réception de l'expédition (statut = reçu) jusqu'à l'expiration. Il s'agit d'un nombre moyen de mois pour l'unité de planification – pour saisir les données exactes du lot, y compris les dates d'expiration, voir [Planification des approvisionnements : informations sur les stocks et les lots expirés du projet](./08-supply-planning-module-supply-planning.md#e-supply-planning-project-expired-stock-and-batch-information)
- **Seuil d'erreur de prévision (%) :** une valeur utilisée dans les rapports de consommation d'erreur de prévision (mensuelle) et d'erreur de prévision (par unité centrale) pour déterminer si une erreur de prévision est jugée trop élevée.
- **Prix catalogue :** prix moyen d'une seule unité de planification, qui sera utilisé dans le calcul des coûts d'expédition. Le prix par programme et par agent d'approvisionnement peut être mis à jour de manière plus granulaire dans les informations spécifiques au programme/agent d'approvisionnement ou les prix d'expédition spécifiques peuvent être mis à jour dans l'écran de saisie des données d'expédition.
- **Remarques :** un champ de texte libre pour ajouter des informations pertinentes sur l'unité de planification (c'est-à-dire des délais d'introduction/de suppression progressive, si l'unité de planification est constituée de données au niveau central/national, etc.). Ces notes peuvent être consultées dans le rapport Plan d'approvisionnement, l'écran Version du plan d'approvisionnement et Révision de la planification des approvisionnements, l'écran Planification des approvisionnements et l'écran Planification des scénarios.

**Mettre à jour les unités de planification au sein d'un programme :**
1. Assurez-vous que vous travaillez en mode « en ligne ». Sélectionnez « Gestion du programme » puis « Mettre à jour les unités de planification »
2. Sélectionnez le programme pour afficher les unités de planification actuellement gérées<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>If intending to update or reactivate a deactivated planning unit, choose “Inactive” from the planning unit Status dropdown</li>
    </ol>
3. Double-cliquez sur la cellule (paramètre) qui doit être mise à jour
4. Cliquez sur « Soumettre » pour enregistrer les modifications

**Ajouter des unités de planification à un programme :**
1. Assurez-vous que vous travaillez en mode « en ligne ». Sélectionnez « Gestion du programme » puis « Mettre à jour les unités de planification ».
2. Sélectionnez le programme pour afficher les unités de planification actuellement gérées
3. Cliquez sur le bouton bleu « Ajouter une ligne » en bas à droite de l'écran et une nouvelle ligne apparaîtra en haut du tableau.<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Alternatively, right-click on any row in the table and select “Insert new row before” or “Insert new row after”.</li>
    </ol>
4. Commencez par taper les trois premières lettres de l'unité de planification que vous souhaitez ajouter.
5. Remplissez toutes les cellules (paramètres) de cette ligne
6. Cliquez sur « Soumettre » pour enregistrer les modifications

**Remarque :** Si une unité de planification requise n'est pas disponible dans la liste déroulante, et donc dans le catalogue QAT, veuillez<br />soumettre un ticket via le service d'assistance QAT afin qu'elle puisse être créée pour l'ensemble du domaine. Pour en savoir plus sur la billetterie<br />, consultez la section <a href="./05-getting-started.md#i-qat-helpdesk-and-tickets">Support technique et tickets QAT</a>.

###A3. Informations spécifiques au programme/agent d'approvisionnement

Les utilisateurs de QAT peuvent gérer des détails spécifiques (frais de transport, délais de livraison, coûts unitaires) pour les agents d'approvisionnement et les unités de planification au sein d'un plan d'approvisionnement. Les prix spécifiques aux agents d'approvisionnement du programme peuvent être définis pour chaque unité de planification de leurs programmes, en plus des prix par défaut (catalogue) du programme ou des prix catalogue de l'agent d'approvisionnement au niveau du domaine. Par exemple, un utilisateur peut souhaiter saisir le prix du PNUD pour les tests de diagnostic rapide du paludisme (mRDT) dans le programme FASPonia-Malaria, si le catalogue du PNUD n'est pas disponible au niveau du domaine. Les utilisateurs ont également la possibilité de désigner des pourcentages de fret, des délais de livraison (y compris des délais de livraison locaux) et des prix unitaires pour des unités de planification spécifiques, des agents d'approvisionnement ou une combinaison des deux.

**Caractéristiques et règles :**
- **Combinaison Programme + Agent d'approvisionnement :** Si vous créez une combinaison programme et agent d'approvisionnement, la colonne de prix deviendra non modifiable si l'unité de planification est définie sur « Tout » puisque le prix existe déjà dans un autre écran.
- **Coûts de transport, délais de livraison et prix unitaires :** Au moins une de ces colonnes doit avoir une valeur numérique lors de l'ajout ou de la modification de lignes.
- **Champs obligatoires :** Seules les trois premières colonnes (Programme, Unité de planification et Agent d'approvisionnement) sont requises pour ajouter une ligne.
- **Contraintes :**
  - Une seule ligne est autorisée par combinaison programme/unité de planification/agent d'approvisionnement.
  - Si une ligne d'agent d'approvisionnement comprend « Toutes » les unités de planification, la colonne de prix unitaire ne sera pas modifiable.

**Utilisation dans le module de planification des approvisionnements :**
Ces détails spécifiques au programme/agent d'approvisionnement/unité de planification auront un impact sur le module de planification des approvisionnements comme suit :
- **Pourcentages de fret :** Priorisés par les paramètres du programme/agent d'approvisionnement/unité de planification, puis par les paramètres du programme.
- **Délais de livraison :** Priorisés par les paramètres du programme/agent d'approvisionnement/unité de planification, puis les paramètres du programme et enfin les paramètres de l'agent d'approvisionnement au niveau du domaine.
- **Prix unitaires :** Hiérarchisés par les paramètres du programme/agent d'approvisionnement/unité de planification, puis les paramètres de l'agent d'approvisionnement au niveau du domaine et enfin les paramètres du programme.

**Étapes pour ajouter ou modifier des informations spécifiques au programme/agent d'approvisionnement :**
1. Sélectionnez « Gestion du programme » puis « Mettre à jour les unités de planification ».
2. Sélectionnez le programme pour afficher les unités de planification actuellement gérées.
3. Cliquez avec le bouton droit sur la ligne de l'unité de planification pour laquelle ajouter le prix de l'agent d'approvisionnement et cliquez sur « Ajouter les prix du programme/de l'agent d'approvisionnement » pour afficher un nouvel écran.

<div style={{textAlign: 'center'}}>

![Accessing the Program/Procurement Agent Prices screen](/img/media/image116.png)

Figure 70. Accessing the Program/Procurement Agent Prices screen

</div>

4. OU sélectionnez « Informations sur l'agent de programme/d'approvisionnement » dans le menu de gauche pour accéder directement à l'écran.
5. Sélectionnez le(s) programme(s) et unité(s) de planification pour lesquels saisir les informations.
6. Remplissez les champs obligatoires et tous les champs supplémentaires. Quelques rappels ci-dessus :<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If creating a program and procurement agent combination, the price column will become non-editable if the planning unit is set to ‘All’ since the price already exists in a different screen.</li>
       <li>At least one of these columns must have a numeric value when adding or editing rows.</li>
       <li>Only the first three columns (Program, Planning Unit, and Procurement Agent) are required to add a row.</li>
       <li>Only one row is allowed per program/planning unit/procurement agent combination.</li>
   </ol>


<div style={{textAlign: 'center'}}>

![Adding Program/Procurement Agent Info for a planning unit](/img/media/image117.png)

*Figure 71 : Ajout d'informations sur un agent de programme/approvisionnement pour une unité de planification*

</div>

7. Cliquez sur « Soumettre » pour enregistrer les modifications.
8. Cliquez sur Master Data Sync après avoir apporté des modifications (s'applique à tout élément sous Gestion du programme).

###A4. Autres unités déclarantes

Une unité de reporting alternative (ARU) est le produit et l'unité dans lesquels les données du pays (consommation, stocks et ajustements) sont déclarées et elle peut avoir la même description que l'unité de planification, l'unité de prévision, l'unité d'approvisionnement ou dans une description d'emballage totalement différente. L'ARU est définie dans un pays particulier et nécessite la saisie d'un facteur de conversion de l'ARU vers l'unité de planification à laquelle elle est associée (peut être 1). De tous les produits génériques, l'ARU est le seul que les administrateurs de programme gèrent, car ils sont spécifiques à chaque pays. **Les administrateurs d'applications, de domaines et de programmes** peuvent ajouter/modifier des ARU pour un pays et un programme. Les unités de déclaration alternatives sont utiles lorsque :
1. Les sources de données rapportent les données dans différentes unités (par exemple pièces ou paquets)
2. Il existe un autre nom commun dans le pays (par exemple, le nom de la marque)

**Pour voir la liste de toutes les unités déclarantes alternatives dans un pays :**
1. Sélectionnez « Gestion du programme », puis « Unité de rapport alternative ».
2. Sélectionnez le programme dans la liste déroulante.

**Pour ajouter d'autres unités de reporting à un pays :**
1. Sélectionnez « Gestion du programme », puis « Unité de rapport alternative ».
2. Sélectionnez le programme dans la liste déroulante.
3. Cliquez sur le bouton « Ajouter une ligne » dans le coin inférieur droit de l'écran, ou cliquez avec le bouton droit sur n'importe quelle ligne pour en ajouter une autre.
4. Entrez les détails dans la ligne nouvellement créée et cliquez sur « Soumettre ».<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Note: the conversion factor can be ‘divide’ or ‘multiply’.</li>
   </ol>
<div style={{textAlign: 'center'}}>

![ARUs](/img/media/image118.png)

Figure 72: ARUs

</div>

*Notez que pour chaque unité de planification ajoutée à un programme, QAT créera automatiquement une unité de reporting alternative avec un facteur de conversion de 1:1. QAT utilisera la description de l'unité de planification comme description de l'unité de reporting alternative.

###A5. Délais de livraison par défaut

QAT utilise six statuts d'expédition pour suivre la progression d'une expédition depuis la planification jusqu'à la réception du produit. Chacune de ces étapes du cycle de vie de la commande est associée à un délai d'exécution qui est utilisé pour estimer le moment où la prochaine action doit avoir lieu à chaque étape. Les délais sont exprimés en mois et peuvent être partiels voire nuls. L'ordre de priorité des paramètres de délais est le suivant : les paramètres **Informations sur le programme/l'agent d'approvisionnement** ont la priorité la plus élevée, suivis des paramètres de **Niveau programme**, puis des paramètres de **Niveau domaine**.

<div style={{textAlign: 'center'}}>

<div style={{textAlign: 'center', overflowX: 'auto', margin: '20px 0'}}>
<svg viewBox="0 0 760 80" style={{ minWidth: '600px', width: '100%', maxWidth: '800px', height: 'auto' }}>
  <g transform="translate(10, 10)">
    <g transform="translate(0, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="3,3 98,3 115,30 98,57 3,57" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="55" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Planned</text>
    </g>
    <g transform="translate(125, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Submitted</text>
    </g>
    <g transform="translate(250, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Approved</text>
    </g>
    <g transform="translate(375, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Shipped</text>
    </g>
    <g transform="translate(500, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Arrived</text>
    </g>
    <g transform="translate(625, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Received</text>
    </g>
  </g>
</svg>
</div>

*Figure 73 : Statuts des expéditions QAT*

</div>

Il existe une logique de délai différente selon que l’approvisionnement est étiqueté comme international ou local.

- **Pour les achats internationaux :**
  - Les **administrateurs du programme** gèrent les délais de livraison spécifiques au programme/au pays (par exemple, le temps de planification, les délais d'expédition, les délais de dédouanement, les périodes de quarantaine, etc.)
  - Les **Realm Admins** gèrent les délais spécifiques à chaque agent d'approvisionnement (plus d'informations à ce sujet dans le tableau ci-dessous).
  - Peut également définir des configurations de délais spécifiques pour les programmes et/ou les agents d'approvisionnement sur une base par unité de planification (PU).
- **Pour les achats locaux :**
  - Le délai total (« de la planification à la réception ») est déterminé par ce qui est saisi au niveau du programme, par unité de planification. Toutes les étapes d’un achat local sont généralement plus courtes que celles d’un achat international.

| Délai (de – à) | Définition | Configuration |
| :--- | :--- | :--- |
| **Prévu pour être soumis** | Nombre de mois entre l'identification du besoin en matière d'approvisionnement et la passation d'une commande auprès d'un agent d'approvisionnement | Toujours défini au niveau du programme par les administrateurs du programme |
| **Soumis pour approbation** | Nombre de mois entre la passation de la commande et l'approbation de la commande. Ce délai peut être défini pour chaque acheteur. | Valeur par défaut définie au niveau du programme par les administrateurs du programme. Toutefois, remplacé par le paramètre de l'agent d'approvisionnement au niveau du domaine, si l'agent d'approvisionnement est affecté à une expédition. |
| **Approuvé pour être expédié** | Nombre de mois entre l'approbation de la commande et l'expédition par l'agent d'approvisionnement/fournisseur. Ce délai peut être défini pour chaque acheteur. | Valeur par défaut définie au niveau du programme par les administrateurs du programme. Toutefois, remplacé par le paramètre de l'agent d'approvisionnement au niveau du domaine, si l'agent d'approvisionnement est affecté à une expédition. |
| **Expédié à arrivé par avion** | Temps de transit par voie aérienne entre l'expédition de la commande et son arrivée au port d'entrée - en nombre de mois. | Toujours défini au niveau du programme par les administrateurs du programme |
| **Expédié à arrivé par mer** | Temps de transit par voie maritime entre l'expédition de la commande par voie aérienne jusqu'à son arrivée au port d'entrée - en nombre de mois. | Toujours défini au niveau du programme par les administrateurs du programme |
| **Expédié à arrivé par la route** | Temps de transit par route entre l'expédition de la commande par route jusqu'à l'arrivée au point de livraison demandé – en nombre de mois. | Toujours défini au niveau du programme par les administrateurs du programme |
| **Arrivé reçu** | Nombre de mois entre l'arrivée au port d'entrée et la réception dans l'entrepôt. | Toujours défini au niveau du programme par les administrateurs du programme |

*Tableau 8 : Délais par étape d'expédition - définitions*

**Ordre prioritaire pour les paramètres de délai de livraison :**
L'ordre de priorité des configurations de délais est le suivant :
1. **Informations sur l'agent de programme/d'approvisionnement :** Ces paramètres ont la priorité la plus élevée. Si les délais sont définis à ce niveau, ils remplaceront les autres paramètres. Ceux-ci peuvent être mis à jour dans l’écran « Informations sur l’agent du programme/approvisionnement ».
2. **Au niveau du programme :** Si aucun délai n'est défini au niveau du programme/de l'agent d'approvisionnement, les valeurs par défaut du niveau du programme seront utilisées. Ceux-ci peuvent être mis à jour dans les écrans « Mettre à jour les informations sur le programme » et « Mettre à jour les unités de planification ».
3. **Au niveau du domaine :** Les délais de livraison au niveau du domaine s'appliqueront si aucun délai spécifique n'est défini au niveau du programme.

**Saisissez/mettez à jour les délais par défaut au niveau du programme :**
1. Allez dans « Gestion du programme » puis cliquez sur « Mettre à jour les informations sur le programme » (voir [Mise à jour des informations sur le programme](#a1-program-information)).
2. Faites défiler jusqu'à la seconde moitié de la page où se trouvent tous les champs de délai de livraison.
3. Entrez les délais d'exécution du programme par défaut par étape.
4. Cliquez sur « Mettre à jour » pour enregistrer les modifications.

Reportez-vous à [Informations sur le programme/l'agent d'approvisionnement](#a3-programprocurement-agent-special-information) pour obtenir des instructions sur la façon d'ajouter/modifier des paramètres au niveau d'un programme/d'un agent d'approvisionnement.

**Saisissez/mettez à jour les délais par défaut de l'agent d'approvisionnement local :**
1. Allez dans « Gestion du programme » puis cliquez sur « Mettre à jour les unités de planification » (voir [Mise à jour des unités de planification](#a2-planning-units))
2. Sélectionnez le programme dans la liste déroulante en haut à gauche.
3. Saisissez le délai de livraison par défaut du programme pour l'approvisionnement local.
4. Cliquez sur « Soumettre » pour enregistrer les modifications.


4. Cliquez sur « Soumettre » pour enregistrer les modifications.

<div style={{textAlign: 'center'}}>

![](/img/media/image119.png)

</div>


### R6. Budgets

<div style={{float: 'right', marginLeft: '15px', width: '250px'}}>

![Budget sidebar](/img/media/image120.png)

</div>

Un budget représente un montant (estimé ou réel) de capital pour une période définie qui doit être dépensé pour acheter des produits pour le programme.

Allez dans « Gestion du programme », puis « Budget » pour afficher une liste de tous les budgets de votre (vos) programme(s).

Un budget peut être associé à un ou plusieurs programmes. Par exemple, si le FSP-Lab-A dispose d'un budget x, le FSP-Lab-B peut également lier son programme au budget x. Si un programme est dissocié d'un budget, l'utilisateur sera obligé de supprimer toutes les expéditions de ce budget avant de télécharger la version sur le serveur. Tout administrateur de programme ayant accès à un programme peut modifier un budget associé au programme ; cependant, il ne pourra ajouter/supprimer que les programmes auxquels il a accès.

Pour ajouter ou supprimer des programmes d'un budget, cliquez sur le budget, puis sélectionnez ou désélectionnez dans la première liste déroulante.

<div style={{textAlign: 'center', clear: 'both'}}>

![Multiple Program](/img/media/image121.png)

Figure 75: Multiple Program ⊗

</div>

Si un budget est surligné en rouge, cela indique que le budget a dépassé la « Date de fin » et/ou que le « Montant utilisé » a dépassé le « Montant du budget ».

**Ajouter un budget**
1. Dans l'écran « Budget », allez dans le coin supérieur droit et cliquez sur l'icône bleue « + ». ![icon](/img/media/image122.png)
2. Un nouvel écran intitulé « Ajouter un budget » apparaîtra.
3. Entrez les détails requis.
4. Cliquez sur le bouton « Soumettre ».<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** <em>A Program cannot have multiple budgets with the same Funding Source and Budget Display Name. An error message will pop up if this is the case.</em></li>

   </ol>
**Mettre à jour un budget**
1. Accédez à l'écran Budget.
2. Faites un clic gauche sur le budget que vous souhaitez mettre à jour.
3. Un nouvel écran apparaîtra intitulé « Mettre à jour le budget »
4. Mettez à jour les détails du budget sélectionné, le cas échéant.
5. Cliquez sur « Soumettre » pour enregistrer les modifications.

<div style={{textAlign: 'center'}}>

![Budget Screen](/img/media/image123.png)

Figure 76: Budget Screen

</div>

<br />

<div style={{textAlign: 'center'}}>

![Update Budget](/img/media/image124.png)

Figure 77: Update Budget

</div>

## B. Données du plan d'approvisionnement transactionnel

Il existe 3 principales exigences en matière de données lors de la création ou de la mise à jour d'un plan d'approvisionnement : la consommation, l'inventaire et les expéditions. La section ci-dessous définira chacun des éléments de données et comment ajouter/mettre à jour ces éléments dans QAT.

1. **Consommation :** Stock distribué par le programme aux clients.
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Actual Consumption:** The reported quantity of a product dispensed to clients in a given time period for a specific program at a specific supply chain level or combination of levels.</li>
       <li>**Forecasted Consumption:** The quantity predicted to be consumed by clients in a given time period which has been agreed upon by the program.</li>
   </ol>
2. **Inventaire :** La quantité disponible de produit utilisable à un niveau spécifique de la chaîne d'approvisionnement ou une combinaison de niveaux, à une date spécifique, pour un produit spécifique.
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Stock count:** A check of how much stock a program has at a particular time in a specific supply chain level or combination of levels.</li>
       <li>**Stock adjustments:** Positive or negative modifications to usable inventory quantities for a specific date, categorized by reason for the adjustment, if possible (e.g. damage, expiry, quarantine, transfer to another implementing partner, etc.). Rebalancing transfers between locations in the same supply chain are excluded.</li>
   </ol>
3. **Expéditions :** la quantité financée ou planifiée qui sera expédiée au cours du mois en cours ou à venir ou qui a été expédiée au cours d'un mois précédent ou qui a été reçue. Exprimé en envois individuels, avec un numéro d'envoi et une date de réception prévue.

###B1. Données de consommation

**Ajouter des données de consommation :**
<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Notes on Consumption Data:</b>
<ul style={{paddingLeft: '20px', margin: 0}}>
<li>For each month and each region, user may enter <u>one</u> forecasted consumption record, and <u>one</u> actual consumption record.</li>
<li>Users may <u>not</u> enter actual consumption for months in the future</li>
<li>Users may <u>not</u> edit forecasted consumption more than nine (9) months in the past and may <u>not edit</u> actual consumption more than nine (9) months in the past.</li>
</ul>
</div>

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données de consommation ».
2. Une fois l'écran « Données de consommation » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
3. L'écran affichera toutes les données actuelles pour la période sélectionnée, les unités de planification et les autres filtres sélectionnés à l'étape 2.
4. Pour ajouter un nouvel enregistrement de consommation, faites un clic droit sur n'importe quelle cellule et sélectionnez « Ajouter une nouvelle consommation » OU sélectionnez le bleu « + Ajouter une ligne » en bas.
5. Saisissez les informations requises et cliquez sur « Soumettre ».<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g. Quantity (PU)) indicates that it is a QAT generated cell and cannot be manually entered/edited.<ol style={{ listStyleType: 'lower-roman' }}><li>Reminder that [Alternate Reporting Unit](#a4-alternate-reporting-units) (ARU) is the product and the unit that the country’s data is reported in. This could be the same as the planning unit or may be different. QAT users can define an alternate reporting unit and a conversion factor (multiply or divide) to the planning unit.</li></ol></li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
   </ol>

<div style={{textAlign: 'center', clear: 'both'}}>

![Add Consumption Data](/img/media/image125.png)

Figure 78: Add Consumption Data

</div>

**Mettre à jour les données de consommation :**
1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données de consommation ».
2. Une fois l'écran « Données de consommation » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.
4. Pour mettre à jour les données de consommation existantes, l'utilisateur doit double-cliquer sur la ou les cellules. Un utilisateur peut mettre à jour autant de cellules pour autant de lignes que nécessaire avant d'enregistrer, à condition qu'il s'agisse des mêmes filtres déroulants sélectionnés à l'étape 2.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** Users may <u>not</u> edit forecasted consumption more than nine (9) months in the past and may <u>not edit</u> actual consumption more than nine (9) months in the past. The non-editable data is identified by greyed out rows.</li>
   </ol>
5. Une fois qu'un enregistrement de consommation a été enregistré dans QAT, il ne peut pas être supprimé. Par conséquent, si un utilisateur souhaite supprimer cet enregistrement du plan d’approvisionnement, il doit le désactiver en cochant la case bleue dans la colonne d’extrême droite ou il peut être réutilisé pour les données d’un mois différent.
6. Une fois la ou les mises à jour effectuées, cliquez sur « Soumettre ».

**Ajouter/mettre à jour les détails du lot :**
L'ajout d'informations sur les lots aux enregistrements de consommation ne peut être appliqué qu'à la consommation réelle.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Notes on Inventory Data:</b>
<ul style={{paddingLeft: '20px', margin: 0}}>
<li>For each month, data source, and region, users may enter <u>one</u> inventory record but may enter <u>multiple</u> adjustments.</li>
<li>Users can <u>not</u> enter inventory for months in the future</li>
<li>Users may <u>not</u> edit inventory or adjustment records more than nine (9) months in the past.</li>
</ul>
</div>

1. Faites un clic droit sur la ligne « Consommation réelle » et cliquez sur « Afficher les informations sur le lot ».
2. Un écran contextuel contenant les détails du lot pour cet enregistrement de consommation réelle apparaîtra.
3. L'utilisateur peut modifier le numéro de lot et/ou la quantité existante en double-cliquant sur la cellule.
4. L'utilisateur peut également ajouter un ou plusieurs nouveaux lots en cliquant avec le bouton droit et en sélectionnant « Ajouter un nouveau lot » ou en cliquant sur le bouton « +Ajouter une ligne » ».
5. La quantité totale des lots doit être égale à la quantité de cet enregistrement de consommation réelle.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the batch quantity/batch quantities are less than the actual consumption quantity, QAT will create a batch, using FEFO to calculate the difference.</li>
       <li>If the batch quantity/batch quantities are greater than the actual consumption quantity, QAT will have a validation error and not let the user submit.</li>
   </ol>
6. Cliquez sur « Soumettre ».

<div style={{textAlign: 'center', clear: 'both'}}>

![Batch Details](/img/media/image126.png)

Figure 79: Batch Details

</div>

###B2. Données d'inventaire

**Ajouter des données d'inventaire/d'ajustement :**
1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'inventaire ».
2. Une fois l'écran « Données d'inventaire » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the user is entering inventory data, select “Inventory” in the Inventory Type drop-down. If the user is entering adjustment data, select “Adjustment”.</li>
   </ol>
3. L'écran affichera toutes les données actuelles pour la période sélectionnée, les unités de planification et les autres filtres sélectionnés à l'étape 2.
4. Pour ajouter un nouvel enregistrement d'inventaire/ajustement, cliquez avec le bouton droit sur n'importe quelle cellule et sélectionnez « Ajouter un nouveau décompte d'inventaire »/« Ajouter de nouveaux ajustements » OU sélectionnez le bleu « + Ajouter une ligne » en bas.
5. Saisissez les informations requises.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g., Conversion Factor) indicates that it is a QAT generated cell and cannot be manually entered/edited.</li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
       <li>If entering an adjustment, a note in the “Notes” field is required. Notes for inventory records are optional.</li>
   </ol>
6. Cliquez sur « Soumettre ».

<div style={{textAlign: 'center'}}>

![Add Inventory](/img/media/image127.png)

Figure 80: Add Inventory

</div>

**Mettre à jour les données d'inventaire/d'ajustement :**
1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'inventaire ».
2. Une fois l'écran « Données d'inventaire » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the user is updating inventory data, select “Inventory” in the Inventory Type drop-down. If the user is updating adjustment data, select “Adjustment”.</li>
   </ol>
3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.
4. Pour mettre à jour les données d'inventaire/ajustement existantes, l'utilisateur doit double-cliquer sur la ou les cellules. Un utilisateur peut mettre à jour autant de cellules pour autant de lignes que nécessaire avant d'enregistrer, à condition qu'il s'agisse des mêmes filtres déroulants sélectionnés à l'étape 2. Un utilisateur ne peut pas non plus mettre à jour les données d'ajustement et d'inventaire en même temps sans enregistrer au préalable.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** Users may <u>not</u> edit adjustment or inventory records more than nine (9) months in the past. The non-editable data is identified by greyed out rows.</li>
   </ol>
7. Une fois qu'un enregistrement d'inventaire a été enregistré dans QAT, il ne peut pas être supprimé. Par conséquent, si un utilisateur souhaite supprimer cet enregistrement du plan d’approvisionnement, il doit le désactiver en cochant la case bleue dans la colonne d’extrême droite ou il peut être réutilisé pour les données d’un mois différent.
5. Une fois la ou les mises à jour effectuées, cliquez sur « Soumettre ».

**Ajouter/mettre à jour les détails du lot – Ajustements**
(pour plus d'informations sur les calculs par lots QAT, veuillez consulter [Annexe 2 : Règles commerciales](./14-annex-2-business-rules.md) ou la section 5.E).
1. Faites un clic droit sur la ligne Ajustement et cliquez sur « Afficher les informations sur le lot ».
2. Un écran contextuel contenant les détails du lot pour cet enregistrement apparaîtra.
3. L'utilisateur peut modifier le numéro de lot et/ou la quantité existante en double-cliquant sur la cellule.
4. L'utilisateur peut également ajouter un ou plusieurs nouveaux lots en cliquant avec le bouton droit et en sélectionnant « Ajouter un nouveau lot » ou en cliquant sur le bouton « +Ajouter une ligne » ».
5. La quantité totale des lots doit être égale à la quantité de cet enregistrement d'ajustement.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the batch quantity/batch quantities are less than the adjustment quantity, QAT will create a batch, using Best Case Scenario logic to calculate the difference.</li>
       <li>If the batch quantity/batch quantities are greater than the adjustment quantity, QAT will have a validation error and not let the user submit.</li>
       <li><em>**Note:** there is no user override for auto-adjustments, only manual adjustments.</em></li>
   </ol>
6. Cliquez sur « Soumettre ».

<div style={{textAlign: 'center'}}>

![Batch Details Adjustments Top](/img/media/image128.png)
<br/>
![Batch Details Adjustments Bottom](/img/media/image129.png)

Figure 81: Batch Details

</div>

**Ajouter/mettre à jour les détails du lot – Inventaire :**
1. Faites un clic droit sur la ligne Inventaire et cliquez sur « Afficher les informations sur le lot ».
2. Un écran contextuel contenant les détails du lot pour cet enregistrement apparaîtra dans l'écran de planification des approvisionnements. Voir la section 5.E pour plus de détails sur la façon de mettre à jour.

### B3. Données d'expédition

**Ajouter des données d'expédition :**
1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'expédition ».
2. Une fois que l'écran « Données d'expédition » apparaît, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.
4. Pour ajouter un nouvel enregistrement d'envoi, cliquez avec le bouton droit sur n'importe quelle cellule et sélectionnez « Ajouter un nouvel envoi » OU sélectionnez le bleu « + Ajouter une ligne » en bas.
5. Saisissez les informations requises.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g. Planning Unit Cost) indicates that it is a QAT generated cell and cannot be manually entered/edited.</li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
       <li>Certain cells will not be available to enter data into until other cells have been filled in. For example, “Budget” cannot be selected until the user has selected a “Funding Source”.</li>
       <li>“QAT Shipment ID” will display as blank or ‘0’ until the program is uploaded.</li>
       <li>Shipments cannot be marked as ‘Received’ if the Receive Date is in the future.</li>
       <li>In the shipment data screen, the user may select the desired currency from a drop-down list by clicking in the appropriate cell in the currency column. Based on the currency selected, the user will get the catalog price.<ol style={{ listStyleType: 'lower-roman' }}><li>That price can be changed during data entry/updating.</li><li>Freight cost is based on shipment mode and procurement agent but can also be modified manually.</li></ol></li>
       <li>If a shipment row is in red text, this means that the shipment is identified as an “Emergency Shipment”. QAT will automatically mark the shipment as an emergency shipment if the receive date falls inside the predefined lead time, meaning the shipment will most likely need to be expedited. <em>Note: QAT will only auto-flag the emergency shipment when the shipment is first created, but QAT will stop auto-flagging after first time the shipment row is submitted.</em></li>
       <li>If a shipment is highlighted in grey, this means that the shipment is not included in the ending balance of the supply plan. Shipments can be excluded by either changing the status of the shipment to “Cancelled” OR by de-activating the shipment using the blue check box on the far left.</li>
   </ol>
6. Cliquez sur « Soumettre ».

**Mettre à jour les données d'expédition :**
1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'expédition ».
2. Une fois que l'écran « Données d'expédition » apparaît, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.
4. Pour mettre à jour les données d'expédition existantes, l'utilisateur doit double-cliquer sur la ou les cellules. Un utilisateur peut mettre à jour autant de cellules pour autant de lignes que nécessaire avant d'enregistrer, à condition qu'il s'agisse des mêmes filtres déroulants sélectionnés à l'étape 2 (c'est-à-dire que vous ne pouvez pas modifier les expéditions pour un produit, puis modifier les expéditions pour un produit différent sans enregistrer au préalable).
5. Lorsque l'un des éléments suivants est modifié (quantité, ARU, mode d'expédition, agent d'approvisionnement et coût unitaire de planification), le comportement du champ de coût de transport dépendra de l'état de la case « Coût de transport calculé automatiquement » :<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Checked:**<ol style={{ listStyleType: 'lower-roman' }}><li>The freight cost will be automatically recalculated based on the program/planning unit settings.</li><li>This calculation uses the formula: Planning Unit cost * Freight %.</li></ol></li>
       <li>**Unchecked:**<ol style={{ listStyleType: 'lower-roman' }}><li>The freight cost cell with have a red triangle in the right corner appear recommending the user to update the freight cost the first time the checkbox is unchecked.</li><li>To facilitate manual entry, the user can input a formula directly into the cell by typing an ‘=’ first. The formula will disappear upon saving, but the resulting value will remain. The user can also input a number directly.</li></ol></li>
   </ol>
6. Contrairement aux données de consommation, un utilisateur peut supprimer un enregistrement d'expédition même après qu'il a été enregistré dans le programme, bien que l'expédition doive être dans le statut « Planifié ». Pour ce faire, faites un clic droit sur l'envoi souhaité et sélectionnez « Supprimer la ligne ».
7. Une fois la ou les mises à jour effectuées, cliquez sur « Soumettre ».

**Ajouter/mettre à jour les détails du lot**

L’ajout d’informations sur les lots aux enregistrements d’expédition peut être appliqué aux expéditions dans n’importe quel statut autre que « expéditions suggérées ». Une fois un envoi créé, QAT générera automatiquement un lot. L'utilisateur a la possibilité de modifier ce lot et/ou d'ajouter de nouveaux lots à cet envoi.
1. Faites un clic droit sur la ligne d'expédition et cliquez sur « Afficher les informations sur le lot ».
2. Un écran contextuel contenant les détails du lot pour cet envoi apparaîtra.
3. L'utilisateur peut modifier le numéro de lot existant, la date de péremption et la quantité en double-cliquant sur la cellule.
4. L'utilisateur peut également ajouter un ou plusieurs nouveaux lots en cliquant avec le bouton droit et en sélectionnant « Ajouter un nouveau lot » ou en cliquant sur le bouton « +Ajouter une ligne » ».
5. La quantité totale des lots doit être égale à la quantité de cet envoi. Au bas de l'écran contextuel, la quantité totale de l'envoi ainsi que la quantité totale attribuée au(x) lot(s) s'afficheront. Il s'agit d'informer l'utilisateur si la quantité du lot est supérieure, inférieure ou égale à la quantité expédiée.
6. Cliquez sur « Enregistrer les informations sur le lot ».
7. **Remarque :** Lorsqu'un statut d'envoi passe à « Reçu », les détails du lot s'afficheront automatiquement pour que les utilisateurs puissent modifier ou confirmer les informations actuelles du lot.

La colonne à l'extrême droite intitulée « Généré automatiquement » permettra à l'utilisateur de savoir si ce lot a été généré automatiquement par QAT ou saisi manuellement par l'utilisateur. Si l'un des 3 champs du lot (numéro de lot, date de péremption, quantité) est modifié, la case du champ généré automatiquement deviendra décochée. Si la date de péremption et/ou la quantité sont modifiées mais pas le numéro de lot, le numéro de lot change automatiquement pour remplacer « QAT » par « MAN » et la cellule est mise en surbrillance avec un triangle rouge indiquant à l'utilisateur qu'elle doit être modifiée. Si l'utilisateur ne connaît pas le numéro de lot réel, QAT permettra de sauvegarder le lot sans modifier le numéro.

<div style={{textAlign: 'center'}}>

![Shipment Batch Details](/img/media/image131.png)

*Figure 82: Shipment Batch Details*

</div>

**Calculateur d'ordre stratégique :**

Pour des combinaisons spécifiques d'unité de planification et d'agent d'approvisionnement, un **calculateur de commande stratégique** peut apparaître pour l'utilisateur lors de la saisie de la quantité d'une expédition. Le but du calculateur est de conseiller les utilisateurs sur la quantité de commande appropriée pour une expédition en fonction d'un ou plusieurs des éléments suivants : a) quantité minimale de commande (MOQ) ; b) Chargement du conteneur ; c) Palette Euro 1 ; d) Palette Euro 2. Le calculateur aidera les utilisateurs à planifier les expéditions afin de maximiser l'efficacité de la logistique de livraison (par exemple en utilisant un conteneur plein au lieu de 20 % du conteneur). Les produits stratégiques sont définis au niveau du domaine par un administrateur d'application ou de domaine. Pour plus d'informations sur la façon de définir des produits stratégiques, consultez la [section sur l'ajout d'unités de planification pour les agents d'approvisionnement](./13-annex-1-application-realm-administrator-manual.md#k-procurement-agent).
1. Pour afficher le calculateur de quantité pour un produit stratégique, double-cliquez sur la cellule sous la colonne « Quantité commandée » et l'écran « Calculateur de quantité » apparaîtra. <em>Remarque : Si le produit est un produit non stratégique, l'utilisateur peut modifier directement la quantité commandée dans la cellule après un double-clic et il n'y aura pas de pop-up.</em>
2. La quantité originale de l’envoi apparaîtra dans la cellule « Quantité de commande manuelle ».
3. Si vous ne souhaitez pas utiliser le calculateur stratégique et souhaitez utiliser la « Quantité de commande manuelle » d'origine, sélectionnez « Aucune » dans la liste déroulante « Emballage basé sur » et cliquez sur « Enregistrer la quantité d'expédition ».
4. Si vous souhaitez utiliser le calculateur stratégique :<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Select how you wish to use the calculator by choosing an option from the “Packaging Based On” drop-down as well as the “Rounding Option” drop-down.</li>
       <li>Depending on your selections in step 4a, the quantity in “Final Order Quantity” cell will show you QAT’s calculated shipment quantity. The bottom table summarizes the key information around the different packaging modes.</li>
       <li>After confirming you are happy with the Final Order Quantity, click “Save Shipment Quantity”.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Strategic Order Calculator](/img/media/image131.png)

*Figure 83: Strategic Order Calculator*

</div>

**Voir les dates d'expédition :**
Les estimations pour chaque statut peuvent être consultées et les dates réelles peuvent être saisies manuellement dans l'écran Envoi. Cela permettra à l'utilisateur d'identifier si l'expédition est dans les délais ou en retard/en avance en fonction des délais de livraison. L'utilisateur peut également utiliser cet écran pour comparer les dates réelles avec les dates estimées de cette expédition et utiliser ces informations pour mettre à jour les délais de livraison qui peuvent ne pas être exacts.
1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'expédition ».
2. Une fois que l'écran « Données d'expédition » apparaît, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
3. L'écran affichera toutes les données actuelles pour la période de rapport, l'unité de planification et les autres filtres sélectionnés à l'étape 2.
4. Faites un clic droit sur l'envoi dont vous souhaitez afficher les dates et sélectionnez « Afficher les dates d'envoi ». Un écran contextuel intitulé « Dates d'expédition » apparaîtra.
5. La ligne intitulée « Estimation » de l'écran « Dates d'expédition » affichera une date pour chaque statut de l'expédition en fonction des délais saisis pour le programme ainsi que de la date de réception estimée. Seule la date de réception estimée peut être modifiée par l'utilisateur.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user changes the estimated receive date, the other estimated dates will also change based on the program’s lead times.</li>
   </ol>
6. La ligne intitulée « Réel » permettra à l'utilisateur de saisir la date réelle à laquelle chaque statut s'est produit pour cet envoi. Si une cellule est grisée dans cette ligne, cela signifie que l'envoi n'a pas encore atteint ce statut et qu'une date ne peut pas être saisie.
7. Si l'utilisateur modifie la date de réception estimée ou l'une des dates réelles, cliquez sur « Enregistrer les dates d'expédition ».

<div style={{textAlign: 'center'}}>

![Show Shipment Dates](/img/media/image131.png)

*Figure 84: Show Shipment Dates*

</div>

### B4. Liaison des expéditions ERP

La fonctionnalité de liaison des expéditions ERP permet aux planificateurs d’approvisionnement de relier certaines expéditions (actuellement GHSC-PSM) au système ERP de l’agent d’approvisionnement correspondant (actuellement ARTMIS). Une fois qu'une expédition est liée au plan d'approvisionnement, tous les détails de la commande (statut, date de réception, coûts, quantité, lots, etc.) correspondront à ceux présents dans l'ERP et l'utilisateur n'aura plus besoin de mettre à jour manuellement l'expédition. Si le packaging du produit dans l'ERP ne correspond pas au packaging de l'unité de planification dans QAT, l'utilisateur aura la possibilité de corriger cela via un attribut de facteur de conversion dans QAT. L'utilisateur pourra dissocier l'envoi s'il souhaite plutôt effectuer un suivi manuel. Les détails de l'expédition pour ces expéditions liées apparaîtront dans QAT (saisie des données d'expédition, planification des approvisionnements, rapports, etc.). L'utilisateur sera alerté si des modifications clés sont apportées à l'ERP, telles qu'une commande annulée ou un changement de SKU de produit. Les utilisateurs ne pourront étiqueter que les expéditions dont la source de financement a déjà été approuvée dans l'ERP.

Lors de la gestion de la liaison des expéditions ERP, les utilisateurs sélectionneront les options de menu « Lier les expéditions ERP » ou « Notifications d'expédition ERP ». Dans l’écran « Lier les expéditions ERP », il y a 3 sous-écrans :
1) **Non lié (QAT)** – Utilisez cet écran pour lier pour la première fois les expéditions QAT aux commandes ERP. Les utilisateurs verront une liste des envois QAT, et lorsqu'un utilisateur clique sur un seul envoi QAT, ils pourront choisir à quelles commandes ERP cet envoi QAT doit être lié.
2) **Lié** – Les utilisateurs verront une liste des expéditions actuellement liées et pourront mettre à jour le facteur de conversion ou les notes des expéditions déjà liées, ajouter des lignes ERP aux expéditions QAT déjà liées ou dissocier les lignes ERP de l'expédition QAT.
3) **Non lié (ERP)** – Utilisez cet écran pour lier les commandes ERP à QAT pour la première fois. Les utilisateurs verront une liste des envois ERP, et lorsqu'un utilisateur clique sur un seul envoi ERP, ils pourront alors choisir à quel envoi QAT cet envoi ERP doit être lié. Pour toutes les commandes qui se trouvent dans l'ERP et qui ne sont pas déjà dans QAT, vous pouvez créer une nouvelle expédition QAT dans cet écran.

<div style={{textAlign: 'center'}}>

![ERP Linking Screens](/img/media/image133.png)

*Figure 85: ERP Linking Screens*

</div>

**Règles pour la liaison des expéditions ERP :**

Vous trouverez ci-dessous les règles de liaison des expéditions ERP. Le bouton de détails dans le coin supérieur droit de l’écran « Lier les expéditions ERP » résumera ces règles.
1. La liaison ERP n'est modifiable que pour les versions locales téléchargées. Les écrans de liaison ERP afficheront les versions du serveur, mais ces données sont en lecture seule. Pour enregistrer les modifications de liaison, l'utilisateur doit télécharger cette version.
2. Actuellement, les expéditions QAT ne peuvent être liées que si l'agent d'approvisionnement est GHSC-PSM.
3. Les expéditions QAT ne peuvent pas être liées si elles sont dans le statut planifié, annulé ou suggéré.
4. Les envois QAT inactifs ne peuvent pas être liés.
5. Les envois QAT au statut « reçus » ne peuvent être liés que si la date de réception tombe dans les 6 derniers mois.
6. Les commandes ERP ne peuvent être liées que si elles ont dépassé le statut d'approbation de la source de financement (par exemple, approuvées par l'USAID).
7. Les commandes ERP au statut « livrées » ne peuvent être liées que si la date de livraison tombe dans les 6 derniers mois.
8. La date de réception ERP utilise la logique : 1) Date de livraison réelle 2) Date de livraison estimée 3) Date de livraison convenue 4) Date de livraison demandée. Par conséquent, si le numéro 1 n’est pas disponible, QAT utilisera le numéro 2. Si le n°2 n'est pas disponible, QAT utilisera le n°3 et si le n°3 n'est pas disponible, QAT utilisera le n°4.

**Non lié (QAT) :**

Cet écran est utilisé par les planificateurs d'approvisionnement pour lier les expéditions QAT aux commandes ERP. Vous trouverez ci-dessous les étapes à suivre pour lier un envoi QAT à une ou plusieurs commandes ERP :
1. Sélectionnez le bouton radio en haut intitulé « Non lié (QAT) ».
2. Sélectionnez le programme et les unités de planification à partir desquels vous souhaitez choisir l'expédition QAT. Une fois sélectionnée, une liste des envois QAT apparaîtra. La liaison ERP ne peut être effectuée que sur les versions locales, cependant, les expéditions liées peuvent être visualisées sur les versions serveur.
3. Faites un clic gauche sur un seul envoi QAT. Une fenêtre contextuelle apparaîtra intitulée « Rechercher des expéditions liées à l'ERP ». Cette fenêtre permettra à l'utilisateur de choisir les commandes ERP auxquelles l'envoi QAT doit être lié.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The top half of the window will show the QAT shipment details. This information is non-editable.</li>
       <li>The middle half of the window will show 2 dropdowns that will allow the user to filter the list of ERP orders to link the QAT shipment with.</li>
       <li>The bottom half of the window will list all ERP shipments based on the dropdowns in the middle section. This is where the user will link 1 or more orders as well as provide the Alternate Reporting Unit (ARU) and note (optional). The ARU will automatically populate the conversion factor.<ol style={{ listStyleType: 'lower-roman' }}><li>**To change/add a conversion factor, the user can do so in the ‘Alternate Reporting Unit’ screen.**</li></ol></li>
   </ol>
4. Dans la section centrale, l'utilisateur peut filtrer les expéditions ERP en sélectionnant l'unité de planification ERP, le numéro de commande/RO ou les deux. QAT pré-remplira la liste déroulante RO/Numéro de commande une fois que cette fenêtre apparaîtra en sélectionnant le numéro de commande de l'agent de procédure dans l'envoi QAT. Si ce champ est vide, QAT affichera un message sous les deux listes déroulantes en rouge indiquant « Remplissez soit l'unité de planification ERP, soit le RO/numéro de commande pour renseigner les données ».
5. Pour lier un envoi ERP, l'utilisateur cochera la case dans la colonne la plus à gauche qui dit « Lier ? ». Une fois que l'utilisateur aura fait cela, il lui sera demandé de saisir l'ARU.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user wants to link multiple ERP lines to the same QAT shipment, he/she should check the box for multiple rows.</li>
       <li>If a user wants to link multiple QAT shipments to 1 or multiple ERP lines, he/she should check the box at the top that says ‘Show all shipments for ______’ and then select each of the QAT shipments to link.</li>
   </ol>
6. Le facteur de conversion est utile lorsque l'unité de planification QAT et le produit ERP sont différents (paquet de 10 tablettes de chocolat vs paquet de 100 tablettes de chocolat). Le facteur de conversion est utilisé pour calculer la quantité d'expédition QAT convertie. La quantité d'expédition QAT convertie est la quantité de commande qui sera utilisée dans votre plan d'approvisionnement pour l'expédition liée.

<div style={{textAlign: 'center'}}>

![Conversion Factor Formula](/img/media/image134.png)

</div>

7. S'il y a une note dans l'envoi QAT, celle-ci sera reportée sur chacune des commandes ERP lors de la liaison. Dans cette fenêtre contextuelle, l'utilisateur peut modifier ou supprimer cette note.
8. Le bas de la fenêtre affichera la quantité de QAT commandée d'origine et la nouvelle quantité de QAT convertie.

<div style={{textAlign: 'center'}}>

![ERP Converted Quantity](/img/media/image135.png)

*Figure 86: ERP Converted Quantity*

</div>

9. Enfin, cliquez sur « Lier l'expédition ».

**Non lié (ERP) :**

Cet écran est utilisé par les planificateurs d'approvisionnement pour lier les commandes ERP à QAT pour la première fois. Pour toutes les commandes qui se trouvent dans l'ERP et qui ne sont pas déjà dans QAT, vous pouvez créer une nouvelle expédition QAT dans cet écran. Vous trouverez ci-dessous les étapes à suivre pour lier une commande ERP à un envoi QAT :
1. Sélectionnez le bouton radio en haut intitulé « Non lié (ERP) ».
2. Sélectionnez le pays ET la catégorie d'unité de planification ou l'unité de planification parmi laquelle vous souhaitez choisir l'ordre ERP. Une fois sélectionnée, une liste de commandes ERP apparaîtra.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note: This list is showing ERP data whereas the Not Linked (QAT) screen shows QAT data.**</li>
   </ol>
3. Faites un clic gauche sur une seule commande ERP. Une fenêtre contextuelle apparaîtra intitulée « Rechercher des expéditions liées à l'ERP ». Cette fenêtre permettra à l'utilisateur de lier 1 ou plusieurs commandes ERP à un envoi QAT préexistant ou nouveau.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The top half of the window will show the QAT shipment details. This area will allow the user to either select a pre-existing QAT shipment or create a new one. Steps 4 and 5 will detail how to do so.</li>
       <li>The middle half of the window will show 2 dropdowns that will allow the use to filter the list of ERP orders to link the QAT shipment with.</li>
       <li>The bottom half of the window will list all ERP shipments based on the dropdowns in the middle section. This is where the user will link 1 or more orders as well as provide the conversion factor and note. This section is pre-populated based on the ERP order number that was selected on the previous screen.</li>
   </ol>
4. Pour sélectionner un envoi QAT existant, cliquez sur le bouton « Sélectionner un envoi existant » dans la section supérieure.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Select the program that you want to search the QAT shipment(s) from. The dropdown will be filtered to show only the country that was selected in step 2.</li>
       <li>Next, either search the list of QAT shipments by planning unit (default) or by QAT shipment ID. If you want to search by QAT shipment ID, you will need to check the box that is labeled ‘Filter by QAT shipment id?’. To go back to searching by planning unit, you will uncheck the box.</li>
       <li>Once you find the desired QAT shipment, select the button in the far-left column labeled ‘Select shipment id’.</li>
   </ol>
5. Pour créer un nouvel envoi QAT, cliquez sur le bouton « Créer un nouvel envoi » dans la section supérieure.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The user will need to fill in 4 dropdowns (Program, Planning Unit, Funding Source, Budget) to provide required information for creating the shipment. The rest of the shipment details will come from the ERP order that is selected in step 7.<ol style={{ listStyleType: 'lower-roman' }}><li>The program dropdown is filtered to show only the country that was selected in step 2.</li><li>The budget dropdown is filtered based on the selection in the funding source dropdown.</li><li>If there is no applicable budget, the user will need to leave the screen and add a budget in master data. If the user adds a budget, he/she must master data sync before seeing that option appear in this screen.</li></ol></li>
   </ol>
6. Dans la section du milieu, QAT pré-remplira la liste déroulante RO/Numéro de commande une fois que cette fenêtre apparaîtra en fonction de la commande ERP sélectionnée effectuée à l'étape 3.
7. Pour lier un envoi ERP, l'utilisateur cochera la case dans la colonne la plus à gauche qui dit « Lier ? ». Une fois que l'utilisateur aura fait cela, il lui sera demandé de saisir l'ARU.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user wants to link multiple ERP lines to the same QAT shipment, he/she should check the box for multiple rows.</li>
       <li>If a user wants to link multiple QAT shipments to 1 or multiple ERP lines, he/she should check the box at the top that says ‘Show all shipments for ______’ and then select each of the QAT shipments to link.</li>
   </ol>
8. Le facteur de conversion est utile lorsque l'unité de planification QAT et le produit ERP sont différents (paquet de 10 tablettes de chocolat vs paquet de 100 tablettes de chocolat). Le facteur de conversion est utilisé pour calculer la quantité d'expédition QAT convertie. La quantité d'expédition QAT convertie est la quantité de commande qui sera utilisée dans votre plan d'approvisionnement pour l'expédition liée.

<div style={{textAlign: 'center'}}>

![Conversion Factor Formula](/img/media/image134.png)

</div>

9. L'utilisateur peut ajouter une note à l'envoi en modifiant la colonne d'extrême droite intitulée « Notes ».
10. Le bas de la fenêtre affichera la quantité de QAT commandée d'origine et la nouvelle quantité de QAT convertie.
11. Enfin, cliquez sur « Lier l'expédition ».

<div style={{textAlign: 'center'}}>

![Create New Shipment](/img/media/image136.png)

*Figure 87: Create New Shipment*

</div>

**Écran lié :**

Cet écran est utilisé par les planificateurs d'approvisionnement pour afficher la liste des expéditions ERP actuellement liées et mettre à jour l'unité de rapport alternative (ARU) ou les notes, ajouter des commandes ERP aux expéditions QAT déjà liées ou dissocier les lignes ERP de l'expédition QAT.
1. Sélectionnez le bouton radio en haut intitulé « Lié ».
2. Sélectionnez le programme et les unités de planification pour lesquels vous souhaitez voir la liste des expéditions liées. Une fois sélectionnée, une liste d’envois apparaîtra. Les informations contenues dans ces expéditions sont extraites de l'ERP.
3. Pour effectuer l'une des mises à jour répertoriées à l'étape 2, cliquez avec le bouton gauche sur un seul envoi.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>To edit ARU and/or notes, double-click on the cell and type or select from dropdown.</li>
       <li>To de-link an ERP order, uncheck the box in the ‘Link?’ column.</li>
       <li>To add an ERP order, check the box for that order under ‘Link?’ column. The user can clear the search dropdowns in the middle section to look up a different planning unit or order number and the originally linked orders will remain linked.</li>
   </ol>
4. Les utilisateurs auront également la possibilité de consulter les détails de l'historique des commandes à partir de l'ERP. Pour ce faire, à partir de l'écran d'origine « Lié », cliquez avec le bouton droit sur un seul envoi et cliquez sur « Afficher l'historique des commandes ERP ». Une fenêtre contextuelle apparaîtra intitulée « Historique des commandes ERP ». Cet écran affichera tous les détails qui ont changé au fil du temps dans la commande ERP. Chaque ligne indique qu'une ou plusieurs colonnes ont changé. La colonne la plus à droite intitulée « Données reçues le » indique la date à laquelle l'enregistrement a été reçu par QAT.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>To view batch details, click on the icon.</li>

       <li>**Note:** Certain fields from the ERP are not captured on this screen so there may be some instances where 1 or more rows have the same details. This means that a column in the backend was changed.</li>
   </ol>

**Remarque :** Une fois que vous avez lié les expéditions QAT aux commandes ERP, les données seront reflétées dans votre plan d'approvisionnement sans avoir à maîtriser la synchronisation des données. Les données ERP nouvellement liées seront reflétées dans les rapports locaux, l'écran de planification des approvisionnements ainsi que l'écran de saisie des données d'expédition. L'utilisateur doit télécharger une version sur le serveur pour que les autres utilisateurs puissent voir ces modifications.

Pour afficher les expéditions liées à l'ERP dans l'écran de saisie des données d'expédition, l'utilisateur doit sélectionner « Envois liés à l'ERP » dans la liste déroulante Type d'expédition. L'utilisateur peut soit afficher uniquement cette option, soit la combiner avec les expéditions manuelles pour afficher toutes les expéditions. Les expéditions liées à l'ERP seront grisées pour indiquer qu'elles ne sont pas modifiables.

<div style={{textAlign: 'center'}}>

![View ERP Shipments in Data Entry](/img/media/image138.png)

*Figure 88: View ERP Shipments in Data Entry*

</div>

Dans l'écran de planification des approvisionnements, les expéditions liées à l'ERP auront une icône de lien en haut à gauche de la cellule. L'utilisateur peut cliquer sur un envoi spécifique pour afficher les détails, mais ces cellules seront également grisées pour indiquer qu'elles ne sont pas modifiables. Cependant, l'utilisateur peut toujours cliquer avec le bouton droit sur les détails de l'expédition pour afficher les dates d'expédition et les informations sur les lots.

<div style={{textAlign: 'center'}}>

![View ERP Shipments in Supply Plan](/img/media/image139.png)

*Figure 89: View ERP Shipments in Supply Plan*

</div>

**Notifications d'expédition ERP**

Le but de l'écran « Notifications d'expédition ERP » est d'alerter les planificateurs d'approvisionnement de toute modification clé apportée aux expéditions liées à l'ERP, comme une commande annulée ou un changement de SKU de produit. Les planificateurs de l’approvisionnement seront encouragés à « répondre » à chacune des notifications pour confirmer qu’ils sont au courant du changement et des implications apportées au plan d’approvisionnement. Pour les modifications de produits, l'utilisateur reconfirmera le facteur de conversion, qu'il change ou non.

En haut de l'écran se trouve une icône ![Truck Icon](/img/media/image140.png). Cette icône affichera un nombre rouge indiquant le nombre de notifications non adressées figurant sur l'écran des notifications d'expédition ERP. S’il n’y a pas de chiffre rouge, cela signifie qu’il n’y en a pas.

Pour accéder à l'écran « Notifications d'expédition ERP », cliquez sur l'icône du camion en haut de QAT ou sélectionnez « Notifications d'expédition ERP » sous « Données du plan d'approvisionnement » dans le menu de la barre latérale de gauche.

Pour afficher les notifications, l'utilisateur devra sélectionner parmi les 3 listes déroulantes (Programme, Unité de planification, Adressée). L'utilisateur a également la possibilité de sélectionner directement dans le tableau situé au-dessus des listes déroulantes. Lorsqu'un utilisateur clique avec le bouton gauche sur une ligne du tableau, les 3 listes déroulantes se rempliront automatiquement en fonction du programme sélectionné par l'utilisateur. La liste déroulante des unités de planification sera renseignée dans toutes les unités de planification et la liste déroulante adressée sélectionnera « Non adressé ».

<div style={{textAlign: 'center'}}>

![ERP Shipment Notifications Filtering](/img/media/image141.png)

*Figure 90: ERP Shipment Notifications Filtering*

</div>

Pour adresser une notification, l'utilisateur doit cocher la case dans la colonne « Adressée ? », puis cliquer sur le bouton « Soumettre ». Si l'utilisateur adresse une notification de changement de produit ERP, il doit d'abord saisir le facteur de conversion. Le champ du facteur de conversion n'est pas modifiable tant que la case adressée n'est pas cochée.

Tout comme dans l’écran « Lié », l’utilisateur peut consulter l’historique des commandes ERP. Pour ce faire, faites un clic droit sur la ligne de notification et cliquez sur « Afficher l'historique des commandes ERP ». Reportez-vous à la section Écran lié pour plus d'informations.

## C. Importation de données pour la planification des approvisionnements

###C1. Modèles d'importation Excel de données de plan d'approvisionnement

<div style={{ border: '2px solid black', padding: '15px', float: 'right', width: '35%', marginLeft: '15px', marginBottom: '15px', backgroundColor: '#fcfcfc' }}>

**Notes on Excel Templates:**<br/>
Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.

</div>

Les données de consommation, d’inventaire et d’expédition peuvent être saisies via les écrans de saisie de données de QAT, via l’écran de planification des approvisionnements ou via Quantimed Import (consommation prévue uniquement). QAT offre également aux utilisateurs la possibilité de saisir ces données directement à partir de Microsoft Excel. Cette méthode de saisie de données est destinée aux saisies groupées contenant beaucoup de données. Les étapes ci-dessous montreront comment saisir des données d'Excel dans QAT :

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur le type de données que vous souhaitez saisir (par exemple « Données de consommation »).

<div style={{textAlign: 'center', margin: '20px 0'}}>

![Download Template Location](/img/media/image142.png)

</div>

2. Une fois sur l'écran de saisie des données, allez dans le coin supérieur droit et cliquez sur « Télécharger le modèle ».
3. Un fichier Microsoft Excel sera téléchargé directement dans le dossier **'Téléchargements'** de votre ordinateur.
4. Accédez au dossier Téléchargements de votre ordinateur et ouvrez le fichier Excel. Le format du nom doit être **ConsumptionDataEntryTemplate.xlsx**, la première partie dépendant du type de données que vous saisissez.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li><u><i>Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.</i></u></li>
   </ol>
5. Une fois dans le modèle Excel, cliquez sur « Activer la modification » en haut si cela vous y est invité.

<div style={{textAlign: 'center'}}>

![Enable Editing](/img/media/image144.png)

*Figure 91: Enable Editing*

</div>

<div style={{ float: 'right', marginLeft: '20px', marginBottom: '15px', width: '20%' }}>

![Downloads Folder Sidebar](/img/media/image143.png)

</div>

6. Saisissez les données pour tous les champs obligatoires.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell highlighted in grey (e.g. Conversion Factor) is non-editable and does not need to be filled in.</li>
       <li>Certain fields (e.g. Data Source) will have drop down menus pre-populated from QAT. Therefore, it is important to download a new template if it has been a while since the last time the user used the template.</li>
       <li>Certain fields have built in data validations (e.g. letters cannot be entered in cost cells). If the validation is not met, a pop-up error message will appear.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Excel Template](/img/media/image145.png)

*Figure 92: Excel Template*

</div>

7. Une fois toutes les données saisies dans le modèle Excel, rouvrez la fenêtre QAT.
8. Accédez à l'écran de saisie des données (Consommation, Inventaire, Ajustement, Expédition).
9. Cliquez sur le bouton bleu « + Ajouter une ligne » en bas.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** You only need to add 1 row in QAT regardless of how many rows there are in the Excel template.</li>
   </ol>
10. Dans le modèle Excel, sélectionnez toutes les données et appuyez sur Ctrl + C sur votre clavier pour copier les données.
11. Accédez à la ligne ajoutée dans QAT, faites un clic gauche sur la cellule la plus à gauche de cette ligne et appuyez sur Ctrl + V sur votre clavier pour coller les données.
12. QAT créera automatiquement de nouvelles lignes pour les données importées depuis Excel.
13. Cliquez sur « Soumettre ».

###C2. Importation de prévisions quantimées

Quantimed est un logiciel conçu pour faciliter le processus de détermination des quantités de médicaments et de fournitures médicales nécessaires à un programme de santé. Le résultat de Quantimed est constitué de données de consommation prévisionnelles d’un programme de santé. Ces données de consommation prévues peuvent constituer un élément clé dans les plans d’approvisionnement des utilisateurs de QAT. QAT permet aux utilisateurs d'importer des prévisions Quantimed dans QAT pour les inclure dans leur plan d'approvisionnement.

<div style={{textAlign: 'center'}}>

![Quantimed Sidebar](/img/media/image146.png)

</div>

**Étape 1 : Importer des données quantimées dans QAT**
1. Accédez à « Données du plan d'approvisionnement » dans le menu de la barre latérale.
2. Sélectionnez « Importation Quantimée »
3. Importer un fichier de données quantimées <br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Choose the Quantimed .xml forecast file from your local computer system.</li>
       <li>Select the QAT program that you want the Quantimed data to import into.</li>
       <li>Click on “Import”.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Quantimed File Import](/img/media/image147.png)

*Figure 93: Quantimed File Import*

</div>

**Étape 2 : Cartographier les unités de planification**
1. Pour mapper un produit Quantimed à une unité de planification QAT, sélectionnez l'unité de planification QAT à l'aide du menu déroulant.
2. Si vous ne souhaitez pas importer un produit Quantimed spécifique, sélectionnez l'option « Ne pas importer » pour cette ligne.
3. S'il n'y a pas d'unité de planification QAT associée au produit Quantimed, la liste déroulante affichera « Unité de planification introuvable ». Vous devrez soit sélectionner manuellement une unité de planification dans la liste déroulante, soit revenir au programme et ajouter une unité de planification pour ce produit Quantimed avant de continuer. Vous ne pouvez pas cliquer sur « Suivant » si une ou plusieurs cellules indiquent « Unité de planification introuvable ».<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** to minimize instances where a planning unit is not found, it is recommended that Quantimed users select products from the GHSC-PSM product catalog .xml file.</li>
   </ol>
4. Une fois que chaque ligne a une unité de planification sélectionnée ou indique « Ne pas importer », cliquez sur « Suivant » en bas de l'écran.

<div style={{textAlign: 'center'}}>

![Map Planning Units](/img/media/image148.png)

*Figure 94: Map Planning Units*

</div>

**Étape 3 : Région**
1. Dans cette étape, sélectionnez la région dans laquelle vous souhaitez importer les données de consommation prévue. S'il n'y a qu'une seule région, vous devez sélectionner cette région pour continuer.
2. Ensuite, saisissez le pourcentage de ces données de consommation que vous souhaitez importer dans QAT. Ce pourcentage doit être compris entre 0 et 100 % et s'appliquera à toutes les unités de planification préalablement sélectionnées.
3. Cliquez sur « Suivant ».

**Étape 4 : Mois de consommation**
1. Sélectionnez la plage de dates pour les données Quantimed que vous souhaitez importer dans QAT.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The period you select is the period of data that you will be able to import and will apply to all planning units previously selected.</li>
   </ol>
2. Cliquez sur « Suivant ».

<div style={{textAlign: 'center'}}>

![Consumption Month Screen](/img/media/image149.png)

*Figure 95: Consumption Month Screen*

</div>

**Étape 5 : Importer des données**
1. La dernière étape consiste à confirmer les données qui seront importées de Quantimed vers QAT en fonction de ce qui a été saisi aux étapes 1 à 4.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>“Quantimed Forecasted Consumption” is the amount that is being pulled in from Quantimed for the associated product and month-year.</li>
       <li>“Converted Quantimed Forecasted Consumption” is the amount that will be pulled into QAT for the associated product and month-year after applying the import percentage and conversion factor.</li>
       <li>“Current QAT Forecasted Consumption” is the forecasted consumption amount currently in QAT for that planning unit and month-year. Once you import the Quantimed data, this amount will be overwritten by the “Converted Quantimed Forecasted Consumption” amount.</li>
   </ol>
2. Cet écran affichera toutes les données qui seront importées dans QAT. Si vous ne souhaitez pas importer certains enregistrements, cochez la case dans la colonne « Importer ? » à l'extrême droite. Cela empêchera QAT d’importer les données Quantimed et conservera la consommation prévue actuelle de QAT pour cette unité de planification et ce mois-année.
3. Cliquez sur « Soumettre » pour importer les données.

<div style={{textAlign: 'center'}}>

![Confirm Data Import Screen](/img/media/image150.png)

*Figure 96: Confirm Data Import Screen*

</div>

###C3. Importation des prévisions QAT

**<u>Objectif</u> :** Permettre aux utilisateurs d'importer des prévisions créées par QAT dans les programmes de plan d'approvisionnement. Les prévisions ne sont disponibles pour l'importation que si 1) elles sont téléchargées en tant que version finale et 2) une prévision est sélectionnée pour chaque unité de planification.

**<u>Utilisation de cet écran</u> :**

**(Étape 1)**

- Sélectionnez le programme de prévisions à partir duquel importer (seules les prévisions finales sont disponibles)
- Sélectionnez le programme de plan d'approvisionnement vers lequel importer. Seules les versions du plan d'approvisionnement local peuvent être utilisées. Pour télécharger un programme, accédez à l'écran « Télécharger/Supprimer le programme » sous « Gestion du programme ».
  - Sélectionnez la plage de dates des données de prévision à importer, qui doit se situer dans la période de prévision.
- Dans le tableau qui apparaît, sélectionnez et cartographiez les unités de planification.
  - Pour chaque unité de planification de prévision, QAT nécessite une unité de planification du plan d'approvisionnement et un facteur de conversion correspondants. QAT mappe automatiquement les correspondances exactes des unités de planification, mais les utilisateurs peuvent remplacer à la fois le mappage de l'unité de planification et le facteur de conversion.
  - Il n'est pas nécessaire d'importer toutes les unités de planification prévisionnelle. Toutefois, toutes les unités de planification prévisionnelle doivent avoir une sélection dans la table de mappage. Vous pouvez sélectionner manuellement « Ne pas importer » pour chaque PU de prévision que vous ne souhaitez pas importer ou vous pouvez cliquer sur la case à cocher « Ne pas importer toutes les PU non mappées » qui permettra une sélection groupée de Ne pas importer pour toutes les PU non mappées.
  - Si pour une PU aucune prévision n'a été sélectionnée, elle apparaîtra grisée avec « static.importintoSP.forecastBlank »
  - Si une unité de planification n'apparaît pas dans la liste déroulante, vous devrez l'ajouter au programme du plan d'approvisionnement dans l'écran « Mettre à jour les unités de planification ».

<div style={{textAlign: 'center'}}>

![Forecast Import Screen](/img/media/image151.png)

*Figure 97: Forecast Import Screen*

</div>

**(Étape 2)**

Pour chaque région de prévision, saisissez la quantité (%) des prévisions de cette région que vous importerez et dans quelle région la consommation prévue sera importée. Voici quelques cas d'utilisation :
- Prévisions nationales au plan national d'approvisionnement

  | Région(s) de prévision | % de la prévision | Région du plan d'approvisionnement |
  | :--- | :--- | :--- |
  | Nationale | 100 | Nationale |

- Prévisions multirégionales au plan d'approvisionnement multirégional

  | Région(s) de prévision | % de la prévision | Région du plan d'approvisionnement |
  | :--- | :--- | :--- |
  | Nord | 100 | Nord |
  | Est | 100 | Est |
  | Sud | 100 | Sud |

- Prévisions multirégionales au plan d'approvisionnement national -

  | Région(s) de prévision | % de la prévision | Région du plan d'approvisionnement |
  | :--- | :--- | :--- |
  | Nord | 100 | Nationale |
  | Est | 100 | Nationale |
  | Sud | 100 | Nationale |

- Prévisions nationales vers un plan d'approvisionnement multirégional – notez que le processus d'importation doit être répété pour chaque région du plan d'approvisionnement.

  | Région(s) de prévision | % de la prévision | Région du plan d'approvisionnement |
  | :--- | :--- | :--- |
  | Nationale | 20 | Nord |

  <br />

  | Région(s) de prévision | % de la prévision | Région du plan d'approvisionnement |
  | :--- | :--- | :--- |
  | Nationale | 45 | Sud |

  <br />

  | Région(s) de prévision | % de la prévision | Région du plan d'approvisionnement |
  | :--- | :--- | :--- |
  | Nationale | 35 | Est |

**(Étape 3)**

QAT listera chaque enregistrement de prévision à importer (une ligne pour chaque combinaison d'unité de planification, de région et de mois).
- QAT calcule la consommation prévue à importer comme suit :

  _Consommation prévue (module de prévision)_ &nbsp;&nbsp;x&nbsp;&nbsp; _% des prévisions_ &nbsp;&nbsp;x&nbsp;&nbsp; _Facteur de conversion (prévision en plan d'approvisionnement)_ &nbsp;&nbsp;=&nbsp;&nbsp; _Consommation prévue arrondie* convertie_

Par exemple :
  - Une prévision nationale qui sera divisée en deux régions de 50% chacune
  - L'Unité de Planification des Prévisions est en pack de 3, et l'Unité de Planification du Plan d'Approvisionnement est en pack de 1 (Facteur de Conversion = 3)
  - La prévision nationale pour le Mois N était de 100 (pack de 3)
  - Prévisions de 100 x 50% x 3 = 150,00 arrondis (packs de 1) seront importés dans chaque région pour le Mois N
- **\*Méthode d'arrondi :** Étant donné que QAT Supply Planning nécessite des nombres entiers sans décimales, QAT convertit la consommation prévue en nombres entiers en arrondissant et en additionnant les « résidus » au fil du temps. Chaque mois, QAT additionne le total des résidus du mois dernier et les prévisions de ce mois-ci, avant d'arrondir à l'inférieur, et tout résidu non arrondi à l'inférieur est ajouté à un total résiduel courant, appelé Total Cumulatif. De cette manière, les quantités ne sont pas perdues lors du processus d’arrondi.
  - Formules :
    - **Total cumulé pour le mois N** = (Résiduel pour le mois N - 1) + Prévision convertie pour le mois N
    - **Résiduel pour le mois N** = Combien a été perdu lors de l'arrondi = (Total cumulé pour le mois N) – (Prévision convertie arrondie pour le mois N)
    - **Prévision convertie arrondie pour le mois N** = Total cumulé pour le mois N, arrondi au nombre entier inférieur le plus proche
  - Par exemple, une prévision nationale devrait consommer 0,25 pack de l'unité de planification des prévisions par mois, pendant 12 mois. L'unité de planification des prévisions et l'unité de planification du plan d'approvisionnement sont identiques (facteur de conversion = 1)
    - En janvier, la consommation convertie est de 0,25, et comme c'est le premier mois, le 0,25 est aussi le total cumulé de janvier. 0,25 est arrondi à un nombre entier égal à 0, et le nombre arrondi de 0 est importé dans le module de planification des approvisionnements. Le résidu de janvier résultant des arrondis est de 0,25 – 0 = 0,25.
    - En février, la consommation convertie est de 0,25, ajoutée au résiduel de janvier de 0,25, ce qui donne au total cumulé de février 0,25 + 0,25 = 0,5. Ensuite, 0,5 est arrondi à un nombre entier de 0, qui est importé dans le module de planification des approvisionnements. Le résiduel de février après arrondi est de 0,5 – 0 = 0,5.
    - En mars, la consommation convertie est de 0,25, ajoutée au résiduel de février de 0,5, ce qui donne au total cumulé de mars 0,25 + 0,5 = 0,75. Ensuite, 0,75 est arrondi à un nombre entier de 0, qui est importé dans le module de planification des approvisionnements. Le résidu de mars après arrondi est de 0,75 – 0 = 0,75.
    - En avril, la consommation convertie est de 0,25, ajoutée au résiduel de mars de 0,75, ce qui donne au total cumulé d'avril 0,25 + 0,75 = 1,00. Ensuite, 1,00 est arrondi à un nombre entier de 1,00, qui est importé dans le module de planification des approvisionnements. Le résidu d’avril résultant de l’arrondi est de 1,00 – 1,00 = 0.
    - A partir du mois de mai, le cycle se répète.

| | janvier | Février | mars | avril | Mai | juin | juillet | Août | septembre | octobre | novembre | décembre |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Prévision convertie** <br /> _(Après application du facteur de conversion)_ | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 |
| _Total cumulé_ | 0,25 | 0,5 | 0,75 | 1 | 0,25 | 0,5 | 0,75 | 1 | 0,25 | 0,5 | 0,75 | 1 |
| _Résiduel_ | 0,25 | 0,5 | 0,75 | 0 | 0,25 | 0,5 | 0,75 | 0 | 0,25 | 0,5 | 0,75 | 0 |
| **Prévision convertie arrondie** <br /> _(À importer dans le module de planification des approvisionnements)_ | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |

- S'il existe une consommation prévue existante dans le plan d'approvisionnement, la cellule « Consommation actuelle prévue » sera <mark style={{backgroundColor: 'yellow', padding: '0 4px', color: 'black'}}> surlignée en jaune </mark>.
- S'il existe une consommation prévue dans le plan d'approvisionnement et que les données de consommation prévue que l'utilisateur tente d'importer datent de plus de 4 mois, la cellule « Consommation actuelle prévue » sera <mark style={{backgroundColor: 'lightgray', padding: '0 4px', color: 'black'}}> surlignée en gris </mark> et ne sera PAS importée.
- Utilisez le bouton « Importer ? » pour désélectionner les prévisions que vous ne souhaitez PAS importer dans le plan d'approvisionnement. Si cette case est cochée, la consommation prévue convertie remplacera la prévision du plan d'approvisionnement. Si cette case n'est pas cochée, la prévision actuelle du plan d'approvisionnement sera conservée.

<div style={{textAlign: 'center'}}>

![QAT Forecast Import Screen](/img/media/image152.png)

*Figure 98: QAT Forecast Import Screen*

</div>
---
id: supply-planning-module-supply-planning
title: "5. Supply Planning Module: Supply Planning"
sidebar_label: "   5. Supply Planning"
sidebar_position: 6
---
* <u>Qui ?</u> **Les administrateurs de domaine**, les **administrateurs de programme**, les **réviseurs du plan d'approvisionnement** et les **utilisateurs du programme** peuvent ajouter/modifier des données dans le plan d'approvisionnement. Certains rôles « affichage uniquement » peuvent afficher le plan d'approvisionnement.
* <u>Quand ?</u> À tout moment. L'utilisateur n'a pas besoin d'être en ligne. Cependant, ils doivent avoir téléchargé un programme sur leur ordinateur local en ligne avant de commencer.
* <u>Comment ?</u>
  
  **Remarque :** hormis l'étape 1 étant requise, les étapes restantes ne sont pas séquentielles, mais une explication des fonctionnalités disponibles dans l'écran de planification des approvisionnements.
  
  <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '15px' }}>
    <li style={{ marginBottom: '20px' }}>
      On the left menu bar, go to Supply Planning &gt; “Supply Planning”
      <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
        <li style={{ marginBottom: '10px' }}>Select the desired <b>Program</b>. The drop-down list in the supply plan screen will show all the programs that have been downloaded by the user. Refer to <a href="./06-managing-programs-and-versions.md#b-downloaddelete">Download Program</a> for details on how to download a program.</li>
        <li style={{ marginBottom: '10px' }}>Select the desired <b>QAT Planning Unit</b> or <b>Alternate Reporting Unit (ARU)</b>.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image156.png').default} alt="QAT Planning Unit / Alternate Reporting Unit Selectors" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      L'écran affiche deux onglets Plan d'approvisionnement : <b>Plan d'approvisionnement local</b> et <b>Plan d'approvisionnement du serveur - VX</b>. L'onglet « Plan d'approvisionnement local » est la version locale qui a été sélectionnée sous « programme » et qui peut être modifiée. Le « Plan d'approvisionnement du serveur » est la dernière version disponible sur le serveur et est uniquement disponible pour visualisation (non modifiable).
      <br /><br />
      <img src={require('@site/static/img/media/image157.png').default} alt="Local/Server Supply Plan Tabs" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Par défaut, les 3 derniers mois et les 15 mois futurs à compter de la date actuelle sont affichés. Utilisez <b>Faites défiler vers la gauche/droite</b> pour afficher les données de 3 mois dans le passé/futur
      <br /><br />
      <img src={require('@site/static/img/media/image158.png').default} alt="Scroll to left / right bar" />
      <br /><br />
      Cliquez sur « Afficher les formules » en haut à droite de l'écran pour obtenir des explications sur les calculs sur cet écran.
      <br /><br />
      <img src={require('@site/static/img/media/image159.png').default} alt="Show Formulae button" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Cliquez sur le fichier PDF &amp; Icônes CSV pour exporter ce rapport et inclura toutes les unités de planification du programme. En PDF, seul le graphique du produit sélectionné sera inclus, mais il y aura des tableaux pour chaque unité de planification.
      <br /><br />
      <img src={require('@site/static/img/media/image160.png').default} alt="PDF and CSV Export Icons" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Comprendre les calculs du solde des stocks dans la moitié supérieure du tableau :
      <br /><br />
      <img src={require('@site/static/img/media/image161.png').default} alt="Figure 102: Ending Stock Balance Calculation" />
      <br />
      <i>Figure 102: Ending Stock Balance Calculation</i>
      <br /><br />
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '5px' }}><b>Opening Balance</b> represents the quantity of stock at the beginning of the month. It is equal to the ending balance of the previous month, except the very first month of the program, where the opening balance is zero. It can be an inventory count from the previous month (<b>bolded</b>), or a projected value (unbolded).</li>
        <li style={{ marginBottom: '5px' }}><b>Ending Balance</b> represents the quantity of stock at the end of the month. It can be an inventory count (<b>bolded</b>), or a projected value (unbolded).</li>
        <li style={{ marginBottom: '5px' }}>Follow the +/- signs besides each row to understand how the math works from opening balance to ending balance.</li>
      </ul>
    </li>
  </ol>
  
La moitié inférieure du tableau contient plus de détails pour aider l'utilisateur à interpréter l'état du stock.
  
  ![Figure 103 Differences in the Supply Planning Table - Plan by MOS vs Plan by Quantity](/img/media/image162.png)
  *Figure 103 Différences dans le tableau de planification des approvisionnements - Plan par MOS vs Plan par quantité*
  
  * **La consommation mensuelle moyenne (AMC)** est une moyenne de la consommation sur les mois indiquée par les paramètres AMC, qui sont affichés au-dessus du tableau. Pour modifier ces paramètres, voir [Mise à jour des unités de planification](./07-supply-planning-module-program-data.md#a2-planning-units).
    
    ![Figure 104 Differences in the Supply Planning Legend- Plan by MOS vs Plan by Quantity](/img/media/image163.png)
    *Figure 104 Différences dans la légende de la planification des approvisionnements : plan par MOS et plan par quantité*
    
  * **Demande non satisfaite.** Quantités estimées de produit qui auraient été consommées si un stock suffisant était disponible :
    - Lorsque la consommation prévisionnelle est supérieure au stock de départ disponible projeté.
    - Lorsque la consommation réelle inclut les jours de rupture de stock
    - Lorsqu'un ajustement manuel négatif est supérieur au solde de clôture projeté
    - La fonctionnalité de demande non satisfaite de QAT est ce qui capture ce qui aurait été un stock négatif dans l'ancien logiciel PipeLine.
  * La deuxième rangée en partant du bas
    - **Planifié par MOS : mois de stock** est calculé comme le solde de clôture du mois divisé par l'AMC.
    - **Planifié par quantité : la quantité maximale** est calculée comme la quantité minimale + la fréquence de réapprovisionnement x AMC.
  * Codage couleur de l'état du stock
    - **Planifié par MOS :** La ligne **« Mois de stock »** est codée par couleur en fonction de l'état du stock en utilisant le code couleur affiché dans la légende. L'état du stock est déterminé en comparant le MOS avec le MIN MOS et le MAX MOS.
    - **Planifié par Quant

ity :** La ligne **« Solde final »** est codée par couleur en fonction de l'état du stock en utilisant le code couleur affiché dans la légende. L'état du stock est déterminé en comparant la quantité du « solde final » avec la quantité minimale (fournie par l'utilisateur) et la quantité maximale (calculée).
  
  <ol start="7" style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '15px' }}>
    <li style={{ marginBottom: '20px' }}>
      Reading the stock status graph. The dates on this graph follow the table. By default, all graph elements are displayed. Click on any data element in the legend to hide a data element. The Stock Status graph has two vertical (Y) axes:
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
        <li style={{ marginBottom: '10px' }}>The <b>primary (left) axis is in units</b>, and depicts shipments, consumption, stock, and expiries. For Plan by Quantity, there minimum and maximum quantities use the primary axis.<br/><br/><img src={require('@site/static/img/media/image164.png').default} alt="Figure 105 Supply Planning Graph - Primary Axis (Plan by MOS)" /><br/><i>Figure 105 Supply Planning Graph - Primary Axis (Plan by MOS)</i><br/><br/><img src={require('@site/static/img/media/image165.png').default} alt="Figure 106 Supply Planning Graph - Primary Axis (Plan by Quantity)" /><br/><i>Figure 106 Supply Planning Graph - Primary Axis (Plan by Quantity)</i></li>
        <li style={{ marginBottom: '10px' }}>For plan by MOS, there is a <b>secondary (right) axis in months</b>, and depicts the stock parameters (minimum, maximum) and the calculated months of stock.<br/><br/><img src={require('@site/static/img/media/image166.png').default} alt="Figure 107 Supply Planning Graph - Secondary Axis (Plan by MOS)" /><br/><i>Figure 107 Supply Planning Graph - Secondary Axis (Plan by MOS)</i></li>
      </ul>
    </li>
  </ol>
  
## B. Planification des approvisionnements : consommation

# Section 5. Module de planification des approvisionnements : Planification des approvisionnements

## A. **Planification des approvisionnements : un aperçu**

![Figure 99: Supply Planning Screen – Plan by MOS](/img/media/image153.png)
*Figure 99 : Écran de planification des approvisionnements – Planifier par MOS*

![Figure 100: Supply Planning Screen – Plan by Quantity](/img/media/image154.png)
*Figure 100 : Écran de planification des approvisionnements – Planifier par quantité*

* <u>Quoi ?</u> Tous les principaux points de données (consommation, expéditions, inventaire) sont regroupés sur l'écran de planification des approvisionnements, et c'est là que la plupart des utilisateurs de QAT passeront la majorité de leur temps. Les utilisateurs peuvent cliquer sur de nombreuses cellules du tableau pour modifier directement leurs données. Il est recommandé d'utiliser cet écran pour la planification active des approvisionnements (y compris les mises à jour des données et la planification de nouvelles expéditions), mais d'utiliser l'écran de saisie des données lorsqu'une saisie de données importante est requise. Notez que certaines sections varient selon que l'unité de planification est planifiée par MOS ou planifiée par quantité (comme sélectionné dans [Mise à jour des unités de planification](./07-supply-planning-module-program-data.md#a2-planning-units)) – les différences sont notées ci-dessous.
  * Cet écran peut également être consulté par l'unité de reporting alternative (ARU) associée à l'unité de planification. Cela signifie que les utilisateurs peuvent visualiser leurs plans d'approvisionnement en termes de noms de produits et d'unités de mesure dans lesquelles ils saisissent les données, les valeurs du tableau et du graphique changeant en fonction du facteur de conversion ARU/PU établi par l'utilisateur (voir [Unités de rapport alternatives](./07-supply-planning-module-program-data.md#a4-alternate-reporting-units)). L'utilisateur choisit d'afficher par ARU en cliquant sur le bouton radio, puis en sélectionnant l'ARU souhaité à afficher.
    
    ![Figure 101: Supply Planning Table –by Planning Unit vs by Alternate Reporting Unit](/img/media/image155.png)
    *Figure 101 : Tableau de planification des approvisionnements – par unité de planification et par unité de reporting alternative*

Dans le tableau de planification des approvisionnements, un seul chiffre s'affichera par mois pour l'ensemble du programme dans la ligne de consommation. Comme indiqué dans la légende, la <span style={{ color: 'purple', fontStyle: 'italic' }}>consommation prévue</span> est indiquée par un texte en italique violet, tandis que la **consommation réelle** est indiquée par un texte noir non italique.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Logic for Consumption Data Displayed</b>
<ul style={{paddingLeft: '20px', margin: 0, marginTop: '5px', listStyleType: 'disc'}}>
<li style={{marginBottom: '5px'}}>For single-region programs, the actual consumption will be displayed when it is available. If actual consumption is not available, the forecasted consumption will display.</li>
<li style={{marginBottom: '5px'}}>For multi-region programs, QAT will display the greater between Σ(actuals) or Σ(forecast) across regional data. (Note: this logic is being reviewed and may be updated in the future).</li>
</ul>
</div>

![Consumption Table Legend](/img/media/image167.png)

<div style={{clear: 'both'}} />

**To add or edit consumption records**

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<div style={{textAlign: 'center', fontWeight: 'bold'}}>
Lots of data to add/update?<br/>
Go to data entry screen!
</div>
<br />
<img src={require('@site/static/img/media/image169.png').default} alt="Lots of data to add/update right-click menu" style={{width: '100%'}} />
<br /><br />
<i style={{fontSize: '11px', display: 'block', lineHeight: '1.4'}}>
Dans la fenêtre contextuelle des détails de consommation, les utilisateurs peuvent accéder directement à la saisie des données de consommation en cliquant sur le lien dans le coin supérieur droit (voir <a href="./07-supply-planning-module-program-data.md#b1-consumption-data">Données de consommation</a>). Cliquez avec le bouton gauche pour ouvrir un onglet sur votre navigateur, cliquez avec le bouton droit et sélectionnez « Ouvrir le lien dans la nouvelle fenêtre de l'outil d'analyse de quantification ». pour ouvrir une fenêtre QAT PWA distincte.
</i>
</div>

0. Cliquez sur le mois et la cellule de la ligne Consommation dans l'écran de planification des approvisionnements. Une nouvelle fenêtre intitulée Détails de la consommation apparaîtra. Dans le tableau qui apparaît, chaque ligne représente une région. Les programmes monorégionaux n’auront qu’une seule ligne, tandis que les programmes multirégionaux auront plusieurs lignes. Le total montre la consommation agrégée pour toutes les régions.
1. Cliquez sur l'enregistrement de consommation de n'importe quel mois et région pour afficher plus de détails. Tous les enregistrements pour ce mois et cette région s'afficheront ci-dessous.
2. Pour créer un nouvel enregistrement, faites un clic droit sur la ligne de détails et sélectionnez « Ajouter une nouvelle consommation » ou cliquez sur le bouton « + Ajouter une ligne ».
3. Pour modifier un enregistrement, cliquez sur n'importe quelle cellule et modifiez les détails de la consommation (type de consommation, source de données, quantité, etc.). Double-cliquez pour activer les listes déroulantes. Voir [Données de consommation](./07-supply-planning-module-program-data.md#b1-consumption-data) pour des conseils supplémentaires sur la saisie des données de consommation.
4. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où vos modifications seront reflétées.

<img src={require('@site/static/img/media/image170.png').default} alt="Consumption Details Dialog" style={{maxWidth: '100%', margin: '15px 0'}} />


## C. Planification des approvisionnements : expéditions

Par défaut, les expéditions ne sont affichées que sur une seule ligne dans l'écran de planification des approvisionnements : il s'agit de la quantité globale de toutes les expéditions (à l'exclusion des expéditions suggérées). Pour afficher plus de détails, cliquez sur l'icône + à gauche de la ligne « + Expéditions » pour développer et afficher les sous-lignes. Vous verrez cinq lignes divisées par statut de commande (ligne du haut pour les expéditions suggérées qui sont automatiquement calculées).

Pour voir une répartition détaillée de toutes les expéditions au cours d'un mois, cliquez sur la cellule du mois correspondant dans la ligne « + Expéditions ». Pour voir la répartition détaillée de toutes les expéditions par statut, cliquez sur la cellule du mois correspondant dans la ligne de statut individuel.

ERP (Enterprise Resource Planning) : les données liées à l'ERP provenant des agents d'approvisionnement ne sont pas modifiables (voir [ERP Shipment Linking](./07-supply-planning-module-program-data.md#b4-erp-shipment-linking))

Pour toutes les lignes d'expédition, les couleurs indiquent l'agent d'approvisionnement. Si un mois comporte plusieurs expéditions avec différents agents d'approvisionnement, la cellule sera verte. Les triangles rouges en haut à droite de la cellule indiquent qu'un envoi est une urgence. Si l'envoi est un approvisionnement local, il y aura une icône L en bas à gauche de la cellule. Si l'envoi est lié à l'ERP, il y aura une icône de lien en haut à gauche de la cellule. Les expéditions peuvent avoir plusieurs icônes, telles qu'une commande d'urgence locale liée à l'ERP. La légende apparaît en haut de l'écran.

![Figure 108: Shipments in Supply Planning](/img/media/image172.png)
*Figure 108 : Expéditions dans la planification des approvisionnements*


Les sections suivantes expliquent comment mettre à jour les expéditions existantes et créer de nouvelles expéditions dans l'écran de planification des approvisionnements. Voir [**Données d'expédition**](./07-supply-planning-module-program-data.md#b3-shipment-data) pour plus de conseils sur les champs de données d'expédition, qui s'appliquent à l'écran de saisie des données d'expédition et à l'écran de planification des approvisionnements.

###CI. Mettre à jour un envoi existant
1. Cliquez sur la cellule représentant le mois et l'expédition à modifier. En cliquant sur la ligne « + Expéditions », un onglet s'ouvrira avec toutes les expéditions de ce mois, quel que soit leur statut. En cliquant sur l'une des lignes de statut, vous ouvrirez un onglet affichant uniquement les expéditions de ce mois avec ce statut.

![Planned Shipment Highlight](/img/media/image173.png)

2. La fenêtre contextuelle Détails de l'envoi apparaîtra. Apportez toutes les modifications souhaitées. Pour mettre à jour les informations sur le lot ou la date, cliquez avec le bouton droit sur la ligne d'expédition. Le haut de la fenêtre contextuelle permet aux utilisateurs de naviguer vers un mois différent pour apporter également des modifications à ces expéditions.

![Shipment Details Table Columns](/img/media/image174.png)

3. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où les modifications seront reflétées (**Remarque** : le bouton Soumettre n'apparaîtra pas si tous les champs obligatoires ne sont pas remplis.)

![Shipped Shipment Table Highlight](/img/media/image175.png)

**Remarque** : L'expédition planifiée a été modifiée en Expédié, ce qui indique que les 130 000 ont maintenant été déplacés de la ligne « Planifié » vers la ligne « Expédié et arrivé ».

![Shipment Parameters Tooltips](/img/media/image176.png)

**Rappel** : des info-bulles sont fournies pour vous aider à savoir où mettre à jour des paramètres spécifiques. Ceux-ci clarifient ce que les utilisateurs doivent mettre à jour.


### Mise à jour de la quantité expédiée avec le bouton Recalculer
Pour les expéditions prévues à l'avenir, QAT suggérera une quantité d'expédition révisée à titre d'avertissement précoce afin d'éviter de descendre en dessous des niveaux de stock minimum. Tout comme les expéditions suggérées (voir [Créer une nouvelle expédition](#c2-creating-a-new-shipment)), QAT ne fournira le bouton de recalcul que si l'expédition tombe dans un mois inférieur au minimum suivi d'au moins deux mois également inférieurs au niveau de stock minimum. La quantité recommandée par le bouton de recalcul suivra la même logique que les expéditions suggérées par QAT (voir **Règles pour les expéditions suggérées ci-dessous**).

Vous trouverez ci-dessous les étapes à suivre pour utiliser le bouton de recalcul dans l'écran Planification des approvisionnements :
1. Accédez à une expédition planifiée dans le futur où le mois en cours et au moins les 2 mois suivants sont inférieurs au niveau de stock minimum.
2. Faites un clic gauche sur l'envoi.
3. Recherchez la colonne « Quantité commandée » et faites un clic droit.

![Suggested Shipment Highlight](/img/media/image178.png)

4. Cliquez sur « Recalculer ». Un message contextuel apparaîtra vous indiquant la quantité que QAT suggère d'ajouter et la quantité de l'envoi révisé.

![Figure 109: Recalculate Button](/img/media/image177.png)
*Figure 109 : Bouton Recalculer*

5. Cliquez sur « OK ». La fenêtre contextuelle disparaîtra et la quantité de commande révisée apparaîtra dans la colonne « Quantité commandée ». Cliquez sur « Soumettre » si vous souhaitez procéder à la quantité de commande révisée. À tout moment, l'utilisateur peut remplacer la quantité en double-cliquant dans la cellule et en saisissant une nouvelle quantité.

La quantité révisée sera désormais reflétée dans le plan d'approvisionnement.



###C2. Créer un nouvel envoi
Il existe deux manières de créer de nouvelles expéditions : 1) en convertissant une expédition suggérée par QAT en une expédition planifiée ou 2) en ajoutant manuellement une expédition.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<div style={{textAlign: 'center', fontWeight: 'bold'}}>
QAT Suggested Shipments
</div>
<br />
QAT suggère une expédition comme avertissement précoce pour éviter de descendre en dessous des niveaux de stock minimum. Il ne s’agit pas d’expéditions réelles et, en tant que telles, n’affectent pas les projections de stocks. Ce n'est que lorsqu'une expédition suggérée est acceptée et que son statut change qu'elle sera prise en compte dans vos projections de stock. QAT marquera automatiquement une expédition suggérée comme expédition d’urgence si elle est respectée dans les délais. Consultez les <b>Règles pour les expéditions suggérées</b> ci-dessous.
</div>

Pour **Convertir une expédition suggérée** en une expédition planifiée :
1. Cliquez sur la ligne Envoi suggéré sous le mois souhaité.
2. La fenêtre contextuelle Détails de l'envoi apparaîtra. Modifiez le statut au statut souhaité, remplissez les champs obligatoires, indiqués par un astérisque. Double-cliquez pour activer les listes déroulantes. Faites défiler vers la droite pour voir tous les champs. Passez la souris sur les info-bulles si des éclaircissements sont nécessaires (illustré dans l'image ci-dessous). La quantité commandée sera pré-remplie par la quantité commandée suggérée.

![Suggested Shipment](/img/media/image179.png)

3. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où les modifications seront reflétées (**Remarque** : le bouton Soumettre n'apparaîtra pas si tous les champs obligatoires ne sont pas remplis).


**Règles pour les expéditions suggérées :**

<u>Pour le plan par MOS :</u>

1. L'unité de planification est-elle en sous-stock (MOS&lt;Min) pendant 3 mois consécutifs ?
   un. Si oui, l’expédition suggérée amènera le niveau de stock du mois en cours au **maximum**.
   b. Si non, aucune expédition suggérée.
2. Si l'unité de planification est en rupture de stock, QAT proposera toujours une expédition.
   un. Si les deux prochains mois sont &lt;Min, l'expédition suggérée amènera le niveau de stock du mois en cours au **maximum**.
   b. Si l'un des 2 prochains mois est &gt;Min, l'expédition suggérée ramènera le niveau de stock du mois en cours au **minimum**.
3. Si AMC = 0 ou N/A, aucune expédition suggérée ne sera proposée pour ce mois.

<u>Pour le plan par quantité :</u>

Où le mois N est le mois pour lequel QAT calcule et X = délai de distribution
1. Si AMC = 0 ou N/A pour le Mois N, aucune expédition suggérée
2. Si le mois N est en rupture de stock (Solde final = 0), QAT proposera toujours une expédition
   une. Si les deux prochains mois (N+1, N+2) correspondent à une quantité minimale de &lt;, l'expédition suggérée est la quantité qui amènerait le mois N à **quantité maximale.**
   b. Si l'un des 2 prochains mois ou les deux (N+1 ou N+2) correspond à une quantité minimale de &gt;, l'expédition suggérée est la quantité qui amènerait le mois N à **quantité minimale.**
3. Le produit est-il en sous-stock (solde final &lt; Quantité minimum) pendant 3 mois consécutifs (Mois N, N+1, N+2) ?
   un. Si oui, l'expédition suggérée est la quantité qui amènerait le mois N à **quantité maximale.**
   b. Si non, aucune expédition suggérée

*QAT met la quantité suggérée dans le mois N-X. Autrement dit, X mois avant le Mois N, où X est le délai de distribution.*

**Pour créer manuellement un nouvel envoi :**
1. Cliquez sur la cellule représentant le mois auquel l'envoi doit être ajouté. En cliquant sur la ligne « + Expéditions », vous ouvrirez un onglet avec toutes les expéditions pour ce mois, quel que soit leur statut. En cliquant sur l'une des lignes de statut, vous ouvrirez un onglet affichant uniquement les expéditions de ce mois avec ce statut. L’une ou l’autre option fonctionnera pour l’ajout d’un nouvel envoi.
2. La fenêtre contextuelle Détails de l'envoi apparaîtra. Pour ajouter une nouvelle ligne, cliquez sur le bouton « + Ajouter une ligne » ou faites un clic droit sur n'importe quelle ligne et sélectionnez « Ajouter un nouvel envoi ». Double-cliquez pour activer les listes déroulantes. Passez au statut, à la quantité souhaités et complétez les champs obligatoires indiqués par un astérisque. Faites défiler vers la droite pour voir tous les champs.
3. Pour créer plusieurs nouveaux envois, faites un clic droit sur n'importe quelle ligne et sélectionnez « Ajouter un nouvel envoi » ou cliquez sur le bouton « + Ajouter une ligne ».
   un. Faites attention aux icônes d’info-bulle pour vous aider à déterminer quels paramètres spécifiques doivent être mis à jour.

![Shipment Parameters Tooltip Crop](/img/media/image180.png)

![Manual Shipment Table Entry](/img/media/image179.png)

4. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où les modifications seront reflétées (**Remarque** : le bouton Soumettre n'apparaîtra pas si tous les champs obligatoires ne sont pas remplis.)

## D. **Planification des approvisionnements : inventaire/ajustements**

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{margin: '0 0 15px 0'}}>
      In the supply planning table, one number will show per month for the whole program in the <b>manual adjustments</b> row, regardless of how many manual adjustments are made. Similarly, the <b>ending balance</b> will always be one row, regardless of whether the ending balance is projected by QAT or provided by the user as an inventory count.
    </p>
    <img src={require('@site/static/img/media/image182.png').default} alt="Adjustments and Ending Balances in Table" style={{width: '100%', borderRadius: '4px', border: '1px solid #ddd'}} />
  </div>
  <div style={{flex: '1 1 350px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#f9f9f9', fontSize: '0.9em', color: '#000'}}>
    <h4 style={{marginTop: 0, textAlign: 'center', fontWeight: 'bold'}}>Logic for Adjustments and Ending Balances</h4>
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', margin: 0}}>
      <li style={{marginBottom: '10px'}}>
        When there are no inventory counts,
        <ul style={{paddingLeft: '20px', listStyleType: 'circle'}}>
          <li><b>Adjustments</b> = the sum of all manual adjustments (&Sigma;(manual adjustments))</li>
          <li><b>Ending balance</b> = projected inventory</li>
        </ul>
      </li>
      <li style={{marginBottom: '10px'}}>
        When there are inventory counts,
        <ul style={{paddingLeft: '20px', listStyleType: 'circle'}}>
          <li>For single-region programs, if there is an inventory count, that inventory count will be the ending balance.</li>
          <li>For multi-region programs where <u>not</u> all regions are reporting, QAT will use whichever is <u>greater</u>, &Sigma;(inventory count) or (projected inventory) as the ending balance</li>
          <li>For multi-region programs where all regions are reporting, QAT will use &Sigma;(inventory count) as the ending balance.</li>
        </ul>
      </li>
      <li>
        Whenever <b>QAT</b> uses inventory count as the ending balance, auto adjustments are calculated on top of manual adjustments.
      </li>
    </ul>
  </div>
</div>

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <ol style={{paddingLeft: '20px', listStyleType: 'decimal', margin: 0}}>
      <li style={{marginBottom: '15px'}}>
        To add or edit adjustment or inventory records, click on the month and cell on the adjustments or ending balance rows in the supply planning screen.
        <ol style={{paddingLeft: '20px', listStyleType: 'lower-alpha', marginTop: '10px'}}>
          <li style={{marginBottom: '8px'}}>A new window called <b>Adjustments and Inventory Details</b> will pop up. In the table that appears, each row represents a region. Single-region programs will only have one row, while multi-region programs would have multiple rows.</li>
          <li style={{marginBottom: '8px'}}>The total shows the aggregated adjustments and inventory for all regions.</li>
          <li>Click on the record of any month and region to display further details</li>
        </ol>
      </li>
    </ol>
  </div>
  <div style={{flex: '1 1 350px', borderTop: '1px solid #000', borderBottom: '1px solid #000', padding: '15px 0', fontSize: '0.9em', color: '#000'}}>
    <h4 style={{marginTop: 0, textAlign: 'center', fontWeight: 'bold'}}>Lots of data to add/update?<br/>Go to data entry screen!</h4>
    <div style={{textAlign: 'center', margin: '10px 0'}}>
      <img src={require('@site/static/img/media/image169.png').default} alt="Lots of data to add/update" style={{width: '90%', borderRadius: '4px'}} />
    </div>
    <p style={{margin: 0, lineHeight: '1.4'}}>
      Dans la fenêtre contextuelle Ajustements et détails de l'inventaire, les utilisateurs peuvent accéder directement à la saisie des données d'ajustement et d'inventaire en cliquant sur le lien dans le coin supérieur droit (voir <a href="./07-supply-planning-module-program-data.md#b2-inventory-data">Données d'inventaire</a>). Cliquez avec le bouton gauche pour ouvrir un onglet sur votre navigateur, cliquez avec le bouton droit et sélectionnez « Ouvrir le lien dans la nouvelle fenêtre de l'outil d'analyse de quantification » pour ouvrir une fenêtre QAT PWA distincte.
    </p>
  </div>
</div>

![Adjustment and Inventory Details](/img/media/image183.png)



<ol start="2" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    Any records for that month and region will display below.
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px'}}>
      <li style={{marginBottom: '10px'}}>To add an adjustment or inventory record, click on add row, or right-click on the bottom table and select “Add new adjustment” or “Add new inventory”. Enter the required details. For adjustments, users can enter both positive and negative adjustments, in the past and in the future, and notes are required</li>
    </ul>
  </li>
</ol>

![Adjustment and Inventory Details Context Menu](/img/media/image184.png)

<ul style={{paddingLeft: '40px', listStyleType: 'disc', margin: '10px 0'}}>
  <li style={{marginBottom: '10px'}}>To edit a record, click on any cell to edit.</li>
</ul>

<ol start="3" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    <b>Note:</b> A user can review which batch is affecting their ending balance for a particular month, by clicking on “Final Inventory” in the “Adjustment and Inventory Details” screen pop-up.
  </li>
</ol>

![Figure 111: Batches included in Final Inventory Pop-up](/img/media/image185.png)
*Figure 111 : Lots inclus dans la fenêtre contextuelle de l'inventaire final*

<ol start="4" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    For months with an inventory record, the user can click edit the batch quantities.
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px'}}>
      <li style={{marginBottom: '10px'}}><b>Note:</b> redistributing batch quantities should be the last resort. It’s always better to update the information upstream (shipment, consumption, adjustment) instead of updating the inventory batch information.</li>
      <li style={{marginBottom: '10px'}}>
        <b>How to do it?</b>
        <ol style={{paddingLeft: '20px', listStyleType: 'lower-alpha', marginTop: '10px'}}>
          <li style={{marginBottom: '8px'}}>Ensure there is an actual/manual inventory count for the month</li>
          <li style={{marginBottom: '8px'}}>Click on “final inventory” to pull up the batches</li>
          <li style={{marginBottom: '8px'}}>Type over the actual quantity – use the dropdowns if you want to change batches</li>
          <li>Remember, the total of the batches must match the total inventory total for the month</li>
        </ol>
      </li>
      <li>Right click on any batch to view the batch ledger (learn more in <a href="#e-supply-planning-project-expired-stock-and-batch-information">Supply Planning: Project Expired Stock and Batch Information</a>)</li>
    </ul>
  </li>
</ol>

![Figure 112: Batches Affecting Final Inventory Pop-up](/img/media/image186.png)
*Figure 112 : Lots affectant la fenêtre contextuelle de l'inventaire final*



## E. **Planification des approvisionnements : informations sur les stocks et les lots expirés du projet**

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{margin: '0 0 15px 0'}}>
      Users can view the projected expired stock, if any, for each month in their supply plan in the **Projected Expired Stock** row. Clicking on the <u>cell</u> will bring a pop-up window with the expiry details.
    </p>
    <img src={require('@site/static/img/media/image188.png').default} alt="Projected Expired Stock row highlight" style={{display: 'block', maxWidth: '300px', margin: '15px 0', border: '1px solid #ddd'}} />
    <p style={{margin: '20px 0 15px 0'}}>From the pop-up – users can do 2 functions:</p>
    <ol style={{listStyleType: 'decimal', paddingLeft: '20px', margin: 0}}>
      <li style={{marginBottom: '20px'}}>
        <b>Edit the batch that contributed to the expiry:</b> Click on the Batch Number. QAT will automatically redirect the user to the shipment from which the batch was generated. From the shipment screen, a user can edit the Batch Name, Expiry Date, and Shipment Quantity.
        <br /><br />
        <img src={require('@site/static/img/media/image189.png').default} alt="Projected Expired Batch Details Pop-up" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
        <br />
        <i>Note: Users can also edit this information in the Shipment Data entry screen (see <a href="./07-supply-planning-module-program-data.md#b3-shipment-data">Shipment Data</a>).</i>
      </li>
      <li style={{marginBottom: '20px'}}>
        <b>View the batch ledger:</b> Click on the <u>Expired Quantity</u> cell. QAT will automatically open a pop-up screen below with the batch ledger, which shows the life of a batch month-by-month from shipment receipt to expiry.
      </li>
    </ol>
  </div>
  <div style={{flex: '1 1 350px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#ffffff', fontSize: '0.9em', color: '#000'}}>
    <img src={require('@site/static/img/media/image187.png').default} alt="Logic for Batches & Expiries Flowchart" style={{width: '100%', display: 'block', margin: '0 auto 15px auto'}} />
    <h4 style={{marginTop: 0, textAlign: 'left', fontWeight: 'bold'}}>Logic for Batches & Expiries</h4>
    <ul style={{listStyleType: 'square', paddingLeft: '20px', margin: 0, color: '#000'}}>
      <li style={{marginBottom: '15px'}}>
        Batches start with <b>shipments</b>.
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>QAT automatically generates one batch for each shipment that equals the quantity of the shipment.</li>
          <li style={{marginBottom: '5px'}}>Batch expiry dates are based on shipment <b>receive date</b> plus planning unit <b>shelf life</b> (Updatable by Program Admins in <a href="./07-supply-planning-module-program-data.md#a2-planning-units">Update Planning Units</a>).</li>
          <li>Users <u>can override</u> the batch number, expiry date, and split shipments into multiple batches.</li>
        </ul>
      </li>
      <li style={{marginBottom: '15px'}}>
        For <b>consumption</b>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>By default, QAT uses First Expired, First Out <b>(FEFO)</b> logic.</li>
          <li>Users <u>can override</u> the FEFO logic and instead, choose a specific batch from a dropdown to tag to that <u>actual</u> consumption record.</li>
        </ul>
      </li>
      <li>
        For <b>adjustments</b>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>By default, QAT uses the <b>Best-Case Scenario</b> logic: For positive adjustments (manual or automated), QAT adds to the batch that is last to expire (longest shelf life). For negative adjustments (manual or automated), QAT subtracts from the batch that is the expiring soonest (shortest shelf life).</li>
          <li style={{marginBottom: '5px'}}>Users <u>can override</u> the Best-Case Scenario logic and instead, choose a specific batch from a dropdown to tag to that <u>manual</u> adjustment record.</li>
          <li>Users <u>cannot override</u> the Best-Case Scenario logic for an <u>auto</u>-adjustment record.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<img src={require('@site/static/img/media/image190.png').default} alt="Batch Ledger details" style={{display: 'block', maxWidth: '100%', margin: '20px 0', border: '1px solid #ddd'}} />

<p style={{marginTop: '15px'}}><b>Note:</b> unless the user tags a batch to specific actual consumption or adjustment entries (see “Add/Update Batch Details” in <a href="./07-supply-planning-module-program-data.md#b1-consumption-data">Consumption Data</a> and <a href="./07-supply-planning-module-program-data.md#b2-inventory-data">Inventory Data</a>), QAT will default to monthly batch quantities being placed in the “Auto-Allocated” column in the Batch Ledger.</p>

## F. **Planification de scénarios**

QAT fournit aux utilisateurs des scénarios prédéfinis pour la planification des approvisionnements. Cette fonctionnalité permettra aux utilisateurs d'apporter des modifications et de visualiser leurs données de différentes manières, sans nécessairement affecter leur plan d'approvisionnement actuel. Les utilisateurs peuvent appliquer un ou plusieurs scénarios à leurs données pour voir comment ces changements affectent les projections de stocks. Le ou les scénarios sélectionnés peuvent ensuite être appliqués à un plan d'approvisionnement actuel, créant ainsi une nouvelle version.

Il existe actuellement six scénarios prédéfinis disponibles pour les utilisateurs ; d'autres peuvent être programmés dans QAT en fonction des besoins et des cas d'utilisation. Les utilisateurs de QAT peuvent demander de nouveaux scénarios en créant un ticket. Le besoin de nouveaux scénarios sera géré de manière centralisée par l’administrateur du royaume.

Scénarios disponibles :
- **Augmentez la consommation prévue :** pour un pourcentage et une période définis par l'utilisateur. Cela appliquera une augmentation en pourcentage aux valeurs de prévision pour chaque mois de la période sélectionnée.
- **Diminuer la consommation prévue :** pour un pourcentage et une période définis par l'utilisateur. Cela appliquera une diminution en pourcentage aux valeurs de prévision pour chaque mois de la période sélectionnée.
- **Produit d'entrée/sortie prévu :** pour une période définie par l'utilisateur et des valeurs de consommation prévues de début et de fin. QAT tracera une ligne droite en interpolant entre les valeurs de début et de fin, et remplacera les valeurs de consommation prévisionnelles actuelles.
- **Supprimer les expéditions non financées :** toutes les expéditions sans source de financement attribuée (c'est-à-dire source de financement = à déterminer) seront supprimées du plan d'approvisionnement et des projections de stock.
- **Supprimer toutes les expéditions planifiées :** toutes les expéditions avec le statut « planifiées » seront supprimées du plan d'approvisionnement et des projections de stock. L'utilisateur peut cocher une case pour supprimer uniquement les « expéditions planifiées » qui ne respectent pas les délais de livraison établis (c'est-à-dire que la date de réception prévue est plus tôt que ce qui serait réalisable compte tenu des délais de livraison).
- **Supprimer toutes les expéditions soumises en dehors des délais :** toutes les expéditions avec le statut « soumises » qui ne respectent pas les délais établis seront supprimées du plan d'approvisionnement et des projections de stocks.
- **Supprimer toutes les expéditions en attente hors délai :** toutes les expéditions avec le statut « en attente » qui ne respectent pas les délais établis seront supprimées du plan d'approvisionnement et des projections de stock.
- **Replanifier le plan d'approvisionnement :** pour une période définie par l'utilisateur, QAT supprime les expéditions planifiées qui ne maintiennent pas correctement le stock entre les paramètres MIN/MAX et crée de nouvelles expéditions planifiées pour se conformer aux paramètres de stock, en utilisant la logique d'expédition suggérée décrite dans la <a href="#c2-creating-a-new-shipment">Section 5.C2 Création d'une nouvelle expédition</a>.

Pour accéder à ces scénarios :
1. Allez dans Planification des approvisionnements et cliquez sur « Planification par scénarios ».
2. Sélectionnez un scénario prédéfini dans le menu déroulant et modifiez les champs requis
3. Cliquez sur Ajouter pour afficher les modifications.

![Figure 113 Scenario Planning Screen](/img/media/image191.png)
*Figure 113 Écran de planification de scénario*

4. Le scénario sera affiché dans la « Liste des scénarios ».

![Figure 114 Scenario Planning Scenario List](/img/media/image192.png)
*Figure 114 Liste des scénarios de planification de scénarios*

5. Si l'utilisateur souhaite appliquer le scénario à son plan d'approvisionnement, il peut cliquer sur le bouton « Soumettre ». Le nouveau plan d'approvisionnement sera stocké sur l'ordinateur de cet utilisateur et celui-ci pourra le télécharger sur le serveur en tant que nouvelle version via la fonctionnalité de téléchargement.
6. Si l'utilisateur ne souhaite pas appliquer le scénario à son plan d'approvisionnement actuel, il peut cliquer sur le bouton « Annuler » ou sur le bouton « Réinitialiser », et les modifications ne prendront pas effet.

## G. **Rapport sur le plan d'approvisionnement**

L'objectif du rapport sur le plan d'approvisionnement est de permettre à l'utilisateur d'évaluer rapidement l'état des stocks d'un ou plusieurs programmes et/ou unités de planification sélectionnés, en comparant graphiquement les projections de stock aux niveaux de stock minimum et maximum dynamiques et de pouvoir voir toute la consommation (réelle et prévisionnelle), les stocks et les détails d'expédition en un seul endroit. Le rapport fournit une représentation graphique du plan d'approvisionnement, ainsi qu'une vue tabulaire. Le rapport peut être exporté au format PDF et/ou CSV.

<ul style={{listStyleType: 'disc', paddingLeft: '20px', margin: '15px 0'}}>
  <li><b>Accessible to:</b> Realm Admins, Program Admins, Program Users, and Reports Viewer</li>
  <li><b>Navigation:</b> Supply Planning &rarr; Supply Plan Report</li>
</ul>

Les utilisateurs peuvent utiliser les différents paramètres déroulants en haut de l'écran pour générer différentes vues du rapport du plan d'approvisionnement. Chaque vue du rapport généré aura à la fois une représentation graphique et un équivalent tabulaire des données. Il existe trois vues principales du rapport sur le plan d'approvisionnement :

<ol style={{listStyleType: 'decimal', paddingLeft: '20px'}}>
  <li>
    <div>
      <b>Single Program View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Single program</li>
        <li>Single Planning Unit (PU) or single Alternate Reporting Unit (ARU)</li>
        <li>Shipments disaggregated by status (i.e. planning, shipped, received, etc.)</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image193.png').default} alt="Figure 115: Supply Plan Report: Single Program View, Graph" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 115: Supply Plan Report: Single Program View, Graph</i>
      <br /><br />
      <img src={require('@site/static/img/media/image194.png').default} alt="Figure 116: Supply Plan Report: Single Program View, Tabular Data" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 116: Supply Plan Report: Single Program View, Tabular Data</i>
    </div>
  </li>
  <br />
  <li>
    <div>
      <b>Multi-Program View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Multiple programs</li>
        <li>Single PU or ARU</li>
        <li>Shipments disaggregated by program (i.e. FASPonia Malaria MOH & FASPonia Malaria Social Marketing)</li>
        <li><b>Notes:</b> QAT is able to aggregate the supply planning data across multiple programs if they share the <b>same</b> PU/ARU. This could be useful if a country has multiple parallel programs monitoring the same products and would like to see an aggregated or national view of the stock status over time.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image195.png').default} alt="Figure 117: Supply Plan Report: Multi-program View" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 117: Supply Plan Report: Multi-program View</i>
      <br /><br />
      <img src={require('@site/static/img/media/image196.png').default} alt="Figure 118: Supply Plan Report: Multi-program/EU View, Tabular Data" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 118: Supply Plan Report: Multi-program/EU View, Tabular Data</i>
    </div>
  </li>
  <br />
  <li>
    <div>
      <b>Equivalency Unit (EU) View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Single or multiple programs</li>
        <li>Multiple PUs (<i>ARUs</i> <i>cannot</i> be used with EUs)</li>
        <li>Shipments disaggregated by program, PU, or program-PU</li>
        <li><b>Notes:</b> QAT is able to <u>aggregate</u> across PUs that are different (different pack sizes, usage rates, etc.), but related by utilizing an EU (see <a href="./07-supply-planning-module-program-data.md#a5-equivalency-units">Equivalency Units</a> for more information) and a corresponding conversion factor. This could be useful for countries or global viewers that would like to see concepts such as, Malaria Treatments, Couples Year Protection (CYP), ARV Patient Months, etc. as an aggregate.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image197.png').default} alt="Figure 119: Supply Plan Report: Equivalency Unit View" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 119: Supply Plan Report: Equivalency Unit View</i>
    </div>
  </li>
</ol>

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{fontWeight: 'bold', margin: '0 0 10px 0'}}>Note:</p>
    <ol style={{listStyleType: 'decimal', paddingLeft: '20px', margin: 0}}>
      <li style={{marginBottom: '10px'}}>The report utilizes the Planning Unit settings set by the Program Admin for AMC, shelf life, MIN, reorder interval, and MAX</li>
      <li style={{marginBottom: '10px'}}>The Shipment Quantity column is the sum of all shipments that have a receive date in the same month for that planning unit</li>
      <li style={{marginBottom: '10px'}}>The “Shipment Quantity | Funding Source | Shipment Status | Procurement Agent | RO – Prime line No | Order No – Prime line No” column allows the user to see the disaggregated shipments that have receive date in the same month, including details of quantity, procurement agent, status, funding source, and order number assigned to that order</li>
      <li style={{marginBottom: '10px'}}>The “Consensus Consumption” column only appears if a user chooses multiple programs for aggregation</li>
      <li style={{marginBottom: '10px'}}>The PDF and CSV exports have multiple options, similar to the report dropdowns, allowing for exports of aggregated programs, multiple single product supply plans, or aggregated products (via EUs)</li>
    </ol>
  </div>
  <div style={{flex: '1 1 380px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#eeeeee', fontSize: '0.9em', color: '#000'}}>
    <div style={{fontWeight: 'bold', textDecoration: 'underline', marginBottom: '15px'}}>Calculations for the Varying Supply Plan Report Views:</div>
    
    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Single Program</div>
    <div style={{marginBottom: '10px'}}>
      <u>Ending Balance</u> = Opening Balance – Consumption + Shipments ± Adjustments – Expiries
    </div>
    <div style={{marginBottom: '20px'}}>
      <u>MOS</u> = Ending Balance / AMC
    </div>
    
    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Multi-Program/Equivalency Unit</div>
    <div style={{fontStyle: 'italic', marginBottom: '10px'}}>Same ending balance & MOS calculation</div>
    
    <div style={{marginBottom: '15px'}}>
      <u>Forecast, Actual, Shipment, Adjustment, Expiries, MIN, MAX</u> = Σ selected programs individual data elements
    </div>
    <div>
      <u>Consensus consumption:</u> Σ selected program actuals (if available), otherwise forecasts. <i>Therefore, this could be a sum of actuals and forecasts depending on data available.</i>
    </div>
  </div>
</div>


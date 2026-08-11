---
id: forecasting-module-program-data
title: "7. Forecasting Module: Program Data"
sidebar_label: "7. Forecast Program Data"
sidebar_position: 10
---
# Section 7. Module de prévision : Données du programme

## A. Introduction

<div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
  <div style={{ flex: 1 }}>
    A forecast is an estimate/prediction of the quantities of products to be consumed/utilized by clients or consumers over a future period of time. In QAT, the forecast process is generally conducted in a specific order (see Figure to the right).<br/><br/>
    First, set up a program using Update Program Info or select a previous program using Download or Delete Program. After downloading the program, add information on the forecast period, threshold (%), products, and other program settings in the Update Version Settings and Updating Planning Unit screens. In QAT, users can either create forecasts by designing forecasting trees (tree-based forecast) or by leveraging historical consumption (consumption-based forecast) to reach a final forecast. For each product, choose consumption or tree methodology, or both!<br/><br/>
    Consumption-based forecasts are most useful in mature, stable programs that have a full supply of products and reliable data. This method can be the most reliable predictor of future consumption if future use is predicted to be very similar to the past. Ideally, 24+ months of monthly actual consumption data is available. If the necessary data for a consumption-based forecast is not available or not helpful in predicting future consumption, conduct a tree-based forecast, which flexibly accommodates all other forecast methods, such as morbidity, services, and demographic methods. Users can specify changes over time in a tree, either by directly specifying the rate of change or extrapolating from past data.<br/><br/>
    Once the various forecasts have been created, users can navigate to the Forecast Analysis and Outputs section to view and compare forecasts, and select the final forecast.
  </div>
  <div style={{ width: '220px', flexShrink: 0, textAlign: 'center' }}>
    <img src={require('@site/static/img/media/image234.png').default} alt="QAT Forecasting High-level Process Flow" style={{ width: '100%' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px' }}>Figure 156: QAT Forecasting High-level Process Flow</p>
  </div>
</div>

## B. Informations sur le programme

**<u>Objectif :</u>** Permet aux utilisateurs de mettre à jour les informations de base de leur programme après la création initiale.

**<u>Utilisation de cet écran :</u>**

Les _Administrateurs du programme_ peuvent utiliser l'écran principal pour :
* Mettre à jour le nom du programme de prévision, le gestionnaire de programme et le champ Notes. Les administrateurs du programme peuvent également choisir de désactiver ou d'activer un programme sur cet écran. Pour les modifications relatives au domaine technique, à l'organisation ou au nom d'affichage du programme, les administrateurs du programme doivent demander le changement à un administrateur de domaine via le [Système d'assistance QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

Les _Realm Admins_ peuvent utiliser l'écran principal pour :
* Mettez à jour le domaine technique, l'organisation, le nom du programme de prévision, le nom d'affichage du programme, le gestionnaire de programme et le champ Notes. Les administrateurs de royaume peuvent également choisir de désactiver ou d'activer un programme sur cet écran.

## C. Paramètres de version

<img src={require('@site/static/img/media/image235.png').default} alt="Version Settings Interface" style={{ width: '100%', marginBottom: '15px' }} />

**<u>Objectif :</u>** Permet aux utilisateurs de mettre à jour les paramètres de leur programme et d'afficher les détails des versions précédentes. Pour afficher les résultats des prévisions, utilisez les écrans de la section [Forecast Analysis Output] (12-forecasting-module-reports-and-outputs.md).

**<u>Utilisation de cet écran :</u>**
*Remarque : Un programme de prévisions doit être téléchargé pour mettre à jour les paramètres de version. Toutes les versions antérieures de chaque programme de prévision seront en format lecture seule ; seule la version locale est disponible pour la mise à jour et l'édition.*

Sur cet écran, les utilisateurs peuvent :

<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 0' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <span style={{ minWidth: '25px', flexShrink: 0 }}>1)</span>
    <div style={{ flex: 1 }}>
      Update the following program settings for the downloaded, local program:
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            <strong>Version Notes</strong> – a free form editable text field that allows users a place to provide general notes about a particular forecast version. It is also visible and editable when uploading a program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>b.</span>
          <div style={{ flex: 1 }}>
            <strong>Date Uploaded/Uploaded by User</strong> – denotes the user that uploaded each version of the forecast to the server and on what date. Useful for understanding the lifecycle of each program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>c.</span>
          <div style={{ flex: 1 }}>
            <strong>Forecast Start, Forecast Period (Months), and Forecast End</strong> – based on the start & end date, QAT will automatically calculate the forecast period in months. Alternatively, users can choose to enter a forecast start date and number of months in the forecast period, and QAT will automatically calculate the forecast end date.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>d.</span>
          <div style={{ flex: 1 }}>
            <strong># Of Days in Month</strong> – used in consumption-based forecasts for adjusting actual consumption against the number of days stocked out. A user can choose anywhere from 15 to 31 days; however, QAT will default to “calendar days.” This field could be useful if a facility only wants to use business days (~20 days) to calculate the stockout rate.
            <div style={{ border: '3px double #000', padding: '10px 20px', margin: '15px auto', width: 'fit-content', backgroundColor: '#fff', textAlign: 'center', fontFamily: 'monospace' }}>
              Stock Out Rate = Stocked Out (days) / (# of Days in Month)<br/>
              Adjusted Consumption = Actual Consumption / Reporting Rate / (1 - Stock Out Rate)
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>e.</span>
          <div style={{ flex: 1 }}>
            <strong>Freight percentage</strong> – used in forecasting output screens and reports for estimating total procurement costs. This field is not mandatory and can be updated at any time.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            <strong>Forecast Threshold</strong> – this metric is used in the Compare and Select screen. QAT compares available Consumption Forecasts and Tree Forecasts. For any Tree Forecasts, QAT will flag the percentage above the highest or below the lowest Consumption Forecast. The comparison will be highlighted in <span style={{ color: 'red' }}>red text</span> if it is outside the threshold percentages set by the user in this screen. Assuming reliable actual consumption data, this comparison helps users determine if their Tree Forecasts are realistic. These two fields, high and low, are not mandatory and can be updated at any time.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <span style={{ minWidth: '25px', flexShrink: 0 }}>2)</span>
    <div style={{ flex: 1 }}>
      See a historical lifecycle of each program through all its versions.
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            View all version settings above
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>b.</span>
          <div style={{ flex: 1 }}>
            (Right click) View the <a href="06-managing-programs-and-versions.md#forecast-validation">Forecast Validation</a> screen (same screen as viewed during the Upload process) – which lists missing forecasts, missing data and all notes. This serves as an easy for users to understand previous forecasts without downloading them. Use the <a href="11-forecasting-module-forecasting.md">Monthly Forecast</a>, <a href="12-forecasting-module-reports-and-outputs.md">Forecast Summary</a> or <a href="12-forecasting-module-reports-and-outputs.md">Version Comparison</a> screens to view the forecast outputs from other versions.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## D. Unités de planification

**<u>Objectif :</u>** Permet aux utilisateurs d'ajouter et de mettre à jour des unités de planification et les paramètres d'unité de planification associés qui seront utilisés dans leurs prévisions et pour le calcul dans les écrans de sortie des prévisions.

**<u>Utilisation de cet écran :</u>**
*Remarque : Un programme de prévision doit être téléchargé pour ajouter ou mettre à jour des unités de planification et leurs paramètres.*

1. **Ajouter des unités de planification** – Les utilisateurs devront ajouter dans cet écran toutes les unités de planification qu'ils souhaitent prévoir. Les unités de planification peuvent être ajoutées manuellement ou copiées et collées à partir de l'écran « Mettre à jour l'unité de planification » du module de planification des approvisionnements, si l'unité de planification a déjà été ajoutée au plan d'approvisionnement d'un utilisateur.
2. **Mettre à jour les paramètres de l'unité de planification** – Les utilisateurs peuvent également utiliser cet écran pour mettre à jour toutes les unités de planification et leurs paramètres associés. Les utilisateurs doivent toujours maîtriser la synchronisation des données après avoir mis à jour un paramètre afin de voir les modifications avoir lieu sur les autres écrans du module de prévision. Les paramètres de l'unité de planification et de brèves explications sont les suivants :

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Column Name</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Description</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Used Where?</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Conversion Factor (FU:PU)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>A non-editable field providing information on the conversion factor between the chosen PU and it's associated FU.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Select screens (Data Entry & Adjustment, Compare & Select, Monthly Forecast) allow data entry/viewing in PU or FU</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Consumption Forecast?</strong></td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>For each PU, users can choose one or both methods. If the forecast type is checked for the PU, it will appear in the Consumption and Tree screens.</td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Building your forecasts and then analyzing in the Compare & Select screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tree Forecast?</strong></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Stock on Hand</strong> <em>(start of forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>The actual or projected stock (quantity) at the beginning of your forecast period. Users can utilize the supply planning module to determine the SOH, if desired.</td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Forecast Summary to calculate the procurement gap</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Existing Shipments</strong> <em>(forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total existing shipment quantity during the forecast period. Users can utilize the supply planning module to determine the existing shipment quantity <em>(it is recommended to not include planned shipment quantities unless there is a high likelihood of ordering).</em></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Desired Months of Stock</strong> <em>(end of forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>The MOS you wish to have at the end of your forecast.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Price Type</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Choose a specific procurement agent or "Custom."</td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Forecast Summary to calculate the cost of the procurement gap</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Unit Price</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Auto-filled based on procurement agent or manually entered by a user.</td>
    </tr>
  </tbody>
</table>
<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em', marginTop: '5px' }}>Table 9: Forecasting Module Planning Unit Settings</p>

## E. Unités d'équivalence

**<u>Objectif :</u>** Permettre aux utilisateurs de gérer les unités d'équivalence. Les unités d'équivalence (UE) permettent aux utilisateurs de regrouper des données sur des produits différents, mais liés. Ils permettent aux utilisateurs de regrouper plusieurs unités de prévision pour l'agrégation dans les [Rapports et sorties] (12-forecasting-module-reports-and-outputs.md).

**<u>Utilisation de cet écran :</u>**

**Mappage des unités d'équivalence avec les unités de prévision**
Utilisez l'écran principal pour gérer les mappages entre les unités d'équivalence et les unités de prévision. Les mappages au niveau du domaine sont disponibles pour tous les utilisateurs et sont indiqués par le programme « Niveau du domaine ». Cependant, les administrateurs du programme peuvent créer des mappages spécifiques au programme (en ajoutant une ligne et en l'identifiant à une UE spécifique). En cas de conflits, les mappages spécifiques au programme auront la priorité et seront utilisés à la place des mappages au niveau du domaine.

Par exemple, un utilisateur prévoit des médicaments pour traiter la QATite, une condition dans laquelle les gens ne peuvent pas arrêter d'utiliser le QAT. L'utilisateur peut prévoir selon différents traitements (différentes unités de prévision), mais il souhaite voir comment ils sont regroupés. Pour l'exemple ci-dessous, un patient aurait besoin de 14 comprimés de FASPicillin, ou 1 tube de FASPasone (crème), ou 0,5 flacon de FASPicaïne, ou 2 barres de chocolat pour traiter la QATite. Ainsi, si différents patients subissent différents traitements, un utilisateur peut regrouper ces différents traitements en créant/utilisant une unité d'équivalence (UE).

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Equivalency Unit</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Forecasting Unit</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Conversion to EU</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Average Treatment required to cure QATitis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>14</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet a day for 2 weeks</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>5mL tube of FASPasone (cream)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5mL/day applied on the forehead over 10 days (1 tube total)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2mL vial of FASPicaine (injection)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0.5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>One injection of 1mL (Two people can share one vial)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>2 bars of chocolate. The type of chocolate does not matter, as all chocolate contains the natural form of FASPicillin.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of milk chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
    </tr>
  </tbody>
</table>
<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em', marginTop: '5px' }}>Table 10: EU Example - Treatment for QATitis</p>

**Étapes pour créer et gérer des unités d'équivalence**
1. Un utilisateur doit d'abord vérifier si l'UE existe déjà dans les données de base QAT en accédant à « Realm Masters » → « Unités d'équivalence ».
2. Si l'UE n'existe pas, cliquez sur « Gérer l'unité d'équivalence » puis sur « Ajouter une ligne » et les utilisateurs peuvent saisir l'UE qu'ils souhaitent utiliser pour leur programme spécifique dans QAT. Cette UE sera spécifique au programme et ne sera pas disponible pour d'autres programmes. S'il existe une UE qui pourrait bénéficier à la communauté QAT, les utilisateurs peuvent en faire la demande via le [Système d'assistance de billetterie QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

<div style={{ margin: '15px 0' }}>
  <img src={require('@site/static/img/media/image237.png').default} alt="Manage Equivalency Unit Button" />
</div>

3. Si l'UE existe et qu'un utilisateur souhaite mapper les unités de prévision à l'UE existante, il peut cliquer sur « Ajouter une ligne » sur l'écran principal et mapper l'unité de prévision à l'UE au niveau du programme. Si un utilisateur souhaite mapper l'unité de prévision à une UE existante au niveau du domaine et pense que cela bénéficierait à la communauté QAT, les utilisateurs peuvent en faire la demande via le [Système d'assistance de billetterie QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

<div style={{ margin: '15px 0' }}>
  <img src={require('@site/static/img/media/image238.png').default} alt="Equivalency Unit Mappings Screen" />
</div>

4. Les utilisateurs peuvent également modifier les UE spécifiques au programme sur l'écran principal.
5. L'utilisateur doit cliquer sur « Soumettre » lorsqu'il a terminé l'édition et la synchronisation des données de base, afin de voir l'UE disponible dans les listes déroulantes des écrans Rapports et Sorties.

### Où les unités d'équivalence sont-elles utilisées ?

* Dans l'écran [Comparer et sélectionner] (12-forecasting-module-reports-and-outputs.md#9a-compare-and-select), l'utilisateur peut afficher ses prévisions dans les UE. En utilisant l'exemple ci-dessus, un utilisateur qui prévoit 10 000 barres de chocolat noir par mois pourrait choisir d'afficher ses prévisions dans l'UE de « Traitements pour la QATite » et d'afficher ses prévisions comme 5 000 « Traitements pour la QATite » par mois à la place.
* Dans l'écran [Prévisions mensuelles] (12-forecasting-module-reports-and-outputs.md#9b-monthly-forecast), l'utilisateur peut afficher ses prévisions sélectionnées par unités de planification individuelles, ou les regrouper entre unités de planification si elles sont connectées par des UE. Par exemple, si un utilisateur prévoyait 10 000 barres de chocolat noir, 10 000 barres de chocolat blanc et 14 000 comprimés de FASPicillin par mois, QAT afficherait 7 000 « Traitements pour la QATite ».
* Dans l'écran de rapport [Erreur de prévision (mensuel)](09-supply-planning-module-reports.md#d2-forecast-error-monthly), les utilisateurs peuvent également afficher la consommation réelle et prévue en unités d'équivalence.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Forecast</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Equivalent in "Treatments for QATitis"</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10,000 bars of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>5,000</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10,000 bars of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>5,000</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>14,000 tablets of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1,000</td>
    </tr>
    <tr style={{ fontWeight: 'bold' }}>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Total</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>7,000</td>
    </tr>
  </tbody>
</table>

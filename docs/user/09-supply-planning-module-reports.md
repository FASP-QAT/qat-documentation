---
id: supply-planning-module-reports
title: "6. Supply Planning Module: Reports"
sidebar_label: "   6. Supply Plan Reports"
sidebar_position: 7
---

# Section 6. Supply Planning Module: Reports

QAT reports allow the user to extract and view their supply planning data in graphs, tables, and other visual formats. The user will also be able to navigate, sort, filter, and view the data for specific needs. QAT reports produce visualizations and display data in a way that can support decision making.

**Note:** All QAT reports have the ability to be exported into an Excel CSV file as well as PDF format. Additionally, all graphs allow for the user to hover over a visual for a tool tip with more information.

## A. Supply Plan Report

The purpose of the supply plan report is to allow the user to quickly assess the stock status of one or more selected programs and/or planning units, by graphically comparing the stock projections to dynamic minimum and maximum inventory levels and to be able to see all consumption (both actual and forecast), inventory, and shipping details in one place. The report provides a graphical representation of the supply plan, as well as a tabular view. The report can be exported in PDF and/or CSV format.

<ul style={{listStyleType: 'disc', paddingLeft: '20px', margin: '15px 0'}}>
  <li><b>Accessible to:</b> Realm Admins, Program Admins, Program Users, and Reports Viewer</li>
  <li><b>Navigation:</b> Reports &rarr; Supply Plan Report</li>
</ul>

Users can utilize the various dropdown parameters at the top of the screen to generate different views of the Supply Plan Report. Each view of report generated, will have both a graphical representation and tabular equivalent of the data. There are three main views of the Supply Plan Report:

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

## B. Supply Plan Scorecard

*Coming soon! Check out the Show Guidance page in the meantime.*

## C. Stock Status Reports

### C1. Stock Status Over Time
**Purpose:** to compare one or more products and their inventory-levels across a period time.

- **Accessible to:** Realm Admins, Program Admins, Report Viewers, and Program Users
- **Navigation:** Reports ➔ Stock Status ➔ Stock Status Over Time
- **Notes:** The Planning Unit can be single, multi-select, or select all. The “Select All ” option may not be advantageous if the program has many planning units, as the graph will not be able to decern the individual lines on the graph. We suggest choosing less than ten products at once. Specifically, this report can be useful to compare categories.

![Figure 130: Stock Status Over Time Report](/img/media/image208.png)
*Figure 130: Stock Status Over Time Report*

### C2. Stock Status Matrix
**Purpose:** to provide a quick snapshot of the months of stock across time in an easy-to-read table format.

- **Accessible to:** Realm Admins, Program Admins, Report Viewers and Program Users
- **Navigation:** Reports ➔ Stock Status ➔ Stock Status Matrix
- **Notes:**
  - One row is shown for every planning unit & year combination, based on what’s selected in the top filters.
  - QAT will display the MOS or quantity for each planning unit based on whether the product is planned by quantity or MOS, as selected in the Update Planning Units screen (see Section 4.A2).
  - Colors corresponds to the stock levels during that particular month:
    - Red – Stocked Out
    - Orange – Under Stocked
    - Green – Stocked to Plan
    - Yellow – Over Stocked
    - Grey – N/A (QAT is unable to calculate the value due to missing data)
  - Although the CSVs does not export the conditionally formatted colors, the PDF contains the colors and users may copy and paste the table to keep all the colors and formatting.

![Figure 131: Stock Status Snapshot Report](/img/media/image209.png)
*Figure 131: Stock Status Snapshot Report*

### C3. Stock Status Snapshot
**Purpose:** to give a high-level view of a program’s stock status across planning units at a single point in time (one month).

- **Accessible to:** Realm Admins, Program Admins, Report Viewers, and Program Users
- **Navigation:** Reports ➔ Stock Status ➔ Stock Status Snapshot
- **Notes:**
  - The various color corresponds to the stock levels during that particular month:
    - Red – Stocked Out
    - Orange – Under Stocked
    - Green – Stocked to Plan
    - Yellow – Over Stocked
    - Grey – N/A (QAT is unable to calculate the value due to missing data)
  - Although the PDF and CSV do not export the conditionally formatted colors, users may copy and paste the table to keep all the colors and formatting.

![Figure 132: Stock Status Snapshot Report](/img/media/image210.png)
*Figure 132: Stock Status Snapshot Report*

### C4. Stock Status Snapshot (Global)
**Purpose:** to give a high-level view of a program’s stock status across planning units at a single point in time (one month) for multiple programs.

- **Accessible to:** Realm Admins, Program Admins, Program Users, and Report Viewers
- **Navigation:** Reports ➔ Stock Status ➔ Stock Status Snapshot (Global)
- **Notes:**
  - The various color corresponds to the stock levels during that particular month:
    - Red – Stocked Out
    - Orange – Under Stocked
    - Green – Stocked to Plan
    - Yellow – Over Stocked
  - Although the PDF and CSV do not export the conditionally formatted colors, users may copy and paste the table to keep all the colors and formatting.

![Figure 133: Stock Status Snapshot (Global) Report](/img/media/image211.png)
*Figure 133: Stock Status Snapshot (Global) Report*

## D. Consumption Reports

### DI. Consumption (Global)
**Purpose:** to visually show the consumption of a planning unit or multiple planning units across countries.

- **Accessible to:** Realm Admins, Program Admins, Program Users, and Report Viewers
- **Navigation:** Reports ➔ Consumption Reports ➔ Consumption (Global)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The various colors stacked in the horizontal bars represent different countries. Users can determine which country by referencing the graph legend.</li><li>The x-axis corresponds to the consumption quantity (in millions) for each country.</li></ul></li></ul>

### D2. Forecast Error (Monthly)
**Purpose:** to visually show forecast accuracy using the weighted average percent error (WAPE) method, over time, while viewing the forecasted consumption against the actual consumption.

- **Accessible to:** Realm Admins, Program Admins, Report Viewers, and Program Users
- **Navigation:** Reports ➔ Consumption Reports ➔ Forecast Error (Monthly)

![Figure 135: Forecast Error (Monthly) Report](/img/media/image213.png)
*Figure 135: Forecast Error (Monthly) Report*

<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>In the graph, the red vertical bars represent the actual consumption, the blue vertical bars represents the forecasted consumption, the green line (which uses the right axis), represents the forecast error, and the turquoise dotted line represents the forecast error threshold (see Figure 115: Forecast Error (Monthly) Report).</li><li>The forecast error threshold (%) per planning unit is set by the Program Admin in the Update Planning Units screen. If a forecast error is above the set forecast error threshold (%), it will appear in red text in the data table.</li><li>The Report View can be viewed in multiple ways:<ul style={{listStyleType: 'square'}}><li><strong>Forecasting unit.</strong> A user may want to choose forecasting unit when comparing in base units, such as with medicines that have different bottle sizes (planning units) sharing the same forecasting unit (e.g. the antiretroviral TLD30 vs TLD90 - See Figure 116.)</li><li><strong>Equivalency Unit:</strong> A user may want to choose forecasting unit when comparing products with different forecasting units, but some programmatic link (e.g. malaria treatments AL 6x1 vs 6x2 – see Figure 117.)</li><li><strong>“Show consumption adjusted for stock out?”:</strong> If this checkbox is checked, QAT uses the adjusted actual consumption instead of the actual consumption. QAT calculates the total days in the month based on the calendar.</li></ul></li><li>Missing Data:<ul style={{listStyleType: 'circle'}}><li>If data is missing for either forecasted or actual consumption, there will be a missing segment of the line or a missing bar in the graph</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user may see a gap in the line graph</li></ul></li><li><strong>Formula:</strong> Forecast Error uses the Weighted Average Percent Error (WAPE) formula. The example below uses the time windows of 6 months.<ul style={{listStyleType: 'square'}}><li><strong>Time Window:</strong> For non-seasonal products with predictable consumption pattern, use a short time window, but consider using a longer time window for those products with a more variable consumption or those with seasonality (use a time window at least long enough to consider the entire season).</li><li>For more details on the logic QAT uses to calculate this report, see the “Show Formulae” in the tool.</li></ul></li></ul></li></ul>

![Figure 136: WAPE Formula with 6-month time window as example](/img/media/image214.png)

*Figure 136: WAPE Formula with 6-month time window as example*

![Figure 137: Forecast Error (Monthly) Report – displayed by forecasting unit](/img/media/image215.png)
*Figure 137: Forecast Error (Monthly) Report – displayed by forecasting unit*

![Figure 138: Forecast Error (Monthly) Report – displayed by equivalency unit](/img/media/image216.png)
*Figure 138: Forecast Error (Monthly) Report – displayed by equivalency unit*

### D3. Forecast Error (by Planning Unit)
**Purpose:** to assess forecast accuracy for selected products during a specific month across countries and programs.

- **Accessible to:** Realm Admins, Program Admins, Report Viewers, and Program Users
- **Navigation:** Reports ➔ Consumption Reports ➔ Forecast Error (by Planning Unit)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>For the time window, non-seasonal products with predictable consumption pattern can have a short time window, but those that have a more variable consumption/those with seasons should have a long-time window, or at least long enough to consider the entire season.</li><li>In the table, the forecast error percentages that are above the forecast error threshold (%), set by a Program Admin in the Update Planning Units screen, will be highlighted red</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user will see an error message in the table.</li><li>Forecast Error uses the Weighted Average Percent Error (WAPE) formula:</li></ul></li></ul>

![Figure 139: WAPE Formula](/img/media/image217.png)

*Figure 139: WAPE Formula*

![Figure 140: Forecast Error (by Planning Unit) Report](/img/media/image218.png)
*Figure 140: Forecast Error (by Planning Unit) Report*

## E. Shipment Reports

### EI. Shipment (Global)
**Purpose:** to aggregate procurement quantities by funding source, procurement agent, and procurement agent type across all countries and programs.

- **Accessible to:** Realm Admins, Program Admins, Program Users, and Report Viewers
- **Navigation:** Reports ➔ Shipment Reports ➔ Shipments (Global)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The two graphs that appear first in the Shipments (Global) Report depict the aggregated quantity of shipments per country and cost of the shipments (in USD) per funding source for a single planning unit. For a tabular view of the data, the user may find details in the bottom two tables.</li><li>If a country does not procure the selected planning unit, it will not appear in the graph of the tables in the report.</li></ul></li></ul>

![Figure 141: Shipment (Global) Report](/img/media/image219.png)
*Figure 141: Shipment (Global) Report*

### E2. Shipment Overview
**Purpose:** to aggregate procurement quantities by funding source or by procurement agent type across all countries and programs.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins/Users, and Report Viewers</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Once navigating to the Shipment Overview screen, Users will see dropdowns in which they must fill out to show specific data. Once selecting certain dropdowns or all, users are shown a graph and a pie chart. The graph that appears first in the Shipments Overview Report depicts the aggregated quantity of shipments across countries and cost (in USD) of the shipments per funding source across planning units. The pie chart shows percentages of Funding Source depending on user selections while also being able to hover over to see the total amount (in USD). Users may also choose to group the data by Procurement Agent Type or Funding Source Type. For a tabular view of the data, the user may find details in the bottom table.</li></ul></li></ul>

![Figure 142: Shipment Overview Report](/img/media/image220.png)
*Figure 142: Shipment Overview Report*

### E3. Shipment Details
**Purpose:** to provide a comprehensive view of all shipments for a program.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The top graphs shows total USD per month by shipment status</li><li>There are two tables below the graph: the first one provides a summary and the second one provides detailed information on shipments.<ul style={{listStyleType: 'square'}}><li>The summary table shows the total number of shipments, and total costs per funding source, for the selected time period.</li><li>The detailed table contains the shipments disaggregated by planning unit, etc.</li></ul></li></ul></li></ul>

![Figure 143: Shipment Details Report](/img/media/image221.png)
*Figure 143: Shipment Details Report*

### E4. Shipment Cost Details
**Purpose:** to provide a simple view of all shipments for a program and their total costs.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Can be displayed by funding source, procurement agent, or planning unit.</li></ul></li></ul>

![Figure 144: Shipment Cost Details Report](/img/media/image222.png)
*Figure 144: Shipment Cost Details Report*

### E5. Shipment Cost Overview
**Purpose:** to provide a general view of the total shipment costs per calendar year for a program and planning unit, by funding source.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report can be viewed in PDF or Excel (CSV) format</li><li>This report can be based on either the shipment receive date, or the shipment submitted date</li></ul></li></ul>

![Figure 145: Shipment Cost Overview Report](/img/media/image223.png)
*Figure 145: Shipment Cost Overview Report*

### E6. Budget
**Purpose:** to show the different budgets assigned to a program(s), the amounts allocated to shipments, the amount overspent (if applicable), and estimated amounts remaining. This program dropdown in this report is multi-select since multiple programs can share the same budget.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Budget</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The graph shows every predefined Budget in a program and whether it is allocated to shipments (planned or ordered) and the remaining amount.</li><li>The tabular view of the graph also provides information on the funding source for each budget, start and end date, and other detailed information.</li></ul></li></ul>

![Figure 146: Budget Report](/img/media/image224.png)
*Figure 146: Budget Report*

### E7. Procurement Agent Lead Time
**Purpose:** to show the detailed lead times (in months) for all planning units, by procurement agent.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Procurement Agent Lead Time</li></ul>

![Figure 147: Procurement Agent Lead Time Report](/img/media/image225.png)
*Figure 147: Procurement Agent Lead Time Report*

## F. Inventory Reports

### F1. Expiries
**Purpose:** to provide planners with estimated quantities of planning units expiring in the future based on batch/shelf life

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Expiries</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report pulls from data previously entered by including batch information on shipments, inventory, and actual consumption, and shelf life per planning unit. It displays the batch numbers, the receive date of the batch, shelf life of that batch (or planning unit), expiry date, and cost of the expired product.</li><li>The report can include quantities in planned shipments expected to arrive and expiry during the selected timeframe.</li><li>It will calculate (based on shelf life, stock projections, and forecast consumption) how much of a particular batch is expected to expire and when.<ul style={{listStyleType: 'square'}}><li>For the expiry calculation, refer to <a href="./14-annex-2-business-rules.md">Annex 2: Business Rules</a>.</li></ul></li><li>The report will calculate a cost of expired product, based on the quantity expired and the planning unit default price set by the user in the Update Planning Units screen.</li><li>The table is interactive. When the user clicks on the expired quantity, QAT will open a pop up with the batch ledger.</li></ul></li></ul>

![Figure 148: Expiries Report](/img/media/image226.png)
*Figure 148: Expiries Report*

### F2. Cost of Inventory
**Purpose:** for a selected month, provides an estimated cost of inventory based on actual or projected stock on hand and the planning unit catalog price.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Cost of Inventory</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The report can include quantities in planned shipments expected to arrive during the selected timeframe.</li><li>The stock column could be based on an actual inventory or projected ending balance.</li><li>This report uses the following formula:</li></ul></li></ul>

![Figure 149: Cost of Inventory Formula](/img/media/image227.png)

*Figure 149: Cost of Inventory Formula*

![Figure 150: Cost of Inventory Report](/img/media/image228.png)
*Figure 150: Cost of Inventory Report*

### F3. Inventory Turns
**Purpose:** to show the number of inventory turns per planning unit, program, country, or planning unit category at a particular point in time. Inventory turns are a way to measure the velocity of the supply plans. Inventory turnover is a key performance metric often used to signal supply chain management effectiveness. It is usually a backward looking metric, but because QAT uses forecast data to estimate stock projections into the future, the report can also be used to view estimated inventory turns based on the plans. Generally, higher turns mean a healthier supply chain – products are moving downstream and being replaced by fresh products more frequently. Low turnover implies low consumption, possibly excess inventory – it could point for instance to program targets being too ambitious.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Inventory Turns</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report calculates inventory turns at various levels: at the individual planning unit level, at an aggregate level for an entire program (multiple planning units), and at an aggregate level for an entire country (multiple programs), or commodity category.</li><li><strong>Planned Inventory turns:</strong> Are the possible months of stock for each month over 12 months if the inventory rules worked perfectly considering the Planning Unit’s MIN and Reorder Interval.<ul style={{listStyleType: 'square'}}><li>At the planning unit level, the report utilizes the MIN and Reorder Interval from Planning Unit Settings to calculate the “Planned” inventory turns.</li><li>At the program level (multiple planning units) QAT utilizes the mode of all planned inventory turns of all Planning units under a specific program.</li><li>At the country and/or Planning Unit Category level QAT utilizes the mode of all planned inventory turns of all Planning units under a specific country / PU Category.</li></ul></li><li><strong>Actual inventory turns:</strong><ul style={{listStyleType: 'square'}}><li>At the planning unit level, QAT uses the following formula for each planning unit to calculate the actual inventory turns:</li></ul></li></ul></li></ul>

![Figure 151: Inventory Turns Formula at the planning unit level](/img/media/image229.png)

*Figure 151: Inventory Turns Formula at the planning unit level*

<ul><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'circle'}}><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'square'}}><li>For each planning unit, the report compares the actual and planned turns, and calculates the MAPE and MSE.</li><li>To calculate the actual inventory turns at the program level, QAT will look for the mode across all planning units in that program. If no mode can be found, QAT will use the average from all planning units as that program’s actual inventory turns.</li><li>To calculate the actual inventory turns at the country (or commodity category) level, QAT will look for the mode across all programs. If no mode can be found, QAT will use the average.</li></ul></li></ul></li></ul>

![Figure 152: Inventory Turns Report](/img/media/image230.png)
*Figure 152: Inventory Turns Report*

### F4. Stock Adjustment
**Purpose:** to show a list of all the manually entered stock adjustments in a program. *Note: automatically calculated adjustments will not display on this report.*

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Stock Adjustment</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Automatically calculated adjustments (as a result of a difference between projected ending balance and an inventory count) do not appear in this report.</li></ul></li></ul>

![Figure 153: Stock Adjustment Report](/img/media/image231.png)
*Figure 153: Stock Adjustment Report*

### F5. Warehouse Capacity (by Program)
**Purpose:** displays the volume (in cubic meters) of all regions within a country (if a user enters such information upon setting up a program).

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Program)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 154: Warehouse Capacity (by Program)](/img/media/image232.png)
*Figure 154: Warehouse Capacity (by Program)*

### F6. Warehouse Capacity (by Country)
**Purpose:** displays the volume (in cubic meters) of all countries and regions within a country (realm-level access required).

<ul><li><strong>Accessible to:</strong> Realm Admins and Report Viewers</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Country)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 155: Warehouse Capacity (by Country)](/img/media/image233.png)
*Figure 155: Warehouse Capacity (by Country)*

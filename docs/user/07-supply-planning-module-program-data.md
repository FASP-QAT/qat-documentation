---
id: supply-planning-module-program-data
title: "Supply Planning Module: Program Data"
sidebar_label: "SP: Program Data"
sidebar_position: 7
---

# Section 4. Supply Planning Module: Program Data

In QAT, a **Program** is the primary unit of supply planning, typically corresponding to a country's technical area (e.g., Malaria, HIV). Programs are governed by realm-level master data, ensuring consistency across the system.

Data management at the program level is primarily handled by **Program Admins** and **Program Users**. For more details on roles, see [Annex 3: User Role Matrix](15-annex-3-user-role-matrix.md).

### 4.A.1. Data Categories.

| Category | Data Type | Examples |
| :--- | :--- | :--- |
| **Background Data** | Program Info | Lead times, freight %, program managers. |
| | Product Info | Planning units, reorder intervals, min/max stock. |
| | Budget | Funding sources, budget amounts, valid dates. |
| **Transactional Data**| Consumption | Actual and forecasted consumption. |
| | Inventory | Stock counts and adjustments (damages, expiries). |
| | Shipments | Quantities, delivery dates, procurement agents. |

*Table 1: Program Data Hierarchy*

## 4.A. Background Data.

> [!TIP]
> Background data must be updated while online. Perform a **Master Data Sync** after updates to ensure changes are reflected across the application.

### 4.A.2. Program Information.
Program Admins can define general parameters such as program managers, lead times, and default freight percentages.

**To update program info:**
1. Navigate to **Program Management** > **Update Program Info**.
2. Select the target program.
3. Modify fields as needed and click **Submit**.
4. (Optional) Add/remove procurement agents and funding sources from the program-specific lists.

![Update Program Info Interface](/img/media/image113.png)
*Figure 1: Program Information Management*

### 4.A.3. Planning Units.
Planning units are the specific products used for procurement and inventory tracking. While the master catalog is managed at the realm level, Program Admins manage which units are active within their specific programs.

**Key Parameters:**
- **Plan By:** Choose "MOS" (Months of Stock) for high-volume items or "Quantity" for low-volume/emergency items.
- **Reorder Interval:** Frequency of shipments (in months).
- **Min Months of Stock (MOS):** The safety stock level required to prevent stockouts.
- **Shelf Life:** Average months from receipt until expiry.
- **Forecast Error Threshold:** Used to flag high discrepancies in consumption reports.

**To manage planning units:**
1. Go to **Program Management** > **Update Planning Units**.
2. Select your program.
3. **To Edit:** Double-click any cell (e.g., Min MOS, Shelf Life) and click **Submit**.
4. **To Add:** Click **Add Row**, search for the planning unit by name, fill in the parameters, and click **Submit**.

> [!NOTE]
> If a planning unit is missing from the catalog, submit a ticket via the [QAT Helpdesk](05-getting-started.md#qat-helpdesk-and-tickets).

### 4.A.4. Program/Procurement Agent-specific Information.
Users can override default lead times, freight costs, and unit prices for specific procurement agents and planning units.

**Key Roles and Rules:**
- **Prioritization:** Specific agent/unit settings override program settings, which override realm-level defaults.
- **Constraints:** Only one row is allowed per program/unit/agent combination.
- **Mandatory Fields:** Program, Planning Unit, and Procurement Agent are required to add a row.

**To add or edit specific info:**
1. Navigate to **Program Management** > **Program/Procurement Agent Info**.
2. Select the program and planning unit.
3. Fill in the specific Lead Times, Freight %, or Unit Prices.
4. Click **Submit** and perform a **Master Data Sync**.

![Procurement Agent Info Interface](/img/media/image117.png)
*Figure 2: Specific Procurement Agent Settings*

### 4.A.5. Alternate Reporting Units (ARU).
An ARU allows data entry in units different from the standard planning unit (e.g., pieces vs. packs).

**Rules:**
- **Conversion Factor:** Must be defined to convert ARU to Planning Unit (e.g., multiply by 10).
- **Automation:** QAT automatically creates a 1:1 ARU for every planning unit added.

**To manage ARUs:**
1. Go to **Program Management** > **Alternate Reporting Unit**.
2. Select the program.
3. Click **Add Row** to create a new ARU, define the conversion factor, and click **Submit**.

![ARU Interface](/img/media/image118.png)
*Figure 3: Alternate Reporting Units*

### 4.A.6. Lead Times.
Lead times track shipment progression across six statuses. The system prioritizes lead times as follows: **Program/Agent Specific** > **Program Defaults** > **Realm Defaults**.

#### Lead Time Definitions

| Stage | Definition | Configuration Level |
| :--- | :--- | :--- |
| **Planned to Submitted** | Identifying need to placing order. | Program |
| **Submitted to Approved** | Order placement to approval. | Program (Default) / Realm (Agent) |
| **Approved to Shipped** | Approval to dispatch. | Program (Default) / Realm (Agent) |
| **Shipped to Arrived** | Transit time (Air, Sea, or Road). | Program |
| **Arrived to Received** | Arrival at port to warehouse receipt. | Program |

**To update lead times:**
1. Navigate to **Program Management** > **Update Program Info**.
2. Scroll to the lead time fields and enter values in months.
3. Click **Update**.

For local procurement, the entire lead time (Planned to Received) is managed per planning unit in **Update Planning Units**.

![Shipment Status Flow](/img/media/image120.png)
*Figure 4: Shipment Lead Time Lifecycle*

### 4.A.7. Budgets.
Budgets track capital allocation for purchasing commodities. A budget can be linked to one or multiple programs.

- **Status Alert:** Budgets highlighted in **Red** indicate that the end date has passed or the used amount exceeds the budget.
- **Rules:** Shipments tagged to a budget must be un-tagged before delinking the program from that budget.

**To add a budget:**
1. Navigate to **Program Management** > **Budget**.
2. Click the **+** (Add) icon.
3. Enter the Funding Source, Budget Name, and amounts.
4. Click **Submit**.

**To update a budget:**
1. Select the budget from the list.
2. Modify details in the **Update Budget** screen and click **Submit**.

![Budget Management Screen](/img/media/image123.png)
*Figure 5: Budget Overview*

## 4.B. Transactional Supply Plan Data.
Transactional data includes the "Big 3": **Consumption**, **Inventory**, and **Shipments**.

### 4.B.1. Consumption Data.
Consumption refers to stock dispensed to clients.
- **Actual Consumption:** Reported quantity dispensed.
- **Forecasted Consumption:** Predicted quantity agreed upon by the program.

**To add/update consumption:**
1. Navigate to **Supply Plan Data** > **Consumption Data**.
2. Select the report period and planning unit.
3. **Add:** Click **+ Add row** or right-click a cell and select **Add new consumption**.
4. **Update:** Double-click a cell to edit. 

> [!WARNING]
> Historical data (more than 9 months in the past) is read-only and cannot be edited.

**Batch Details (Actual Consumption Only):**
1. Right-click an "Actual Consumption" row and select **Show Batch Information**.
2. Edit batch numbers or quantities. The total batch quantity must exactly match the total consumption quantity.

![Consumption Data Entry](/img/media/image125.png)
*Figure 6: Consumption Management*

### 4.B.2. Inventory Data.
Inventory data includes **Stock Counts** and **Adjustments** (e.g., damages, transfers).

- **Stock Count:** Physical inventory on a specific date.
- **Adjustments:** Modifications to usable inventory (notes are required for all adjustments).

**To add/update inventory:**
1. Navigate to **Supply Plan Data** > **Inventory Data**.
2. Select the **Inventory Type** (Inventory or Adjustment).
3. **Add:** Click **+ Add row** and enter details.
4. **Update:** Double-click cells to edit. 

> [!IMPORTANT]
> Like consumption, inventory and adjustment records more than 9 months in the past cannot be edited.

**Batch Details:**
- **Adjustments:** Right-click a row and select **Show Batch Information**. QAT uses "Best Case Scenario" logic to handle batch quantities if not explicitly provided.
- **Inventory:** Batch details are managed within the Supply Planning screen (see [Section 5.E](08-supply-planning-module-supply-planning.md#supply-planning-project-expired-stock-and-batch-information)).

![Inventory Data Entry](/img/media/image127.png)
*Figure 7: Inventory Management*

### 4.B.3. Shipment Data.
Shipments are tracked from planning to receipt.

**To add/update shipments:**
1. Navigate to **Supply Plan Data** > **Shipment Data**.
2. Select filters and click **+ Add row**.
3. Fill in required fields (highlighted in **Yellow**).
4. **Strategic Order Calculator:** For strategic products, double-click the **Order Quantity** cell to use the calculator for MOQ or pallet-based rounding.
5. **Batch Details:** Right-click a shipment and select **Show Batch Information** to manage expiry dates and quantities.

**Key Shipment Rules:**
- **Emergency Shipments:** Rows in **Red** indicate the receive date is within the lead time.
- **Freight Cost:** Automatically calculated based on `Cost * Freight %` unless manually overridden.
- **Shipment Dates:** Right-click a shipment and select **Show shipment dates** to compare Estimated vs. Actual milestones.

![Shipment Management](/img/media/image131.png)
*Figure 8: Strategic Order Calculator*

### 4.B.4. ERP Shipment Linking.
ERP linking allows planners to sync QAT shipments with a procurement agent's ERP system (e.g., GHSC-PSM's ARTMIS). This automates updates for status, costs, and dates.

**Rules for Linking:**
- **Status:** QAT shipments must not be "Planned," "Cancelled," or "Suggested."
- **Recency:** "Received" shipments must be from within the last 6 months.
- **Agent:** Currently supported only for **GHSC-PSM**.
- **Mode:** Only editable in downloaded local versions.

#### Linking Screens
1. **Not Linked (QAT):** Link existing QAT shipments to ERP orders. Select a shipment, search for the ERP order, and define the conversion factor.
2. **Not Linked (ERP):** Link ERP orders to QAT. You can select an existing QAT shipment or create a new one directly from this screen.
3. **Linked:** View all currently synced shipments, update conversion factors, or de-link orders.

**To link an ERP shipment:**
1. Navigate to **Supply Plan Data** > **Link ERP Shipments**.
2. Select the **Not Linked (QAT)** or **Not Linked (ERP)** tab.
3. Choose the program/planning unit.
4. Click a row to open the search/link window.
5. Provide the **Alternate Reporting Unit (ARU)** to set the conversion factor.
6. Click **Link Shipment**.

![ERP Linking Screens](/img/media/image133.png)
*Figure 9: ERP Linking Overview*

#### 4.B.5. ERP Notifications.
Planners will receive alerts in the **ERP Shipment Notifications** screen if there are discrepancies between QAT and the ERP system (e.g., cancelled orders, quantity changes, or SKU updates).

1.  Select the radio button at the top labeled ‘Linked’.

2.  Select the program and planning unit(s) you want to see the list of linked shipments for. Once selected, a list of shipments will appear. The information in these shipments is being pulled in from the ERP.

3.  To make any of the updates listed in step 2, left click on a single shipment.
    1.  To edit ARU and/or notes, double-click on the cell and type or select from dropdown.

    2.  To de-link an ERP order, uncheck the box in the ‘Link?’ column.

    3.  To add an ERP order, check the box for that order under ‘Link?’ column. The user can clear the search dropdowns in the middle section to look up a differe planning unit or order number and the originally linked orders will remain linked.

4.  Users will have the ability to also view order history details from the ERP. To do so, from the original ‘Linked’ screen, right-click on a single shipment and click ‘View ERP Order History’. A pop-up window will appear labeled ‘ERP Order History’. This screen will show any details that have changed over time in the ERP order. Each row indicates that one or more of the columns has changed. The furthest column on the right labeled ‘Data Received On’ is when the record was received by QAT.
    1.  To view batch details, click on the![](/img/media/image137.png) icon.

    2.  **Note:** Certain fields from the ERP are not captured on this screen so there may be some instances where 1 or more rows have the same details. This means that a column in the backend was changed.

> **Once you have linked QAT shipments with ERP orders, the data will reflect in your supply plan without having to master data sync.** The newly linked ERP data will reflect in the local reports, supply planning screen as well as the shipment data entry screen. The user **does** need to upload a version to the server in order for other users to see these changes.
>
> To view the ERP-linked shipments in the shipment data entry screen, the user must select ‘ERP-linked shipments’ from the Shipment Type dropdown. The user can either display only this option or combine it with the manual shipments to show all shipments. The ERP-linked shipments will be greyed out to indicate that they are non-editable.

![P1723#yIS1](/img/media/image138.png)

Figure 88: View ERP Shipments in Data Entry

In the supply planning screen, ERP-linked shipments will have a link icon in the top left of the cell. The user can click into a specific shipment to view the details but those cells will also be greyed out to indicate that they are non-editable. The user can still right click on the shipment details,however, to view the shipment dates and batch information.

![P1727#yIS1](/img/media/image139.png)

Figure 89: View ERP Shipments in Supply Plan

**ERP Shipment Notifications**

The purpose of the ‘ERP Shipment Notifications’ screen is to alert supply planners of any key changes made to ERP linked shipments, such as an order being cancelled or a product SKU changing. Supply planners will be encouraged to ‘address’ each of the notifications to confirm that they are aware of the change and the implications made on the supply plan. For product changes, the user will re-confirm the conversion factor, whether it changes or not.

![](/img/media/image140.png)

At the top of the screen, there is a icon. This icon will display a red number indicating how many non-addressed notifications are in the ERP shipment notifications screen. If there is no red number, that means there are none.

To get to the ‘ERP Shipment Notifications’ screen, either click on the truck icon at the top of QAT or select ‘ERP Shipment Notifications’ under ‘Supply Plan Data’ in the left sidebar menu.

To view the notifications, the user will need to select from the 3 dropdowns (Program, Planning Unit, Addressed). The user also has the option to select directly from the table above the dropdowns. When a user left clicks on a row in the table, the 3 dropdowns will atomically populate based on the program that user selected. The planning unit dropdown will populate to all planning units and the addressed dropdown will select ‘Not Addressed’.

![P1739#yIS1](/img/media/image141.png)

Figure 90: ERP Shipment Notifications Filtering

To address a notification, the user must check the box in the ‘Addressed?’ column and then hit the ‘Submit’ button. If the user is addressing an ERP Product Change notification, he/she must first enter the conversion factor. The conversion factor field is not editable until the addressed box is checked.

Just like in the ‘Linked’ screen, the user can view ERP order history. To do so, right-click on the notification row and click ‘View ERP Order History’. Refer to the Linked Screen section for more information.

## 4.C. Importing Data for Supply Planning.

### 4.C.1. Supply Plan Data Excel Import Templates.

Consumption, Inventory and Shipment data can be entered through QAT’s data entry screens, through the Supply Planning screen or through Quantimed Import (forecasted consumption only). QAT also provides users with the ability to input this data directly from Microsoft Excel. This method of data entry is intended for bulk entries that have a lot of data. The steps below will show how to input data from Excel into QAT:

1.  From the menu sidebar, go to “Supply Plan Data” and click the type of data you want to enter (e.g. “Consumption Data”). ![P1748L76#yIS1](/img/media/image142.png)

2.  ![](/img/media/image143.png)Once on the data entry screen, go to the top right corner and click “Download Template”.

3.  A Microsoft Excel file will be downloaded directly to your computer’s ‘**Downloads’** folder.

4.  Proceed to your computer’s Downloads folder and open the Excel file. The name format should be **ConsumptionDataEntryTemplate.xlsx** with the first portion dependent on the type of data you are entering.
    1.  _<u>Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.</u>_

5.  Once in the Excel template, click “Enable Editing” at the top if it prompts you to.

![P1755#yIS1](/img/media/image144.png)

Figure 91: Enable Editing

6.  Enter data for all of the required fields.
    1.  Any cell highlighted in grey (e.g. Conversion Factor) is non-editable and does not need to be filled in.

    2.  Certain fields (e.g. Data Source) will have drop down menus pre-populated from QAT. Therefore, it is important to download a new template if it has been a while since the last time the user used the template.

    3.  Certain fields have built in data validations (e.g. letters cannot be entered in cost cells). If the validation is not met, a pop-up error message will appear.

![P1762#yIS1](/img/media/image145.png)

Figure 92: Excel Template

7.  Once all the data is entered in the Excel template, re-open QAT window.

8.  Go to the Data Entry screen (Consumption, Inventory, Adjustment, Shipment).

9.  Click the blue “+Add Row” button at the bottom.
    1.  **Note:** You only need to add 1 row in QAT regardless of how many rows there are in the Excel template.

10. In the Excel template, select all data and press Ctrl + C on your keyboard to copy the data.

11. Go to the added row in QAT, left click on the far most left cell in that row and press Ctrl + V on your keyboard to paste the data.

12. QAT will automatically create new rows for the data being imported from Excel.

13. Click “Submit”.

### 4.C.2. Quantimed Forecast Import.

![](/img/media/image146.png)Quantimed is a software designed to facilitate the process of determining the quantities of medicines and medical supplies required for a health program. The output of Quantimed is a health programs’ forecasted consumption data. That forecasted consumption data can be a key input into QAT user’s supply plans. QAT allows users to import Quantimed forecasts into QAT to include in their supply plan.

**Step 1: Import Quantimed Data into QAT**

1.  Go to “Supply Plan Data” on the sidebar menu

2.  Selected “Quantimed Import”

3.  **Import Quantimed Data File**
    1.  Choose the Quantimed .xml forecast file from your local computer system.

    2.  Select the QAT program that you want the Quantimed data to import into.

    3.  Click on “Import”.

![P1783#yIS1](/img/media/image147.png)

Figure 93: Quantimed File Import

**Step 2: Map Planning Units**

1.  > To map a Quantimed product to a QAT planning unit, select the QAT planning unit using the drop-down menu.

2.  > If you do not want to import a specific Quantimed product, select the “Do Not Import” option for that row.

3.  > If there is not a QAT planning unit associated with the Quantimed product, the dropdown will show “Planning Unit Not Found”. You will either need to manually select a planning unit from the dropdown or go back to the program and add a planning unit for that Quantimed product before proceeding. You cannot click “Next” one or more of the cells says “Planning Unit Not Found”.
    1.  > **Note**: to minimize instances where a planning unit is not found, it is recommended that Quantimed users select products from the GHSC-PSM product catalog .xml file.

4.  > Once very row has a planning unit selected or says “Do not import”, click “Next” at the bottom of the screen.

![P1794#yIS1](/img/media/image148.png)

Figure 94: Map Planning Units

**Step 3: Region**

1.  > In this step select the region that you want to import the forecasted consumption data into. If there is only one region, you must select that region to proceed.

2.  > Then, input the percentage of that consumption data that you want to import into QAT. This percentage must range from 0-100% and will apply to all the planning units previously selected.

3.  > Click “Next”.

**Step 4: Consumption Month**

1.  > Select the date range for the Quantimed data that you want to import into QAT.
    1.  > The period you select is the period of data that you will be able to import and will apply to all planning units previously selected.

2.  > Click “Next”.

![P1806#yIS1](/img/media/image149.png)

Figure 95: Consumption Month Screen

**Step 5: Import Data**

1.  > The final step is to confirm the data that will be imported from Quantimed into QAT based on what was entered in steps 1-4.
    1.  > “Quantimed Forecasted Consumption” is the amount that is being pulled in from Quantimed for the associated product and month-year.

    2.  > “Converted Quantimed Forecasted Consumption” is the amount that will be pulled into QAT for the associated product and month-year after applying the import percentage and conversion factor.

    3.  > “Current QAT Forecasted Consumption” is the forecasted consumption amount currently in QAT for that planning unit and month-year. Once you import the Quantimed data, this amount will be overwritten by the “Converted Quantimed Forecasted Consumption” amount.

2.  > This screen will show all the data that will be imported into QAT. If you do not want to import certain records, click on the checkbox in the ‘Import?’ column on the far right. This will prevent QAT from importing the Quantimed data and will keep the current QAT forecasted consumption for that planning unit and month-year.

3.  > Click “Submit” to import the data.

![P1816#yIS1](/img/media/image150.png)

Figure 96: Confirm Data Import Screen

### 4.C.3. QAT Forecast Import.

### 4.C.4. Importing Forecasts into Supply Plans.
Planners can import QAT-created forecasts into their supply plan programs to drive procurement needs.

**Prerequisites:**
- The forecast must be uploaded as a **Final** version.
- A forecast must be selected for each planning unit.

**To import a forecast:**
1. Navigate to **Supply Plan Data** > **Import Forecast into Supply Plan**.
2. Select the **Source Forecast Program** and **Target Supply Plan Program** (local versions only).
3. Select the date range for import.
4. **Map Planning Units:** Map forecasting planning units to supply plan units. Set a conversion factor if packaging differs. Use "Do not import" for units you wish to exclude.
5. **Map Regions:** Define the percentage of the forecast to allocate to each supply plan region (e.g., 100% National to National, or split 50/50 between two regions).

![Forecast Import Screen](/img/media/image151.png)
*Figure 10: Mapping Forecast Data to Supply Plans*

#### Rounding and Residuals
Since supply planning requires whole numbers, QAT rounds forecasted consumption down to the nearest whole number. To prevent data loss, "residuals" (remainders) are carried over and summed across months. Once the cumulative residual reaches 1.0, it is added to the current month's imported quantity.

**Example:**
| Month | Converted Forecast | Cumulative Total | Rounded Import | Residual |
| :--- | :---: | :---: | :---: | :---: |
| Jan | 0.25 | 0.25 | 0 | 0.25 |
| Feb | 0.25 | 0.50 | 0 | 0.50 |
| Mar | 0.25 | 0.75 | 0 | 0.75 |
| Apr | 0.25 | 1.00 | 1 | 0.00 |

*Table 2: Demonstration of the Residual Rounding Logic*

6. Review the final conversion list and click **Import** to finalize.

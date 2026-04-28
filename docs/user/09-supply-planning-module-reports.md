---
id: supply-planning-module-reports
title: "Supply Planning Module: Reports"
sidebar_label: "SP: Reports"
sidebar_position: 9
---

# Section 6. Supply Planning Module: Reports

QAT reports allow the user to extract and view their supply planning data in graphs, tables, and other visual formats. The user will also be able to navigate, sort, filter, and view the data for specific needs. QAT reports produce visualizations and display data in a way that can support decision making.

The reports are divided into **Global Reports** and **Program-specific Reports**. Program-specific Reports are shown offline, as well as online. However, the Global Reports are shown only in online mode and are only available to Global Users, such as the Realm Administrator and the Application Administrator.

**Note:** All QAT reports have the ability to be exported into an Excel CSV file as well as PDF format. Additionally, all graphs allow for the user to hover over a visual for a tool tip with more information.

## 6.A. QAT Problem List.
The **QAT Problem List** is a built-in quality assurance tool. It identifies data inconsistencies and supply planning issues that must be addressed before a supply plan can be finalized and uploaded.

**Key Features:**
- **Recalculate:** Refresh the list after making data entry changes.
- **Criticality Levels:** Items are flagged as **High (Red)**, **Medium (Orange)**, or **Low (Yellow)**.
- **Audit Trail:** Right-click a problem to view internal notes and review history.

### 6.A.1. Problem Statuses.
| Status | Definition | Action Required |
| :--- | :--- | :--- |
| **Open** | Default state for new or auto-flagged issues. | Requires data entry or a note. |
| **In-Compliance** | Issue resolved automatically via data entry. | None (auto-closed). |
| **Addressed** | Issue acknowledged with an explanatory note. | Note is mandatory. |
| **Resolved** | Reviewer confirms the issue is permanently handled. | Reviewer-only status. |
| **Reviewed** | Reviewer has inspected the entry. | Reviewer-only status. |

*Table 11: QAT Problem List Status Definitions*

### 6.A.2. Common Problems & Solutions.
- **Missing Data:** Actual consumption or inventory counts missing in the last 3 months. *Solution: Enter missing data.*
- **Forecast Gaps:** Missing forecast values within the next 18 months. *Solution: Enter forecast or zeros if phasing out.*
- **Past Shipments:** Shipments with "Received" dates in the past that are still marked as "Ordered" or "Shipped". *Solution: Update status to "Received".*
- **Lead Time Violations:** Shipments that should have been submitted by a certain date. *Solution: Update status or push back receipt date.*
- **Stock Violations:** Plan falls below Minimum or above Maximum parameters. *Solution: Adjust shipments or consumption.*

<div style={{textAlign: 'center'}}>

![QAT Problem List Interface](/img/media/image198.png)

*Figure 1: High-level view of the Problem List*

</div>

## 6.B. Program Catalog.
The **Program Catalog** provides a standardized list of all Planning Units and Forecasting Units within a program, including their corresponding attributes.

**Navigation:** **Reports** > **Program Catalog**.

## 6.C. Stock Status Reports.
These reports provide different perspectives on stock health over time.

### 6.C.1. Stock Status Over Time.
Visualizes inventory levels for one or more planning units across a defined period.
- **Tip:** Limit the selection to fewer than 10 products to maintain graph clarity.

### 6.C.2. Stock Status Matrix.
Provides a high-level "heatmap" of stock status (MOS or Quantity) in a grid format.
- **Visual Coding:**
  - **Red:** Stocked Out.
  - **Orange:** Understocked.
  - **Green:** Ideal.
  - **Yellow:** Overstocked.
  - **Grey:** N/A (Missing data).

### 6.C.3. Stock Status Snapshot.
A point-in-time view (single month) of all planning units in a program.

### 6.C.4. Stock Status Snapshot (Global).
Similar to the Snapshot but allows for cross-program comparisons (Realm-level access).

<div style={{textAlign: 'center'}}>

![Stock Status Matrix](/img/media/image209.png)

*Figure 2: Stock Status Matrix Heatmap*

</div>

## 6.D. Consumption Reports.
These reports analyze how products are being used compared to forecasts.

### 6.D.1. Consumption (Global).
Visualizes consumption across multiple countries to identify regional trends.

### 6.D.2. Forecast Error (Monthly & by Planning Unit).
Analyzes forecast accuracy using the **Weighted Average Percent Error (WAPE)** method.

**Key Metrics & Features:**
- **Visuals:** Red bars (Actual), Blue bars (Forecast), Green line (Error %).
- **Thresholds:** Error percentages exceeding the Program Admin's set threshold are highlighted in **Red**.
- **Adjusted Consumption:** Toggle to see consumption adjusted for stock-out days.
- **WAPE Formula:** Measures the absolute deviation of forecast from actual, weighted by total volume.

<div style={{textAlign: 'center'}}>

![Forecast Error Report](/img/media/image213.png)

*Figure 3: Forecast Error (Monthly) with Threshold*

</div>

## 6.E. Shipment Reports.
These reports track procurement volume, costs, and logistics.

### 6.E.1. Shipment (Global & Overview).
Aggregates procurement data by funding source, agent, and country.
- **Global:** Cross-country view of quantities and costs.
- **Overview:** High-level summary using pie charts for funding source distribution.

### 6.E.2. Shipment Details & Cost Details.
Provides granular lists of shipments with status and financial breakdowns.
- **Summary Table:** Costs per funding source for the selected period.
- **Detailed Table:** Disaggregated by planning unit and shipment status.

### 6.E.3. Budget Report.
Tracks spending against predefined program budgets.
- **Visuals:** Shows allocated vs. remaining funds.
- **Multi-Program:** Supports budgets shared across multiple programs.

### 6.E.4. Procurement Agent Lead Time.
A reference report showing established lead times for each agent/planning unit combination.

<div style={{textAlign: 'center'}}>

![Shipment Details Report](/img/media/image221.png)

*Figure 4: Detailed Shipment Tracking*

</div>

## 6.F. Inventory Reports.
These reports monitor stock on hand, expiry risks, and warehouse capacity.

### 6.F.1. Expiries Report.
Provides estimated quantities of products expiring in the future based on batch/shelf life.
- **Projection:** Calculates expiry based on stock projections and forecast consumption.
- **Interactive:** Click an expired quantity to open the **Batch Ledger**.

### 6.F.2. Cost of Inventory.
Calculates the estimated value of stock on hand (actual or projected) based on catalog prices.

### 6.F.3. Inventory Turns.
Measures the velocity of the supply chain (effectiveness of management).
- **Planned Turns:** Target turns based on MIN and Reorder Interval settings.
- **Actual Turns:** Calculated based on average stock and consumption.
- **Interpretation:** High turns generally indicate a healthier, more responsive supply chain.

### 6.F.4. Stock Adjustment Report.
Lists all manually entered stock adjustments.
> [!NOTE]
> Automatically calculated adjustments (from inventory count discrepancies) are not shown here.

### 6.F.5. Warehouse Capacity.
Displays storage volume (m³) utilization by region or country. Requires Realm-level access for the Global view.

<div style={{textAlign: 'center'}}>

![Warehouse Capacity Report](/img/media/image232.png)

*Figure 5: Regional Warehouse Capacity Utilization*

</div>

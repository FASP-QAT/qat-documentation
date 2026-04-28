---
id: forecasting-module-program-data
title: "Forecasting Module: Program Data"
sidebar_label: "FC: Program Data"
sidebar_position: 10
---

# Section 7. Forecasting Module: Program Data

## 7.A. Introduction.
A forecast is an estimate of product quantities required by clients over a future period. In QAT, forecasting follows a structured workflow: **Setup** → **Methodology Selection** → **Data Entry** → **Analysis & Selection**.

### 7.A.1. Forecasting Methodologies.
QAT supports two primary methodologies, which can be used individually or combined for each product:

| Methodology | Best For... | Requirements |
| :--- | :--- | :--- |
| **Consumption-Based** | Mature, stable programs with reliable data. | 24+ months of historical consumption data. |
| **Tree-Based** | New programs, scale-ups, or variable demand. | Morbidity, service, or demographic data; demographic trends. |

*Table 12: Comparison of Primary Forecasting Methodologies*

Once forecasts are prepared, they are compared in the **Forecast Analysis** section to select the final plan.

## 7.B. Program Information.
Program Admins can update basic metadata (Name, Manager, Notes) and toggle program status (Active/Disabled).
> [!NOTE]
> Changes to Technical Area, Organization, or Display Name require a [Helpdesk Ticket](05-getting-started.md#qat-helpdesk-and-tickets).

## 7.C. Version Settings.
The **Version Settings** screen allows users to define the parameters of the current forecast and review previous versions. Only the **Local Version** is editable; server versions are read-only.

### 7.C.1. Technical Parameters.
- **Forecast Period:** Define the **Start Date** and **Number of Months**. QAT auto-calculates the **End Date**.
- **Days in Month:** Set between 15–31 days (Default: Calendar days). Useful for adjusting consumption based on service days.
- **Freight Percentage:** Optional estimate for procurement cost calculations.
- **Forecast Threshold:** Used in the **Compare & Select** screen. QAT flags Tree Forecasts that deviate significantly (High/Low) from Consumption Forecasts. Out-of-threshold values are highlighted in **Red**.

### 7.C.2. Version History.
Users can view the historical lifecycle of the program and right-click any version to view the **Forecast Validation** summary (listing missing data and validation notes) without downloading that specific version.

<div style={{textAlign: 'center'}}>

![Version Settings Interface](/img/media/image235.png)

*Figure 1: Forecasting Version Settings*

</div>

## 7.D. Planning Units.
The **Planning Units** screen is where you define the products to be forecasted. Products can be added manually or copied from the Supply Planning module.

### 7.D.1. Planning Unit Settings.
Configure these settings to enable specific methodologies and financial calculations:

| Setting | Description | Impact |
| :--- | :--- | :--- |
| **Conversion Factor** | Ratio between Planning Unit (PU) and Forecasting Unit (FU). | Standardizes data entry across units. |
| **Forecast Methodology** | Toggle **Consumption** and/or **Tree** methodology. | Determines which data entry screens are active. |
| **Stock on Hand** | Opening balance at the start of the forecast period. | Used to calculate the procurement gap. |
| **Existing Shipments** | Total committed quantities for the forecast period. | Reduces the total gap to be filled. |
| **Desired MOS** | Target inventory level (Months of Stock) at end of period. | Sets the goal for the gap calculation. |
| **Price & Type** | Catalog price or custom price per procurement agent. | Estimates the total cost of the procurement gap. |

*Table 13: Planning Unit Forecast Parameters*

> [!TIP]
> Always perform a **Master Data Sync** after updating these settings to ensure they propagate to the Analysis screens.

## 7.E. Equivalency Units.
**Equivalency Units (EUs)** allow you to aggregate data across different but related products (e.g., different pack sizes or concentrations). This enables a unified view of the forecast in the **Reports & Outputs** section.

### 7.E.1. Mapping & Conflicts.
- **Realm Level Mappings:** Universal mappings provided by QAT.
- **Program Level Mappings:** Overrides created by Program Admins for specific needs. Program-level mappings always take precedence.

### 7.E.2. Examples of Equivalency.
If a treatment regimen requires 14 tablets of one product OR 1 tube of another, both can be mapped to an EU called "Regimen Treatment".

| Equivalency Unit | Forecasting Unit | Conversion Factor |
| :--- | :--- | :---: |
| Regimen Treatment | 1 tablet of Product A | 14 |
| Regimen Treatment | 1 tube of Product B | 1 |

*Table 14: Demonstration of Equivalency Mapping*

### 7.E.3. Managing EUs.
1. **Check Master Data:** Search for existing EUs in **Realm Masters** > **Equivalency Units**.
2. **Add Custom EU:** If not found, use **Manage Equivalency Unit** to create a program-specific unit.
3. **Map Units:** Click **Add Row** on the main screen to link your Forecasting Units to the EU.
4. **Sync:** Click **Submit** and perform a **Master Data Sync**.

### 7.E.4. Usage in Reports.
- **Compare & Select:** Display total demand in EUs instead of individual units.
- **Monthly Forecast:** Aggregate disparate products into a single "total requirement" line.
- **Supply Planning:** View actual and forecasted consumption in EUs to identify high-level trends.

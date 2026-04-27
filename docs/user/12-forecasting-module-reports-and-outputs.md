---
id: forecasting-module-reports-and-outputs
title: "Forecasting Module: Reports and Outputs"
sidebar_label: "FC: Reports and Outputs"
sidebar_position: 12
---

# Forecasting Module: Reports and Outputs

After defining your methodologies and parameters, the final stage is to compare the available models, select the most accurate forecast, and review the resulting procurement requirements.

## Compare and Select
**Navigation:** **Forecasting Tree** > **Compare and Select**.

This screen allows you to compare multiple forecasts (Consumption-based vs. Tree-based) side-by-side to make your final selection.

### Key Metrics for Selection
- **Forecast Error (%):** Uses the **WAPE** calculation. A green highlight indicates the model with the lowest historical error.
- **Compare to Consumption:** For tree forecasts, QAT flags if the output is significantly higher or lower than historical consumption trends. Red text indicates the variance exceeds your set thresholds.
- **Visual Audit:** Use the **Graph** to see how different forecasts trend against historical actuals. The bolded line represents your currently selected model.

### Selection Rules
- **One Region at a Time:** Selection is performed per Planning Unit and Region.
- **Multiple Trees:** You can select and aggregate multiple tree forecasts (e.g., for different patient groups).
- **Mutual Exclusivity:** You cannot combine a consumption-based forecast with a tree-based forecast for the same region/unit.

> [!TIP]
> Use the **Show Data** button below the graph to see monthly data in a tabular format. Purple italicized values denote the official forecast period.

---

## Monthly Forecast
**Navigation:** **Forecasting Tree** > **Monthly Forecast**.

Use this report to verify your final selected forecasts in aggregate. It is the primary tool for a final sanity check before finishing the quantification.

- **Aggregation:** Automatically sums regional forecasts into a national total.
- **Equivalency Units (EUs):** View the forecast in EUs (e.g., "Standard Treatment Months") to compare different product variants.
- **Analysis Views:** Toggle between planning units and forecasting units, or aggregate data by calendar/fiscal year.

---

## Forecast Summary
**Navigation:** **Forecasting Tree** > **Forecast Summary**.

This screen provides two high-level views of your quantification results across the entire forecast period.

### 1. Regional View
- Provides a spreadsheet-style overview of all planning units across all regions.
- You can directly update forecast methods or add justification notes in this table.

### 2. National View (Gap Analysis)
This view provides a high-level procurement surplus/gap analysis based on your forecast and existing supply data.

> [!WARNING]
> This is a high-level tool. For granular supply planning (shipment scheduling, shelf-life tracking), you should import this forecast into the **Supply Planning** module.

#### Formulas & Logic
QAT uses the following logic to estimate procurement needs:

1. **Projected Stock** = (Starting Stock + Existing Shipments) - Forecasted Quantity
2. **Desired Stock** = (Forecasted Quantity × Desired Months of Stock) / Months in Period
3. **Procurement Gap** = Projected Stock - Desired Stock

#### Cost Estimation
If a gap exists, QAT estimates costs based on your defined unit prices and freight percentages:
- **Product Cost** = Procurement Gap × Unit Price
- **Freight Cost** = Product Cost × Freight %
- **Total Cost** = Product Cost + Freight Cost

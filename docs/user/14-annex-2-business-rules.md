---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 14
---

# Annex 2. Business Rules

This annex documents the core mathematical formulas and logical conditions that drive QAT's calculations, supply planning suggestions, and data quality checks.

## Annex 2.A. Supply Planning Module.

### Annex 2.A.1. Inventory Basics.
- **Opening Balance**: `Opening Balance(t) = Ending Balance(t-1)`. (First month defaults to 0).
- **Expired Stock**: `Sum(Ending Balance of batches expiring in month t)`.
- **Total Shipments**: `Sum(Quantities where Receive Date is in month t)`.
- **Projected Inventory**: `Opening Balance + Total Shipments ± Total Adjustments - Final Consumption - Expired Stock`.

### Annex 2.A.2. Final Stock & Consumption.
- **Final Stock**: Sum of stock reported across all regions.
- **Total Adjustments**: Sum of manual adjustments from regions that did *not* report a stock count.
- **Final Consumption**:
  - *If all regions reported actuals:* `Sum(Actual Consumption)`.
  - *If any region is missing actuals:* `MAX(Sum(Actual Consumption), Sum(Forecasted Consumption))`.

### Annex 2.A.3. Supply Plan Parameters.
- **AMC (Average Monthly Consumption)**: `[Sum(Full Demand in Past Window) + Sum(Full Demand in Future Window)] / Total Months`.
- **Min MOS**: `MAX(Program Min MOS, Realm Min MOS Guardrail)`.
- **Max MOS**: `MIN(MAX(Min MOS + Reorder Interval, Realm Min Max Guardrail), Realm Max Max Guardrail)`.
- **Min Stock**: `AMC × Min MOS`.
- **Max Stock**: `AMC × Max MOS`.
- **Ending Balance**: 
  - If all regions reported stock: `Final Stock`.
  - Otherwise: `Projected Inventory + Auto Adjustment`.

### Annex 2.A.4. Shipment Suggestions (Plan by MOS).
QAT suggests a shipment when `MOS` for the current month and the following two months are all less than `Min MOS`.
- **Suggested Quantity**: `Max Stock - Ending Balance + Unmet Demand`.

---

## Annex 2.B. Batch Allocation Logic (FEFO/LEFO).

### Annex 2.B.1. FEFO (First Expiry, First Out).
Used for consuming stock based on the earliest expiry dates.
1. Sort all batches by **Expiry Date** (asc).
2. Calculate **Unallocated Consumption** (Final Consumption - Adjustments).
3. Loop through batches:
   - `Batch Ending Balance = MAX(0, Batch Temp Balance - Unallocated Consumption)`.
   - Subtract consumed amount from the total `Unallocated Consumption` pool.

### Annex 2.B.2. LEFO (Last Expiry, First Out).
Used primarily for distributing negative adjustments (losses).
1. Sort batches by **Expiry Date** (desc).
2. Deduct quantities from the newest batches first until the adjustment is fully allocated.

---

## Annex 2.C. QAT Problem List (QPL) Logic.

### Annex 2.C.1. Data Quality.
| Problem | Suggestion | Logic |
| :--- | :--- | :--- |
| **Missing Actuals** | Enter actual consumption. | Flagged if actuals are missing for 3+ consecutive months. |
| **Missing Inventory** | Enter stock count. | Flagged if no stock count is reported for 3+ consecutive months. |
| **Past Shipments** | Update receive date. | Flagged if a shipment's expected date is >14 days in the past. |

### Annex 2.C.2. Supply Planning.
| Problem | Suggestion | Logic |
| :--- | :--- | :--- |
| **Missing Forecast** | Extend forecast period. | Flagged if any of the next 18 months lack a forecast. |
| **Non-Dynamic Forecast** | Review seasonality. | Flagged (for ARV/Malaria) if 4+ consecutive months have identical values. |
| **Min/Max Violation** | Re-evaluate supply plan. | Flagged if MOS falls outside Min/Max parameters within 18 months. |

---

## Annex 2.D. Forecasting Methodology.

### Annex 2.D.1. Statistical Adjustments.
- **Stockout Rate**: `(Stockout Days / Days in Month) × 100`.
- **Adjusted Consumption**: `(Actual Consumption / Reporting Rate) / (1 - Stockout Rate)`.
- **Interpolation**: `y = y0 + (x - x0) * (y1 - y0) / (x1 - x0)`. (Straight-line between two known points).

### Annex 2.D.2. Error Metrics.
- **WAPE**: `Sum(ABS(Actual - Forecast)) / Sum(Actual)`. (Calculated over a 6-month window).
- **RMSE**: `SQRT(Sum((Forecast - Actual)²) / N)`.
- **R²**: `1 - (SSR / SST)`. Measures how closely the model tracks historical patterns (0 to 1).

---

## Annex 2.E. Version Conflict Resolution.
When uploading a local version, QAT compares:
- **Server (Old)**: The version originally downloaded.
- **Local**: Your edited version.
- **Server (Latest)**: Current version on the server (might have been updated by others).

### Annex 2.E.1. Conflict States.
- **Green (Local Latest)**: Data exists only in the local version or was modified locally only.
- **Blue (Server Latest)**: Data was modified only on the server since you downloaded it.
- **Yellow (Conflict)**: The *same* record was modified in both the local and server versions. You must choose which to keep.
- **Un-highlighted**: No changes detected across versions.

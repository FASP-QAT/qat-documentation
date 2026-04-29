---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 14
---

# Section 11. Annex 2: Business Rules

## 11.A. Introduction

This document outlines the key formulas and business rules that underpin the Quantification Analytics Tool (QAT) application.

## 11.B. Supply Planning Module: Supply Planning

### 11.B.1. Opening Balance:
Opening balance for a month is the same as that of the Ending balance of last month and if that is the first month then the opening balance is 0.
#### Formula:
- Opening balance of first month = 0
- Opening balance for current month = Ending balance of previous month

### 11.B.2. Expired Stock:
Expired stock is calculated as the sum of the Ending balance of all the batches of the previous month that are available and have the expiry date same as that of the current month.
#### Formula:
- Expired Stock = Sum of Ending balance of batches that are expiring this month

### 11.B.3. Total Shipment:
Total shipment is calculated as the sum of all the shipments with receive date (if present or expected delivery date) is the same as that of current month and the shipment status is not cancelled and if that particular shipment needs to be accounted for that is to be considered in the Ending balance.
#### Formula:
- Total shipments = Sum of all the shipments whose receive date or expected delivery date is in the same month

### 11.B.4. Final Stock and Adjustment:
Final stock is calculated as the sum of stock of all the regions and total adjustment is calculated as sum of the adjustments of all the regions based on certain conditions.
- a. If the region has reported both the actual stock and the adjustment then we only consider the actual count while doing the sum and the adjustment is ignored for that region even if someone has entered the data for adjustment.
- b. If the region has only reported the adjustment then that adjustment is considered while doing the sum.

*Example:* If Region A has reported both the stock count and the manual adjustment, we only consider the stock count and ignore the adjustment. If Region B has reported only the adjustments, we take the sum of all the adjustments for that region. Then we sum up the counts for both the regions as final stock and total adjustment.
#### Formula:
- Final Stock = Sum of stock for all the regions
- Total Adjustments = Sum of adjustments of all the regions for which there is no stock qty available.

### 11.B.5. Consumption:
Consumption is calculated as the sum of consumption of all the regions based on some conditions.
- If all the regions have not reported the actual consumption, QAT takes the max of sum of forecasted consumption and sum of actual consumption.
- If all the regions have reported the actual consumption, we take the sum as the final consumption.
#### Formula:
- Final consumption (If all the regions have not reported actual consumption) = MAX (Sum of actual consumption, Sum of forecasted consumption)
- Final consumption (If all the regions have reported actual consumption) = Sum of actual consumption for all regions

### 11.B.6. Projected inventory:
Projected inventory is calculated as sum of opening balance, total shipments, total adjustments and deduction of total final consumption and expired stock.
#### Formula:
- Projected inventory = Opening balance + Total shipments +/- Total adjustments - Final consumption - Expired stock

### 11.B.7. Calculate Automatic Adjustment:
Automatic adjustments is calculated based on three conditions:
- a. If all the regions have reported the actual stock count and projected inventory is not equal to final inventory.
- b. If some of the regions have reported the actual stock count and final inventory is greater than sum of projected inventory and total adjustment.
- c. If any of the regions have reported the actual stock count and projected inventory is less than 0.

If any of the conditions are satisfied then auto adjustment is calculated as difference between final inventory and projected inventory otherwise it is considered as 0.
#### Formula:
- Automatic adjustments = Final stock - Projected inventory

### 11.B.8. AMC:
Average monthly consumption (AMC) is calculated as the ratio of sum of full demand of months in past and the full demand of months in future to the total number of months for all the non-zero final consumptions and including the current month in months in future. Both months in past and months in future are based on the mapping of program planning units.
#### Formula:
- AMC = [Sum (Full Demand in past months) + Sum (Full Demand in future months)] / Total number of months

### 11.B.9. Min MOS:
Min MOS is calculated as Max of Min MOS and Min MOS guardrail. Min MOS is based on the mapping of the program planning unit and Min MOS guardrail is based on the realm.
#### Rules for Decimal places:
- Display 0 decimal places if 3+ digits (>100, e.g. 10,000)
- Display 1 decimal places if 2 digits (e.g. 99.8)
- Display 2 decimal places if 1 digit (e.g. 1.63)
- Display 3 decimal places if under 0 (e.g 0.124)
- *Note: AMC and MOS always show decimals; other supply plan fields only show decimals if rounding is toggled on.*
#### Formula:
- Min MOS = Max of (Min MOS, Min MOS guardrail)

### 11.B.10. Max MOS:
Max MOS is calculated as Min of Max of sum of Min MOS and reorder frequency and the Min Max guardrail and Max Max guardrail.
#### Formula:
- Max MOS = Min(Max(Min MOS + Reorder frequency, Min Max guardrail), Max Max guardrail)

### 11.B.11. Min Stock:
#### Formula:
- Min Stock = AMC * Min MOS

### 11.B.12. Max Stock:
#### Formula:
- Max Stock = AMC * Max MOS

### 11.B.13. Max Quantity:
#### Formula:
- Max Qty = Min Qty + (Reorder Frequency * AMC)

### 11.B.14. Ending Balance:
Ending balance is calculated based on certain conditions:
- a. If all the regions have reported the actual stock count:
  - Ending balance = Final Stock
- b. If some of the regions have reported the actual stock count and if the final stock is greater than the sum of projected inventory and auto adjustment:
  - Ending balance = Final Stock
- c. Otherwise:
  - Ending balance = Projected inventory + Auto adjustment

### 11.B.15. Unmet demand:
- When actual consumption is available = (Actual consumption * Days stocked out) / (Days in Month – Days Stocked out)
- When no actual consumption is available = Projected Inventory (if < 0)

### 11.B.16. MOS:
#### Formula:
- MOS = Ending balance / AMC

### 11.B.17. When to suggest shipments (Plan by MOS):
QAT suggests the shipment for a month when MOS for the month and following two months is less than that of the Min MOS and if the month is greater than the current month.
#### Formula:
- Suggest shipment if MOS for month and following two months < Min MOS

### 11.B.18. Suggested shipment quantity (Plan by MOS):
- If MOS for current month and following two months is less than Min MOS:
  - Suggested Order Qty = Max Stock - Ending Balance + Unmet Demand
- If MOS is '0' and AMC is > 0 and the following two months are less than Min MOS:
  - Suggested Order Qty = Max Stock - Ending Balance + Unmet Demand
- If MOS is '0' and AMC is > 0 and one of the following two months is greater than Min MOS:
  - Suggested Order Qty = Min Stock - Ending Balance + Unmet Demand

### 11.B.19. When to suggest shipments (Plan by Qty):
QAT suggests the shipment for a month when Ending Balance for the month + Distribution lead time and following two months is less than that of the Min Qty or when Ending Balance for month is 0 and AMC is greater than 0.
#### Formula:
- Suggest shipment if Ending Balance for month + Distribution Lead Time and following two months < Min Qty, or if Ending Balance = 0 and AMC != 0.

### 11.B.20. Suggested shipment quantity (Plan by Qty):
- Suggested Order Qty calculations use Max Qty or Min Qty minus Ending Balance plus Unmet Demand based on similar logic as Plan by MOS, incorporating the Distribution Lead Time.

### 11.B.21. Batch calculations:

#### a. FEFO Calculations:
1. Sort batches by Expiry Date in ascending order.
2. Calculate Unallocated FEFO:
   - If sum of adjustments < 0: Unallocated FEFO = Final consumption - (Manual + Auto Adjustment)
   - If sum of adjustments >= 0: Unallocated FEFO = Final consumption
3. Loop through batches to calculate Batch Ending Balance using `Temp Ending Balance - Unallocated FEFO`.

#### b. LEFO Calculations:
Used when FEFO calculations do not cover the negative adjustments. Sort batches by Expiry Date in descending order.

## 11.C. Supply Planning Module: QAT Problem List

### 11.C.1. Data Quality
1. **Missing recent actual consumption inputs (within the last 3 months):** Checked for current month and past three months.
2. **Missing recent inventory inputs (within the last 3 months):** Checked for current month and past three months.
3. **Missing recent actual consumption inputs for months in gaps:** Flags if t and t-2 have data but t-1 is missing.

### 11.C.2. Procurement Schedule
1. **Shipments have receive dates more than X days in the past:** Flags if expected delivery has passed buffer days (e.g. 14 days).
2. **Shipment have not been submitted for over X days since target date:** Flags if submission date passed buffer days (e.g. 3 days).

### 11.C.3. Supply Planning
1. **No Forecasted consumption 18 months into the future.**
2. **Dynamic forecasting not used for ARV/Malaria/VMMC:** Flags if any 4 consecutive months have identical quantities.
3. **Supply Plan does not follow minimum/maximum parameters.**
4. **Stock outs in the next 1-6 months / 7-18 months.**

## 11.D. Supply Planning Module: Other QAT Reports

### 11.D.1. WAPE (Weighted Absolute Percentage Error):
WAPE = [$\sum$ |actual - forecast| / $\sum$ actual] $\times$ 100

### 11.D.2. Shipment Cost:
Shipment Total Cost = (Product Cost + Freight Cost) $\times$ Conversion Rate to USD

### 11.D.3. Cost of Inventory:
Cost of Inventory = Ending Balance $\times$ Catalog Price

### 11.D.4. Average Stock:
Average Stock = [$\sum$ Ending Balance for n months] / n

### 11.D.5. Inventory Turns:
- **Planned Inventory Turns:** Consumption (12 MOS) / Average MOS.
- **Actual Inventory Turns:** Total Consumption (last 12 months) / Average Stock on Hand.

## 11.E. Forecasting Module: Tree Forecasts

### 11.E.1. Aggregation Node:
Value = $\sum$ Child Node Values

### 11.E.2. Number/Percentage Nodes (Modeling/Transfers):
- **Linear Number:** $\pm$ fixed monthly quantity.
- **Linear Percentage:** $\pm$ percentage of starting month value.
- **Exponential Percentage:** $\pm$ percentage of preceding month value.
- **Linear (% point):** $\pm$ static percentage points.

## 11.F. Forecasting Module: Consumption Forecast

### 11.F.1. Interpolate:
$y = y_0 + (x - x_0) \times (y_1 - y_0) / (x_1 - x_0)$

### 11.F.2. Stockout Rate:
Stockout Rate = [Stockout Days / # of Days in Month] $\times$ 100

### 11.F.3. Adjusted Consumption:
Adjusted Consumption = [Actual Consumption / (Reporting Rate $\times$ (1 - Stockout Rate))] $\times$ 100

### 11.F.4. Forecast Error (%):
- WAPE, RMSE, MAPE, MSE, and $R^2$.

## 11.G. Supply Planning and Forecasting Module: Uploading Versions

QAT identifies conflicts by comparing:
- Server vOld (originally downloaded)
- Local vOld (edited version)
- Server vLatest (current server version)

### 11.G.1. Conflict Conditions:
- **Condition 1:** Newly added in local version (Green).
- **Condition 2:** Newly added in server version (Blue).
- **Condition 3a:** Local and latest server are the same.
- **Condition 3b:** Changes only in local version (Green).
- **Condition 3c:** Changes only in latest server version (Blue).
- **Condition 3d/4:** Changes in both versions (Yellow Conflict).

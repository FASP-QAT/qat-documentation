---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 14
---

# Section 11. Annex 2: Business Rules

## A. Introduction

This document outlines the key formulas and business rules that underpin the Quantification Analytics Tool (QAT) application.

## B. Supply Planning Module: Supply Planning

1. **Opening Balance:**
   Opening balance for a month is the same as that of the Ending balance of last month and if that is the first month then the opening balance is 0.
   
   **Formula:**
   *Opening balance of first month = 0*
   *Opening balance for current month = Ending balance of previous month*

2. **Expired Stock:**
   Expired stock is calculated as the sum of the Ending balance of all the batches of the previous month that are available and have the expiry date same as that of the current month.
   
   **Formula:**
   *Expired Stock = Sum of Ending balance of batches that are expiring this month*

3. **Total Shipment:**
   Total shipment is calculated as the sum of all the shipments with receive date (if present or expected delivery date) is the same as that of current month and the shipment status is not cancelled and if that particular shipment needs to be accounted for that is to be considered in the Ending balance.
   
   **Formula:**
   *Total shipments = Sum of all the shipments whose receive date or expected delivery date is in the same month*

4. **Final Stock and Adjustment:**
   Final stock is calculated as the sum of stock of all the regions and total adjustment is calculated as sum of the adjustments of all the regions based on certain conditions.
   a. If the region has reported both the actual stock and the adjustment then we only consider the actual count while doing the sum and the adjustment is ignored for that region even if someone has entered the data for adjustment.
   b. If the region has only reported the adjustment then that adjustment is considered while doing the sum.
   
   For example, if Region A has reported both the stock count and the manual adjustment so in that case we only consider the stock count and ignore the adjustment. And If Region B has reported only the adjustments then we take the sum of all the adjustments for that region. And then we sum up the counts for both the regions as final stock and total adjustment.
   
   **Formula:**
   *Final Stock = Sum of stock for all the regions*
   *Total Adjustments = Sum of adjustments of all the regions for which there is no stock qty available.*

5. **Consumption:**
   Consumption is calculated as the sum of consumption of all the regions based on some conditions.
   * If all the regions have not reported the actual consumption, QAT takes the max of sum of forecasted consumption and sum of actual consumption.
   * If all the regions have reported the actual consumption, we take the sum as the final consumption.
   
   **Formula:**
   *Final consumption (If all the regions have not reported the actual consumption) = MAX (Sum of actual consumption for all the regions, Sum of forecasted consumption for all the regions)*
   *Final consumption (If all the regions have reported the actual consumption) = Sum of actual consumption for all the regions*

6. **Projected inventory:**
   Projected inventory is calculated as sum of opening balance, total shipments, total adjustments and deduction of total final consumption and expired stock.
   
   **Formula:**
   *Projected inventory = Opening balance + Total shipments +/- Total adjustments - Final consumption - Expired stock*

7. **Calculate Automatic Adjustment:**
   Automatic adjustments is calculated based on three conditions:
   a. If all the regions have reported the actual stock count and projected inventory is not equal to final inventory
   b. If some of the regions have reported the actual stock count and final inventory is greater than sum of projected inventory and total adjustment
   c. If any of the regions have reported the actual stock count and projected inventory is less than 0
   
   And based on the above conditions if any of the conditions is satisfied then auto adjustment is calculated as difference between final inventory and projected inventory otherwise it is considered as 0.
   
   **Formula:**
   *Automatic adjustments = Final stock - Projected inventory*

8. **AMC:**
   Average monthly consumption (AMC) is calculated as the ratio of sum of full demand of months in past and the full demand of months in future to the total number of months for all the non-zero final consumptions and including the current month in months in future. If consumption is actual Full Demand will be equal to the sum of the unmet demand in addition to the actual consumption. If the consumption is forecasted the full demand is equal to the forecasted consumption. Both months in past and months in future are based on the mapping of program planning units.
   
   **Formula:**
   *AMC = Sum (Full Demand in No. of months in past) + Sum (Full Demand in No. of months in future)/Total number of months*

9. **Min MOS:**
   Min MOS is calculated as Max of Min MOS and Min MOS guardrail. Min MOS is based on the mapping of the program planning unit and Min MOS guardrail is based on the realm.
   
   Rules for Decimal places are as follows:
   * Display 0 decimal places if 3+ digits (>100, e.g. 10,000)
   * Display 1 decimal places if 2 digits (e.g. 99.8)
   * Display 2 decimal places if 1 digit (e.g. 1.63)
   * Display 3 decimal places if under 0 (e.g 0.124)
   
   *Note: AMC and MOS always show decimals, other supply plan fields will only show decimals if the rounding toggle is on.*
   
   **Formula:**
   *Min MOS = Max of (Min MOS, Min MOS guardrail)*

10. **Max MOS:**
    Max MOS is calculated as Min of Max of sum of Min MOS and reorder frequency and the Min Max guardrail and Max Max guardrail. Reorder frequency is based on the mapping of the program planning unit and Min Max guardrail and Max Max guardrail are based on the realm.
    
    **Formula:**
    *Max MOS = Min(Max(Min MOS + Reorder frequency, Min Max guardrail),Max Max guardrail)*

11. **Min Stock:**
    Min stock is calculated by multiplying the AMC and Min MOS.
    
    **Formula:**
    *Min Stock = AMC * Min MOS*

12. **Max Stock:**
    Max stock is calculated by multiplying the AMC and Max MOS.
    
    **Formula:**
    *Max Stock = AMC * Max MOS*

13. **Max Quantity:**
    Max Quantity is calculated as sum of Min Qty and multiplication of reorder frequency and AMC.
    
    **Formula:**
    *Max Qty = Min Qty + (Reorder Frequency * AMC)*

14. **Ending Balance:**
    Ending balance is calculated based on certain conditions:
    a. If all the regions have reported the actual stock count, then the Ending balance is equal to the final stock.
      
      **Formula:**
      *Ending balance = Final Stock*
    b. If some of the regions have reported the actual stock count and if the final stock is greater than the sum of projected inventory and auto adjustment, then the Ending balance is equal to the final stock.
      
      **Formula:**
      *Ending balance = Final Stock*
    c. Otherwise Ending balance is calculated as the sum of projected inventory and auto adjustment.
      
      **Formula:**
      *Ending balance = Projected inventory + Auto adjustment*

15. **Unmet demand:**
    * When actual consumption is available = *(Actual consumption * Days stocked out) / (Days in Month – Days Stocked out)*
    * When no actual consumption is available = *Projected Inventory\* (if Projected Inventory is &lt; 0)*

16. **MOS:**
    MOS is calculated as the ratio of Ending balance to that of AMC.
    
    **Formula:**
    *MOS = Ending balance / AMC*

17. **When to suggest shipments (Plan by MOS):**
    QAT suggests the shipment for a month when MOS for the month and following two months is less than that of the Min MOS and if the month is greater than the current month.
    
    **Formula:**
    *When to suggest shipments = If MOS for month and following two months &lt; Min MOS*

18. **Suggested shipment quantity (Plan by MOS):**
    Suggested shipment quantity is calculated as the difference between Max stock and Ending balance.
    
    **Formula:**
    *Suggested shipment quantity = Max stock - Ending balance*
    * If MOS for current month and following two months is less than Min MOS:
      *Suggested Order Qty = (Max Stock - Ending Balance + Unmet Demand)*
    * If MOS is '0' and AMC is greater than &gt; 0 and the following two months are less than Min MOS:
      *Suggested Order Qty = (Max Stock - Ending Balance + Unmet Demand)*
    * If MOS is '0' and AMC is greater than &gt; 0 and one of the following two months is greater than Min MOS:
      *Suggested Order Qty = (Min Stock - Ending Balance + Unmet Demand)*

19. **When to suggest shipments (Plan by Qty):**
    QAT suggests the shipment for a month when Ending Balance for the month + Distribution lead time and following two months is less than that of the Min Qty or when Ending Balance for month is 0 and AMC is greater than 0 and if the month is greater than the current month.
    
    **Formula:**
    *When to suggest shipments = If Ending Balance for month + X (Distribution Lead Time) and following two months &lt; Min Qty or*
    *When to suggest shipments = If Ending Balance for month = 0 and AMC is not equal to 0*

20. **Suggested shipment quantity (Plan by Qty):**
    Suggested shipment quantity is calculated as the difference between Max stock/Min Stock and Sum of Ending balance and Unmet Demand.
    
    **Formula:**
    * If Ending Balance for current month + X months (Distribution Lead Time) and following two months is less than Min Qty:
      *Suggested Order Qty = (Max Qty for current month + X months (Distribution Lead Time) - Ending Balance + Unmet Demand)*
    * If Ending Balance is '0' and AMC is greater than &gt; 0 for current month + X months (Distribution Lead Time) and the following two months are less than Min Qty:
      *Suggested Order Qty = (Max Qty for current month + X months (Distribution Lead Time) - Ending Balance + Unmet Demand)*
    * If Ending is '0' and AMC is greater than &gt; 0 for current month + X months (Distribution Lead Time) and one of the following two months is greater than Min MOS:
      *Suggested Order Qty = (Min Qty - Ending Balance + Unmet Demand)*

21. **Batch calculations:**
    Below are the steps for all the batch allocations:
    
    a. **FEFO Calculations:**
      We first calculate the unallocated FEFO that is we calculate the total remaining quantity of the final consumption and total adjustment which will be used in case of FEFO calculations and for which we do not have the batch information. So, the unallocated FEFO is calculated based on two different conditions:
      i. If the sum of total adjustment and auto adjustment is less than 0 then unallocated FEFO is calculated as difference between final consumption and the sum of manual adjustment and automatic adjustment.
        
        **Formula:**
        *Unallocated FEFO = Final consumption - (Manual adjustment + Auto adjustment)*
      ii. If the sum of adjustment and national adjustment is greater than 0 then unallocated FEFO is the same as that of final consumption.
        
        **Formula:**
        *Unallocated FEFO = Final consumption*
      
      We sort all the batches based on the expiry date in ascending order that is sort the batches in the order which is expiring first.
      
      We then loop across all the batches for doing the FEFO calculations:
      
      We calculate the opening balance for a batch which is the same as that of the Ending balance for the same batch in the previous month. And if the batch is created then the opening balance is considered as 0.
      
      **Formula:**
      *Opening balance of newly created batch = 0*
      *Opening balance of remaining batches = Ending balance*
      
      We then calculate the Expired stock quantity which is equal to the Ending balance of the same batch from the previous month and is only calculated when the expiry date of the batch is the same as that of the current month otherwise it is 0.
      
      **Formula:**
      *Expired Stock (If expiry date is same as that of current date) = Ending Balance*
      *Expired Stock (Otherwise) = 0*
      
      We then calculate the temp Ending Balance. Temp Ending Balance is calculated as sum of opening balance, total shipments, total adjustments and deduction of total final consumption and expired stock.
      
      **Formula:**
      *Temp Ending Balance = Opening Balance + Shipment Qty + Adjustment Qty - Consumption Qty - Expired Stock*
      
      We then calculate the Ending balance amount which is calculated based on two different conditions:
      i. If temp Ending Balance is greater than or equal to unallocated FEFO then Ending balance is equal to the difference between the temp Ending balance and unallocated FEFO also in this case we make the unallocated FEFO as 0 since we have allocated all the quantity to the batch.
        
        **Formula:**
        *Ending balance = Temp Ending Balance - unallocated FEFO*
        *Unallocated FEFO = 0*
      ii. If temp Ending Balance is less than unallocated FEFO then Ending balance is equal to 0 since we will fully consume this batch. Also we then deduct the temp CB from the unallocated FEFO since we have consumed that much of the quantity.
        
        **Formula:**
        *Ending balance = 0*
        *Unallocated FEFO = Unallocated FEFO - Temp Ending balance*
      
      We repeat this process for every batch in the order of their expiry date.

    b. **LEFO Calculations:**
      We first calculate the unallocated LEFO that is we calculate the total remaining quantity of the final consumption and total adjustment which will be used in case of LEFO calculations and for which we do not have the batch information. So, the unallocated LEFO is calculated based on two different conditions:
      i. If the sum of manual adjustment and automatic adjustment is greater than 0 then unallocated LEFO is calculated as difference between 0 and the sum of manual adjustment and automatic adjustment.
        
        **Formula:**
        *Unallocated LEFO = 0 - (Manual adjustment + Automatic adjustment)*
      ii. If the sum of manual adjustment and auto adjustment is less than 0 then unallocated LEFO is 0.
        
        **Formula:**
        *Unallocated LEFO = 0*
      iii. If unallocated LEFO is not equal 0 then we continue otherwise we break.
      
      We sort all the batches based on the expiry date in descending order that is sort the batches in the order which is expiring first.
      
      We then loop across all the batches for doing the LEFO calculations:
      
      We then calculate the temp Ending Balance. Temp Ending Balance is the same as that of Ending the balance of batch after FEFO calculations.
      
      **Formula:**
      *Temp Ending Balance = Ending balance after FEFO calculations*
      
      We then calculate the Ending balance amount which is calculated based on two different conditions:
      i. If temp Ending Balance is greater than or equal to unallocated LEFO then Ending balance is equal to the difference between the temp Ending balance and unallocated LEFO also in this case we make the unallocated LEFO as 0 since we have allocated all the quantity to the batch.
        
        **Formula:**
        *Ending balance = Temp Ending Balance - unallocated LEFO*
        *Unallocated LEFO = 0*
      ii. If temp Ending Balance is less than unallocated LEFO then Ending balance is equal to 0 since we will fully consume this batch. Also we then deduct the temp CB from the unallocated LEFO since we have consumed that much of the quantity.
        
        **Formula:**
        *Ending balance = 0*
        *Unallocated LEFO = Unallocated LEFO - Temp Ending balance*
      
      We repeat this same process for the rest of batches till unallocated LEFO is not equal to 0.

## C. Supply Planning Module: QAT Problem List

### C1. Data Quality

1. **Missing recent actual consumption inputs (within the last &lt;%X %&gt; months):**
   a. **Suggestion:** *Please provide Actual consumption in &lt;%REGION %&gt; region for the month of &lt;%DT %&gt;.*
   b. **Logic:** QPL will check actual consumption for the past three months and current month. If actual consumption for all of the past three month and current month is missing, then the problem is flagged.

2. **Missing recent inventory inputs (within the last &lt;%X%&gt; months):**
   a. **Suggestion:** *Please provide Stock count in &lt;%REGION %&gt; region for the month of &lt;%DT%&gt;. *
   b. **Logic:** QPL will check stock for the past three months and current month. If stock for all of the past three month and current month is missing, then the problem is flagged.

3. **Missing recent actual consumption inputs for months in gaps:**
   a. **Suggestion:** *Please provide Actual consumption in &lt;%REGION %&gt; region for the month of &lt;%DT %&gt;.*
   b. **Logic:**
     i. QPL will check actual consumption inputs for the current month (consider as t) and for the month which will be current month minus two months (consider as t-2) i.e. t and t-2 if both the months have actual consumption and current month minus one month (consider as t-1) i.e. t-1 don't have actual consumption. Then in this case the problem is flagged.
     ii. QPL will check actual consumption inputs for the current month minus one month (consider as t-1) and for the month which will be current month minus three months (consider as t-3) i.e. t-1 and t-3 if both the months have actual consumption and current month minus two month (consider as t-2) i.e. t-2 don't have actual consumption. Then in this case the problem is flagged.

### C2. Procurement Schedule

1. **Shipments have receive dates more than &lt;%X%&gt; days in the past:**
   a. **Suggestion:** *Please check to make sure shipment &lt;%SHIPMENT_ID %&gt; was received, and update either the receive date or the shipment status.*
   b. **Logic:** QPL will check the receive date for all the shipments and if the receive date is past and has also crossed the buffer time period then the problem is flagged. For example, buffer time for this problem is 14 days so if the receive date of the shipment plus the buffer days are past then the problem is flagged for each shipment.

2. **Shipment have not been submitted for over &lt;%X%&gt; days since target date:**
   a. **Suggestion:** *Based on lead times, shipment &lt;%SHIPMENT_ID%&gt; should have been submitted by now. Please double-check to ensure that the status or receive date is accurate.*
   b. **Logic:** QPL will check the submitted date for all the shipments and if the submitted date is past and has also crossed the buffer time period then the problem is flagged. For example, the buffer time for this problem is 3 days. Hence if the submitted date of the shipment plus the buffer days have already passed, then the problem is flagged for each shipment.

### C3. Supply Planning

1. **No Forecasted consumption &lt;%X %&gt; months into the future:**
   a. **Suggestion:** *Please provide Forecasted consumption in &lt;%REGION %&gt; region for the month of &lt;%DT %&gt;.*
   b. **Logic:** QPL will check forecasted consumption for future 18 months. If forecasted consumption for any one of the month is missing then the problem is flagged. The problem gets into in-compliance state if and only if all the 18 months have forecasted consumption.

2. **Dynamic forecasting is not used for commodity groups ARV:**
   a. **Suggestion:** *Please check consumption data in region &lt;%REGION%&gt; during period &lt;%DT%&gt; as we encourage forecasting with dynamic monthly values, showing that factors such as program scale or seasonality have been taken into account.*
   b. **Logic:** QPL will check whether the planning unit of the program falls in the commodity group ARV then QPL will check forecasted consumption for future 18 months if any four consecutive months within the future 18 month span have the same forecasted consumption quantity then the problem is flagged.

3. **Dynamic forecasting is not used for commodity groups MALARIA:**
   a. **Suggestion:** *Please check consumption data in region &lt;%REGION %&gt; during period &lt;%DT%&gt; as we encourage forecasting with dynamic monthly values, showing that factors such as program scale or seasonality have been taken into account.*
   b. **Logic:** QPL will check whether the planning unit of the program falls in the commodity group MALARIA then QPL check forecasted consumption for future 18 months if any four consecutive months within the future 18 month span have the same forecasted consumption quantity then the problem is flagged.

4. **Dynamic forecasting is not used for commodity groups VMMC:**
   a. **Suggestion:** *Please check consumption data in region &lt;%REGION%&gt; during period &lt;%DT%&gt; as we encourage forecasting with dynamic monthly values, showing that factors such as program scale or seasonality have been taken into account.*
   b. **Logic:** QPL will check whether the planning unit of the program falls in the commodity group VMMC then QPL will check forecasted consumption for future 18 months if any four consecutive months within the future 18 month span have the same forecasted consumption quantity then the problem is flagged.

5. **Supply Plan does not follow minimum/maximum parameters:**
   a. **Suggestion:** *Re-evaluate supply plan to meet the Min/Max parameters. If overstocked, consider delaying/canceling shipment(s), review future expiries, or donating stock. If understocked, consider planning & ordering, expediting, or increasing shipment quantity.*
   b. **Logic:** QPL will check to see if each planning unit is overstocked or understocked at any point during the next 18 months according to the minimum and reorder parameters defined at individual program-levels. QAT will then count the number of months the planning unit is overstocked and understocked and subdividing it in two different time windows: those months within lead time (1-6 months) and those within the planning window (7-18 months). The QPL will also denote the number of shipments being received in the next 1-6 months and the next 7-18 months.

6. **Stock outs in the next 1-6 months/Stock outs in the next 7-18 months:**
   a. **Suggestion:** *Consider planning & ordering, expediting, or increasing shipment quantity. Communicate the potential stockout(s) with relevant stakeholders.*
   b. **Logic:** QPL will check to see if each planning unit is stocked out (zero MOS) at any point during the next 18 months. QAT will then count the number of months the planning unit is stocked out and subdividing it in two different time windows: those months within lead time (1-6 months) and those within the planning window (7-18 months). The QPL will also denote the number of shipments being received in the next 1-6 months and the next 7-18 months.

### C4. Other (Manual Problems)

1. These are specific questions or clarifications manually entered by the supply plan reviewer that are not automatically flagged by QAT. The problem description, suggestion, and the criticality are determined by the supply plan reviewer. QAT does not conduct any specific logic for this problem as it must be manually added, updated, and resolved by the supply plan reviewer.

## D. Supply Planning Module: Other QAT Reports

### 1. WAPE (Weighted Absolute Percentage Error):
WAPE (Weighted Absolute Percentage Error) is being used to calculate forecast error. This calculation is used in forecast error reports which helps supply plan owners to review forecast error in order to monitor the strength for their forecast. The WAPE formula is using the previous 3-12 months of data depending on the selection in the ‘Time Window’ dropdown.

WAPE is Dividing the sum of absolute differences by the sum of actual values for a particular time window. Time window can be 3,6,9 or 12.

**Formula:**
*WAPE = ((Abs(actual consumption month 1 - forecasted consumption month 1) + Abs(actual consumption month 2 - forecasted consumption month 2) + Abs(actual consumption month 3 - forecasted consumption month 3) + Abs(actual consumption month 4 - forecasted consumption month 4) + Abs(actual consumption month 5 - forecasted consumption month 5) + Abs(actual consumption month 6 - forecasted consumption month 6)) / (Sum of all actual consumption in the last 6 months))*
*Note: Time window considered as 6 months*

### 2. Shipment Cost:
It is the total cost required to received order at warehouse.

**Formula:**
*Shipment Total Cost = (Product Cost + Freight Cost) * conversion rate to USD*

### 3. Cost of Inventory:
This calculation provide us cost of available product.

**Formula:**
*Cost of Inventory = ending balance * catalog price*

### 4. Average Stock:

**Formula:**
*Average stock = sum (ending balance for ‘n’ months) / n*
*Note: “n” is number of months*

### 5. Inventory Turns:
It is the ratio of consumption versus average stock. User can select to view the table in two ways: by country or by PU category. Can be multi-select for countries or PU category, highest level calculation (aggregation/average from each PU under program or from each program that contains that PU category). Then will calculate the turns for each planning unit under that program.

#### Planned Inventory Turns (IT)

**At PU level:**
The calculation is done by determining the possible months of stock for each month over 12 months if the inventory rules worked perfectly considering the Planning Unit’s MIN and Reorder Interval.

Consumption = 1 MOS/month ; Total consumption over period = 12 MOS. Average MOS is calculated based on the MIN and the Reorder Interval.

For example:
1. If the MIN is 3 and reorder is 9 and the first month is a re-order month then:
   a. The average MOS over 12 months would be 7.25
   b. The Planned inventory turn is the Total consumption 12 divided by the calculated Average months of stock over 12 month. Thus 12 / 7.25 = 1.7

| Reorder interval | Month 1 | Month 2 | Month 3 | Month 4 | Month 5 | Month 6 | Month 7 | Month 8 | Month 9 | Month 10 | Month 11 | Month 12 | Total months |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **12** | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **78** |
| **11** | 1 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **67** |
| **10** | 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **58** |
| **9** | 3 | 2 | 1 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **51** |
| **8** | 4 | 3 | 2 | 1 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **46** |
| **7** | 5 | 4 | 3 | 2 | 1 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **43** |
| **6** | 6 | 5 | 4 | 3 | 2 | 1 | 6 | 5 | 4 | 3 | 2 | 1 | **42** |
| **5** | 2 | 1 | 5 | 4 | 3 | 2 | 1 | 5 | 4 | 3 | 2 | 1 | **33** |
| **4** | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | **30** |
| **3** | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | **24** |
| **2** | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | **18** |
| **1** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **12** |

**At Program level:**
*MODE (Planned inventory turns of all Planning units under a specific program)*

**At Country and/or PU category level:**
*MODE (Planned inventory turns of all Planning units under a specific country / PU Category)*

#### Actual Inventory Turns (IT)

**At PU level:**
*1. Total Consumption for the last 12 months / Average Stock on hand over last 12 months*

**At Program level:**
1. First option is to look for a mode.
2. If the count of MODE Value &lt; 3 (variable setting), QAT uses AVG, if the count of the MODE value is &gt; 3 (variable setting), then:
3. The mode will be determined if the value occurs in at least 20% (variable setting), of the program's total number of planning units. *(Example: program contains 100 PUs, 20 of those have turns = 1.2 and the rest all have different turns; so the turns for the program will be 1.2)*
4. If above condition (20%) is found multiple times in the dataset, QAT to use the LOWEST inv. turns mode of the set. *(Example: Program contains 100 PUs; 60 PUs have different turns; 20 PUs have inv turns = 1.2, another 20 PUs have inv. turns = 2.5; QAT will display 1.2 as the inv. turns for that program)*
5. If no definitive mode can be found based on above rules, then Program level inv turns will be the average of all PU inventory turns under that program.

**At Country and/or PU category level:**
1. First option is to look for a mode.
2. If the count of MODE Value &lt; 3 (variable setting), QAT uses AVG, if the count of the MODE value is &gt; 3 (variable setting), then:
3. The mode will be determined if the value occurs in at least 20% (variable setting) of that country's (or PU category) total number planning units.
4. Rule: If above condition is found multiple times in the dataset, QAT to use the LOWEST inv. turns mode of the bunch *(e.g., Country contains 1000 PUs; 600 PUs have different turns; 200 PUs have inv turns = 1.6, another 200 PUs have inv. turns = 2.2; QAT will display 1.6 as the inv. turns for that Country/PU category)*.
5. Rule: If no definitive mode can be found based on above rules, then Country/PU category level inv turns will be the average of all PU inventory turns under that country/PU category.

*Note: Actual consumption precedes forecasted consumption in calculation if available*

### 6. Procurement Agent Total Lead Time:
This is the total time required to receive a product in the warehouse since the date when order was planned. It also depends on shipment mode (sea or air). This calculation is used to calculate the expected delivery date so that user can order products before stock out.

**Formula:**
*Procurement Agent total Lead Time (by Air) = Planned to Submitted Lead Time in months + Submitted to Approved Lead Time in months + Approved to Shipped Lead Time in months + Shipped to Arrived Lead Time in months (by Air) + Arrived to Received Lead Time in months*
*Procurement Agent total Lead Time (by Sea) = Planned to Submitted Lead Time in months + Submitted to Approved Lead Time in months + Approved to Shipped Lead Time in months + Shipped to Arrived Lead Time in months (by Sea) + Arrived to Received Lead Time in months*

### 7. Expiries Report:
This report calculates the expired quantity for each planning unit as well as the linked batch number to show dates of when the expiry occurred. Also included, the total cost of expiry for products that have expired.

**Formula:**
*Total Cost of Expiry = Expiring Quantity * Unit-price of product from shipment (if batch didn’t come from shipment, default catalog price is used)*

## E. Forecasting Module: Tree Forecasts

### 1. Aggregation Node:
Value for the aggregation node for a month is calculated as sum of the values of the children nodes for that same month.

**Formula:**
*Value of node for a month = Sum (Node values of child nodes)*

### 2. Number Node:
Value for the number node for a month is defined at node.

**Formula:**
*Value of node for a month = Value defined at the node*

There are three types of modeling/transfer that can be applied:
* **a. Linear Number:**
  If linear number modeling is applied then the value of that node is increased or decreased by a fixed, monthly quantity.
  If linear number transfer is applied then the value of that node is decreased from this node and the same amount is increased in the transferred node.
  * **Formula for modeling:** *Value for a node for a month = Value defined at the node +/- Fixed, monthly quantity*
  * **Formula for transfer:**
    *Value of transfer from node for a month = Value defined at the node - fixed, monthly quantity*
    *Value of transfer to node for a month = Value defined at the node + fixed, monthly quantity*
* **b. Linear Percentage:**
  If linear percentage modeling is applied then a percentage of starting month is increased or decreased from each month.
  If linear percentage transfer is applied then a percentage of starting month is decreased from this node and the same amount is increased in the transferred node for each month.
  * **Formula for modeling:** *Value for a node for a month = Value defined at the node +/- Percentage of starting month value*
  * **Formula for transfer:**
    *Value of transfer from node for a month = Value defined at the node - Percentage of starting month value*
    *Value of transfer to node for a month = Value defined at the node + Percentage of starting month value of transfer from node*
* **c. Exponential Percentage:**
  If exponential percentage modeling is applied then a percentage of preceding month value is increased or decreased from each month.
  If exponential percentage transfer is applied then a percentage of preceding month value is decreased from this node and the same amount is increased in the transferred node for each month.
  * **Formula for modeling:** *Value for a node for a month = Value defined at the node +/- Percentage of preceding month value*
  * **Formula for transfer:**
    *Value of transfer from node for a month = Value defined at the node - Percentage of preceding month value*
    *Value of transfer to node for a month = Value defined at the node + Percentage of preceding month value*

### 3. Percentage Node:
Value for the percentage node is calculated as percentage of the parent node value.

**Formula:**
*Value of node for a month = (Value defined at the node * Value of parent Node / 100)*

There is only one type of modeling/transfer that can be applied:
* **a. Linear (% point):**
  If linear (% point) modeling is applied then the value is calculated as the sum of Percentage of the node and linear (% point) percentage value of the parent node.
  If linear number transfer is applied then the percentage value of that node is decreased from this node and the same amount is increased in the transferred node.
  * **Formula for modeling:** *Value for a node for a month = (Value defined at the node +/- Linear % point Value) * Node value of parent / 100*
  * **Formula for transfer:**
    *Value of transfer from node for a month = (Value defined at the node - Linear % point Value) * Node value of parent / 100*
    *Value of transfer to node for a month = (Value defined at the node + Linear % point Value) * Node value of parent / 100*

### 4. Forecasting Unit Node:
Value for the percentage node is calculated as percentage of the parent node value based on forecasting unit parameters.

**Formula:**
*Value of node for a month = (Value defined at the node * Value of parent Node / 100)*

There is only one type of modeling/transfer that can be applied:
* **a. Linear (% point):**
  If linear (% point) modeling is applied then the value is calculated as the sum of Percentage of the node and linear (% point) percentage value of the parent node.
  If linear number transfer is applied then the percentage value of that node is decreased from this node and the same amount is increased in the transferred node.
  * **Formula for modeling:** *Value for a node for a month = (Value defined at the node +/- Linear % point Value) * Node value of parent / 100*
  * **Formula for transfer:**
    *Value of transfer from node for a month = (Value defined at the node - Linear % point Value) * Node value of parent / 100*
    *Value of transfer to node for a month = (Value defined at the node + Linear % point Value) * Node value of parent / 100*

### 5. Planning Unit Node:
Value for the percentage node is calculated as percentage of the parent node value based on planning unit parameters.

**Formula:**
*Value of node for a month = (Value defined at the node * Value of parent Node / 100)*

There is only one type of modeling/transfer that can be applied:
* **a. Linear (% point):**
  If linear (% point) modeling is applied then the value is calculated as the sum of Percentage of the node and linear (% point) percentage value of the parent node.
  If linear number transfer is applied then the percentage value of that node is decreased from this node and the same amount is increased in the transferred node.
  * **Formula for modeling:** *Value for a node for a month = (Value defined at the node +/- Linear % point Value) * Node value of parent / 100*
  * **Formula for transfer:**
    *Value of transfer from node for a month = (Value defined at the node - Linear % point Value) * Node value of parent / 100*
    *Value of transfer to node for a month = (Value defined at the node + Linear % point Value) * Node value of parent / 100*

## F. Forecasting Module: Consumption Forecast

### 1. Interpolate:
QAT interpolates by finding the nearest values on either side (before or after the blank), calculates the straight line in between them and uses that straight-line formula to calculate the value for the blank(s). Note that QAT will not interpolate for months where actual consumption is zero. QAT will only interpolate if there is at least one data point before and one data point after the blank value(s).

Mathematically:
* Where x represents months, and y represents actual consumption,
* Where known data values are *(x₀ , y₀)* and *(x₁ , y₁)*
* Where any unknown data values are *(x, y)*
* The formula for the interpolated line is:
  *y = y₀ + (x - x₀) * (y₁ - y₀) / (x₁ - x₀)*

### 2. Stockout Rate:
Stockout Rate is calculated as percentage of ratio of Stockout rate in days to that of no of days in a month.

**Formula:**
*Stockout Rate = (Stockout Rate (days) / No of days in month) * 100*

### 3. Adjusted Consumption:
Adjusted Consumption is calculated based on Actual Consumption, Reporting Rate, Stockout Rate(days), No of days in month using the below formula.

**Formula:**
If Actual Consumption is empty then,
*Adjusted Consumption = ""*
Otherwise,
*Adjusted Consumption = (Actual Consumption / Reporting Rate / (1 - (Stockout Rate (days) / No of days in month))) * 100*

### 4. Conversion Factor for Data entry and Adjustment Screen:
* If the Actual Consumption is in Forecasting Unit then:
  *Conversion Factor = 1 / Planning Unit Conversion Factor*
* If the Actual Consumption is in Planning Units then:
  *Conversion Factor = 1*
* If the Actual Consumption is in Other Unit then:
  *Conversion Factor = 1 / Conversion to FU (User Entered)*

### 5. Adjusted Consumption in terms of Planning Unit:
Adjusted Consumption in terms of planning unit is calculated by multiplying Adjusted Consumption with Conversion Factor.

**Formula:**
*Adjusted Consumption (Planning Unit) = Adjusted Consumption * Conversion Factor*

### 6. Forecast Error (%):
* **WAPE (Weighted Absolute Percentage Error):**
  WAPE divides the sum of absolute differences by the sum of actual values for a particular time window. Time window is 6 months.
  
  **Formula:**
  *WAPE = ((Abs(actual consumption month 1 - forecasted consumption month 1) + Abs(actual consumption month 2 - forecasted consumption month 2) + Abs(actual consumption month 3 - forecasted consumption month 3) + Abs(actual consumption month 4 - forecasted consumption month 4) + Abs(actual consumption month 5 - forecasted consumption month 5) + Abs(actual consumption month 6 - forecasted consumption month 6)) / (Sum of all actual consumption in the last 6 months))*
* **RMSE (Root mean square error):**
  RMSE is calculated as square root of ratio of summation of square of difference between forecast - actual to number of observations.
  
  **Formula:**
  *RMSE = Square root [ Summation(Square(Forecast – Actual)) / No. of Observations ]*
* **MAPE (Mean absolute percentage error):**
  MAPE is calculated as ratio of 1 is to number of observations multiplied by summation of absolute difference between actual and forecast to multiplication of absolute actual and 100.
  
  **Formula:**
  *MAPE = (1 / No of Observations) * Summation(Absolute(actual – forecast) / Absolute(actual)) * 100*
* **MSE (Mean squared error):**
  MSE is calculated as multiplication of ratio of 1 to no of observations and summation of square of difference between actual and forecast.
  
  **Formula:**
  *MSE = (1 / No of Observations) * Summation(Square(actual – forecast))*
* **R squared:**
  *R² = 1 – [sum squared regression (SSR) / total sum of squares (SST)]*. The sum squared of the residuals for the regression is the sum of its residuals squared, and the total sum of squares is the sum of the distance the data is away from the mean, all squared. By “sum of squares” we mean the sum of squared deviations between actual values and the mean (SST), or between predicted values and the mean (SSR). The R² value is always a number between 0 and 1. R² is a measure to fit a regression line to a series of historical observations with values closer to 1 indicating a stronger correspondence between the actual and predicted (regression model) values. It is not a measure of error and should not be used by itself to assess the fitness of a prediction, but in combination with other error metrics and the user’s knowledge of the program.
  
  **Formula:**
  *R² = 1 - [SSR / SST]*

### 7. Import From QAT Supply Plan:
* QAT allows users to import actual data from their supply plans into a consumption forecast.
  * First, a user will select a Forecast Program and Date Range for the imported actual consumption.
    * *Note: A toggle is shown if not all unmapped planning units are to be imported. This is useful if there are many planning units, and you only import a selected few. After mapping the selected few planning units, click the toggle “Do not import all unmapped planning units”, which will then automatically select the remaining planning units to not be imported.*
  * Second, a Supply Plan Program and Supply Plan Version will be selected. This is useful if a user wants a specific uploaded supply plan version and not just the latest.
    * *Note: A User can select more than one program to import from.*
  * Third, after selecting a Supply Plan program, the Supply Plan Planning Units will be shown alongside the Forecast Planning Unit dropdown.
    * *Note: The Forecast Planning Unit dropdown allows the user to select a specific Forecast Planning Unit or not to import that specific Supply Plan Planning Unit.*
  * After selecting next, now a % of Supply Plan must be inputted.
    * *A tool tip is shown on the top column noting “Percentage of monthly actual consumption quantity from the Supply Plan program that will be imported into the Forecast Program.*
    * *This is to allow a specific percentage to be used if not all 100% is needed.*

## G. Forecasting Module: Reports & Outputs

### G1. Compare & Select

1. **Compare to Consumption Forecast:**
   Compare to Consumption Forecast is displayed only when there are both tree and consumption forecasts. It displays the values as:

   <ul style={{listStyleType: 'disc'}}><li>Higher than H% than the highest consumption forecast or</li><li>Lower than L% than the lowest consumption forecast</li></ul>
   
   **Formula:**
   *H% = (Sum (Selected tree forecast) - Sum (Consumption Forecast)) / Sum (Consumption Forecast)*
   *L% = (Sum (Selected tree forecast) - Sum (Consumption Forecast)) / Sum (Consumption Forecast)*

2. **Multi-Select Trees:**
   In the compare & select screen, users can select multiple tree forecasts as their final forecast, which will aggregate the monthly forecast quantities. Users cannot select multiple consumption forecasts or a combination of tree and consumption forecasts as their final forecast.
   *Note: Consumption Extrapolation Forecast Error and Compare & Select Forecast Error will match on both screens even if the historical range of data is limited.*

### G2. Forecast Summary

1. **Stock or Unmet Demand:**
   Stock or Unmet demand is calculated as difference between sum of stock and existing shipments for a planning unit and total forecasted consumption.
   
   **Formula:**
   *Stock or Unmet Demand = (Stock for a planning unit + Existing Shipments for a planning unit) -(Total forecasted consumption)*

2. **Desired Stock:**
   Desired Stock is calculated as Ratio of multiplication of months of stock for a planning unit and total forecasted consumption to No of months in forecast period.
   
   **Formula:**
   *Desired Stock =((Months of stock for a planning unit) *(Total Forecasted Consumption) /(No of months in forecast period))*

3. **Procurement Surplus/Gap**
   Procurement surplus is calculated as difference between stock and desired stock

   **Formula:**
   *Procurement Surplus = Stock or Unmet Demand - desired Stock*

4. **Procurements Needed**
   Procurements Needed is calculated as multiplication of Procurement surplus/Gap and unit price.

   **Formula:**
   *Procurements Needed = Procurement surplus * Unit price*

5. **Freight Cost**
   Freight cost is calculated as multiplication of ratio of Freight percentage by 100 and sum of procurements needed

   **Formula:**
   *Freight Cost = Freight Percentage /100 * Total procurement Needed*

6. **Total Cost**
   Total Cost is calculated as sum of sum of procurements needed and Freight cost

   **Formula:**
   *Total Cost = Sum of Procurements Needed + Freight Cost*

## H. Supply Planning and Forecasting Module: Uploading Versions

The below section details the different conditions that QAT looks for when identifying conflicts in a version upload (for both a supply plan program and a forecast program).

The following example will be used throughout the explanation below: A user is trying to upload local version 8 and the latest version available on the server is version 10. Once any conflicts are resolved and the user confirms, the uploaded version will be version 11. QAT compares the 3 different versions:
a. Server v8 (this is the server version that the user downloaded prior to making edits)
b. Local v8 (this is the version the user intends to upload)
c. Server v10 (this is the latest server version)

Depending on the data type, QAT either compares actual records, or compares modified dates. Actual records cannot be compared for some data because the data is too vast and complex.

<div style={{overflowX: 'auto'}}>

<table style={{ border: '1px solid #dddddd', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Actual records are compared</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Modified dates are compared</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', verticalAlign: 'top' }}>
        <ul style={{listStyleType: 'disc', margin: 0, paddingLeft: '20px'}}>
          <li>
            <span>Supply Planning Module</span>
            <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
              <li>Actual/Forecasted consumption, Inventory, Adjustment, Shipment records</li>
              <li>QAT Problem List</li>
              <li>ERP Shipment Linking*</li>
            </ul>
          </li>
          <li>
            <span>Forecasting Module</span>
            <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
              <li>Planning Unit Settings</li>
              <li>Version Settings</li>
              <li>Selected Forecast</li>
            </ul>
          </li>
        </ul>
      </td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', verticalAlign: 'top' }}>
        <ul style={{listStyleType: 'disc', margin: 0, paddingLeft: '20px'}}>
          <li>
            <span>Forecasting Module</span>
            <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
              <li>Actual consumption, adjustments, extrapolation</li>
              <li>Tree</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

</div>

* For ERP linking, before the below logic, QAT first checks if the ERP shipment is already linked to another program. If it is linked, then QAT highlights in red and does not allow upload.

Using the logic outlined below (testing each condition in sequential order), QAT determines if data is
* <span style={{color: '#00b050', fontWeight: 'bold'}}>Newly added on the local version (Local v8)</span> &larr; Condition 1
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>Newly added on the server version (Server v10)</span> &larr; Condition 2
* **Unchanged since the previous server version (Server v8)** &larr; Condition 3a
* <span style={{color: '#00b050', fontWeight: 'bold'}}>Updated on the local version (Local v8) with no conflicts</span> &larr; Condition 3b
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>Updated on the server version (Server v10) with no conflicts</span> &larr; Condition 3c
* **Or, a conflict between the <span style={{backgroundColor: '#ffff00'}}>local</span> and <span style={{backgroundColor: '#ffff00'}}>server</span> versions.** &larr; Condition 3d

### a. Condition 1: Newly added data in local version

First, QAT checks each data point in the local version (Local v8) to confirm if it is newly added data. If so, data is shown as <span style={{color: '#00b050', fontWeight: 'bold'}}>green</span> in the upload screen.

* **a.** Server v8 - Record does not exist
* <span style={{color: '#00b050', fontWeight: 'bold'}}>**b.** Local v8 - Record exists</span>
* **c.** Server v10- Record does not exist

Below are some examples for this condition:
1. **Consumption (Supply Planning):** For example, there is an actual consumption record in local v8 for May 2023, planning unit A, alternate reporting unit B, region X. QAT checks server v10 and server v8 to see if an actual consumption record in May 2023, planning unit A, alternate reporting unit B, region X exists. If not, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>
2. **Inventory (Supply Planning):** For example, there is an inventory record in local v8 for May 2023, planning unit A, alternate reporting unit B, region X, Data Source Y. QAT checks server v10 and server v8 to see if an inventory record in May 2023, planning unit A, alternate reporting unit B, region X, Data Source Y exists. If not, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>
3. **Adjustments, Shipments, QPL (Supply Planning):** Since IDs are only assigned after the supply plan is uploaded, QAT checks the IDs for each record in local v8 to see if they are “0”. Records with the ID “0” were newly created in this local version, so for these records, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span> QAT does not check server versions.
4. **Trees (Forecasting):** Since IDs are only assigned after the forecast is uploaded, QAT checks the IDs for each tree in local v8 to see if they are “0”. Trees with the ID “0” were newly created in this local version, so for these, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span> QAT does not check server versions.
5. **Planning Unit Settings (Forecasting):** QAT checks if that planning unit ID is present in the Sever v8 and Server v10. If the planning unit ID does not exist in either, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>
6. **Consumption Data and Extrapolation (Forecasting):** QAT checks if the data for this planning unit and region is present in Server v10 based on the presence of the modified date. If the planning unit and region data is not present in Server v10, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>
7. **Selected Forecast (Forecasting):** QAT checks if a selected forecast exists for this planning unit and region in Server v10. If no selection is present in Server v10, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>

### b. Condition 2: Newly added data in server version

If Condition 1 fails, QAT checks the latest server version (Server v10) to see if that data was newly added by comparing it with local version (Local v8). QAT does not check previous server version (server v8). If the data is not present on the local version, that means the data was newly added on the latest server version, and there is no conflict with the local version. This data will be added to the newly uploaded version (Server v11) and data is shown as <span style={{color: '#0070c0', fontWeight: 'bold'}}>blue</span> in the upload screen.

* **a.** Server v8 - Record does not exist
* **b.** Local v8 - Record does not exist
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>**c.** Server v10 - Record exists</span>

Below are some examples for this condition:
1. **Consumption Inventory, Adjustment, Shipment, QPL (Supply Planning):** For example, there is an actual consumption record with unique ID #A in server v10. QAT checks if the unique ID#A is also present in local version v8. If the unique ID is not present in local version, <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>
2. **Trees:** For example, there is tree with unique ID #B in server v10. QAT checks if the unique ID#B is also present in local version v8. If the unique ID is not present in local version, <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>
3. **Planning Unit Settings (Forecasting):** For example, there is planning unit with planning unit ID #C in server v10. QAT checks if the planning unit #C is also present in local version v8. If the Planning Unit ID is not present in local version, <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>
4. **Consumption Data and Extrapolation (Forecasting):** After QAT finds data for a planning unit and region server v10, QAT looks at the same planning unit and region in local v8 looks for a modified date. If the modified date does not exist in the local v8, <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>
5. **Selected Forecast (Forecasting):** After QAT finds data for a selected forecasts for a particular planning unit and region in server v10, QAT looks for the same planning unit and region in local v8 looks for a selected forecast. If the selected forecast does not exist in the local v8, <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>

### c. Condition 3a: Local and latest server are the same

If the conditions above fail, QAT checks each data point in the local version (Local v8) to see if they are same as the latest (v10) server version. If same, the data is shown un-highlighted in the upload screen.

* **a.** v8 server – Record is X
* **b.** v8 local – Record is X
* **c.** v10 latest server – Record is X

Below are some examples for this condition:
1. **Consumption, Inventory, Adjustment, Shipments, QPL, version settings, planning unit settings and selected forecasts:** QAT compares each record in local version (v8) with the latest server versions (v10). For example, for actual consumption record for the month June 22, QAT checks each field (ARU, data source, quantity, days of stock out, etc) to see if the local (v8) and the latest server version (v10) are the same. If they are the same, then no changes have been made since server v8, or they were updated to be the same value.
2. **Consumption (Forecasting) and Trees:** QAT compares the last modified date for each record in local version (v8) with the last modified date of the latest server version (v10). If they are the same, then no changes have been made since server v8.

### d. Condition 3b: Changes only in local version

If the conditions above fail, then QAT compares to see if the previous server version (Server v8) and the latest server version (server v10) are the same. If so, QAT infers that the local version (local v8) was changed and data is shown as <span style={{color: '#00b050', fontWeight: 'bold'}}>green</span> in the upload screen.

* **a.** v8 server – data source is LMIS Reports
* <span style={{color: '#00b050', fontWeight: 'bold'}}>**b.** v8 local – data source is Warehouse Reports</span>
* **c.** v10 latest server - data source is LMIS Reports

Below are some examples for this condition:
1. **Consumption, Inventory, Adjustment, Shipments, QPL, version settings, planning unit settings and selected forecasts:** For example, an actual consumption record for June 22 has “Warehouse Reports” as the data source in v8 local. If the data source field for the previous (v8) and latest (v10) server versions are both “LMIS Reports”, this indicates that the data was modified in local version, so <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>
2. **Consumption (Forecasting) and Trees:** If the last modified dates of the previous (v8) and latest (v10) server versions are the same, this indicates that the data was modified in local version, so <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 is the latest.</span>
   * **a.** Server v8 - last modified date is 15 Sep 2023, 12:00:00
   * <span style={{color: '#00b050', fontWeight: 'bold'}}>**b.** Local v8 - last modified date is 20 Sep 2023, 15:15:00</span>
   * **c.** Server v10 - last modified date is 15 Sep 2023, 12:00:00

### e. Condition 3c: Changes only in latest server version

If the conditions above fail, then QAT compares to see if the previous server version (Server v8) and the local version (local v8) are the same. If so, QAT infers that the latest server version (server v10) was changed and the data is shown as <span style={{color: '#0070c0', fontWeight: 'bold'}}>blue</span> in the upload screen.

* **a.** Server v8 - data source is LMIS Reports
* **b.** Local v8 - data source is LMIS Reports
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>**c.** Server v10 - data source is Warehouse Reports</span>

Below are some examples for this condition:
1. **Consumption, Inventory, Adjustment, Shipments, QPL, version settings, planning unit settings and selected forecasts:** For example, an actual consumption record for June 22. If the data source value in v8 server and v8 local are the same, this indicates that the data was modified in latest server version (v10), so <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>
2. **Consumption (Forecasting) and Trees:** If the last modified dates of the previous server version (v8) and the local version (v8) are the same, this indicates that the data was modified in latest server version (v10), so <span style={{color: '#0070c0', fontWeight: 'bold'}}>server v10 is the latest.</span>
   * **a.** Server v8 - last modified date is 15 Sep 2023, 12:00:00
   * **b.** Local v8 - last modified date is 15 Sep 2023, 12:00:00
   * <span style={{color: '#0070c0', fontWeight: 'bold'}}>**c.** Server v10 - last modified date is 20 Sep 2023, 15:30:00</span>

### f. Condition 3d: Changes in both local and latest server version (same parameter)

If the conditions above fail, this means that the 3 versions are not matching and there is a conflict. If so, data is highlighted <span style={{backgroundColor: '#ffff00'}}>yellow</span> in the upload screen.

* **a.** v8 server - data source is LMIS Reports
* <span style={{backgroundColor: '#ffff00'}}>**b.** v8 local - data source is SDP Reports</span>
* <span style={{backgroundColor: '#ffff00'}}>**c.** v10 latest server - data source is Warehouse Reports</span>

Below are some examples for this condition:
1. **Consumption, Inventory, Adjustment, Shipments, QPL, version settings, planning unit settings and selected forecasts:** For an actual consumption record for the month of June 22, if the data source value does not match for any of the versions, this indicates that the data is modified in both local (v8) and latest server (v10) versions, so QAT highlights the row in <span style={{backgroundColor: '#ffff00'}}>yellow</span> to indicate a conflict for the user to resolve.
2. **Consumption (Forecasting) and Trees:** If the last modified date does not match for any of the versions, this indicates that the data is modified in both local (v8) and latest server (v10) versions, so QAT highlights the row in <span style={{backgroundColor: '#ffff00'}}>yellow</span> to indicate a conflict for the user to resolve.
   * **a.** Server v8 - last modified date is 15 Sep 2023, 12:00:00
   * <span style={{backgroundColor: '#ffff00'}}>**b.** Local v8 - last modified date is 16 Sep 2023, 13:00:00</span>
   * <span style={{backgroundColor: '#ffff00'}}>**c.** Server v10 - last modified date is 20 Sep 2023, 15:30:00</span>
   * **a.** Server v8 - last modified date is 28 A Sep 2023, 12:00:00
   * <span style={{backgroundColor: '#ffff00'}}>**b.** Local v8 - last modified date is 16 Sep 2023, 13:00:00</span>
   * <span style={{backgroundColor: '#ffff00'}}>**c.** v10 latest server – tree is missing</span>

### g. Condition 4: Changes in both local and latest server version (different parameters)

After checking all the conditions, QAT checks to see if any records that have a combination of 3b and 3c, but for different fields. If so, data is highlighted <span style={{backgroundColor: '#ffff00'}}>yellow</span> in the upload screen.

1. **Consumption, Inventory, Adjustment, Shipments, QPL, version settings, planning unit settings and selected forecasts:** For an actual consumption record for the month of June 22, the data source is updated in the local version (Condition 3b) and quantity is changed in server version (condition 3c). In this case, QAT does not know which version to use, so QAT highlights the row in <span style={{backgroundColor: '#ffff00'}}>yellow</span> to indicate a conflict for the user to resolve.

<div style={{overflowX: 'auto'}}>

<table style={{ border: '1px solid #dddddd', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Version</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Data Source (Condition 3b)</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Quantity (Condition 3c)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>v8 server</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>LMIS Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center' }}>50</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#00b050' }}>v8 local</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#00b050' }}>Warehouse Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center' }}>50</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#0070c0' }}>v10 latest server</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>LMIS Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#0070c0' }}>55</td>
    </tr>
  </tbody>
</table>

</div>

2. **Consumption (Forecasting) and Trees:** This does not apply since only the modified date is compared for these two data types

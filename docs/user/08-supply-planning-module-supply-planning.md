---
id: supply-planning-module-supply-planning
title: "Supply Planning Module: Supply Planning"
sidebar_label: "Supply Planning Module: Supply Planning"
sidebar_position: 8
---

# Supply Planning Module: Supply Planning

## Supply Planning: An Overview
The Supply Planning screen is the central hub where consumption, inventory, and shipments converge to project stock levels.

**Who:** Realm/Program Admins, Reviewers, and Program Users.
**When:** Any time (Offline support via PWA).

**Key Interface Features:**
- **Local vs. Server Tabs:** Edit the **Local Supply Plan**; the **Server Supply Plan** is read-only for comparison.
- **Interactive Table:** Click cells to edit data directly or view detailed pop-ups.
- **Dynamic Legend:** Toggle data elements in the graph by clicking legend items.

### Stock Balance Calculations
QAT uses a standard logic to calculate the monthly progression:

| Component | Description | Visual Indicator |
| :--- | :--- | :--- |
| **Opening Balance** | Start-of-month stock. | **Bold** = Actual; Regular = Projected. |
| **Ending Balance** | End-of-month stock. | **Bold** = Actual; Regular = Projected. |
| **Unmet Demand** | Stock needed but unavailable. | Captures "negative" stock scenarios. |

### Stock Status Legend
Stock status is color-coded based on the planning method:
- **Plan by MOS:** Transitions: **Stock Out (Red)** → **Understock (Yellow)** → **Ideal (Green)** → **Overstock (Blue)**.
- **Plan by Quantity (Min/Max):** Color-coded based on user-defined minimum and calculated maximum quantities.

![Supply Planning Interface](/img/media/image153.png)
*Figure 1: Plan by Months of Stock (MOS) View*

## Supply Planning: Consumption & Shipments
The Supply Planning table allows granular control over transactions.

### Consumption
- **Forecasted Consumption:** Purple italic text.
- **Actual Consumption:** Black non-italicized text.

**To edit consumption:**
1. Click the month's cell in the **Consumption** row.
2. In the pop-up, edit quantities by region.
3. Click **Submit** to update the plan.

### Shipments
Shipments are aggregated by default. Click the **+** next to **Shipments** to expand into:
- **Suggested:** Auto-calculated by QAT to maintain stock levels.
- **Planned, Submitted, Shipped, Arrived, Received:** Tracked milestones.

#### Visual Indicators
| Icon | Meaning |
| :--- | :--- |
| **Red Triangle** | Emergency Shipment (within lead time). |
| **Link Icon** | ERP Linked Shipment (read-only). |
| **L Icon** | Local Procurement. |
| **Green Cell** | Multiple shipments in the same month. |

#### Suggested Shipments Logic
QAT suggests shipments to keep the plan between **Minimum** and **Maximum** levels.
- **Trigger:** If stock falls below Min for 3 consecutive months.
- **Quantity:** Calculates the amount needed to reach the **Max** level.

**To convert a suggestion to a planned order:**
1. Click the **Suggested** row cell.
2. Update the status and click **Submit**.

![Shipment Details Pop-up](/img/media/image174.png)
*Figure 2: Editing Shipment Details*

## Supply Planning: Inventory & Adjustments
Inventory and adjustments can be managed directly from the supply planning table.

**To add/edit records:**
1. Click the month's cell in the **Adjustments** or **Ending Balance** row.
2. In the pop-up, adjust quantities by region.
3. **Inventory Count:** Entering an inventory count will **bold** the ending balance and override projections.
4. **Adjustments:** Notes are required for all adjustment entries.

### Projecting Expiries
The **Projected Expired Stock** row highlights potential losses.
- **Action:** Click a cell to see the **Expiry Details**.
- **Correction:** Click the batch number to jump to the source shipment and update the expiry date or quantity.
- **Batch Ledger:** Click the **Expired Quantity** cell to view the full month-by-month history of that batch.

![Expiry Management Pop-up](/img/media/image189.png)
*Figure 3: Batch Expiry Details*

## Scenario Planning
Scenario Planning allows users to simulate changes to their supply plan without altering the current version.

**Available Scenarios:**
- **Consumption Changes:** Increase or decrease forecasted consumption by a fixed percentage.
- **Phase In/Out:** Linear interpolation between two consumption values over a defined period.
- **Shipment Cleanup:** Bulk remove unfunded, planned, or submitted shipments that violate lead times.
- **Re-plan:** Automatically generates new shipments to resolve stock level violations.

**To use scenarios:**
1. Navigate to **Supply Planning** > **Scenario Planning**.
2. Select a scenario from the dropdown and configure parameters.
3. Click **Add** to visualize the impact.
4. If satisfied, click **Submit** to save the scenario as a new supply plan version.

![Scenario Planning interface](/img/media/image191.png)
*Figure 4: Comparing Scenarios*

## Supply Plan Report
The Supply Plan Report provides a comprehensive view of stock status across one or multiple programs.

### Report Views
- **Single Program:** Detailed view of one program and planning unit.
- **Multi-Program:** Aggregates data for the same planning unit across multiple programs.
- **Equivalency Unit (EU):** Aggregates different planning units using standardized conversion factors (e.g., CYP or ARV Patient Months).

**Navigation:** **Supply Planning** > **Supply Plan Report**.

**Key Features:**
- **Tabular & Graphical Views:** Data is presented as both an interactive graph and a detailed data table.
- **Disaggregated Shipments:** See individual shipment details (Funding Source, Status, Procurement Agent) directly in the table.
- **Exporting:** Supports PDF and CSV exports with various aggregation options.

![Supply Plan Report](/img/media/image193.png)
*Figure 5: Single Program Supply Plan Report*

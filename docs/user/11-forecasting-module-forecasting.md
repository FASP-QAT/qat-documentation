---
id: forecasting-module-forecasting
title: "Forecasting Module: Forecasting"
sidebar_label: "Forecasting Module: Forecasting"
sidebar_position: 11
---

# Forecasting Module: Forecasting

## Consumption Forecasts
Consumption-based forecasts use historical data to project future demand. This method is ideal for stable programs with at least 24 months of reliable monthly consumption data.

**The Workflow:**
1. **Import/Input:** Bring in historical actuals from the Supply Planning module or enter them manually.
2. **Adjust:** Account for under-reporting, stockouts, and missing data points.
3. **Extrapolate:** Apply statistical models to project the "Adjusted Consumption" into the future.

### Data Entry & Import
You can populate historical actuals via two methods:

#### Method 1: Import from Supply Plan
**Navigation:** **Consumption-Based Forecast** > **Import from QAT Supply Plan**.
- **Mapping:** Link Supply Plan units to Forecast units. You can use the "Do not import all unmapped" toggle for large datasets.
- **Regional Split:** Select which regions to import and the percentage of consumption to attribute to the forecast.
- **Conflict Handling:** Data already present is highlighted in **Yellow**. Importing will override existing records.

#### Method 2: Manual Data Entry
**Navigation:** **Consumption-Based Forecast** > **Data Entry and Adjustments**.
- **Interface:** Select the program and review period (default: trailing 36 months).
- **Expansion:** Expand rows to drill down into regional data.
- **Unit Conversion:** Use the "change" link to toggle entry between Planning Units (PU) or Forecasting Units (FU).

![Data Entry Interface](/img/media/image242.png)
*Figure 1: Historical Consumption Data Entry Table*

### Statistical Adjustments
Raw data must be cleaned to create a reliable "Adjusted Consumption" series. QAT handles three types of adjustments:

#### 1. Under-Reporting
If reporting is less than 100%, QAT inflates consumption proportionally, assuming non-reporting facilities consume at the same rate as reporting ones.

#### 2. Stockouts
QAT adjusts consumption for days spent out of stock to estimate true demand.
- **Stock Out Rate** = `Stocked Out (Days)` / `Days in Month`
- **Adjusted Consumption** = `Actual Consumption` / `Reporting Rate` / (1 - `Stock Out Rate`)

#### 3. Missing Values (Interpolation)
The **Interpolate** button fills gaps in your data using a straight-line formula between the nearest known values.
> [!NOTE]
> QAT will not interpolate months where actual consumption is zero (as this may be a valid data point). It only fills blank "missing" cells.

### Extrapolation Concepts
QAT offers several statistical models to project future demand. Choose a model based on your data availability and consumption patterns:

- **Simple Models (3+ months data):**
  - **Moving Average:** Best for stable data without strong trends or seasonality.
  - **Semi-Averages/Linear Regression:** Best for identifying steady growth or decline (trends).
- **Advanced Models:**
  - **ARIMA (13+ months data):** Flexible model that accounts for trends and seasonal cycles.
  - **Triple Exponential Smoothing (24+ months data):** Best for complex data with both strong trends and annual seasonality.

### Interpreting Forecast Errors
QAT calculates several error metrics to help you select the best fit.

| Metric | Definition | Best Used For... |
| :--- | :--- | :--- |
| **MAPE** | Mean Absolute Percentage Error. | Comparing accuracy across different data scales. |
| **WAPE** | Weighted Absolute Percentage Error. | Datasets with low or intermittent values. |
| **RMSE** | Root Mean Squared Error. | Highlighting and penalizing large outliers. |
| **R²** | Correlation Coefficient. | Measuring how well the model fits historical patterns. |

---

## Tree Forecasts
Tree-based forecasting is a flexible method used when historical consumption is unavailable or unreliable. It supports **morbidity, services, and demographic** methodologies by allowing you to build a logical "tree" of drivers that result in product demand.

### Building & Managing Trees
**Navigation:** **Forecasting Tree** > **Manage Tree**.

You can manage your trees through the following actions:
- **Draw Your Own:** Start from a blank canvas.
- **Template:** Use a pre-defined tree structure (e.g., for specific health programs).
- **Duplicate:** Copy an existing tree structure to another program (requires both programs to be downloaded).
- **Tree Table:** Access a spreadsheet-like view for bulk editing node values without changing the structure.

> [!NOTE]
> Trees are saved locally first. You must **Upload Version** to save your work to the server.

### Node Types & Hierarchy
A tree is built from the top down using specific node types. Every tree must end in **Planning Units** to generate a forecast.

| Node Type | Function | Allowed Children | Advanced Options |
| :--- | :--- | :--- | :---: |
| **∑ Aggregation** | Sums up all children. | Aggregation, Number. | - |
| **# Number** | A fixed value (e.g., total population). | Percentage, FU. | ⇅, Transfer |
| **% Percentage** | A percentage of the parent value. | Percentage, FU. | ⇅, Transfer |
| **Funnel** | Sums values from linked source nodes. | Percentage, FU. | - |
| **FU (Forecasting Unit)** | Usage parameters (Continuous/Discrete). | Planning Unit. | ⇅, Lag |
| **PU (Planning Unit)** | The final product output. | None. | Override |

#### Node Actions
- **Delete:** Removes node and all its children.
- **Copy/Move:** Relocates a branch to a different tree or parent.
- **Add Branch Template:** Inserts a pre-defined branch (e.g., a standard drug regimen).
- **Collapse/Expand:** Simplifies the visual view of the tree.

### Node Attributes
Each node has editable fields that define its value and behavior:

- **# Number Node:** Define the **Node Unit** (patients, people, etc.) and its **Value** for a specific starting month.
- **% Percentage Node:** Define the percentage of the parent value. QAT uses this to calculate the node's absolute value.
- **Forecasting Unit (FU) Node:**
  - **Type of Use:** 
    - **Continuous:** Daily/weekly usage (e.g., one pill every day).
    - **Discrete:** Occasional usage (e.g., 5 vials per treatment course).
  - **Lag:** Delays the start of product usage relative to the parent driver (e.g., product usage starts 2 months after diagnosis).
- **Planning Unit (PU) Node:** Defaults to the system conversion but can be overridden manually if needed.

### Dynamic Changes (Modeling & Transfers)
Trees are not static; values can change over time to reflect program growth or transitions.

#### 1. Modeling Types
| Type | Behavior | Best Used For... |
| :--- | :--- | :--- |
| **Linear (#)** | Adds/subtracts a fixed number each month. | Steady local growth. |
| **Linear (%)** | Adds/subtracts a fixed % of the *starting* value. | Consistent growth rates. |
| **Exponential (%)** | Multiplies the *previous* month by a percentage. | Compounding growth. |
| **Linear (% point)** | Adjusts a percentage node's value (e.g., 30% -> 31%). | Market share shifts. |

#### 2. Transfers
Transfers link two nodes of the same level (for Number nodes) or same parent (for Percentage nodes). As the "Source" node decreases, the "Destination" node increases proportionally. This is essential for regimen transitions.

#### 3. Seasonality & Manual Changes
You can further refine monthly data by clicking **Show Monthly Data**:
- **Seasonality Index:** Enter a percentage (e.g., `20%` for a 20% increase over baseline) to reflect cyclic demand.
- **Manual Change:** Override a specific month's value for one-off events (e.g., a massive drug campaign).

### Modeling Calculator
If you don't know the monthly rate, use the **Modeling Calculator** (⇅) to derive it:
- **Ending Value:** Enter your start value, target date, and final target value. QAT calculates the monthly rate.
- **Annual Target:** Enter a yearly cumulative target (Actual + Target Year). QAT interpolates a smooth monthly transition to avoid "stairstep" patterns.

### Advanced Techniques
#### Lag in Usage
Available in **FU Nodes**. Use the **Lag** field to delay product usage relative to the parent driver. 
- *Example:* If patients are diagnosed in Month 1 but start treatment in Month 3, enter a lag of `2`.

#### Calculation Methods (Discrete Usage)
- **All in First Month:** Frontloads the entire treatment course quantity into the patient's first month. (Default)
- **Month-by-Month:** Spreads usage across the duration of the course (e.g., 1 pill/month for 6 months).

#### Funnel Nodes
Funnel nodes allow you to aggregate source nodes from different branches—or even different trees—into a single stream for further calculation.
- *Use Case:* Different demographic groups (Adults, Children) that all use the same Viral Load testing instruments.

### Validations & Templates
#### Validations
- **Modeling Validation:** Charts showing how your drivers (Population, Patients) change over time.
- **Product Validation:** Aggregated view of all Planning Units across the tree for consistency checks.

#### Templates
- **Tree Templates:** Pre-built global structures for standard programs (e.g., Malaria morbidity trees).
- **Branch Templates:** Reusable regimen-specific branches (e.g., "Standard First Line Adult Regimen").
- **Usage Templates:** Presets for FU nodes (Discrete/Continuous parameters) to ensure consistency across the team.

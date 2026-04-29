---
id: forecasting-module-forecasting
title: "Forecasting Module: Forecasting"
sidebar_label: "FC: Forecasting"
sidebar_position: 11
---

# Section 8. Forecasting Module: Forecasting

## 8.A. Consumption Forecasts

Consumption-based forecasts, which are based on historical consumption data are most useful in mature, stable programs that have a full supply of planning units and reliable data. This method can be the most reliable predictor of future consumption if the future use is predicted to be very similar to the past. Thus, a user must be able to extrapolate historical data (ideally, 24+ months of monthly actual consumption data is available) and the data must be a series of data over time (i.e. actual adjusted monthly consumption).

There are four basic components for a consumption forecast:

Forecast $\cong$ Base + Trend + Season + Random


Different extrapolation models will utilize different statistical methods to estimate these different components and produce a forecast. In QAT, users will follow three steps to produce a consumption-based forecast:

1. **Import/input actual consumption data:** This can be done by importing data from the QAT Supply Planning module or inputting data manually.
2. **Adjust actual consumption data:** By adding reporting rate and stockouts, and/or interpolating missing data.
3. **Extrapolate actual consumption data:** To produce a forecast. QAT has five different extrapolation methods to choose from: Moving Averages, Semi-Averages, Linear Regression, Triple Exponential Smoothing (TES, Holt-Winters), and Auto-Regressive Integrated Moving Average (ARIMA).

### 8.A.1. Import/Inputting Actuals

There are two ways a user can add actual consumption data to their program:
1. Importing actual consumption data from an existing program in the QAT Supply Planning module, or
2. Manually input data in the “Data Entry and Adjustments” screen in the QAT Forecasting module.

#### Steps for Importing Data from the QAT Supply Planning module:
1. Navigate to the **Consumption-Based Forecast → Import from QAT Supply Plan** screen.
2. Choose the Forecast Program, Range of Actual Consumption data to import, the Supply Plan program and then the Supply Plan version. *Note: only forecast programs that have been downloaded to the user’s local computer will be available in the dropdown for “Forecast Program.” See Download/Delete Program for how to download a program to the local computer.*
3. Users will then map the Supply Plan Planning Unit to the Forecasting Planning Unit. *Note: only planning units that have been added to the Forecast Program in the “Update Planning Units” screen and for which we have checked the checkbox for consumption forecast will be available in the dropdown for “Forecast Planning Unit.” See Forecasting Module Planning Units for how to add planning units to a forecast program.*
4. Choose “Do not import” in the drop down for any PUs that do not automatically match. In case you have a lot of PUs and you want to select “Do not import” for all the unmapped one you can check the box ‘Do not import all unmapped planning units”.
5. Users choose which region should be imported into the forecast program and also provide information on the % of the actual consumption that should be imported into the forecast program.
6. The last step will allow users to double-check the supply plan actual consumption data to make sure they are importing the correct unit of measure and months of data. If the data already exists in the forecast program, it will be highlighted yellow. If a user imports data that is highlighted yellow, this new import will override the data that already exists in the forecast program. Users can manually uncheck the months of data not to import, if desired.
7. Click **Import**.

#### Steps for Inputting Actual Consumption Data Manually:
1. Navigate to the **Consumption-Based Forecast → Data Entry and Adjustments** screen.
2. Select the forecast program and the desired review period. By default, QAT pre-selects a date range of 36 months prior to the start of the forecasting period. A non-editable table and all products related to this forecast program are displayed, along with their adjusted consumption data if you have previously entered that data; otherwise, you will see yellow cells indicating that no consumption data has been entered. By default, the products and consumption are shown in planning units. The user can also expand each row of the table to display the consumption by region, if managing a multi-region program.
3. On the top table, click on a planning unit to display the detailed data table below for that planning unit. The detailed data table will have a section for each region in your program.
4. The detailed data table allows users to add, edit, adjust, or delete historical consumption records.
   - a. If you would like to enter data manually, enter the historical consumption for each region and month in the ‘Actual Consumption’ row.
   - b. If you have imported data from QAT, you will see your imported historical consumption in the ‘Actual Consumption’ row.
   - c. By default, data is assumed to be entered in the Planning Unit. However, the user can specify the appropriate unit for the detailed data by clicking on the “change” link under the Planning Unit name and in the subsequent pop-up, choosing to enter data using the planning unit, the forecasting unit quantities (applying a realm-managed conversion factor) or another user-entered unit (and conversion factor).
5. Once a user enters data in the “Actual Consumption” row in the bottom data table, click **Submit** in order to save the entries and visualize them in the graph.
   - Users can also copy & paste data from an Excel or other tabular formats into the “Actual Consumption” row.

### 8.A.2. Adjustments

**Purpose:** Enable users to prepare historical consumption data before moving on to the ‘Extrapolation’ screen. Historical actual consumption can be quantities sold, quantities dispensed to user, or quantities issued by storage facilities. On this screen, users can adjust historical consumption data that has been either manually entered on this screen or that has been imported from a QAT supply plan program.

#### Using this screen:

1. **There are three ways to adjust the data:**
   - **a. Adjust for under-reporting:** The default value is 100% reporting every month. The user can change this to the correct value. QAT will calculate the adjusted consumption due to underreporting. The calculation assumes that facilities that did not report any consumption had the same consumption rate as the ones that did.
   - **b. Adjust for stockouts:** For imported data, the number of stockout days is pulled in from the QAT supply plan program, if data is collected. The default value for stock out days is zero days (product assumed always in stock). The user can change this to the correct value and QAT will calculate the adjusted consumption due to stockouts. The calculation assumes that the days the product was stocked out would have had the same consumption rate as the rest of the time the product was in stock. The default value for number of days in a month are based on the calendar days, but users can adjust the number of days used for the stock out calculation in ‘Update Version Settings’.
          Stock Out Rate = Stocked Out (days) / # of Days in Month
          Adjusted Consumption = Actual Consumption / [Reporting Rate $\times$ (1 - Stock Out Rate)]
     *Example:* For a given month, a product had a consumption of 1,000 units, was out-of-stock for 5 out of 31 days in the month and the reporting rate was 98%:
          Stock Out Rate = 5 / 31 = 16.1%
          Adjusted Consumption = 1,000 / [0.98 $\times$ (1 - 0.161)] = 1,217 units
   - **c. Adjust for missing values:** Click the green ‘Interpolate’ button in the middle right of the screen to search for periods where the consumption value is blank and replace them with an interpolated value. QAT interpolates by finding the nearest values on either side (before or after the blank), calculates the straight line in between them and uses that straight-line formula to calculate the value for the blank(s). *Note that QAT will not interpolate for months where actual consumption is zero. QAT will only interpolate if there is at least one data point before and one data point after the blank value(s).* Mathematically:
     - Where $x$'s represent months, and $y$'s represent actual consumption,
     - Where known data values are $(x_0 , y_0)$ and $(x_1 , y_1)$
     - Where any unknown data values are $(x, y)$
          - The formula for the interpolated line is $y = y_0 + (x - x_0) \times (y_1 - y_0) / (x_1 - x_0)$

2. Use Detailed Data table to review the adjusted consumption.
3. Click **Submit** to save any entered/adjusted data. Once the adjustments are saved, the Graph will update.
4. Repeat steps 1-3 for each planning unit that needs to be adjusted.

### 8.A.3. Extrapolation

**Purpose:** Enable users to create a forecast by identifying trends and seasons from historical time series data entered by the user in the ‘Data Entry and Adjustment’ screen. Several statistical extrapolation options are available. Extrapolations from consumption data are made on a planning unit-by-planning unit basis.

#### Using this screen:

1. **Getting started on extrapolation:**
   - Before you use this screen, please ensure you have completed the ‘Data Entry and Adjustment’ screen for each planning unit and region you would like to extrapolate.
   - Use the filters at the top of this screen to select the planning unit, region to extrapolate, and date range for historical data to utilize.
   - The user may select one or several of the extrapolation methods available in QAT, as appropriate to the general consumption pattern and available data.
   - *Note that changes in this screen are optional – QAT automatically applies the default extrapolation parameters to all planning units after the Adjustments screen has been completed. The user then makes the final forecast selection in the ‘Compare and Select’ screen.*

2. **Extrapolation methods available in QAT:**
   Forecast methods in QAT are organized from simple to sophisticated.
   - **a. Moving Average:** Moving average is an average that moves along time, dropping older data as it incorporates newer data. For QAT to calculate the moving average, enter the number of months in the past that you would like to use in the calculation of the average. The user may select any positive integer for this field. Entering 5 for example would mean that the projection for the next month in the series would be the average of the preceding five months’ consumption. This method is most useful for short-term forecasts and is sensitive to trends. It is not appropriate for seasonal data.
   - **b. Semi-Averages:** Semi-average estimates trends based on two halves of a series. QAT divides the actual data into two equal parts (halves) and the arithmetic mean of the values of each part (half) is calculated as the ‘y’ values of two points on a line. The slope of the trend line is determined by the difference between these ‘y’ values over time as defined by the difference of the midpoints of the two halves of the series, or ‘x’ values, of the points. This method is sensitive to trends and useful for short- and medium-term forecasts but is not appropriate for seasonal data.
   - **c. Linear Regression:** Linear regression models the relationship between two variables by fitting a linear equation to observed data. Confidence interval: between 0% and 100% (exclusive) e.g., 90% confidence level indicates 90% of possible future points are to fall within this radius from prediction represented by the regression line. This method is not appropriate for seasonal data.
   - **d. Triple Exponential Smoothing (Holt-Winters):** In statistics, different types of smoothing are used to filter out the noise so that we can see patterns in a time series dataset more clearly. Exponential smoothing uses older data at exponentially decreasing weights over time. Smoothing parameters in exponential smoothing are set between 0 and 1, with values close to 1 favoring recent values and values close to 0 favoring older values. Users utilizing triple exponential smoothing can choose four parameters:
     - **alpha**, applies to the level or baseline of the dataset. Higher alpha values give more weight to the more recent data. The QAT default parameter for alpha is 0.2.
     - **beta**, determines how strongly recent trends should be valued as compared to older trends. The QAT default parameter for beta is 0.2.
     - **gamma**, reflects the seasonal component of the forecast. Seasonal generally refers to repeating patterns within a year. The higher the gamma, the more weight will be applied to the most recent seasonal component of the data. The QAT default parameter for gamma is 0.2.
     - **Confidence interval**: between 0% and 100% (exclusive) e.g. 90% confidence level indicates 90% of future points are to fall within this radius from prediction. The QAT default confidence interval is 85%.
     - *QAT will only calculate TES forecasts for datasets with 24 or more months of data.*
   - **e. ARIMA:** ARIMA or autoregressive integrated moving average enables two statistical models designed for stationary time series to be integrated and applied to non-stationary time series, that is, time series that have trends or seasons. It is often applied to short term forecasts. “Auto-regressive” means each point in the regression is influenced by its previous values and "moving average" implies that each point is an average, a linear combination of one or more adjacent points. Both the auto-regression and the moving average are "integrated" together to fit a best model for the series through differencing, or literally using the difference between points on a time series for the analysis instead of the raw values. ARIMA models have three parameters:
     - **p or AR (lag order):** the number of lag observations in the model. The QAT default parameter for p is 0.
     - **d or I (degree of differencing):** the number of times that the raw observations are differenced. This value is normally 1 (if there is a trend) or 0 (no trend). Other higher values are possible but not expected. The QAT default parameter for d is 1.
     - **q or MA (order of the moving average):** the size of the moving average window or the number of differenced observations to be averaged. The QAT default parameter for q is 1.
     - **Confidence interval**: between 0% and 100% (exclusive) e.g. 90% confidence level indicates 90% of future points are to fall within this radius from prediction. The QAT default confidence interval is 85%.
     - *The ARIMA calculation may be either seasonal or non-seasonal, based on the user’s choice and understanding of their data and expectations of whether or not consumption of a particular product is subject to seasonal influences. QAT’s default selection is for seasonal ARIMA. QAT will only calculate ARIMA forecasts for datasets with 13 or more months of data.*

3. **Which extrapolation method should I use?**
   Below are some considerations for selecting a forecast method. Forecast methods in QAT are organized from simple to sophisticated. In general,
   - More sophisticated models are more sensitive to problems in the data.
   - If you have poorer data (missing data points, variable reporting rates, &lt;12 months of data), simpler forecast methods like moving averages are likely more useful.
   - The choice of extrapolation method depends on the expected pattern in the data. Some typical patterns include:
     - **Stationary**, where the range of observed values over time hover around an average. Models applied to such datasets may include: Moving Average, ARIMA (non-seasonal).
     - **Trending with no seasonal component**, where the observed values have an increasing or decreasing trend. Models applied to such datasets may include: Semi-averages, Linear Regression.
     - **Trending and Seasonal**, where the observed values in a dataset have both trend and seasonal components. Models applied to such datasets may include: ARIMA (seasonal), Triple Exponential Smoothing (Holt-Winters).
     - **Seasonal without trend**, where the observed values have a seasonal component but no trend. Models applied to such datasets may include: Triple Exponential Smoothing (Holt-Winters).
   - The models suggested here are neither exhaustive nor exclusive. QAT enables the user to apply a variety of extrapolation methods and then to compare them using best fit or forecast error metrics.
   - The second step is to consider whether the forecast values are expected to reflect closely the historical patterns in your data and so whether you will use the error metrics to inform your selection. When choosing an output, (whether by disregarding the error metric or not) it will be important to document your rationale for doing so to inform discussions or reviews of your forecast and to help future forecasters to support their decisions.

4. **How do I interpret errors?**
   QAT automatically calculates forecast error metrics using several methods. These include:
   - **MAPE (Mean Absolute Percentage Error):** Can be interpreted as the average percentage difference between predictions and their intended targets in the dataset. For example, if MAPE is 15% then your predictions are on average 15% away from the actual values.
          MAPE = (1 / N) $\times \sum$ |(actual - forecast) / actual| $\times$ 100
   - **WAPE (Weighted Absolute Percentage Error):** WAPE is an appropriate metric for when the dataset used has low or intermittent values. A WAPE percentage of 5 means that the forecast was off by 5% over the entire dataset for a certain evaluation period. Depending on the use case, it is recommended to choose a model that gives the least WAPE value.
          WAPE = [$\sum$ |actual - forecast| / $\sum$ actual] $\times$ 100
   - **RMSE (Root Mean Squared Error):** RMSE can be interpreted as the average error that the model’s predictions have in comparison with the actual, with extra weight added to larger prediction errors. Generally, the closer RMSE is to zero, the more accurate the model.
          RMSE = $\sqrt{}$[$\sum$ (actual - forecast)$^2$ / N]
   - **MSE (Mean Squared Error):** MSE is the aggregated mean of the squared difference between the actuals and predictions. Large errors are highlighted due to this squaring. MSE is useful when working on models where occasional large errors must be minimized. Generally, the closer it is to 0, the more accurate the model.
          MSE = $\sum$ (actual - forecast)$^2$ / N
   - **R² (Coefficient of Determination):**
          $R^2$ = 1 - SSR / SST
     Where the sum squared of the residuals for the regression (SSR) is the sum of its residuals squared, and the total sum of squares (SST) is the sum of the distance the data is away from the mean, all squared. The $R^2$ value is always a number between 0 and 1. $R^2$ is a measure of the fit of a regression line to a series of historical observations with values closer to 1 indicating a stronger correspondence between the actual and predicted (regression model) values. It is not a measure of error and should not be used by itself to assess the fitness of a prediction, but in combination with other error metrics and the user’s knowledge of the program.

   Apart from $R^2$, the lower the score, the more closely the forecast method result fits the historical data. In models where historical patterns in a dataset are expected to be reflected in the future values, a low error value could be used to help select a preferred extrapolation method, and QAT will highlight these best fits in a table. However, if substantial changes which do not fit the historical data are anticipated, the best fit extrapolation may not be the most appropriate forecast to select. To make the best selection between extrapolation methods for your purpose, before reviewing error metrics, the most important thing is first understanding which method of extrapolation is most appropriate for the expected pattern in the data.

5. **Optimization of TES and ARIMA forecast parameters:**
   Users are free to use the QAT defaults or to enter alternative forecasting parameters with the intention of reducing the error metrics thereby increasing the correspondence between the forecast method outputs and the real datapoints in the historical data period. If the user is working online, QAT can optimize the TES and ARIMA parameters by iterating, calculating the RMSE of each iteration, and selecting the parameters that produce the lowest RMSE.
   - For TES, QAT calculates 125 iterations of the forecast, testing each of the alpha, beta and gamma parameters in combination with the following values: 0, 0.2, 0.4, 0.8 and 1. Whichever of the 125 combinations for a given product produces the result with the lowest RMSE will be displayed in the extrapolation screen.
   - For ARIMA or seasonal ARIMA, QAT calculates 24 iterations of the forecast, testing each of the p, d and q parameters in combination, using the following values:
     - p: 0 or 1
     - d: 0, 1 or 2
     - q: 0, 1, 2 or 3
     Whichever of the 24 combinations for a given product produces the ARIMA result with the lowest RMSE will be displayed in the extrapolation screen.
   - *Note: Statistics are not magic. The underlying assumption for all these methods of extrapolation are that trends and patterns in the historical data will continue into the future. Therefore, low error metrics do not necessarily guarantee a better forecast.*

6. **Bulk Extrapolation:**
   In the QAT extrapolation screen, the user can compare the outputs of the various extrapolation methods both graphically and in an output table, product by product. This allows the user to deselect extrapolation methods that they feel do not apply to a given product to limit the options in the Compare and Select screen to only those the user chooses to display.
   If the user would prefer to send all of the outputs of the available extrapolation methods for more than one product directly to the Compare and Select screen, the user can select bulk extrapolation. From the Bulk Extrapolation pop-up window, the user may then select an historical date range from which to extrapolate the forecast (only one date range per bulk extrapolation), whether to apply seasonality to their ARIMA calculation, which planning units and regions (if regional data are used) to include in the bulk extrapolation and whether or not to optimize ARIMA and TES parameters for the extrapolation.
   After running the bulk extrapolation, all results can be viewed in the Extrapolation Screen, the Compare and Select Screen and the Forecast Summary (regional) Screen dropdown box. The user may select their preferred extrapolation method from either the Compare and Select Screen or the Forecast Summary (regional) Screen.
   *Bulk extrapolation in QAT is particularly useful when working with a large set of products for which timely, complete and accurate consumption data is available for 12 or more months.*

## 8.B. Tree Forecasts

Users can conduct a tree-based forecast if the necessary data for a consumption-based forecast is not available or not helpful in predicting future consumption. Tree forecasts flexibly accommodate all other forecast methods, such as morbidity, services, and demographic methods. Users can specify changes over time in a tree, either by directly specifying the rate of change or extrapolating from past data.

### 8.B.1. Building a Tree

**Purpose:** Enable users to:
1. View a list of their existing trees.
2. Edit an existing tree by clicking any row.
3. Right click on a row to:
   - **Duplicate existing trees:** Users may also duplicate an existing tree to another program. Users must have access to both programs and have both downloaded to their local computer to duplicate across.
   - **Delete existing trees:** There will be a confirmation screen, but this action is thereafter irreversible. However, if you accidentally delete a tree, you can re-download a program if the deleted tree has been backed up to the server.
   - **Tree Table:** This allows user to edit the selected tree in the Tree Table screen.
4. Add a new tree to a downloaded program by clicking on the ‘Create or Select’ dropdown in the top right corner of the screen. New trees can be built:
   - Manually - select ‘+ Draw Your Own Tree’
   - From a tree template - select the name of the desired template.

*Note: Forecast Viewers can view any tree that has been uploaded to the server and they have access to; however, only Forecast Users/Admins will be able to create and edit/update trees.*

#### Using this screen:
- A forecast program must first be downloaded to build or edit a tree.
- Before building and editing a tree, first add the forecast program’s planning units in the ‘Update Planning Units’ screen.
- **Building a tree similar to an existing tree?**
  - *Same structure, different numbers:* Build only one tree, and use the scenario feature.
  - *Slightly different structure:* Duplicate an existing tree by right clicking on a row and selecting “Duplicate Tree.”
- Users can also delete trees by right clicking on a row and selecting “Delete Tree.”

### 8.B.2. Node Types & Functions

**Building the Tree:** The forecast tree is built from the top down, using different types of “nodes”. Each forecast tree must start with either an Aggregation node or a Number node, and include one or more Planning Unit nodes, which form the forecast output.

#### Node Actions:
- **Delete:** Deletes the selected node and all its children.
- **Copy/Move:** Copies or moves the selected node and all children under the node.
- **Add Branch Template:** Adds a tree template as a branch below the chosen node.
- **Add:** Adds a child to the selected node.
- **Collapse/Expand:** Collapse/Expands the current node and all its children.

#### Node Types:

| Node Type | Value | Potential Children |
| :--- | :--- | :--- |
| **Aggregation $\sum$** | Sum of children nodes. | $\sum$ or Number |
| **Number #** | Defined at this node. | % or FU |
| **Percentage %** | Percentage of the parent. | % or FU |
| **Funnel Node** | Sum of linked source nodes. | % or FU |
| **Forecasting Unit** | Percentage of the parent and forecasting unit parameters. | Planning Unit |
| **Planning Unit** | Percentage of the parent and planning unit parameters. | None |

#### Node Attributes:
- **$\sum$ Aggregation node-specific attributes:** None – it is defined by the sum of its children.
- **\# Number node-specific attributes:**
  - *Node Unit:* Dropdown consisting of either patient, client, customer, people, or unit.
  - *Month:* Choose the month/year this data was reported from.
  - *Node Value:* Define the number value for this node.
- **\% Percentage node-specific attributes:**
  - *Node Unit:* Dropdown consisting of either patient, client, customer, people, or unit.
  - *Month:* Choose the month/year this data was reported from.
  - *Percentage of Parent:* Define the percentage of the parent node.
  - *Parent Value for Month:* Non-editable and provided only as a reference.
  - *Node Value:* Auto-calculated by QAT based on the percentage defined by the user and the parent value.
- **Forecasting Unit node-specific attributes:**
  - *Month:* Choose the month/year this data was reported from.
  - *Percentage of Parent:* Define the percentage of the parent node.
  - *Parent Value for Month:* Non-editable and provided only as a reference.
  - *Percentage of Parent Value for Month:* Non-editable and provided only as a reference.
  - *Tracer Category:* Dropdown that can be used to help narrow-down forecasting units, but will be auto-filled once the forecasting unit is chosen.
  - *Copy from Template:* Advanced functionality, in which a user can utilize a Usage Template to assist with building a tree efficiently.
  - *Forecasting Unit:* Dropdown of all available forecasting units in user program.
  - *Planning Unit:* Dropdown filtered based on forecasting unit chosen.
  - *Type of Use:*
    - **Discrete:** Every _______ [parent node unit] requires _________ [forecasting unit of measure] __________ times per [day/week/month/year] for _____________ [day/week/month/year]
      - *Calculate (All in the First Month/Month-by-Month):* If selected “All in First Month,” QAT will frontload the total forecasted quantity to the node's start month. If selected “Month-by-Month,” QAT will calculate the quantity discretely month-by-month.
      - *Single Use (Yes/No):* Allows user to determine if this forecasting unit is used over a specific period of time.
    - **Continuous:** Every _______ [parent node unit] requires _________ [forecasting unit of measure] every _______ [day/week/month/year]
      - *Lag in months:* Used to detail if a forecasting unit is delayed or has a phased-product usage.
- **Planning Unit node-specific attributes:** Node automatically created when the forecasting unit is added to a tree. Most attributes are non-editable; however, Calculation Override allows users to choose to use QAT's auto-calculation for number of Planning Units or manually input a value.

### 8.B.3. Changes Over Time

While the tree structure stays constant throughout time, node percentages and values can change over time. Use the date dropdown to view the tree at any month. The three functionalities below are available in each node and allow the user to control how nodes change over time:
- **⇅ Modeling:** Allows user to specify the exact rate of change.
- **Transfer:** Allows users to link two nodes together – so the decrease from the source node is linked to the increase of the destination node. Useful for transitions.
- **Extrapolation:** Allows users to use historical data to extrapolate future change.

### 8.B.4. Building Tree Basics

Forecasting trees are built from the top-down using different types of nodes. Each forecast tree must start with either an Aggregation node or a Number node, and include one or more Planning Unit nodes. Planning Unit nodes must be the child of a Forecasting Unit node. Thus, a user must have at least three levels of nodes to produce a forecast output.

#### Steps for Building a Manual Tree:
1. Download a program.
2. Navigate to the **Forecasting Tree → Manage Tree** screen.
3. In the top-right of the screen, click the blue ‘Create or Select’ dropdown and select ‘+ Draw your own tree’ from the dropdown.
4. Define the tree details, such as the forecasting method (demographic, morbidity, or services), tree name, and region.
5. By default, QAT will begin with a number node with a value of zero on Level 0. Click on this default node to edit/update the node.
6. Add a new node (child) below the parent node by clicking on **Add** and choosing the appropriate Node Type.
7. Users can insert a tree template within the body of their tree by clicking the **Add Branch Template** icon.
8. Click on the tree levels to name the levels of a tree or reorder branches.
9. QAT trees are automatically saved to the local computer.
10. To batch edit values in a tree, user can use the **Tree Table** screen.

### 8.B.5. Scenarios

**Using Scenarios:** Scenarios are used to model different values for the same tree. Scenarios are useful when users would like to analyze the outcome of different changes over time, but would like to keep the same base structure. To create a tree with different structures, it is recommended to create another tree.

| Fixed for All Scenarios | Unique to each Scenario |
| :--- | :--- |
| Tree structure | Node value |
| Node Title | Month |
| Node Type | Notes |
| | Modeling/Transfer/Extrapolation |

*Notes:*
- By default, only active scenarios are shown.
- Users can choose different tree-scenario combinations for each Planning Unit in the Compare and Select screen.

### 8.B.6. Modeling/Transfers

**Purpose:** If a node changes over time, a user can utilize the Modeling/Transfer tab to model growth/loss within a single node or a transfer from one node to another. Note that this functionality is only available for Number (#) Nodes and Percentage (%) Nodes.

#### Using this tab:
Users can manually enter any desired changes over time in the top table, or they can utilize the Modeling Calculator.
- **Rules for Transfer Nodes:**
  - Number nodes can only transfer to other number nodes and must belong to the same level.
  - Percentage nodes can only transfer to other percentage nodes and must belong to the same parent.
  - Transfers are always negative from the source node and positive to the destination node.
  - Extrapolation is not allowed on a node that also has a transfer.

#### Modeling Types:

| Modeling Type | # Node Calculation | % Node Calculation |
| :--- | :--- | :--- |
| **Linear (#)** | +/- a static number each month | N/A |
| **Linear (%)** | +/- a static percentage each month | N/A |
| **Exponential (%)** | +/- a percentage each month (rolling) | N/A |
| **Linear (% point)** | N/A | +/- a static percentage each month |

#### Seasonality & Manual Changes:
Click on “Show Monthly Data” to show a table & graph with the node value across time.
- Users may add a manual change for a specific month or input a seasonality index percentage.
- Enter a positive % for an increased value in this month or a negative value for a decreased value.

### 8.B.7. Modeling Calculator

Click on the modeling calculator icon if you need assistance to calculate the monthly rate of change.

#### Ending Value/Change:
Use this if you have target value (non-cumulative) or total desired change over a specific period.
1. Start Date, Target Date, and Start Value are calculated or entered.
2. Enter data in: Target Ending Value, Target Change (%) or Target Change (#).
3. The formulas used depend on the Modeling Type (Linear %, Linear #, Exponential %).

#### Annual Target:
Use this if you have target values (cumulative over a year). QAT interpolates between midpoints by calculating a linear or exponential monthly rate of change.

### 8.B.8. Extrapolation Tab

**Purpose:** The extrapolation tab allows users to forecast future node values by extrapolating from past values in a tree node instead.

#### Using this tab:
1. Select the checkbox next to ‘Extrapolate’.
2. Select ‘Show Data’.
3. Enter actual values and reporting rates.
4. Click “Extrapolate.”

### 8.B.9. Advanced Techniques

- **Delayed or phased product usage:** Use the **Lag** field in the Forecasting Unit node.
- **Discrete product usage over a longer period of time:** Choose between "All in the First Month" or "Month-by-Month".
- **Funnel Nodes:** Aggregate multiple nodes into one node before adding additional nodes below.
  - *How to link values:* Indicate source nodes, create funnel nodes, and select source nodes.

## 8.C. Modeling Validations

**Purpose:** Once a tree has been built, users can use the Modeling Validation screen to view the change over time.

## 8.D. Product Validations

**Purpose:** Once a tree has been built, users can use the Product Validations screen to check the usage for the products in the forecast tree.

## 8.E. Using Templates

### 8.E.1. Tree Templates
**Purpose:** To enable users to begin designing their forecast tree from a pre-established template.

### 8.E.2. Branch Templates
**Purpose:** Branch templates enable users to add a tree template as a branch within a pre-existing tree.

### 8.E.3. Usage Templates
**Purpose:** Usage templates allow the user to fill in the details for a forecasting unit node all at once.

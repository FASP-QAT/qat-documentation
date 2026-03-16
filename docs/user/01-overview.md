---
id: overview
title: "Overview"
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

## Introduction

The Global Health Supply Chain – Procurement and Supply Management (GHSC-PSM) program is an official project of the United States Agency for International Development (USAID), implemented by Chemonics International and its consortium members. The purpose of GHSC-PSM is to ensure uninterrupted supplies of health commodities in support of US Government-funded public health initiatives around the world.

The Forecasting and Supply Planning (FASP) tool modernization initiative was supported with funding from the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR), the U.S. President’s Malaria Initiative (PMI), USAID’s family planning and reproductive health (FP/RH) program, and USAID’s maternal and child health (MCH) program, which share the cost of the project.

Previous USAID-funded projects, including the Supply Chain Management Systems (SCMS) and DELIVER developed and implemented the previous suite of FASP tools used in the global health domain. These tools performed their specific functions well and achieved their main objectives. The tools, however, were designed separately, were inconsistent in terms of the user interfaces, and required manual manipulation for data exchange.

The primary objectives of this initiative were to build the next generation FASP tools on a scalable and modular platform that is operating-system agnostic; a tool that is web-based with significant offline capabilities; designed to allow for seamless data exchange and sharing across key stakeholders and public health systems, as well as have a user-centric interface for overall usability and automates supply chain functions for end-to-end data visibility and evidence-based decision-making that extends across global and national supply chains and encourages coordination with all stakeholders.

## Forecasting vs. Supply Planning

A forecast is an estimate/prediction of the quantities of products to be consumed/utilized by clients or consumers over a future period of time. Supply planning is the component of supply chain management involved with determining how to best fulfill the requirements created from the demand plan. The objective is to balance supply and demand in a manner that achieves the service delivery and financial objectives of the health program.

## What is QAT and What Can It Do for You?

The Quantification Analytics Tool (QAT) is a modernized solution for country-led forecasting and supply planning. QAT leverages new technologies to enhance and modernize the functionality offered by the incumbent PipeLine and Quantimed tools by providing flexible forecasting tree structures, advanced extrapolation methodologies, scenario planning and updated planning logic. It also streamlines forecasting supply planning activities. Furthermore, the QAT enables offline functioning that helps users log their data even when there is no network coverage. QAT is changing the paradigm of legacy forecasting and planning solutions by leveraging master data management to drive standardization and increase visibility across all programs.

This new tool seeks to enable users to do multi-method forecasting, compare outputs, quickly transfer the forecast to the supply plan module to optimize commodity procurement and delivery schedules, monitor the stock status of products and share data with external platforms and key stakeholders.

QAT supports forecasting, monitoring, and procurement planning functions, as explained below:

**QAT forecasting functions include:**

- Forecasts based on multiple types of data.

- Advanced extrapolation methodologies, including moving averages, semi averages, linear regression, Holt-Winters, and Auto Regressive Integrated Moving Averages (ARIMA).

- Forecasting tree development that allows flexibility for multiple applications.

- Visual comparison of multiple forecast outputs to drive stakeholder consensus and selection of final output.

**QAT monitoring functions include:**

- Monitoring stock balances, in terms of quantities and months of stocks on hand in the entire program.

- Comparing stock balances to maximum and minimum stock parameters and identifying stock outs, balances below minimum or above maximum.

- Automating the identification of problems such as additional procurements needed.

**Procurement planning functions include:**

- Calculation of shortfalls/surpluses and quantities needed to maintain the program’s optimum stock levels.

- Automated calculation and tracking of pending actions, based on lead times such as shipments to plan, order, ship, and receive.

- Calculation of estimated shipment and freight costs.

- Tracking estimated budget expenditures.

- Comparison of alternative procurement scenarios and analysis.

## Who Should Use QAT?

It is increasingly necessary that local program managers be empowered to do their own forecasting, monitoring, and procurement planning; they must also take charge of coordinating the activities of donors and local suppliers, as well as those of their own logistics management staff. While program managers and decision makers will be the primary users of QAT, the system can provide information to host country policy makers, country directors, procurers, and donors.

|                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Who**                                            | **Purpose**                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Supply Planners / Program Managers**             | Managing procurements from multiple funding sources (with different budgets), multiple procurement agents (with different catalogs, and lead times) and consumption and inventory data coming from different levels of the supply chain. QAT will help decrease the risk of stock imbalances by providing increased visibility into procurement planning, and stock status monitoring in the near- and long-term. |
| **Forecast/Demand Planners**                       | Estimating the demand with different methodologies (consumption, demographic, morbidity, services) using flexible and easy-to-use templates, advanced extrapolation methods, and built-in validations. Guide conversations, build assumptions, compare methodologies, and select final commodity forecasts using QAT's built-in visualizations to                                                                 |
| **Host-country policy makers / country directors** | Use QAT to visually compare available forecasts, as well as highlight any stock imbalances and the implications of different decisions, such as new program targets, budgetary constraints, and procurement policies.                                                                                                                                                                                             |
| **Procurers and donors**                           | QAT highlights the current supply status and future procurement requirements                                                                                                                                                                                                                                                                                                                                      |

Table 1: Recommended QAT users and purpose

## Important QAT Concepts and Terms

### Cross-cutting terms

|                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Terms**              | **Definitions**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Forecasting Unit**   | The base unit that will be used for a specified forecasting period (e.g. one tablet, one condom, one milliliter).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Master Data (Sync)** | Master data is a cleaned/standardized set of data that is shared and used across a system. Many data points in QAT are standardized – for example, in the Global Health Realm, product lists, shipment statuses, data sources, etc are shared. Users can request updates and additions to this master data though a ticketing mechanism. QAT will sync master when a user logs in online or if the user chooses to manually sync. Note that for the full forecast or supply plan data, users must download the data to their local computer and upload it to the server when done. See Section 3 Managing Programs and Versions for more. |
| **Planning Unit**      | The product to be planned for in QAT. It is a product with a full description up to the primary packaging (e.g. bottle of 30 tablets, 10x10 blister pack, etc.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Programs**           | A program arises similar in structure to a PipeLine “supply plans database” in the supply planning module, or a Quantimed dataset in the forecasting module. Each program consists of only one country, one or more technical area(s), one region (national level, central level, etc.), and one organization (MOH, PEPFAR-only, PMI-only).                                                                                                                                                                                                                                                                                               |
| **Realm**              | QAT is subdivided into realms, each one governed by their own master data (inclusive of product catalog, funder names, procurement agent names, etc.). QAT has started with the Global Health Realm, but future realms could be set up for other fields such as education supply chains, agriculture supply chains, etc.                                                                                                                                                                                                                                                                                                                  |
| **Region**             | QAT users can capture data at sub-national levels by structuring their programs with regions. The regions are defined at the program level. If a program administrator does not have subnational-level data or prefers to enter aggregated values, the user may keep the region as “national” or “central.” To define sub-national levels, both forecast/actual consumption and inventory/adjustments must be entered at each level, which the application would then aggregate to a national total.                                                                                                                                      |
| **Technical Area**     | In QAT, technical area is synonymous with commodity groups (i.e. ARV, Family Planning, Malaria, etc.) and are used to build a QAT program.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Tickets**            | When a program user notices an issue with QAT (i.e. bug, system error) or would like to update/add master data, user role/access, or a program, they may submit a ticket. This ticket will be resolved by a realm or application administrator and changes made accordingly.                                                                                                                                                                                                                                                                                                                                                              |
| **User Roles**         | These are dedicated assignments to users that allow for different levels of access to data and functional areas within QAT.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Supply Planning Terms

<table>
  <tbody>
    <tr class="odd">
      <td>
        <strong>Terms</strong>
      </td>
      <td>
        <strong>Definitions</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Alternate Reporting Unit (ARU)</strong>
      </td>
      <td>
        <strong> The product and the unit that the country's data (consumption or stock) is reported in. This could be the same as the planning unit or may be different. QAT users can define an alternate reporting unit and a conversion factor (multiplier) to the planning unit. (E.g., The planning unit is one bottle of 30 tablets; inventory reported in a box of 20 bottles (alternate reporting unit) = 100; multiplier is 20. Therefore, inventory reported is converted to planning units = 20 x 100 = 2,000 bottles of 30 tablets.) See </strong> 
        <strong>Section 4.A3</strong> 
        <strong>Alternate Reporting Unit for more.</strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Average Monthly Consumption (AMC)</strong>
      </td>
      <td>
        <p>
          <strong> A dynamic value (could be different month to month) that determines the average quantity a product is used over a selected period of time. For QAT, the default AMC will be an average of the past three (3) months of consumption, the current month, and two (2) months into the future. If there is missing monthly consumption data within the calculated time period, it will be treated as “null,” not as zero. QAT program administrators have the ability to change the AMC time period to a maximum of 12 months into the past and 12 months into the future. </strong>
        </p>
        <p>
          <img
            src="/img/media/image6.png"
            style={{width: '4.87597in', height: '0.20639in'}}
            alt="P461C6T5#yIS1"
          />
        </p>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Data Source</strong>
      </td>
      <td>
        <strong> A data source is the location where data that is being entered into QAT originates from. Data sources should be applied for transactional records (Consumption, Inventory, Adjustments and Shipments) by QAT users. The selection of data sources for each transactional record will depend on which Data Source Type that record is for. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Enterprise resource planning (ERP)</strong>
      </td>
      <td>
        <strong> The software is designed to interface with different procurement management (ie Enterprise Resource Planning) systems from the various procurement agents. Initially, QAT will have an interface with ARTMIS that will enable import of USAID product information along with shipment data directly into QAT, reducing workload on planners to update shipment delivery dates, quantities, and statuses. In the future, PSM will work to engage other procurement agents to interface with their systems, thus enabling importation of shipment data from them. </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Funding Source</strong>
      </td>
      <td>
        <strong> Funding Source is any financial institution or other entity providing funding or facilities for the program. Every shipment should be assigned a funding source. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Lead Times</strong>
      </td>
      <td>
        <p>
          <strong> Lead times for QAT shipments have been mapped to the supply planning statuses and are inputted per product, procurement agent, or program by the QAT program administrator. There are six different lead time calculations: </strong>
        </p>
        <ul>
          <li>
            <blockquote>
              <p>
                <strong> Planned to Submitted: time from when a shipment is planned (need identified) until it is entered into the procurement agent’s system. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Submitted to Approved: time from when the shipment is entered into the procurement agent’s system until it is approved for procurement. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Approved to Shipped: time from when the shipment is officially approved for procurement until it is shipped by the supplier. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Shipped to Arrived (sea) and Shipped to Arrived (air): time from when the shipment has left the supplier’s location until it arrives at the port of entry. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Arrived to Received: time from when the shipment arrives at port of entry and is in the customs clearance process until it arrives at the final destination and is ready to distribute. </strong>
              </p>
            </blockquote>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Minimum &amp; Maximum Stock Levels</strong>
      </td>
      <td>
        <p>
          <strong> The minimum stock level (in months) is determined per planning unit and is set at the program level. QAT program administrators can adjust as desired. </strong>
        </p>
        <p>
          <img
            src="/img/media/image7.png"
            style={{width: '4.63348in', height: '0.16036in'}}
            alt="P484C16T5#yIS1"
          />
        </p>
        <p>
          <strong> The maximum stock levels (in months) are dynamically calculated based on the minimum stock level plus the reorder interval. </strong>
        </p>
        <p>
          <img
            src="/img/media/image8.png"
            style={{width: '5.35416in', height: '0.10198in'}}
            alt="P488C16T5#yIS1"
          />
        </p>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Minimum Order Quantity (MOQ)</strong>
      </td>
      <td>
        <strong>Minimum number of units a product must be ordered in.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Months of Stock</strong>
      </td>
      <td>
        <p>
          <strong> This measure is conceptually the same as in PipeLine. However, due to the new AMC calculation methodology, results may vary from those seen in PipeLine. </strong>
        </p>
        <p>
          <img
            src="/img/media/image9.png"
            style={{width: '2.50694in', height: '0.37265in'}}
            alt="P496C20T5#yIS1"
          />
        </p>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Plan by MOS</strong>
      </td>
      <td>
        <p>
          <strong> For products that are consumed in high quantities, planning by Months of Stock (MOS) is more appropriate. For these products, we expect: </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Minimal expiries</strong>
            </p>
          </li>
          <li>
            <p>
              <strong> Shipments mostly replacing consumption rather than expired product </strong>
            </p>
          </li>
          <li>
            <p>
              <strong> Minimum and maximum months of Stock (MOS) rather than a minimum or maximum quantity to be the appropriate method to plan for the product. </strong>
            </p>
          </li>
        </ul>
        <p>
          Therefore, QAT offers the option to “Plan by MOS” See Section 4.A2
          Planning Units for how to update this parameter and Section 5.A Supply
          Planning: An Overview for more information on the supply planning
          implications.
        </p>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Plan by Quantity</strong>
      </td>
      <td>
        <p>
          Some products are consumed in low quantities, for emergency purposes
          with high expiries, such as calcium gluconate for pre-eclampsia,
          severe malaria treatment in the malaria elimination context,
          anti-venom treatment for rare bites or fire extinguishers. For these
          high expiry, low consumption products, we expect:
        </p>
        <ul>
          <li>
            <p>high inventory compared to consumption</p>
          </li>
          <li>
            <p>high amount of expiries</p>
          </li>
          <li>
            <p>
              shipments replacing both consumption (small percentage) and
              expired product (large percentage)
            </p>
          </li>
          <li>
            <p>
              A minimum quantity of stock (e.g. e.g. 2 units per facility *
              2,000 facilities = 4,000 min) rather than a minimum months of
              stock
            </p>
          </li>
        </ul>
        <p>
          Therefore, QAT offers the option to “Plan by Quantity” See Section
          4.A2 Planning Units for how to update this parameter and Section 5.A
          Supply Planning: An Overview for more information on the supply
          planning implications.
        </p>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Reorder Interval</strong>
      </td>
      <td>
        <p>
          <strong> A user-input number of months between shipments. QAT program administrators can adjust (default = 1 month) as desired. The reorder interval is used to calculate the maximum stock parameter. </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong> For Plan by MOS, Min MOS + Reorder Interval = Max MOS. </strong>
            </p>
          </li>
          <li>
            <p>
              <strong> For Plan by Quantity, Min Quantity + Reorder Interval * AMC = Max Quantity. </strong>
            </p>
          </li>
        </ul>
        <p>See Section 4.A2 Planning Units for how to update this parameter.</p>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Shipment Statuses</strong>
      </td>
      <td>
        <p>
          <strong> Within QAT, there are a total of nine supply planning statuses that have been identified through the shipment’s lifecycle. These nine statuses are: </strong>
        </p>
        <p>
          <strong> Suggested: shipments “suggested” by QAT as an early warning to avoid going below minimum stock levels. These are not actual shipments and as such, do not affect stock projections. Only when a suggested shipment is accepted and the status change to planned, will it be counted towards your stock projections. </strong>
        </p>
        <ul>
          <li>
            <blockquote>
              <p>
                <strong> Planned: could be manually entered or suggested shipments accepted by the QAT user and are included in stock projections. Must have an assigned procurement agent and funding source (which could be TBD). </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Submitted: shipments that have been placed in a procurement management system (i.e. ARTMIS, WAMBO) and have a designated order number (i.e. RO number). </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Approved: shipments that have been approved by the procurement agent/funder. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Shipped: orders that have been shipped by the supplier. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Arrived: shipments that have arrived at the port of entry and are in the customs clearance process. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Received: shipments that have been received at destination and ready to distribute. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> Cancelled: shipment was placed in a procurement management system, but later cancelled due to various reasons. These do not count towards projected inventory balances. </strong>
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <strong> On-hold: shipment in QAT that has been placed in the procurement management system but is waiting for decision-maker action. These do count towards projected inventory balances. </strong>
              </p>
            </blockquote>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Unmet Demand</strong>
      </td>
      <td>
        <p>
          <strong> QAT only allows stock on hand (SOH) to be equal to or greater than zero, thus avoiding negative stock balances. Unmet demand is used by QAT to estimate quantities of product that would have been consumed if sufficient stock was available: </strong>
        </p>
        <ol type="a">
          <li>
            <p>
              <strong> When the forecast consumption is greater than the projected available beginning stock on hand for that month. </strong>
            </p>
          </li>
          <li>
            <p>
              <strong> When the actual consumption also includes periods of stock out, QAT estimates what the consumption would have been during those days without stock (even when the ending balance is greater than zero). </strong>
            </p>
          </li>
          <li>
            <p>
              <strong> When a negative manual adjustment is larger than the projected ending balance. </strong>
            </p>
          </li>
        </ol>
        <p>
          <strong>QAT places the unmet demand in a separate row.</strong>
        </p>
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Volumetrics</strong>
      </td>
      <td>
        <strong> In QAT, programs users will be able to define volumes, and thus be able to estimate the volumetrics of orders. </strong>
      </td>
    </tr>
  </tbody>
</table>

### Forecasting Terms

|                                   |                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Terms**                         | **Definitions**                                                                                                                                                                                                                                                                                                     |
| **Consumption-based forecast**    | **A prediction of future demand based on historical actual consumption data, using linear and non-linear extrapolation methodologies. (Section 8.A** Consumption Forecasts **for more)**                                                                                                                            |
| **Tree Forecast**                 | **Flexible forecasting structures used to convert different types of data (demographics, morbidity, services) into commodities for the purpose of extrapolating or interpolating into the future in the forecasting module. (Section 8.B** Tree Forecasts **for more)**                                             |
| **Tree Template**                 | **Pre-defined forecasting trees that can be downloaded and customized to each user’s context in the forecasting module. (Section 8.B4.a** Tree Templates **for more)**                                                                                                                                              |
| **Usage Template**                | **Pre-defined rates of use of specific products that can be applied across trees and programs in the forecasting module. (Section 8.B4.c** Usage Templates **for more)**                                                                                                                                            |
| **Continuous and Discrete usage** | **When defining a product’s usage rate on a forecasting tree, the user can choose whether it is continuous use (i.e., unending) or discrete use. If discrete, the user must specify the period of time the product is used for, or can also specify if the product is for single use, thus no period is required.** |

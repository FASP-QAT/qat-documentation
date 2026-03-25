---
id: overview
title: "Overview"
sidebar_label: "Overview"
sidebar_position: 4
---

# Overview

# Overview

## Introduction

The Global Health Supply Chain – Procurement and Supply Management (GHSC-PSM) program is an official United States Agency for International Development (USAID) project. Implemented by Chemonics International and its consortium members, GHSC-PSM ensures the uninterrupted supply of health commodities to support U.S. Government-funded public health initiatives worldwide.

The Forecasting and Supply Planning (FASP) tool modernization initiative was supported by the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR), the U.S. President’s Malaria Initiative (PMI), USAID’s Family Planning and Reproductive Health (FP/RH) program, and USAID’s Maternal and Child Health (MCH) program.

### Background and Objectives
Previous USAID-funded projects, such as Supply Chain Management Systems (SCMS) and DELIVER, successfully implemented a suite of FASP tools. However, these tools were often siloed, had inconsistent user interfaces, and required manual data exchange.

The primary objective of this initiative was to build a next-generation FASP platform that is:
- **Scalable and Modular**: Built on a modern, operating-system-agnostic architecture.
- **Web-Based with Offline Capabilities**: Ensuring accessibility even in low-connectivity environments.
- **Interoperable**: Designed for seamless data sharing across stakeholders and public health systems.
- **User-Centric**: Focused on usability and automation to drive end-to-end data visibility and evidence-based decision-making.

## Forecasting vs. Supply Planning

- **Forecasting**: An estimate or prediction of the quantities of products to be consumed by clients or consumers over a future period.
- **Supply Planning**: The component of supply chain management focused on fulfilling demand plan requirements. The goal is to balance supply and demand to meet the financial and service delivery objectives of the health program.

## What is QAT and What Can It Do for You?

The Quantification Analytics Tool (QAT) is a modernized solution for country-led forecasting and supply planning. QAT leverages advanced technologies to enhance the functionality of legacy tools like PipeLine and Quantimed by providing:
- **Flexible Forecasting**: Customizable tree structures and advanced extrapolation methodologies (ARIMA, Holt-Winters, etc.).
- **Scenario Planning**: Robust tools to model and compare different supply chain scenarios.
- **Offline Functionality**: Reliable data entry and management without a constant network connection.
- **Standardization**: Master data management to drive consistency across all programs.

### Core Functions
- **Forecasting**: Multi-method forecasts, visual output comparison, and stakeholder consensus tools.
- **Monitoring**: Real-time tracking of stock balances, minimum/maximum stock parameters, and automated problem identification (e.g., pending shortfalls).
- **Procurement Planning**: Shortfall calculations, lead-time-based action tracking, and estimated shipment/freight cost modeling.

## Who Should Use QAT?

QAT empowers local program managers to take charge of their own forecasting and procurement planning. While program managers are the primary users, the system provides vital insights for policymakers, country directors, procurers, and donors.

| User Group | Purpose |
| :--- | :--- |
| **Supply Planners / Program Managers** | Manage procurements across multiple funding sources and procurement agents. QAT provides visibility into long-term stock status and decreases the risk of stock imbalances. |
| **Forecast / Demand Planners** | Estimate demand using flexible templates and built-in validations. Compare methodologies and select final commodity forecasts using integrated visualizations. |
| **Policy Makers / Directors** | Visually compare forecasts and analyze the implications of budgetary constraints or new program targets. |
| **Procurers and Donors** | Gain clear visibility into current supply status and future procurement requirements. |

*Table 1: Recommended QAT users and purpose*

## Important QAT Concepts and Terms

### Cross-cutting Terms

| Term | Definition |
| :--- | :--- |
| **Forecasting Unit** | The base unit used for a specified forecasting period (e.g., one tablet, one milliliter). |
| **Master Data (Sync)** | A standardized set of data (e.g., product lists, funder names) shared across the system. Users can request updates via a ticketing mechanism. QAT syncs master data during login or manual triggers. Note that full forecast or supply plan datasets must be downloaded for local use. |
| **Planning Unit** | The product planned for in QAT, described up to the primary packaging level (e.g., a bottle of 30 tablets). |
| **Programs** | Similar to a "supply plan database" in legacy tools. Each program consists of one country, specific technical areas, a region (e.g., national level), and an organization (e.g., MOH). |
| **Realm** | A high-level subdivision in QAT (e.g., Global Health) governed by its own master data. |
| **Region** | Sub-national levels used to structure program data. To define a region, both consumption and inventory data must be entered at that level for national aggregation. |
| **Technical Area** | Synonymous with commodity groups (e.g., ARV, Malaria, Family Planning) used to categorize programs. |
| **Tickets** | The mechanism for reporting bugs or requesting master data updates. Tickets are resolved by system administrators. |
| **User Roles** | Dedicated assignments that define data access and functional permissions within the application. |

### Supply Planning Terms

| Term | Definition |
| :--- | :--- |
| **Alternate Reporting Unit (ARU)** | The product and unit in which a country's data (consumption or stock) is reported. This may differ from the planning unit. QAT allows users to define an ARU and a conversion factor (multiplier) to the planning unit. For example, if the planning unit is a bottle of 30 tablets and inventory is reported in boxes of 20 bottles, the multiplier is 20. See Section 4.A3 (Alternate Reporting Unit) for details. |
| **Average Monthly Consumption (AMC)** | A dynamic value calculated month-to-month based on average product usage over a specific period. By default, QAT calculates AMC using the past three months, the current month, and the next two months. Missing monthly data is treated as "null" rather than zero. Administrators can adjust the calculation window up to 12 months into the past and future.<br/>![AMC Formula](/img/media/image6.png) |
| **Data Source** | The origin of data entered into QAT. Data sources must be applied to all transactional records (Consumption, Inventory, Adjustments, and Shipments). Selection depends on the specific Data Source Type of the record. |
| **Enterprise Resource Planning (ERP)** | QAT is designed to interface with various procurement management systems (ERPs). Currently, an interface with ARTMIS enables the direct import of USAID product and shipment data which reduces manual planning efforts by auto-updating delivery dates and statuses. |
| **Funding Source** | Any financial institution or entity providing facilities or funding for the program. Every shipment must be assigned a funding source. |
| **Lead Times** | Mapped to supply planning statuses, lead times are input per product, procurement agent, or program. Calculations include:<br/>- **Planned to Submitted**: Time from identifying a need to entry in the procurement system.<br/>- **Submitted to Approved**: Time from entry to procurement approval.<br/>- **Approved to Shipped**: Time from approval to supplier dispatch.<br/>- **Shipped to Arrived (Sea/Air)**: Transit time to the port of entry.<br/>- **Arrived to Received**: Time for customs clearance and delivery to the final destination. |
| **Min & Max Stock Levels** | **Minimum stock level** (in months) is determined per planning unit at the program level. <br/>![Min Stock Formula](/img/media/image7.png)<br/>**Maximum stock level** is dynamically calculated as the minimum stock level plus the reorder interval.<br/>![Max Stock Formula](/img/media/image8.png) |
| **Minimum Order Quantity (MOQ)** | The minimum number of units a product must be ordered in. |
| **Months of Stock (MOS)** | A measure of inventory levels relative to consumption, conceptually similar to PipeLine but using the updated QAT AMC methodology.<br/>![MOS Formula](/img/media/image9.png) |
| **Plan by MOS** | Best suited for high-consumption products with minimal expiries where shipments primarily replace consumed stock. Planning focuses on maintaining month-based stock parameters. See Section 4.A2 for configuration. |
| **Plan by Quantity** | Best suited for low-consumption products with high expiry rates (e.g., emergency medicines). Planning focuses on maintaining a fixed quantity of stock (e.g., 2 units per facility) rather than months of stock. See Section 4.A2 for configuration. |
| **Reorder Interval** | The user-defined number of months between shipments (default is 1 month). This value is used to calculate maximum stock levels for both MOS and Quantity-based planning. |
| **Shipment Statuses** | Tracking a shipment through its lifecycle via nine statuses: Suggested (automated warning), Planned (confirmed for projection), Submitted (ordered), Approved, Shipped, Arrived (at port), Received (at destination), Cancelled, and On-Hold. |
| **Unmet Demand** | Quantities that would have been consumed if stock were available. QAT tracks unmet demand separately when:<br/>a) Forecasted consumption exceeds available stock.<br/>b) Actual consumption includes stock-out periods.<br/>c) A negative adjustment exceeds the projected ending balance. |
| **Volumetrics** | Feature allowing users to define product volumes to estimate the total physical size and logistics requirements of orders. |

### Forecasting Terms

| Term | Definition |
| :--- | :--- |
| **Consumption-based Forecast** | A prediction of future demand based on historical actual consumption data using linear and non-linear extrapolation methodologies. |
| **Tree Forecast** | Flexible forecasting structures used to convert diverse data types (demographics, morbidity, services) into commodity requirements by modeling service pathways. |
| **Tree Template** | Pre-defined forecasting trees that can be downloaded and customized to a specific user's context. |
| **Usage Template** | Pre-defined rates of use for specific products that can be applied consistently across different trees and programs. |
| **Continuous and Discrete Usage** | When defining usage rates, users can choose between **Continuous** (ongoing) or **Discrete** (specific period or single-use) applications. |

---
id: annex-4-business-functions
title: "Annex 4: Business Functions"
sidebar_label: "Annex 4: Business Functions"
sidebar_position: 16
---

# Annex 4. Business Functions

Business functions are granular capabilities assigned to roles. They define exactly what actions a user can perform within the system.

## Annex 4.A. Permission Verbs.
When configuring roles, the following verbs determine the level of access:
- **List**: Allows viewing the data table only; no additions or edits.
- **Add**: Allows creating new records.
- **Edit**: Allows updating existing records. (Note: Entities cannot be deleted, only disabled).
- **Manage**: A shortcut for List + Add + Edit.

---

## Annex 4.B. Translations & Admin Dashboards.
| Category | Business Function | Description |
| :--- | :--- | :--- |
| **Translations** | Label Translations | Update "Static Labels" (UI headers) across languages. |
| | Database Translations | Update "Dynamic Labels" (drop-down items) immediately. |
| | View Translations | Read-only access to all UI strings. |
| **Dashboards** | Application Dashboard | Access the global administrator overview. |
| | Realm Dashboard | Access the realm-specific administrator overview. |
| | Program Dashboard | Access the operational dashboard for specific programs. |

---

## Annex 4.C. Master Data Management.
| Category | Business Function | Description |
| :--- | :--- | :--- |
| **App Masters** | Manage Country/Currency | Global configuration of geographic and monetary units. |
| | Manage User/Role | Create users and define their functional permissions. |
| | Create/Edit Realm | Global setup of administrative realms. |
| **Realm Masters** | Manage Realm Country/Region | Map global countries to specific realm territories. |
| | Manage Funding Source | Define entities providing financial support for shipments. |
| | Manage Organization | Manage partner and government bodies within the realm. |
| | Manage Products | Full control over Forecasting, Planning, and Procurement Units. |
| | Equivalency Units | Define aggregation logic for related products. |

---

## Annex 4.D. Program & Supply Chain Operations.
| Category | Business Function | Description |
| :--- | :--- | :--- |
| **Programs** | Setup Program | Create and configure new Supply Planning or Forecast programs. |
| | Manage Planning Units | Configure program-specific lead times and stock levels. |
| | Manage Budget | Track and allocate financial resources at the program level. |
| **Version Control** | Upload Version | Sync local program edits to the central server. |
| | Review/Approve | Formally audit and finalize supply plan submissions. |
| | Notification Rules | Configure email triggers for upload/approval/rejection events. |
| **Shipments** | ERP Linking | Link QAT shipments to external procurement systems. |
| | Manual Tagging | Categorize shipments for advanced tracking. |

---

## Annex 4.E. Forecasting & Reporting.
| Category | Business Function | Description |
| :--- | :--- | :--- |
| **Methodologies** | Tree Forecasting | Build and manage tiered demand models (Aggregation/Percentage/Number). |
| | Consumption Forecast | Access data entry, adjustment, and extrapolation screens. |
| | Templates | Manage Usage and Tree templates for rapid setup. |
| **Reports** | View Reports | Access the full suite of analytical outputs. |
| | QAT Problem List | Access and manage data quality and planning issues. |
| | Global Reports | View aggregated data across all countries and programs. |

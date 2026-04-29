---
id: annex-4-business-functions
title: "Annex 4: Business Functions"
sidebar_label: "Annex 4: Business Functions"
sidebar_position: 16
---

# Section 13. Annex 4: Business Functions

Business functions are a set of capabilities available to the user. They are used when creating roles (see Roles (App Admin only)). Each role has one or more business functions.

For master level data, the verbs used in the business functions are as follows:
- **List** – Allows user to see the table with the existing data for that master data element. If only “List X” is chosen, the user can only see “X” but cannot edit or add.
- **Edit** – Allows user to update or edit the master data element. Note: Always include “list” along with “edit” or the user will not be able to see the screen to edit data elements. (NOTE: An entity cannot be deleted. Users can only ‘Disable” entities.)
- **Add** – Allows user to add a new record for the master data element. Note: Always include “list” along with “add” or the user will not be able to see the screen to add data elements.
- **Manage** – Allows user to perform all of the aforementioned functions.

The above business functions can be provided to users in any combination. For example:
- User A has only “List” access, so they can only view existing data (“read only”).
- User B has only “List” + “Edit” access, so they can view and edit existing data, but cannot add ‘new’ entities.
- User C has “List” + “Add” access, so they can add new entities and view the list of entities.
- User D has “Add” + “Edit” + “List” (Manage) access that enables performing all 3 actions.

## 13.A. Annex 4.B. Translations & Admin Dashboards

| Category | Business Function | Description |
| :--- | :--- | :--- |
| **Translations** | Label Translations | Update "Static Labels" (UI headers) across languages. |
| | Database Translations | Update "Dynamic Labels" (drop-down items) immediately. |
| | View Translations | Read-only access to all UI strings. |
| **Dashboards** | Application Dashboard | Access the global administrator overview. |
| | Realm Dashboard | Access the realm-specific administrator overview. |
| | Program Dashboard | Access the operational dashboard for specific programs. |

## 13.B. Annex 4.C. Master Data Management

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

## 13.C. Annex 4.D. Program & Supply Chain Operations

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

## 13.D. Annex 4.E. Forecasting & Reporting

| Category | Business Function | Description |
| :--- | :--- | :--- |
| **Methodologies** | Tree Forecasting | Build and manage tiered demand models (Aggregation/Percentage/Number). |
| | Consumption Forecast | Access data entry, adjustment, and extrapolation screens. |
| | Templates | Manage Usage and Tree templates for rapid setup. |
| **Reports** | View Reports | Access the full suite of analytical outputs. |
| **Quality** | QAT Problem List | Access and manage data quality and planning issues. |
| | Global Reports | View aggregated data across all countries and programs. |

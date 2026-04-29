---
id: annex-3-user-role-matrix
title: "Annex 3: User Role Matrix"
sidebar_label: "Annex 3: User Role Matrix"
sidebar_position: 15
---

# Section 12. Annex 3: User Role Matrix

This matrix defines the permissions for every role within QAT. Permissions are categorized by functional area.

## 12.A. Annex 3.A. Role Descriptions.

| Role | Description |
| :--- | :--- |
| **Application Admin** | Global system configuration, label translations, and role creation. |
| **Realm Admin** | Manages realm-specific master data (Products, Technical Areas, Orgs). |
| **SP Program Admin** | Manages program-level settings (Lead times, Planning Units, Budgets). |
| **SP Reviewer** | Reviews and approves supply plan versions. |
| **SP Program User** | Primary data entry and supply planning role. |
| **SP Viewer** | View-only access to reports, raw data, or review status. |
| **Forecast Admin** | Manages forecast-specific parameters and templates. |
| **Forecast User** | Builds forecasts and enters consumption data. |
| **Forecast Viewer** | View-only access to forecast outputs and trees. |

*Table 21: QAT User Role Descriptions*

---

## 12.B. Annex 3.B. Administrative & Master Data.
| Business Function | App Admin | Realm Admin | Program Admin | Users | Viewers |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Label & DB Translations | **X** | - | - | - | - |
| Manage Global Countries/Users | **X** | - | - | - | - |
| Manage Realm Masters (PU/FU/Org) | - | **X** | V | V | V |
| Manage Realm Countries/Regions | - | **X** | - | - | V |
| Manage Procurement Agents | - | **X** | **X** | V | V |

*Table 22: Permissions for Administrative and Master Data*

**Legend:** **X** = Full Access | **V** = View Only | **-** = No Access

---

## 12.C. Annex 3.C. Program Management.
| Business Function | Realm Admin | SP Admin | FC Admin | Users |
| :--- | :---: | :---: | :---: | :---: |
| Setup/Create New Program | **X** | - | **X** | - |
| Update Program Info & Settings | **X** | **X** | **X** | - |
| Manage Program Planning Units | **X** | **X** | **X** | - |
| Budget Management | **X** | **X** | - | V |
| Import/Export Programs | **X** | **X** | **X** | **X** |

*Table 23: Permissions for Program Management*

---

## 12.D. Annex 3.D. Supply Plan Operations.
| Business Function | Realm Admin | SP Admin | SP User | SP Reviewer | SP Viewer |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Data Entry (Cons./Inv./Ship.) | **X** | **X** | **X** | - | V¹ |
| Manage Supply Plan/Scenarios | **X** | **X** | **X** | **X** | V² |
| Upload Versions | **X** | **X** | **X** | - | - |
| Review/Approve Versions | - | - | - | **X** | - |
| ERP Shipment Linking | **X** | **X** | **X** | - | - |

*Table 24: Permissions for Supply Planning Operations*

*¹ SP Viewer - Data only | ² SP Viewer - Data/Review*

---

## 12.E. Annex 3.E. Forecasting Operations.
| Business Function | Realm Admin | FC Admin | FC User | FC Viewer |
| :--- | :---: | :---: | :---: | :---: |
| Consumption Data Entry | **X** | **X** | **X** | V |
| Manage/Build Trees | **X** | **X** | **X** | V |
| Extrapolation | **X** | **X** | **X** | V |
| Usage/Tree Templates | **X** | **X** | **X** | V |
| Import from Supply Plan | **X** | **X** | **X** | - |

*Table 25: Permissions for Forecasting Operations*

---

## 12.F. Annex 3.F. Reports Access.
| Report Type | Admins | Users | Viewers |
| :--- | :---: | :---: | :---: |
| Supply Plan / Stock Status | **X** | **X** | **X** |
| Consumption / Forecast Error | **X** | **X** | **X** |
| Shipment / Cost Reports | **X** | **X** | **X** |
| Inventory Turns / Expiries | **X** | **X** | **X** |
| Warehouse Capacity | **X** | **X** | **X** |

*Table 26: Permissions for Reports and Analytics*

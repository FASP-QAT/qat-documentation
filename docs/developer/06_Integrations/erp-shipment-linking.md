---
id: erp-shipment-linking
title: ERP Shipment Linking
sidebar_label: ERP Shipment Linking
sidebar_position: 5
---

# ERP Shipment linking

This section outlines the workflow and rules for linking and managing QAT and ERP shipments within the system. The ARTMIS team is sending incremental order and shipment files daily. This information is updated in QAT, and for locally loaded programs, the data is synced automatically to the user's machine.

## 1. QAT Shipments - Not Linked (QAT-Initiated Linking)

These are QAT shipments that are currently not linked to any ERP shipment.

### User Action:

    * Select one or more QAT shipments (the first selected is treated as the Parent Shipment).
    * Select one or more ERP shipments to link with.

### System Behavior:

    * The selected QAT shipments are updated:
        - ERP flag = true
        - Active = false
    * Child Shipments are created for:
        - RO No
        - RO Prime Line No
        - Order No
        - Prime Line No
        - KN Shipment No
    * All child shipments will have the Parent Shipment ID set to the ID of the selected Parent QAT shipment.
    * The non-parent QAT shipments will have the Parent Linked Shipment ID set to the Parent Shipment's ID.

## 2. QAT Shipments - Linked

This state reflects QAT shipments that are already linked. From here, users can either de-link or update ARU and Notes.
_ If Shipment is Committed: - Parent Shipment: + Active = false - Child Shipments: + Active = true + ERP flag = false
_ If Shipment is Not Committed: - Parent Shipment: + Active = true - Child Shipments: + Active = false + ERP flag = false

## 3. ERP Shipments - Not Linked (ERP-Initiated Linking)

    * These are ERP shipments that are not currently linked to any QAT shipment.
    * User Action:
        - Select one or more ERP shipments.
        - Either:
            + Link them to existing QAT shipments (first selected QAT shipment becomes the Parent Shipment), or
            + Choose to create new QAT shipments directly.
    * System Behavior:
        - The associated QAT shipments are updated:
            + ERP flag = true
            + Active = false
        - Child Shipments are created using:
            + RO No
            + RO Prime Line No
            + Order No
            + Prime Line No
            + KN Shipment No
    * All child shipments will have the Parent Shipment ID set to the ID of the selected Parent QAT shipment.
    * The QAT shipments that are not the Parent will have the Parent Linked Shipment ID set accordingly.

## 4. Status Mapping

| **ARTMIS External Status Stage**                   | **QAT Shipment Status** |
| :------------------------------------------------- | :---------------------- |
| Cancelled                                          | Cancelled               |
| Delivered                                          | Received                |
| Order on Hold \- Pending Clarification Stage       | On-hold                 |
| Order on Hold \- Pending Release                   | On-hold                 |
| Order on Hold \- Sourcing / Fulfillment Processing | On-hold                 |
| Partially Delivered                                | Shipped                 |
| Pending Clarification                              | Submitted               |
| Pending PSM Source Final Approval                  | Submitted               |
| Pending PSM Source Initial Approval                | Submitted               |
| Pending Recipient Approval                         | Submitted               |
| Pending Release                                    | Approved                |
| Pending Shipment                                   | Approved                |
| Pending USAID Approval                             | Submitted               |
| Shipped                                            | Shipped                 |
| Sourcing / Fulfillment Processing                  | Submitted               |

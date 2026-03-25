---
id: overview
title: Database Design
sidebar_label: Overview
sidebar_position: 1
---

# Database Design

The application has two databases:

1. The main database, MySQL, which is the source of truth for all data in the application.
2. The indexDB, which is a subset of the main database that allows the application to work offline.

**MySQL**: 
The `fasp-api` project uses a MySQL database. This database is stored on the server.

**IndexDB**:
The `fasp-ui` project uses an IndexedDB database, which is a subset of the main database, and is saved on each user's computer.

All masters data is loaded by default (restricted by access rights), and users select specific program-versions to load.

See an overview of the QAT Data Model from 2020 in [this PowerPoint presentation](https://github.com/FASP-QAT/fasp-api/blob/master/docs/Database%20ER%20Diagrams/QAT%20Data%20Model%20Overview.pptx).

## Entity-Relationship Diagrams (ERDs)

Entity-Relationship Diagrams (ERDs) for the QAT Application DB:

* [Dataset Masterdata](dataset-masterdata)
* [Consumption Forecast](consumption-forecast)
* [Tree Template](tree-template)
* [Tree Forecast](tree-forecast)
* [Application masters](application-masters)
* [Inventory, Shipment and Consumption](inventory-shipment-consumption)
* [Product related tables](product-related-tables)
* [Realm masters](realm-masters)
* [User, Roles & ACL](user-roles-acl)
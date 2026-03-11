---
id: data-sync
title: Data Sync Process
sidebar_label: Data Sync
sidebar_position: 3
---

# Data Sync Process

Data sync is the process of synchronizing data between the client and server, and is important for allowing offline operation.

## Master Data

Master data sync pulls all the Master information that is required by users to be able to make changes to the Program.

Master data sync occurs

- Every time a user logs on  
- Every time a new program is loaded
- When a User manually triggers a Master Data Sync

Master data sync follows these rules:

Server side data always overwrites the Client side since new changes are only possible on the Server and Master data is never changed or added on the Local side.

## Transactional Data

Users manually load data (to download to their computer) and commit data (upload to the server). Every time they commit data, the following occurs:

1. System checks each record in the Supply plan against what is contained on the Server  
1. Then the user is consulted to resolve conflicts on Consumption, Inventory and Shipment list.  
1. Once all the conflicts on consumption, inventory and shipment list are resolved, QAT re-runs the QAT problem action logic on the merged data. 
1. After that QAT check for conflicts in the data for the problems that do not have the in-compliance status.
1. The data is then stored on the Server as a new version of the Supply Plan / Forecast Dataset
1. The commit process is an Asynchronus process. So once the Server has completed the crunching of the Supply Plan / Forecast data it notifies that application that the commit has been completed
1. The System will then download the latest version of that Supply Plan / Forecast Dataset on to the local machine
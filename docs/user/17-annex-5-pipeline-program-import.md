---
id: annex-5-pipeline-program-import
title: "Annex 5: PipeLine Program Import"
sidebar_label: "Annex 5: PipeLine Program Import"
sidebar_position: 17
---

# Annex 5: PipeLine Program Import

This annex details the process for migrating legacy **PipeLine** databases into QAT. This is a three-stage process: conversion, upload, and data mapping.

> [!IMPORTANT]
> **Prerequisites:**
> - **Software:** Java JDK 1.8 or higher must be installed on your machine.
> - **Data Quality:** Your PipeLine database (.accdb) must not contain negative inventory values. Ensure all shipment, stock, and consumption data is finalized before starting.

---

## Step 1: Convert .accdb to JSON
QAT requires data in JSON format. Use the **PipeLine Converter Tool** for this conversion.

1. Navigate to **Program Management > PipeLine Program Import**.
2. Click the **Add (+)** button, then click the **Download (↓)** icon in the top right.
3. Select your OS (Windows or Linux) and download the `.zip` file.
4. Extract and run the converter (executable or `.jar` file).
5. **In the Converter:**
   - **Source:** Browse and select your `.accdb` file.
   - **Destination:** Select the folder where the resulting `.json` file should be saved.
   - Click **Convert**. A notification will appear upon success.

---

## Step 2: Upload to QAT
Once you have the `.json` file, you must upload it to the QAT server.

1. In QAT, return to **Program Management > PipeLine Program Import**.
2. Click **Add (+)**.
3. Browse and select your converted `.json` file.
4. Click **Submit**. You will receive a success message, and the new program will appear in the import list.

---

## Step 3: Data Mapping Wizard
The final stage involves mapping legacy PipeLine fields to QAT's realm-level master data.

Click on your imported program row to launch the **Mapping Wizard**. You will navigate through the following screens:
1. **Program Info**: Map Technical Areas and Organizations.
2. **Planning Units**: Link PipeLine products to QAT Planning Units.
3. **Data & Funding Sources**: Map logistics and financial partners.
4. **Shipments & Inventory**: Final review of imported records.

> [!TIP]
> Use the **Next** and **Back** buttons to navigate. If the system detects negative inventory during the final step, a warning will appear; you must resolve these discrepancies in the source data or during mapping.

Once completed, the program will be fully active in **Program Management > Update Program Info**, where it can be downloaded for active supply planning.

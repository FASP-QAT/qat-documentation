---
id: managing-programs-and-versions
title: "Managing Programs and Versions"
sidebar_label: "Managing Programs and Versions"
sidebar_position: 6
---

# Managing Programs and Versions

## Working with Program Data

QAT allows you to manage program data through four primary actions: downloading, uploading, importing, and exporting.

| Action | Mode | Description |
| :--- | :---: | :--- |
| **Download** | Online | Retrieve program data from the server to your local device. |
| **Upload** | Online | Save your local changes back to the server. |
| **Export** | Offline | Save local data to a compressed file (`.zip`) for sharing. |
| **Import** | Offline | Load data from an exported `.zip` file into QAT. |

> [!NOTE]
> Forecasting and Supply Planning programs are separate modules. Ensure you are in the correct module before performing any data operations.

### Workflow Summary
- **Download:** Necessary to begin work on any program.
- **Upload:** Share your work with the team. Uploading as "Final" in Supply Planning starts the review process; in Forecasting, it makes the data available for import into Supply Planning.
- **Export/Import:** Primarily used for sharing data in offline environments (e.g., via USB drive).

## Download and Delete Programs

### Overview
- **Who:** Admins, Program Users, and Reviewers. 
- **When:** Required for online downloads. Necessary even when working online to enable data entry and scenario planning.
- **Status Indicators:** 
  - ![Red Icon](/img/media/image89.png) **Red:** Your local version is outdated.
  - ![Blue Icon](/img/media/image90.png) **Blue:** You have the latest version or no version downloaded.

### How to Download a Program
1. Navigate to **Program Management** > **Download/Delete Program** (or click the download icon in the top right).
2. The screen displays programs with color-coded text:
   - **Green:** Latest version downloaded.
   - **Red:** Outdated version downloaded.
   - **Black:** Not yet downloaded.
3. Select the checkbox for the target program. QAT defaults to the latest version.
4. (Optional) Expand the triangle next to a program to select a specific historical version.
5. Click **Download**.

![Load Program Screen](/img/media/image91.png)
*Figure 1: Download Program Interface*

### Downloading a Subset of Data (Supply Planning Only)
To improve performance for large programs, you can download a truncated version of a supply plan.
- Check **Download specific range of supply plan data**.
- Select a start date (minimum 18 months in the past).
- **Note:** Older data remains safely on the server and is merged during future uploads.

### Deleting and Cleaning Up
- **Delete:** Click the trashcan icon next to a specific version.
- **Clean Up:** Click the broom icon to delete all local versions except the latest one.

> [!WARNING]
> If you see a "More recent server version" warning during synchronization, clicking **OK** will overwrite your local changes with the server's data. Click **Cancel** to keep your local edits.

![More recent server warning](/img/media/image97.png)
*Figure 2: Server Version Conflict Warning*
## Uploading Program Data

### Purpose of Uploading
- **Draft Version:** Save your work-in-progress to the server and share it with other users.
- **Final Version (Supply Planning):** Marks the supply plan as complete and initiates the review process.
- **Final Version (Forecasting):** Makes the forecast available for import into the Supply Planning module.

### How to Upload (Supply Planning)
1. Go to **Program Management** > **Upload Version** (or click the upload icon in the top right).
2. Select your program and the **Version Type** (Draft or Final).
3. Add **Notes** describing the changes made.
4. Review the comparison tabs (**Consumption, Inventory, Shipment, QPL**).
5. Resolve any conflicts (highlighted in **Yellow**) by right-clicking the row and selecting **Resolve Conflict**.
6. Click **Upload**.

> [!IMPORTANT]
> You cannot upload a "Final" version if there are any "Open" issues in the QAT Problem List. You must first address them or mark them as "In Compliance."

### How to Upload (Forecasting)
1. Navigate to **Program Management** > **Upload Version**.
2. Select the program and version type.
3. Review changes across the tabs (**Version Settings, Planning Unit, Consumption, Tree, Selected Forecast**).
4. Resolve conflicts and click **Upload**.
5. Complete the **Forecast Validation** checklist to ensure data integrity and click **Okay** to finalize the upload.

![Forecast Validation](/img/media/image105.png)
*Figure 3: Forecast Validation Screen*

## Supply Plan Version and Review (Supply Plan Module Only)

- <u>Who?</u> This function is available for **Application/Realm/Program
## Supply Plan Version and Review (Supply Planning Only)

### Overview
- **Who:** Admins, Program Users, Reviewers, and Viewers.
- **When:** Used online to track the submission and approval status of supply plans.
- **Why:** 
  - **Planners:** Monitor approval status and feedback.
  - **Reviewers:** Manage the review queue and approve/reject submissions.

### How to Review a Supply Plan
1. Navigate to **Program Management** > **Supply Plan Version and Review**.
2. Select filters (Period, Country, version type) to find the target plan.
3. Click a row to view details.

#### For Reviewers:
- **Supply Planning Tab:** Review stock status and data for each planning unit.
- **QAT Problem List Tab:** Review all flagged issues.
- **Action:** Check the **Reviewed** box for each issue. You can add **Reviewer Notes** or update the **Problem Status** (e.g., mark as "Resolved").
- **Manual Problems:** Click the **+** icon to add issues not caught by automatic validation.
- **Approval:** Set status to **Approved** or **Needs Revision**, add mandatory notes, and click **Update**.

![Supply Plan Review Interface](/img/media/image106.png)
*Figure 4: Supply Plan Versions and Review Screen*

### Email Notifications
QAT automatically notifies relevant users when a plan is:
- **Uploaded (Final):** Reviewers notified.
- **Needs Revision:** Planner notified.
- **Approved:** Planner and team notified.

## Exporting and Importing Data

### Exporting Programs
Use Export to save program data to your machine for offline sharing (e.g., via USB).
1. Go to **Program Management** > **Export Program**.
2. Select the downloaded program from the dropdown.
3. Choose encryption:
   - **Encrypted (default):** Secure; required for importing back into QAT.
   - **Unencrypted:** For external data analysis (e.g., Excel).
4. Click **Submit** and select a save location.

![Export Program Screen](/img/media/image110.png)
*Figure 5: Export Interface*

### Importing Programs
Use Import to load a `.zip` file into your local QAT instance.
1. Go to **Program Management** > **Import Program**.
2. Click **Browse** and select the `.zip` file.
3. Click **Next**, select the program(s) from the file, and click **Import**.

![Import Program Screen](/img/media/image111.png)
*Figure 6: Import Interface*

## Version Comparison (Forecasting Only)

Use the **Version Comparison** screen to view differences between two versions of the same forecast program.

1. Navigate to **Program Management** > **Version Comparison**.
2. Select the program and the two versions you wish to compare.
   - **Note:** Final versions are marked with an asterisk (`*`).
   - You can compare local vs. server and draft vs. final versions.
3. Review the comparison table, which summarizes the selected forecast, forecast quantity, and notes for each planning unit/region combination.
4. (Optional) Click the icons in the top right to export the comparison as a **PDF** or **CSV**.

![Version Comparison Interface](/img/media/image112.png)
*Figure 7: Forecast Version Comparison*

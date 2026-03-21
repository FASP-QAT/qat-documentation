---
id: annex-5-pipeline-program-import
title: "Annex 5: PipeLine Program Import"
sidebar_label: "Annex 5: PipeLine Program Import"
sidebar_position: 14
---

# Annex 5: PipeLine Program Import

In certain cases, users will be granted a special set of credentials that can import PipeLine databases if they desire to set up their program this way (see [Setting up a new program](10-annex-1-application-realm-administrator-manual.md#setting-up-a-new-program) in Annex 1).

**Step 1: Convert the .accdb file into a JSON file:**

_About the PipeLine Access DB to JSON conversion tool:_ Since the QAT system is only able to import program data in JSON format and PipeLine databases are in .accdb format, QAT has a downloadable tool for converting the .accdb file into a JSON file, thus allowing importation into QAT. Once installed, this tool does not require internet access to run. Also, this tool allows the user to choose their preferred language.

1.  Confirm that you have the appropriate System Configuration Requirements:

<!-- end list -->

- Operating System: _Windows / Linux / Ubuntu_

- Other Software : _Java JDK 1.8 and above._

<!-- end list -->

2.  Confirm that your PipeLine data is fully updated

<!-- end list -->

- The database cannot have negative inventory values.

- All the shipment, stock, consumption data must be updated.

<!-- end list -->

3.  Go to “Program Management” and click on “PipeLine Program Import”.

4.  On the top right corner click on the “Add” button. It will lead to a file input screen.

5.  Click on the downward arrow button on the top right corner.

6.  Click the “Download PipeLine Converter” will on the screen, then select your computer’s operating system (Windows or Linux). The converter will be downloaded in zip file.

7.  Open the converter file and run the tool (.exe file / .java executable file), the following screen will be displayed:

![P7343#yIS1](/img/media/image406.png)

Figure 251: Caution Message during PipeLine Import

![P7345#yIS1](/img/media/image407.jpg)

Figure 252: PipeLine Import Screen

8.  Click on first Browse button to search for the desired .accdb file to import.

![P7349#yIS1](/img/media/image408.png)

> Figure 253: PipeLine Import Screen – Browse

9.  Click the second Browse button to select the location where the converted file will be stored on the user’s local machine.

10. Click on Convert. When the file is converted into. json format, you will receive the notification below:

![P7353#yIS1](/img/media/image409.jpg)

Figure 254: Successful Import PipeLine Screen

**Step 2: Upload the JSON file into QAT:**

11. In QAT go to “Program Management” \> “PipeLine Program Import” menu item.

12. Click on the “Add” button, and a new screen will be opened. Browse to find the converted JSON file (from Step 1) from the local machine. Click on “Submit”.

13. After completing the process, the user will get a message that the program is successfully imported.

14. This program will be shown as a row in the program list. Click on that row to continue to Step 3.

**Note:** While doing the program setup the QAT user can select multiple technical areas from the technical area dropdown list.

![P7363#yIS1](/img/media/image410.png)

Figure 255 Pipeline program import, multiple technical areas

**Step 3: Configure data for import into QAT**

After importing PipeLine data, the user will navigate through a series of screens where there will be prompts to enter data. After editing data on one screen, the user should click “Next” to move to the following data entry screen. If needed, navigate to previous screens by clicking “Back”. The user should navigate through the following screens: Program Info, Planning Units, Data Source, Funding Source, Procurement Agent, Consumption, Inventory, and Shipments.

![P7369#yIS1](/img/media/image411.jpg)

Figure 256: PipeLine Import - Country

Each of these major screens have sub-screens where users need to enter data and map current PipeLine data to QAT realm-level master data; for example, the PipeLine products need to be mapped to QAT’s planning units. At the last step (Shipment screen) a pop-up will be displayed if any program contains negative inventory.

![P7374#yIS1](/img/media/image412.jpg)

Figure 257: PipeLine Import - Planning Units

After the file is successfully imported to QAT:

1.  The users can go to “Program Management”.

2.  Click on the “Programs” menu item.

3.  The program list will show the imported program.

4.  Now the user can “Download”, “Import” and “Export” that program.

<!-- end list -->

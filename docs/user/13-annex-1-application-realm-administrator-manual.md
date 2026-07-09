---
id: annex-1-application-realm-administrator-manual
title: "Annex 1: Application & Realm Administrator Manual"
sidebar_label: "Annex 1: Admin Manual"
sidebar_position: 13
---

# Annex I: Application & Realm Administrator Manual

## A. Introduction

While the focus of the user manual is to guide program administrators and users on how to supply plan in QAT, the objective of this annex is to provide guidance on functionalities available to application and realm administrators only. Application masters are mainly available to the App Administrator (with a few exceptions), while Realm Level Masters are available to both App and Realm Administrators.

## B. Application Dashboard

The functions available on the Forecasting Application Dashboard will be visible according to the **user's role**. Below is an explanation of the tiles unique to App and Realm Level Admins. For an explanation of other tiles (tickets and program), please see [Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar). See [QAT Dashboard](05-getting-started.md#l-qat-dashboard) for information on the enhanced supply planning dashboard.

In the screenshot below, the role assigned is **"App Level Admin"**.

<img src={require('@site/static/img/media/image326.png').default} alt="App Level Admin Dashboard" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 192: App Level Admin Dashboard</p>

In the screenshot below, the role assigned is **"Realm Level Admin"**.

<img src={require('@site/static/img/media/image327.png').default} alt="Realm Level Admin Dashboard" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 193: Realm Level Admin Dashboard</p>

### App and Realm Admin Tiles:

| Which Admins? | Screenshot | Explanation |
| :--- | :---: | :--- |
| App & Realm | <img src={require('@site/static/img/media/image328.png').default} alt="Program User Tile" style={{ width: '220px' }} /> | This tile displays the **number of users in each role**. Clicking on the pull-down button displays two functions ("Go to User Management" and "Add User"). Both redirect users to the "Application Masters" > "User" (See [Users](#i-users) for more) |
| App | <img src={require('@site/static/img/media/image329.png').default} alt="Total Realms Tile" style={{ width: '220px' }} /> | This tile displays the **total number of realms** in the app. Clicking on the pull-down button displays two functions ("Go to Realm Management" and "Add Realm"). Both redirect users to the Realms screen, which is also accessible in the left menu under Application Masters > Realms (See [Realm](#h-realm) for more) |
| App | <img src={require('@site/static/img/media/image330.png').default} alt="Language Tile" style={{ width: '220px' }} /> | This tile displays the **number of languages** in the app. Clicking on the pull-down button displays two functions ("Go to Language Management" and "Add Language"). Both redirect users to the Language screen, which is also accessible in the left menu under Application Masters > Language (See [Language](#f-language) for more) |
| Realm | <img src={require('@site/static/img/media/image331.png').default} alt="Country Tile" style={{ width: '220px' }} /> | This tile displays the **number of countries** in the realm. Clicking on the pull-down button displays two functions: "Go to Realm Country Management" brings users to a table of countries, which is also accessible in the left menu under Realm Masters > Country. "Add Realm Country" brings users to the Realm screen, which is also accessible in the left menu under Application Masters > Realm, where users can map countries to the realm (See [Realm Country](#c-country) for more) |
| Realm | <img src={require('@site/static/img/media/image332.png').default} alt="Technical Area Tile" style={{ width: '220px' }} /> | This tile displays the **number of technical areas** in the realm. Clicking on the pull-down button displays two functions ("Go to Technical Area Management" and "Add Technical Area"). Both redirect users to the Technical Area screen, which is also accessible in the left menu under Application Masters > Technical Area (See [Technical Area](#j-technical-area) for more) |
| Realm | <img src={require('@site/static/img/media/image333.png').default} alt="Region Tile" style={{ width: '220px' }} /> | This tile displays the **number of regions** in the app. Clicking on the pull-down button displays two functions ("Go to Region Management" and "Add Region"). Both redirect users to the Language screen, which is also accessible in the left menu under Application Masters > Region (See [Realm Country](#c-country) for more) |
| Realm | <img src={require('@site/static/img/media/image334.png').default} alt="Organization Tile" style={{ width: '220px' }} /> | This tile displays the **number of organizations** in the app. Clicking on the pull-down button displays two functions ("Go to Organization Management" and "Add Organization"). Both redirect users to the Language screen, which is also accessible in the left menu under Application Masters > Organization (See [Organization](#f-organization) for more) |
| Realm | <img src={require('@site/static/img/media/image335.png').default} alt="Total Program Tile" style={{ width: '220px' }} /> | This tile displays the **number of programs** in the app. Clicking on the pull-down button displays ("Go to Program Management"), which redirects users to the Update Program Info screen, which is also accessible in the left menu under Program Management > Update Program Info (See [Program Information](./07-supply-planning-module-program-data.md#a1-program-information) for more) |
| Realm | <img src={require('@site/static/img/media/image336.png').default} alt="Setup Program Tile" style={{ width: '220px' }} /> | This tile allows users to click on the pull-down button to navigate to the "Setup Program" screen, which is also accessible in the left menu under Program Management > Setup Program (See [Setting up a new program](#d-setting-up-a-new-program) for more) |

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Table 11: App and Realm Admin Tiles</p>

## C. Managing Master Data

**Application Masters** is the top-most data hierarchy level in QAT. Application master data applies to all the Realms and Programs within QAT. Most of it is only accessible to Application Admins, though a few of the Application functions are available to Realm Admins such as adding and updating users and assigning roles to users. Application Admins can select the specific application-wide master data they want to add or update.

**Realm Level Masters** covers all the master data for that Realm which apply to its programs and supply plans. The Realm Admin will be able to view, create and edit this master data. Programs, Technical Areas, Planning Units and Procurement Agents are a few examples of realm master data that the Realm Admin can add and maintain. A lot of the realm level masters are accessible for viewing to Program Admins; however, they do not have the ability to add/update this data.

**Program Level Masters** is the third level of hierarchy in QAT. While program admins cannot add programs, they can update the program information (e.g., lead times, freight costs, etc.) within their assigned program(s). Program Admin and Program Users can also add and update the program's data (consumption, inventory, shipments).

## C1. Application Masters

### a. Database Translation

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '1 1 300px' }}>
    <p>The database translation screen, which is accessible for application admins is used to translate "Dynamic labels" that are stored in QAT. The dynamic labels are included in drop-down lists throughout QAT as well as be labels that reference other labels (e.g. QAT Problem List problems that reference shipment IDs).</p>
    <p>For every dynamic label, there must be at least an English translation as identified by the red asterisk next to 'English' in the below figure. The translations for the other software languages are highly recommended but not required to save a translation.</p>
    <p>To edit a translation, double-click that cell and input the desired text. Then click the "Submit" button. The submitted translation(s) will not be changed on the front end in QAT until the next software release.</p>
  </div>
  <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
    <img src={require('@site/static/img/media/image337.png').default} alt="Database Translation Menu" style={{ width: '100%', marginBottom: '5px' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center' }}>Figure 193a: Navigation to Database Translation</p>
  </div>
</div>

<img src={require('@site/static/img/media/image338.png').default} alt="Database Language Translation Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 194: Database Language Translation Screen</p>

### b. Label Translation

The Label translation screen is used to translate "static labels" that do not reference other QAT labels and are not part of drop-down lists. Table column headers are an example of a static label in QAT.

For the static labels, there must be at least an English translation as identified by the red asterisk next to 'English' in the below figure. The translations for the other software languages are highly recommended but not required to save a translation.

To edit a translation, double-click that cell and input the desired text. Then click the "Submit" button. After you click submit, the translation will immediately reflect in QAT for all users.

<img src={require('@site/static/img/media/image339.png').default} alt="Label Translation Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 195: Label Translation Screen</p>

### c. Country

QAT displays a Country table listing all default countries in the application, but new countries can be added, as needed.

**To view a list of the current countries that are in QAT:**

1. Go to "Application Masters" and click on "Country."
2. The application administrator can view and filter the countries by their status of "Active" or "Disabled." Additionally, the user can search for a specific country by using the search bar.

<img src={require('@site/static/img/media/image340.png').default} alt="List of Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 196: List of Countries</p>

**To add a country:**

1. In the top right corner of the country list, click on the "+" icon.
2. A new screen "Add Country" will be opened as shown below.
3. Enter the new Country, Country Display Name, Country Display Name2, and Currency and click on the "Submit" button.
   
   a. **Note:** Country Display Name is always the three-letter country code (e.g., Angola = AGO). Country Display Name2 is always the two-letter country code (e.g., Angola = AO).*

   <img src={require('@site/static/img/media/image341.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 197: Add Country Screen</p>

**To update a country:**

1. To update a current country, go to the Application Admin country list.
2. Click on the country that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button. This can include "disabling" a country or making one "active."

<img src={require('@site/static/img/media/image342.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 198: Add Country Screen</p>

### d. Currency

**To view a list of the current currencies that are in QAT:**

1. Go to "Application Masters" and click on "Currency."
2. A list of currencies and their attributes, such as conversion rate will be shown as below.

<img src={require('@site/static/img/media/image343.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 199: Currency Screen</p>

**To add a currency:**

1. In the top right corner of the currency list, click on the "+" icon.
2. Enter the new Currency, Currency Display Name, Conversion Rate to 1 USD, and whether it should Sync Online. When all information has been entered, click on the "Submit" button.
   
   a. **Note:** The conversion rate to 1 USD can be entered manually or it can be obtained from the integration with the public online source by selecting "Yes" on the "Sync online conversion rate", which is the default.

   <img src={require('@site/static/img/media/image344.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 200: Add Currency Screen</p>

**To update an existing currency:**

1. Go to the Application Admin currency list.
2. Click on the currency that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button.

### e. Dimension

Dimensions denote various measurable values, such as length, volume, weight, or height.

**To view a list of the current dimensions that are in QAT:**

1. Go to "Application Masters" and click on the "Dimension."
2. A list of dimensions will be shown as below.

<img src={require('@site/static/img/media/image345.png').default} alt="List of Dimensions" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 201: List of Dimensions</p>


**To add a dimension:**

1. In the top right corner of the Dimension List, click on the "+" icon.
2. A new screen “Add Dimension” will be opened as shown below.
3. Enter the new dimension and click on the "Submit" button.

<img src={require('@site/static/img/media/image346.png').default} alt="Add Dimension Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 202: Add Dimension Screen</p>



**To update a dimension:**

1. To update a current dimension, go to the Application Admin dimension list.
2. Click on the dimension that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button.

### f. Language

QAT is avaibble in four different languages: English, French, Spanish, and Portuguese.

**To view a list of the current languages that are in QAT:**

1. Go to "Application Masters" and click on the "Language."
2. A list of languages will be shown as below:

<img src={require('@site/static/img/media/image347.png').default} alt="List of Languages" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 203: List of Languages</p>


**To add a language:**

1. In the top right corner of the language list, click on the “+” icon.
2. A new screen “Add Language” will be opened as shown below.
3. Enter the new Language and the Language Display Name and click on the “Submit” button.
4. **Note:** All QAT database and display labels must be translated in order for a new language to appear across QAT. Please see [Database Translation](#a-database-translation) and [Label Translation](#b-label-translation) in Appendix I for more information.

<img src={require('@site/static/img/media/image348.png').default} alt="Add Language Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 204: Add Language Screen</p>


**To update a language:**

1. To update a current language, go to the Application Admin language list.
2. Click on the language that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button. This can include "disabling" a language or making one "active."

### g. Roles

Application Administrators are able to create and edit role types for the entire application as the need arises to modify the business rules that certain roles can access. For a list of the current roles, access, and associated functions, please see [Annex 3: User Role Matrix](15-annex-3-user-role-matrix.md).

**To view a list of the current roles that are in QAT:**

1. Go to "Application Masters" and click on the "Roles."
2. A list of roles will be shown as below:

<img src={require('@site/static/img/media/image349.png').default} alt="Current list of roles" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 205: Current list of roles</p>

**To add a role:**

1. In the top right corner of the role list, click on the "+" icon.
2. A new screen "Add Role" will be opened as shown below.
3. Enter the new Role, Business Function, and Can Create Role and click on the "Submit" button.
4. For a description and more information on individual business functions, see [Annex 4: Business Functions](16-annex-4-business-functions.md).
5. "Can Create Role" allows the new role to create users and assign them to specific roles and access. For example, a Realm Admin can create a user, assign them as a Program Admin, and determine which countries and programs the user will have access to.

<img src={require('@site/static/img/media/image350.png').default} alt="Add Role Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 206: Add Role Screen</p>

**To update a role:**

1. To update a current role, go to the Application Admin role list.
2. Click on the role that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button.
4. For a description and more information on individual business functions, see [Annex 4: Business Functions](16-annex-4-business-functions.md).
5. "Can Create Role" allows the new role to create users and assign them to specific roles and access. For example, a Realm Admin can create a user, assign them as a Program Admin, and determine which countries and programs the user will have access to.

<img src={require('@site/static/img/media/image351.png').default} alt="Edit Role Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 207: Edit Role Screen</p>

### h. Realm

QAT is subdivided into realms, each one governed by their own master data (inclusive of product catalog, funder names, procurement agent names, etc.). Future realms could be set up for other fields such as education supply chains, agriculture supply chains, etc. For information and functions that can be performed by a Realm Admin, see [Realm Level Masters](#e-realm-masters).

**To view a list of the current realms that are in QAT:**

1. Go to "Application Masters" and click on the "Realm."
2. A list of realms will be shown as below:

<img src={require('@site/static/img/media/image352.png').default} alt="List of Realms" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 208: List of Realms</p>

**To add a realm:**

1. In the top right corner of the realm list, click on the "+" icon.
2. A new screen "Add Realm" will be opened as shown below.
3. Enter the new Realm, Realm Display Name, Min Guardrail for MIN MOS, Min Guardrail for MAX MOS, and Max Guardrail for MAX MOS. Continue to add all tolerance and restriction values for the realm and then click on the "Submit" button.
   
   a. When adding a user to QAT, if they are not assigned a realm, they will be automatically assigned to the realm that is considered the "default." There can only be one default realm per QAT instance.

   b. **Note:** the MIN/MAX guardrails are the absolute inferior and superior limits for setting program MINI/MAX parameters; they are set at the realm level. This means a program cannot have a MIN MOS that is less than the "Min guardrail for MIN MOS", or a MAX MOS that is greater than the "Max guardrail for MAX MOS"

<img src={require('@site/static/img/media/image353.png').default} alt="Add Realm screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 209: Add Realm screen</p>

**To update a realm:**

1. To update a current realm, go to the Application Admin realm list.
2. Click on the realm that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button. This can include "disabling" a realm or making one "active."

**To add a country to a realm**

1. To add a country an existing realm, go to the Application Admin realm list
2. Right click on the realm and then click on "Map countries to this realm" as shown below:

<img src={require('@site/static/img/media/image354.png').default} alt="Map Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 210: Map Countries</p>

3. From this new window, the application admin can add a country by clicking the "Add Row" button at the bottom of the screen. The new country cannot already exist in the realm to be added. For more information on how to add a country see Application Masters: [Country](#c-country).
4. From this new window, the application admin can also make a country "Active" as programs are on-boarded to QAT, or inactive by using the checkbox in the last column.
5. When all updates and changes have been made, click "Submit."

<img src={require('@site/static/img/media/image355.png').default} alt="Map Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 211: Mapping countries to a Realm</p>

### i. Users

Adding and updating users and their roles/access controls is available to both application administrators and realm administrators.

**To view a list of the current user that are in QAT:**

1. Go to "Application Masters" and click on the "User."
2. A list of users will be shown, along with information, such as email, last login date, and status.

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '1 1 300px' }}>
    <p><strong>To add a new user:</strong></p>
    <ol>
      <li>In the top right corner of the realm list, click on the "+" icon.</li>
      <li>A new screen "Add User" will be opened as shown below.</li>
      <li>Enter the new user's name, email address, organization & country, role, and language and click "Submit."</li>
      <li>For a detailed description on roles, their function, and access, see <a href="15-annex-3-user-role-matrix.md">Annex 3: User Role Matrix</a></li>
    </ol>
    <p><strong>To update an existing user or manage user access controls:</strong></p>
    <ol>
      <li>Navigate to the user list.</li>
      <li>Click on the user that needs to be changed or updated.</li>
      <li>Update the information or access controls as needed and then click on the "Update" button. This can include "disabling" a user or making one "active."</li>
    </ol>
  </div>
  <div style={{ flex: '0 0 300px', margin: '0 auto' }}>
    <img src={require('@site/static/img/media/image356.png').default} alt="Add User Screen" style={{ width: '100%', marginBottom: '5px' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center' }}>Figure 212: Add User Screen</p>
  </div>
</div>

### j. Usage Period

Usage period is used in the forecasting module for users to associate a time period with certain elements of the forecast (e.g. how often a planning unit is used).

**To view a list of the current units that are in QAT:**

1. Go to "Application Masters" and click on "Usage Period."
2. A list of usage periods and their attributes, such as whether it's active or not will be shown as below:

<img src={require('@site/static/img/media/image357.png').default} alt="List of Usage Periods" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 213b: List of Usage Periods</p>

**To add a usage period:**

1. In the bottom right corner of the unit list, click on the "+ Add Row" button.
2. A new row appear.
3. Enter the usage period name, conversion factor, and click on the "Submit" button.

**To update an existing usage period:**

1. To update an existing usage period, go to the Application Admin usage period list.
2. Double-Click on the usage period name or conversion factor that needs to be changed or updated. To de-activate or re-activate, select the checkbox.
3. Update the information as needed and then click on the "Submit" button. This can include "disabling" a usage period or making one "active."

### k. Unit

Unit is a fixed quantity (in this case a value like mL, gm or even Box) used as a standard of measurement.

**To view a list of the current units that are in QAT:**

1. Go to "Application Masters" and click on "Unit."
2. A list of units and their attributes, such as dimension will be shown as below:

<img src={require('@site/static/img/media/image358.png').default} alt="List of Units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 214: List of Units</p>

**To add a unit:**

1. In the top right corner of the unit list, click on the "+" icon.
2. A new screen "Add Unit" will be opened as shown below.
3. Enter the new Unit, Unit Display Name, and its corresponding Dimension and click on the "Submit" button.

**To update an existing unit:**

1. To update an existing unit, go to the Application Admin unit list.
2. Click on the unit that needs to be changed or updated.
3. Update the information as needed and then click on the "Update" button. This can include "disabling" a user or making one "active."

<img src={require('@site/static/img/media/image359.png').default} alt="Updating a Unit Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 215: Updating a Unit Screen</p>

### l. Upload User Manual

The user manual can be uploaded at any time by an application admin.

**To upload a new version:**

1. Go to "Application Masters" and click on "Upload User Manual"
2. Click on 'Select File' or 'Browse'
3. Select the user manual you want to upload, from your computer. Note that the file must be in PDF format.
4. Click "Submit".

## C2. Realm Masters

The QAT application is subdivided into Realms, each with their own master data (inclusive of product catalog, funder names, procurement agent names, etc.) Realm is the second level of hierarchy in the QAT system.

A Realm covers all the programs and their supply plans. For example, "Global Health" is a Realm under which various programs are managed. Other realms could be set up for other fields such as education supply chains, agriculture supply chains, etc.

### a. Country

The Country menu under Realm Level Masters allows Application and Realm Admins to create/assign regions to previously created countries.

A region could be "National" for single-region programs, or it could be any number of regions for multi-region programs. The decision to add regions depends on how inventory and consumption data will be entered into QAT. Note that QAT shipments are always National and may not be attributed to Regions.

1. Go to "Realm Level Masters".
2. Click on "Country" and the screen below will be shown.
3. Right click on a specific country that needs to be updated.
4. Click on "Map Region" to show the Realm Country Region screen.

<img src={require('@site/static/img/media/image360.png').default} alt="Mapping regions to a country within a realm" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 216: Mapping regions to a country within a realm</p>

5. Enter a Region description as well available warehouse volume and Global Location Number (GLN) of your warehouse.
6. Select the status ("Active" or "Disabled") as shown in the screen.
   a. **Note:** To add multiple regions, click the blue "+ Add row" button, or right-click on the form and select "Insert new row before" or "Insert new row after".
7. Click "Submit" to save your changes or "Cancel" to close the form without saving.

<img src={require('@site/static/img/media/image361.png').default} alt="Adding multiple regions to a country" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 217: Adding multiple regions to a country</p>

### b. Data Source

A data source is the location where data that is being entered into QAT originates from. Users should apply data sources to all transactional records (Consumption, Inventory, Adjustments and Shipments) in QAT. The user selects data sources as required from drop down lists. The selection of data sources for each transactional record will depend on which Data Source Type that applies to that type of transactional record. **Application and Realm Admins** can add/edit Data source(s) as follows:

**Add a Data Source**

Go to the top right corner in the "Data Source" screen and click on the blue "+" icon.
1. A new screen showing "Add Data Source" will appear.
2. Enter the required details and click on the "Submit" button.
3. Click on the "Cancel" button to not add the data source.

<img src={require('@site/static/img/media/image362.png').default} alt="Adding a data source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 218: Adding a data source</p>

**Update Data Source**

1. Go to the "Data Source" screen.
2. Click on the data source row that you want to update.
3. A new screen showing "Update Data Source" will appear.
4. Enter the updated details.
5. If you want to activate/de-activate that data source, select the corresponding circle.
6. Click on the "Submit" button.
7. Click on the "Cancel" button to keep the existing information.

### c. Data Source Type

Refers to the type of data a source is providing information for. There are four data source types: actual consumption, forecast consumption, inventory, shipments. **Application and Realm Admins** can add/edit Data Source Type.

**Add Data Source Type**

1. Go to "Realm Level Masters" and then on "Data Source Type" to show the below table.


<img src={require('@site/static/img/media/image363.png').default} alt="Data Source type" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 219: Data Source type</p>

2. Click on the blue “add” button on the top right corner. A new screen showing “Add Data Source
Type” will be opened.

<img src={require('@site/static/img/media/image364.png').default} alt="Adding a Data Source Type" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 220: Adding a Data Source Type</p>

**Update Data Source Type:**

1. Go to the Data Source Type List.
2. Click on any parameter that needs to be changed or updated.
3. Click on the "Update" button.

### d. Funding Source

Funding Source refers to the entity providing funding for procurement for the program. **Application and Realm Admins** can add/edit Funding Sources

To add a Funding Source:

1. Go to “Realm Level Masters” and click on “Funding Source” to display the list of current funding
sources.

<img src={require('@site/static/img/media/image365.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 221: Adding a Funding Source</p>

4. Click on the blue “+” (add) button below the profile icon.
5. A new screen “Add Funding Source” opens.
6. Enter the required details and click on the “Submit” button to save your changes or “Cancel” to
close the form without saving.

<img src={require('@site/static/img/media/image366.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 222: Adding a Funding Source</p>

**To update a Funding Source:**

1. Go to the Funding Source List.
2. Click on the funding source that needs to be changed or updated.
3. Enter the required information and click on the "Update" button.

<img src={require('@site/static/img/media/image367.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 223: Adding a Funding Source</p>

### e. Manufacturer

The manufacturer of a commodity is master data that is not accessible/visible to main users of QAT.
However, they are part of shipment/order data that can/will be received from order management systems
along with manufacturer-specific commodity attributes.

**To add a manufacturer:**

1. Go to “Realm Level Masters” and then click on “Manufacturer” to display the below table.

<img src={require('@site/static/img/media/image368.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 224: Adding a Funding Source</p>

2. Click on the blue “+” button to open a new “Add Manufacturer” screen.
3. Enter the required details.
4. Click “Submit” to save changes or “Cancel” to close the form without saving.

<img src={require('@site/static/img/media/image369.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 224: Adding a Funding Source</p>

**Update Manufacturer**

1. Go to the Manufacturer screen.
2. Click on the manufacturer that needs to be updated.
3. Enter the required information and click on the “Update” button.

### f. Organization

An organization is a group of people with a particular purpose, which can be a private or government body.
**Application**, **Realm Admins**, **Program Admin**, **Program User** and **Guest User** can list/view
organizations.

**To add an Organization:**

1. Go to “Realm Level Masters” and then click on “Organization” to display the below table.

<img src={require('@site/static/img/media/image370.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

2. Click on the blue "+" button to open a new "Add Organization" screen.
3. Enter the required details.
4. Click “Submit” to save changes or “Cancel” to close the form without saving.

<img src={require('@site/static/img/media/image371.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**To update an Organization:**

1. Go to the Organization screen.
2. Click on the record that needs to be updated.
3. Enter the required information and click on the "Update" button.

### g. Organization Type

Organization names can be customized per user need; however, in order to maintain standardization
through master data, QAT includes an “organization type” that can be managed by a realm administrator.

The realm administrator assigns an organization type to each organization in QAT; for example, in the
Global Health Realm, country A might request their program name include the organization Ministry of
Health and Wellness (MOHW), while country B requires their program name to include Ministry of Health
and Social Welfare (MOHSW). This level of customization is possible in QAT, while maintaining
standardization through the Organization Type masters. In the example above both MOHW and MOHSW
would be assigned the organization type “Govt”, as any ministry of health would be considered a
governmental entity, regardless of what that ministry of health if called in each country.

As organization type is realm-level master data, QAT users can request new organization types if those don’t
already exist, through the ticketing function.

<img src={require('@site/static/img/media/image373.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Add Organization Type:**

1. Go to “Realm Level Masters” and then click on “Organization Type” to display a list of current Or-
ganization types.

<img src={require('@site/static/img/media/image374.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

2. Click on the blue “+” button to open the “Add Organization Type” screen
3. Enter the required details.
4. Click “Submit” to save changes or “Cancel” to close the form without saving.

<img src={require('@site/static/img/media/image375.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

   **Note:** QAT does not allow to put space before starting the name of organization type. Spaces are only allowed in between words if the organization type name consists of multiple words.*

**To update an Organization Type:**

1. Go to “Realm Level Masters” and then click on “Organization Type”,
2. Click on an existing organization type to display below screen.

<img src={require('@site/static/img/media/image375.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

3. Enter the required details.
4. Click "Submit" to save changes or "Cancel" to close the form without saving.

### h. Product

QAT supports data standardization within each realm through master data management. An essential piece
of master data are products. In QAT, “Product” refers to the multiple tiers of commodities that should be
configured and managed by realm: forecasting units, planning units, procurement units, and alternate
reporting units. Products in QAT can be edited/added by Application or Realm Admins, except for the alternate reporting units, which are managed at the country/program level. Country-level users can
also request new planning/forecasting units to be added to the QAT catalog by raising a ticket.

#### Forecasting Unit

The forecasting unit is the QAT equivalent of the product base unit. It will be used for estimating future
demand, i.e., the forecast. For example: one tablet, one milliliter, one condom. These forecasting units have a
one-to-many relationship with the planning unit, that is, many planning units (e.g., TLD, Bottle of 90 tablets,
TLD, Bottle of 180 tablets, etc.) may relate to a single forecasting unit (e.g., 1 tablet TLD)

**To see and export the list of all forecasting units in the realm-level catalog:**

1. Go to “Realm Level Masters”
2. Click on “Product” and then “Forecasting Unit”.
3. Select the Planning Unit Category and then the Tracer Category and click on “Search”
4. By clicking on the export to CSV Icon you could export all the selected Forecasting Units.

<img src={require('@site/static/img/media/image377.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**To add forecasting units:**

1. Go to “Realm Level Masters”
2. Click on “Product” and then “Forecasting Unit”.
3. Click the blue “add” button on to the top right corner of the Forecasting Unit screen.
4. A new screen called “Add Forecasting Unit” will be opened.
5. Enter the required details and click “Submit”.

**To edit/update forecasting units:**

1. Go to “Realm Level Masters”.
2. Click on “Product” and then “Planning Unit”.
3. Click on any forecasting unit that needs to be changed or updated.
4. Edit the required information.
5. Click on “Update” to save the changes.

#### Planning Unit

<img src={require('@site/static/img/media/image232.png').default} alt="List of Planning Units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 232: List of Planning Units</p>

**To add planning units:**

1. Go to "Realm Level Masters".
2. Click on "Product" and then "Planning Unit".
3. Click the blue "add" button on to the top right corner of the Planning Unit screen.
4. Enter the required details.
5. Click the "Submit" button to save the changes.

**To edit/update planning units:**

1. Go to "Realm Level Masters".
2. Click on "Product" and then "Planning Unit".
3. Click on any forecasting unit that needs to be changed or updated.
4. Edit the required information.
5. Click on "Update" to save the changes.

#### Planning Unit Volume

As mentioned in the Planning Unit section, planning units can have volumetrics attributed to them to enable more detailed planning. However, this screen is view only for program Admins, and its purpose is to show volumetric data for each planning unit, not to edit or add. **Application and Realm admins** can add/edit planning unit volumetric data in the Planning Unit screen.

**To add volumetric data to planning units:**

Application and Realm admins can add/edit planning unit volumetric data from the Planning Unit screen.

1. Go to "Realm Level Masters".
2. Click on "Product" and then "Planning Unit".
3. Right click on the planning unit to be edited.
4. Click "Map Volumes"
5. Use the blue "Add Row Button" to add a new row if needed or edit the Planning Unit details in the existing planning unit row.
6. Click on the "Submit" button.

<img src={require('@site/static/img/media/image380.png').default} alt="Adding volumetric data to planning units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>FFigure 233: Adding volumetric data to planning units</p>

#### Planning Unit Category

At the realm-level, planning units should grouped in broad categories, such as HIV/AIDS pharmaceuticals, Reproductive Health Pharmaceuticals & Devices (in the Global Health Realm) in order to filter searches and reports. **Application and Realm Admins** can add/edit planning unit categories.

**To add planning unit categories**

1. Go to "Realm Level Masters"
2. Click on "Product" and then "Planning Unit Category"
3. Write the name of the new category to add, click "Add" and then "Submit".

<img src={require('@site/static/img/media/image381.png').default} alt="Viewing/adding planning unit categories" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 234: Viewing/adding planning unit categories</p>

#### Alternate Reporting Unit

See [Alternate Reporting Units](07-supply-planning-module-program-data.md#a4-alternate-reporting-units) for more information.

#### Procurement Unit

An item-level description of the "planning unit" including supplier/manufacturer-specific attributes such as GTIN and order prices, that can be manually added/edited by **Application and Realm Admins** or received automatically through integration and mapping QAT planning units to a procurement agent order management system. Procurement units are specific to each procurement agent. Procurement units are not visible to/editable by country/program-level users.

**To add procurement units to the realm-level catalog, the Application or Realm Admin must:**

1. Go to "Realm Level Masters" and Click on "Product".
2. Click on "Procurement Unit" and a table of procurement units will be displayed.
3. Click on the blue "add" button on the top right corner of the screen.
4. Enter all the required details on the "Add Procurement Unit" screen and click "Submit".

   a. **Note:** Required details include planning unit name, manufacturer, conversion factor, volume and weight attributes, units per pallet and per container, etc.

**To edit/update procurement units:**

1. Go to "Realm Level Masters" and Click on "Product".
2. Click on "Procurement Unit" and a table of procurement units will be displayed.
3. Click on any procurement unit that needs to be changed or updated.
4. Edit the required information.

   a. **Note:** Details such as planning unit name and manufacturer are not editable.
5. Click on the "Update" button to save the changes.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('@site/static/img/media/image382.png').default} alt="Add/Update Procurement Unit" style={{ border: '1px solid #ccc', marginBottom: '15px' }} />
</div>
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 235: Add/Update Procurement Unit</p>

#### Tracer Category

Tracer categories are a second tier, less broad grouping of product types specific to a Realm. **Application Admins and Realm Admins** can add/edit Tracer categories. For example, Adult antiretrovirals are a tracer category belonging to the broader grouping HIV/AIDS Pharmaceuticals (Planning Unit Category).

<img src={require('@site/static/img/media/image383.png').default} alt="List of tracer categories" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 236: List of tracer categories</p>

**To add tracer categories to the realm-level catalog:**

1. Go to "Realm Level Masters" and Click on "Product".
2. Click on "Tracer Category" and a Tracer category table will be shown for the selected Realm.
3. Click the blue "add" button on the top right corner of the screen.
4. Enter all the required details on the "Add Tracer Category" screen and click "Submit".

**To update/edit tracer categories:**

1. Go to "Realm Level Masters" and Click on "Product".
2. Click on "Tracer Category" and a Tracer category table will be shown for the selected Realm.
3. Click on any row that needs to be changed or updated.
4. Update the required information and click "Update" to save the changes.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('@site/static/img/media/image384.png').default} alt="Update Tracer Category" style={{ border: '1px solid #ccc', marginBottom: '15px' }} />
</div>
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 237: Update Tracer Category</p>

### i. Equivalency Unit

Equivalency Unit enables users to manage aggregate data across product that are different, but related. Equivalency Units can be used in the [compare and select forecast screen](12-forecasting-module-reports-and-outputs.md#a-compare-and-select), the [monthly forecast screen](12-forecasting-module-reports-and-outputs.md#b-monthly-forecast), the [forecast error (monthly) screen](09-supply-planning-module-reports.md#d2-forecast-error-monthly) and the [supply plan report](08-supply-planning-module-supply-planning.md#g-supply-plan-report).

**To add an Equivalency Unit Mapping:**

1. Go to "Realm Level Masters" and Click on "Equivalency Unit".
2. Click on the "+Add Row" button in the bottom right of the screen. You can also right click on any row and select 'Add Row'.
3. Enter the required details and click on the "Submit" button.

   a. Realm level mappings are available to all users and are indicated by all. These are created and managed by Realm Admins. Program specific mapping can be created and managed by program admins. If there are any conflicts, program specific mappings will take precedence and be used instead of realm level mappings.

For example, a user is forecasting medicines to treat QATitis, a condition where people cannot stop using QAT. The user may forecast by different treatments (different forecasting units) but want to see how they are aggregated together.

<table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', marginTop: '15px', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Equivalency Unit</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Forecasting Unit</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Conversion to EU</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Average Treatment Required to cure QATitis</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>14</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet a day for 2 weeks</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>5mL tube of FASPasone (cream)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5mL/day applied on the forehead over 10 days (1 tube total)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2mL vial of FASPicaine (injection)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>One injection of 1mL (Two people can share one vial)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
      <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>2 bars of chocolate. The type of chocolate does not matter, as all chocolate contains the natural form of FASPicillin.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of milk chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
    </tr>
  </tbody>
</table>

**Creating and Managing Equivalency Units:**

If you don't see an equivalency unit that you would like to map or you would like to edit an existing equivalency unit, click on the Manage Equivalency Unit button in top right of the screen. From there, you can edit a pre-existing equivalency unit or select 'Add Row' and add a new one.

### j. Technical Area

Technical Area is a key component of a QAT program and specifies the focus of that program. For example, in the Global Health Realm, the technical areas are aligned with medical conditions or health care, treatment and prevention programs such as Malaria, Family Planning and HIV/AIDS, each of which requires a variety of medicines and supplies. **Application Admins and Realm Admins** can add/update Technical Area(s).

**To add a Technical Area:**

1. Go to the top right corner in the Technical Area screen and click on the blue "+" button. A new screen showing "Add Technical Area" will open:

<img src={require('@site/static/img/media/image385.png').default} alt="Add Technical Area Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 238: Add Technical Area Screen</p>

<img src={require('@site/static/img/media/image386.png').default} alt="Add Technical Area" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 239: Add Technical Area</p>

2. Enter the required details and click on the "Submit" button.
   
   a. If you do not wish to proceed with creating a new technical area, and you have not clicked submit, click on the "Cancel" button and QAT will close the form without saving and take you back to the Technical Area screen.

**To update a Technical Area:**

1. To update the technical area, go to the Technical Area Screen.
2. Left click on the technical area that you wish to update.
3. Enter the desired edits to the technical area and click the "Submit" button.
4. If you want to disable or re-activate the technical area, click the circle next to that option and click the "Submit" button.
   
   a. By clicking on the "Reset" button, the information in the technical area will not go away, rather it will reset to what it was prior to updating it.

<img src={require('@site/static/img/media/image387.png').default} alt="Update Technical Area" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 240: Update Technical Area</p>

### k. Procurement Agent

A Procurement Agent selects the vendors, establishes payment terms, strategic vetting, selection, the negotiation of contracts and actual purchasing of goods that are shipped to a program. Procurement Agents are generally hired by the agency funding a particular shipment (a "Funding Source" in QAT) and identified by the Program-level user when planning a shipment. Procurement Agents are managed by **Application Level Admins** and **Realm Level Admins**.

**To see the list of realm level procurement agents:**

1. Go to "Realm Level Masters" from the sidebar menu.
2. Click on "Procurement Agent".

**To add a Procurement Agent:**

1. On the Procurement Agent screen, go to the top right corner of the screen and click on the blue
“+” button.
2. A screen titled “Add Procurement Agent” will appear.
3. Enter the required details.
4. Click on the “Submit” button to save the procurement agent.
   
   a. Before submitting, if you wish to not proceed with that procurement agent, click the “Cancel” button.

<img src={require('@site/static/img/media/image388.png').default} alt="Add Procurement Agent" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 241: Add Procurement Agent</p>

**To update a Procurement Agent:**

1. Go to the Procurement Agent screen.
2. Left click on the Procurement Agent that needs to be updated.
3. A screen labeled “Update Procurement Agent” will appear.
4. Input the desired change(s), for example modifying the agent’s color code or Lead Times.
5. If you want to either activate or disable the procurement agent, select the corresponding option at
the bottom of the screen.
6. Click the “Update” button to save changes or cancel to close the form without saving.

**Planning Unit Details for Mapping to a Procurement Agent:**

| | |
| :--- | :--- |
| **Planning Unit** | The planning unit is the product to be planned in QAT. It is a product with full description up to the primary packaging (e.g. bottle of 30 tablets, 10x10 blister pack, etc.). |
| **Procurement Unit** | The procurement unit is a higher-level description of the Planning Unit which includes supplier-specific attributes such as costs and GTINs. |
| **SKU Code** | Stock Keeping Unit (SKU) Code is a feature used to identify specific products and often printed on the product and case labels. The SKU code should match with what is in the procurement agent’s catalog. |
| **Catalog Price** | Price included in the procurement agent’s catalog. |
| **MOQ** | Minimum Order Quantity refers to the minimum amount that can be ordered from a procurement agent for that specific planning unit. |
| **Units per Container** | The maximum number of units for a planning unit that can fit in a container used by the procurement agent to ship the product to a program. |
| **Units per Pallet** | Units per pallet defines the number of planning units that can be packed onto a standard pallet, per pallet dimension. Units per pallet describes the individual items on a pallet into single "units" that can be moved easily with a pallet jack or forklift truck. |
| **Volume** | The volume of the planning unit. |
| **Weight** | The weight of the planning unit. |
| **GTIN** | The Global Trade Item Number is an identifier for trade items, developed by GS1. Such identifiers are used to look up product information in a database which may belong to a manufacturer. |

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Table 12: Procurement Agent Planning Unit Details</p>

**To add a Procurement Agent Planning Unit:**

1. Go to the "Procurement Agent" screen.
2. Right click on the desired procurement agent that you want to add a planning unit to. Then select "Map Planning Unit".
3. A screen titled "Add Procurement Agent Planning Unit" will appear.
4. Either click on the "Add Row" button or right click and select "Insert New Row" to add a row.
5. Enter the details for the new planning unit. Refer to the table above for definitions on any of the data elements.
6. If you enter information for "MOQ", "Unit Per Pallet" or "Unit Per Container", this procurement agent/planning unit combination will be considered a strategic product. (Refer to Shipment Data section to learn more about strategic products).
7. Click the "Submit" button.

**To update a Procurement Agent Planning Unit:**

1. Go to the "Procurement Agent" screen.
2. Right click on the desired procurement agent that you want to update a planning unit(s) for. Then select "Map Planning Unit".
3. A screen titled "Add Procurement Agent Planning Unit" will appear.
4. Enter the details for the existing planning unit by double clicking into the cells and typing in the information. Refer to the table above for definitions on any of the data elements.
5. If you enter information for "MOQ", "Unit Per Pallet" or "Unit Per Container", this procurement agent/planning unit combination will be considered a strategic product. (Refer to Shipment Data section to learn more about strategic products).
6. Click the "Submit" button.

Note: If the procurement agent's catalog is integrated with QAT, the planning units and associated details in QAT will automatically reflect that catalog and any change you manually make in QAT will be overridden automatically with the data from the procurement agent's catalog at the time their data updates.

<img src={require('@site/static/img/media/image389.png').default} alt="Map Procurement Agent Planning Unit" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 242: Map Procurement Agent Planning Unit</p>

**To add a Procurement Agent Procurement Unit:**

1. Go to the "Procurement Agent" screen.
2. Right click on the desired procurement agent that you want to add a planning unit to. Then select "Map Procurement Unit".
3. A form titled "Add Procurement Agent Procurement Unit" will appear.
4. Either click on the "Add Row" button or right click and select "Insert New Row" to add a row.
5. Enter the details for the new procurement unit. Refer to the table above for definitions on any of the data elements.
6. All the fields are required except for the GTIN field which is optional.
7. Click the "Submit" button.

**To update a Procurement Agent Procurement Unit:**

1. Go to the "Procurement Agent" screen.
2. Right click on the desired procurement agent for which you want to update a procurement unit(s). Then select "Map Procurement Unit".
3. A form titled "Add Procurement Agent Procurement Unit" will appear.
4. Enter the details for the existing procurement unit by double clicking into the cells and typing in the information. Refer to the table above for definitions on any of the data elements.
5. All the fields are required except for the GTIN field which is optional.
6. Click the "Submit" button.

Note: If the procurement agent's catalog is integrated with QAT, the procurement units and associated details in QAT will automatically reflect that procurement agent's catalog and any change you make manually in QAT will be overridden by the integration at the time of the next update.

<img src={require('@site/static/img/media/image390.png').default} alt="Map Procurement Agent Procurement Unit" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 243: Map Procurement Agent Procurement Unit</p>

### l. Procurement Agent Type

Procurement agents can be customized per program need; however, in order to maintain standardization through master data, QAT includes an "procurement agent type" that can be managed by a realm administrator.

The realm administrator assigns a procurement agent type to each procurement agent in QAT; for example, in the Global Health Realm, country A might request their program shipments include the procurement agent Joint Medical Store, while country B requires their program shipments to include National Medical Store. This level of customization is possible in QAT, while maintaining standardization through the procurement agent type masters. In the example above both procurement agents would be assigned the procurement agent type "Government".

As procurement agent type is realm-level master data, QAT users can request new organization types if those don't already exist, through the ticketing function.

<img src={require('@site/static/img/media/image391.png').default} alt="Procurement agent types in the Global Health Realm" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 244 – Procurement agent types in the Global Health Realm</p>

**Add Procurement Agent Type**

1. Go to 'Realm Level Masters' and then click on 'Procurement Agent Type' to display a list of current Organization types.

<img src={require('@site/static/img/media/image392.png').default} alt="Procurement Agent Type List" style={{ width: '100%', marginBottom: '15px' }} />

2. Click on the blue "+" button to open the "Add Procurement Agent Type" screen.
3. Enter the required details.
4. Click "Submit" to save changes or "Cancel" to close the form without saving.

<img src={require('@site/static/img/media/image393.png').default} alt="Add Procurement Agent Type Screen" style={{ width: '100%', marginBottom: '15px' }} />

Note: QAT does not allow to put space before starting the name of procurement agent type. Spaces are only allowed in between words if the procurement agent type name consists of multiple words.

**Update a Procurement Agent Type**

1. Go to "Realm Level Masters" and then click on "Procurement Agent Type".
2. Click on an existing Procurement Agent type to display below screen.

<img src={require('@site/static/img/media/image394.png').default} alt="Update Procurement Agent Type Screen" style={{ width: '100%', marginBottom: '15px' }} />

3. Enter the required details.
4. Click "Update" to save changes or "Cancel" to close the form without saving.

### m. Forecast Method

This screen enables realm admins to add or edit forecast methods which can be used by users when creating forecast programs.

**Add a Forecast Method:**

1. Go to "Realm Level Masters" and click on "Forecast Method" to display a list of current forecast methods.

<img src={require('@site/static/img/media/image395.png').default} alt="Forecast Method List" style={{ width: '100%', marginBottom: '15px' }} />

2. Click on the blue "+Add Row" button.
3. Enter details and click **Submit**.

## D. Setting Up a New Program

A Realm or Application administrator can create a new program when required. Each program must consist of a country, technical area (can be 1 or more), region(s) and organization. Once the program is setup in QAT, program admins will have the ability to update certain program settings. Information on updating these settings can be found in the [Program Information](./07-supply-planning-module-program-data.md#a1-program-information) section.

To set up a new **Supply Planning Program** follow these steps:

1. Go to “Program Management” from the sidebar menu.
2. Click on “Setup Program”.

OR

1. Go to “Program Management” from the sidebar menu and select “Update Program Info”.
2. Click on the blue “+” icon in the top right corner of the screen. This button will redirect the user to the “Set up Program” screen.

<img src={require('@site/static/img/media/image396.png').default} alt="Supply Planning Module Setup Program Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 245: Supply Planning Module Setup Program Screen</p>

3. Fill in the Realm section and click on “Next”. If the user only has access to one realm then this will automatically be selected for the user.
4. Next, select the Country that the program is for and click “Next”. If the country is not listed, the Application admin will need to add or activate that specific country for the realm.
5. Select the Technical Area(s) that the program is for and click “Next”. If the Technical Area is not listed, the Application admin will need to add or activate that Technical Area for the realm.

Note: Multiple Technical Areas can be selected using the Technical Area dropdown list.

<img src={require('@site/static/img/media/image397.png').default} alt="Setting-up a program with multi-select technical areas" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 246 Setting-up a program with multi-select technical areas</p>

6. Select the Organization that the program is for and click “Next”. If the Organization is not listed, the Application admin will need to add or activate that Organization for the realm.
7. Select the Region(s) that the program is for and click “Next”. If a Region the user needs is not listed, the Application admin will need to add or activate that Region for the realm. This step allows for one or more selections.
8. Step 6 is where the user will provide the **Program Data**. Fill in all the required details.

<img src={require('@site/static/img/media/image398.png').default} alt="Add Program Data" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 247: Add Program Data</p>

9. The final step to setup the program is to add in the planning unit(s). All of the fields in this step are required in order to proceed. Any field that is left blank will be highlighted yellow until it is filled in.
10. Click “Submit”.

To set up a new **Forecasting Program** follow these steps:

1. Go to “Program Management” from the sidebar menu and select “Update Program Info”.
2. Click on the blue “+” icon in the top right corner of the screen.
3. Complete the required fields for Country, Technical area, Organization, Region, Forecasting Program, Program Manager, and the Version 1 Settings (Forecast Start, Forecast Period, Forecast End). The Version Settings can be updated at any time by the Program Admins.
   - Forecast Start, Forecast Period (Months), and Forecast End – based on the start & end date, QAT will automatically calculate the forecast period in months. Alternatively, users can choose to enter a forecast start date and number of months in the forecast period, and QAT will automatically calculate the forecast end date.
4. Click “Submit”

<img src={require('@site/static/img/media/image399.png').default} alt="Forecasting Module Setup Program Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 248: Forecasting Module Setup Program Screen</p>

## E. Resetting the QAT Problem List

Realm administrators have the ability to reset the QAT Problem List for all programs, regardless of version type or status. The programs can be reset in bulk or individually by program. Resetting the QAT Problem List for a program will revert all problems with an “addressed” status to “open.” This automatically happens when a supply plan is Final-Approved by a supply plan reviewer, but does not automatically happen for any other version types or statuses. Resetting the QAT Problem List can be useful at the end of a supply plan submission period for programs that were submitted as Final, not Approved, but all problems should be reopened for review for the next submission period.

To reset the QAT Problem List:

1. Navigate to the Supply Plan Version and Review screen
2. Click on the “Reset QPL” button in the top right corner

<img src={require('@site/static/img/media/image400.png').default} alt="Reset QPL Button" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 249: Reset QPL Button</p>

3. Choose the Version Type, Status, and Program that should be reset

<img src={require('@site/static/img/media/image401.png').default} alt="Reset QPL Dropdowns" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 250: Reset QPL Dropdowns</p>

4. Click "Submit"
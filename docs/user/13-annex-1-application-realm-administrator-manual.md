---
id: annex-1-application-realm-administrator-manual
title: "Annex 1: Application & Realm Administrator Manual"
sidebar_label: "Annex 1: Admin Manual"
sidebar_position: 13
---

# Section 10. Annex 1: Application & Realm Administrator Manual

## 10.A. Introduction

While the focus of the user manual is to guide program administrators and users on how to supply plan in QAT, the objective of this annex is to provide guidance on functionalities available to application and realm administrators only. Application masters are mainly available to the App Administrator (with a few exceptions), while Realm Level Masters are available to both App and Realm Administrators.

## 10.B. Application Dashboard

The functions available on the Forecasting Application Dashboard will be visible according to the user’s role. Below is an explanation of the tiles unique to App and Realm Level Admins. For an explanation of other tiles (tickets and program), please see Navigation and Menu Bar. See QAT Dashboard for information on the enhanced supply planning dashboard.

### 10.B.1. App and Realm Admin Tiles:

| Tile               | Which Admins? | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :----------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Program user**   | App & Realm   | This tile displays the number of users in each role. Clicking on the pull-down button displays two functions (“Go to User Management” and “Add User”). Both redirect users to the “Application Masters” > “User”.                                                                                                                                                                                                                                |
| **Total Realms**   | App           | This tile displays the total number of realms in the app. Clicking on the pull-down button displays two functions (“Go to Realm Management” and “Add Realm”). Both redirect users to the Realms screen, which is also accessible in the left menu under Application Masters > Realms.                                                                                                                                                            |
| **Language**       | App           | This tile displays the number of languages in the app. Clicking on the pull-down button displays two functions (“Go to Language Management” and “Add Language”). Both redirect users to the Language screen, which is also accessible in the left menu under Application Masters > Language.                                                                                                                                                     |
| **Country**        | Realm         | This tile displays the number of countries in the realm. Clicking on the pull-down button displays two functions: “Go to Realm Country Management” brings users to a table of countries, which is also accessible in the left menu under Realm Masters > Country. “Add Realm Country” brings users to the Realm screen, which is also accessible in the left menu under Application Masters > Realm, where users can map countries to the realm. |
| **Technical Area** | Realm         | This tile displays the number of technical areas in the realm. Clicking on the pull-down button displays two functions (“Go to Technical Area Management” and “Add Technical Area”). Both redirect users to the Technical Area screen, which is also accessible in the left menu under Application Masters > Technical Area.                                                                                                                     |
| **Region**         | Realm         | This tile displays the number of regions in the app. Clicking on the pull-down button displays two functions (“Go to Region Management” and “Add Region”). Both redirect users to the Language screen, which is also accessible in the left menu under Application Masters > Region.                                                                                                                                                             |
| **Organization**   | Realm         | This tile displays the number of organizations in the app. Clicking on the pulldown button displays two functions (“Go to Organization Management” and “Add Organization”). Both redirect users to the Language screen, which is also accessible in the left menu under Application Masters > Organization.                                                                                                                                      |
| **Total Program**  | Realm         | This tile displays the number of programs in the app. Clicking on the pull-down button displays (“Go to Program Management”, which redirects users to the Update Program Info screen, which is also accessible in the left menu under Program Management > Update Program Info.                                                                                                                                                                  |
| **Setup Program**  | Realm         | This tile allows users to click on the pull-down button to navigate to the “Setup Program” screen, which is also accessible in the left menu under Program Management > Setup Program.                                                                                                                                                                                                                                                           |

## 10.C. Managing Master Data

**Application Masters** is the top-most data hierarchy level in QAT. Application master data applies to all the Realms and Programs within QAT. Most of it is only accessible to Application Admins, though a few of the Application functions are available to Realm Admins such as adding and updating users and assigning roles to users. Application Admins can select the specific application-wide master data they want to add or update.

**Realm Level Masters** covers all the master data for that Realm which apply to its programs and supply plans. The Realm Admin will be able to view, create and edit this master data. Programs, Technical Areas, Planning Units and Procurement Agents are a few examples of realm master data that the Realm Admin can add and maintain. A lot of the realm level masters are accessible for viewing to Program Admins; however, they do not have the ability to add/update this data.

**Program Level Masters** is the third level of hierarchy in QAT. While program admins cannot add programs, they can update the program information (e.g., lead times, freight costs, etc.) within their assigned program(s). Program Admin and Program Users can also add and update the program’s data (consumption, inventory, shipments).

## 10.D. Application Masters

### 10.D.1. a. Database Translation

The database translation screen, which is accessible for application admins is used to translate "Dynamic labels" that are stored in QAT. The dynamic labels are included in drop-down lists throughout QAT as well as be labels that reference other labels (e.g. QAT Problem List problems that reference shipment IDs).
For every dynamic label, there must be at least an English translation. The translations for the other software languages are highly recommended but not required to save a translation.
To edit a translation, double-click that cell and input the desired text. Then click the “Submit” button. The submitted translation(s) will not be changed on the front end in QAT until the next software release.

### 10.D.2. b. Label Translation

The Label translation screen is used to translate "static labels" that do not reference other QAT labels and are not part of drop-down lists. Table column headers are an example of a static label in QAT.
For the static labels, there must be at least an English translation. The translations for the other software languages are highly recommended but not required to save a translation.
To edit a translation, double-click that cell and input the desired text. Then click the “Submit” button. After you click submit, the translation will immediately reflect in QAT for all users.

### 10.D.3. c. Country

QAT displays a Country table listing all default countries in the application, but new countries can be added, as needed.
To view a list of the current countries that are in QAT:

1. Go to “Application Masters” and click on “Country.”
2. The application administrator can view and filter the countries by their status of “Active” or “Disabled.” Additionally, the user can search for a specific country by using the search bar.

#### To add a country:

1. In the top right corner of the country list, click on the “+” icon.
2. Enter the new Country, Country Display Name, Country Display Name2, and Currency and click on the “Submit” button.
   - _Note: Country Display Name is always the three-letter country code (e.g., Angola = AGO). Country Display Name2 is always the two-letter country code (e.g., Angola = AO)._

#### To update a country:

1. To update a current country, go to the Application Admin country list.
2. Click on the country that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button. This can include “disabling” a country or making one “active.”

### 10.D.4. d. Currency

To view a list of the current currencies that are in QAT:

1. Go to “Application Masters” and click on “Currency.”
2. A list of currencies and their attributes, such as conversion rate will be shown.

#### To add a currency:

1. In the top right corner of the currency list, click on the “+” icon.
2. Enter the new Currency, Currency Display Name, Conversion Rate to 1 USD, and whether it should Sync Online. When all information has been entered, click on the “Submit” button.
   - _Note: The conversion rate to 1 USD can be entered manually or it can be obtained from the integration with the public online source by selecting “Yes” on the “Sync online conversion rate”, which is the default._

#### To update an existing currency:

1. Go to the Application Admin currency list.
2. Click on the currency that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button.

### 10.D.5. e. Dimension

Dimensions denote various measurable values, such as length, volume, weight, or height.
To view a list of the current dimensions that are in QAT:

1. Go to “Application Masters” and click on the “Dimension.”
2. A list of dimensions will be shown.

#### To add a dimension:

1. In the top right corner of the Dimension List, click on the “+” icon.
2. Enter the new dimension and click on the “Submit” button.

#### To update a dimension:

1. Go to the Application Admin dimension list.
2. Click on the dimension that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button.

### 10.D.6. f. Language

QAT is available in four different languages: English, French, Spanish, and Portuguese.
To view a list of the current languages that are in QAT:

1. Go to “Application Masters” and click on the “Language.”
2. A list of languages will be shown.

#### To add a language:

1. In the top right corner of the language list, click on the “+” icon.
2. Enter the new Language and the Language Display Name and click on the “Submit” button.
   - _Note: All QAT database and display labels must be translated in order for a new language to appear across QAT. Please see Database Translation and Label Translation for more information._

#### To update a language:

1. Go to the Application Admin language list.
2. Click on the language that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button. This can include “disabling” a language or making one “active.”

### 10.D.7. g. Roles

Application Administrators are able to create and edit role types for the entire application as the need arises to modify the business rules that certain roles can access. For a list of the current roles, access, and associated functions, please see Annex 3: User Role Matrix.
To view a list of the current roles that are in QAT:

1. Go to “Application Masters” and click on the “Roles.”
2. A list of roles will be shown.

#### To add a role:

1. In the top right corner of the role list, click on the “+” icon.
2. Enter the new Role, Business Function, and Can Create Role and click on the “Submit” button.
   - For a description and more information on individual business functions, see Annex 4: Business Functions.
   - “Can Create Role” allows the new role to create users and assign them to specific roles and access. For example, a Realm Admin can create a user, assign them as a Program Admin, and determine which countries and programs the user will have access to.

#### To update a role:

1. Go to the Application Admin role list.
2. Click on the role that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button.

### 10.D.8. h. Realm

QAT is subdivided into realms, each one governed by their own master data (inclusive of product catalog, funder names, procurement agent names, etc.). For information and functions that can be performed by a Realm Admin, see Realm Level Masters.
To view a list of the current realms that are in QAT:

1. Go to “Application Masters” and click on the “Realm.”
2. A list of realms will be shown.

#### To add a realm:

1. In the top right corner of the realm list, click on the “+” icon.
2. Enter the new Realm, Realm Display Name, Min Guardrail for MIN MOS, Min Guardrail for MAX MOS, and Max Guardrail for MAX MOS. Continue to add all tolerance and restriction values for the realm and then click on the “Submit” button.
   - When adding a user to QAT, if they are not assigned a realm, they will be automatically assigned to the realm that is considered the “default.” There can only be one default realm per QAT instance.
   - _Note: the MIN/MAX guardrails are the absolute inferior and superior limits for setting program MIN/MAX parameters; they are set at the realm level. This means a program cannot have a MIN MOS that is less than the “Min guardrail for MIN MOS”, or a MAX MOS that is greater than the “Max guardrail for MAX MOS”._

#### To update a realm:

1. Go to the Application Admin realm list.
2. Click on the realm that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button. This can include “disabling” a realm or making one “active.”

#### To add a country to a realm:

1. Go to the Application Admin realm list.
2. Right click on the realm and then click on “Map countries to this realm”.
3. From this new window, the application admin can add a country by clicking the “Add Row” button at the bottom of the screen. The new country cannot already exist in the realm to be added.
4. From this new window, the application admin can also make a country “Active” as programs are onboarded to QAT, or inactive by using the checkbox in the last column.
5. Click **Submit**.

### 10.D.9. i. Users

Adding and updating users and their roles/access controls is available to both application administrators and realm administrators.
To view a list of the current user that are in QAT:

1. Go to “Application Masters” and click on the “User.”
2. A list of users will be shown, along with information, such as email, last login date, and status.

#### To add a new user:

1. In the top right corner of the user list, click on the “+” icon.
2. Enter the new user’s name, email address, organization & country, role, and language and click “Submit.”

#### To update an existing user or manage user access controls:

1. Navigate to the user list.
2. Click on the user that needs to be changed or updated.
3. Update the information or access controls as needed and then click on the “Update” button. This can include “disabling” a user or making one “active.”

### 10.D.10. j. Usage Period

Usage period is used in the forecasting module for users to associate a time period with certain elements of the forecast (e.g. how often a planning unit is used).
To view a list of the current units that are in QAT:

1. Go to “Application Masters” and click on “Usage Period.”
2. A list of usage periods and their attributes will be shown.

#### To add a usage period:

1. In the bottom right corner of the unit list, click on the “+ Add Row” button.
2. Enter the usage period name, conversion factor, and click on the “Submit” button.

#### To update an existing usage period:

1. Go to the Application Admin usage period list.
2. Double-Click on the usage period name or conversion factor that needs to be changed or updated. To de-activate or re-activate, select the checkbox.
3. Click on the “Submit” button.

### 10.D.11. k. Unit

Unit is a fixed quantity (in this case a value like mL, gm or even Box) used as a standard of measurement.
To view a list of the current units that are in QAT:

1. Go to “Application Masters” and click on “Unit.”
2. A list of units and their attributes will be shown.

#### To add a unit:

1. In the top right corner of the unit list, click on the “+” icon.
2. Enter the new Unit, Unit Display Name, and its corresponding Dimension and click on the “Submit” button.

#### To update an existing unit:

1. Go to the Application Admin unit list.
2. Click on the unit that needs to be changed or updated.
3. Update the information as needed and then click on the “Update” button. This can include “disabling” a user or making one “active.”

### 10.D.12. l. Upload User Manual

The user manual can be uploaded at any time by an application admin.

#### To upload a new version:

1. Go to “Application Masters” and click on “Upload User Manual”.
2. Click on ‘Select File’ or ‘Browse’.
3. Select the user manual you want to upload, from your computer. Note that the file must be in PDF format.
4. Click **Submit**.

## 10.E. Realm Masters

A Realm covers all the programs and their supply plans. For example, “Global Health” is a Realm under which various programs are managed.

### 10.E.1. a. Country

The Country menu under Realm Level Masters allows Application and Realm Admins to create/assign regions to previously created countries.
A region could be “National” for single-region programs, or it could be any number of regions for multiregion programs. The decision to add regions depends on how inventory and consumption data will be entered into QAT. Note that QAT shipments are always National and may not be attributed to Regions.

1. Go to “Realm Level Masters”.
2. Click on “Country”.
3. Right click on a specific country that needs to be updated.
4. Click on “Map Region” to show the Realm Country Region screen.
5. Enter a Region description as well available warehouse volume and Global Location Number (GLN) of your warehouse.
6. Select the status (“Active” or “Disabled”).
   - _Note: To add multiple regions, click the blue “+ Add row” button, or right-click on the form and select “Insert new row before” or “Insert new row after”._
7. Click **Submit**.

### 10.E.2. b. Data Source

A data source is the location where data that is being entered into QAT originates from. Users should apply data sources to all transactional records (Consumption, Inventory, Adjustments and Shipments) in QAT.

#### Add a Data Source:

1. Click the blue “+” icon in the “Data Source” screen.
2. Enter the required details and click on the “Submit” button.

#### Update Data Source:

1. Go to the “Data Source” screen.
2. Click on the data source row that you want to update.
3. Enter the updated details and click on the “Submit” button.

### 10.E.3. c. Data Source Type

Refers to the type of data a source is providing information for. There are four data source types: actual consumption, forecast consumption, inventory, shipments.

#### Add Data Source Type:

1. Go to “Realm Level Masters” and then on “Data Source Type”.
2. Click on the blue “add” button on the top right corner.
3. Enter the required details and click on the “Submit” button.

#### Update Data Source Type:

1. Go to the Data Source Type List.
2. Click on any parameter that needs to be changed or updated.
3. Click on the “Update” button.

### 10.E.4. d. Funding Source

Funding Source refers to the entity providing funding for procurement for the program.

#### To add a Funding Source:

1. Go to “Realm Level Masters” and click on “Funding Source”.
2. Click on the blue “+” (add) button.
3. Enter the required details and click on the “Submit” button.

#### To update a Funding Source:

1. Go to the Funding Source List.
2. Click on the funding source that needs to be changed or updated.
3. Enter the required information and click on the “Update” button.

### 10.E.5. e. Manufacturer

The manufacturer of a commodity is master data that is not accessible/visible to main users of QAT.

#### To add a manufacturer:

1. Go to “Realm Level Masters” and then click on “Manufacturer”.
2. Click on the blue “+” button.
3. Enter the required details and click **Submit**.

#### To update a manufacturer:

1. Go to the Manufacturer screen.
2. Click on the manufacturer that needs to be updated.
3. Enter the required information and click on the “Update” button.

### 10.E.6. f. Organization

An organization is a group of people with a particular purpose, which can be a private or government body.

#### To add an Organization:

1. Go to “Realm Level Masters” and then click on “Organization”.
2. Click on the blue “+” button.
3. Enter the required details and click **Submit**.

#### To update an Organization:

1. Go to the Organization screen.
2. Click on the record that needs to be updated.
3. Enter the required information and click on the “Update” button.

### 10.E.7. g. Organization Type

Organization names can be customized per user need; however, in order to maintain standardization through master data, QAT includes an “organization type” that can be managed by a realm administrator.

#### Add Organization Type:

1. Go to “Realm Level Masters” and then click on “Organization Type”.
2. Click on the blue “+” button.
3. Enter the required details and click **Submit**.
   - _Note: QAT does not allow to put space before starting the name of organization type. Spaces are only allowed in between words if the organization type name consists of multiple words._

#### To update an Organization Type:

1. Go to “Realm Level Masters” and then click on “Organization Type”.
2. Click on an existing organization type.
3. Enter the required details and click **Submit**.

### 10.E.8. h. Product

QAT supports data standardization within each realm through master data management. An essential piece of master data are products. In QAT, “Product” refers to the multiple tiers of commodities that should be configured and managed by realm: forecasting units, planning units, procurement units, and alternate reporting units.

#### Forecasting Unit

The forecasting unit is the QAT equivalent of the product base unit. It will be used for estimating future demand, i.e., the forecast. For example: one tablet, one milliliter, one condom. These forecasting units have a one-to-many relationship with the planning unit.

##### To see and export the list of all forecasting units in the realm-level catalog:

1. Go to “Realm Level Masters”.
2. Click on “Product” and then “Forecasting Unit”.
3. Select the Planning Unit Category and then the Tracer Category and click on “Search”.

##### To add forecasting units:

1. Click the blue “add” button on to the top right corner of the Forecasting Unit screen.
2. Enter the required details and click “Submit”.

##### To edit/update forecasting units:

1. Click on any forecasting unit that needs to be changed or updated.
2. Edit the required information and click **Update**.

#### Planning Unit

By default, supply planning in QAT is managed in Planning Units. A planning unit description is usually inclusive of a full description of the product up to the primary packaging.

##### To see and export the list of all planning units in the realm-level catalog:

1. Go to “Realm Level Masters”.
2. Click on “Product” and then “Planning Unit”.
3. Select the Planning Unit category, the Tracer Category and click on “Search”.

##### To add planning units:

1. Click the blue “add” button on to the top right corner of the Planning Unit screen.
2. Enter the required details and click the “Submit” button.

##### To edit/update planning units:

1. Click on any planning unit that needs to be changed or updated.
2. Edit the required information and click **Update**.

#### Planning Unit Volume

Planning units can have volumetrics attributed to them to enable more detailed planning.

#### To add volumetric data to planning units:

1. Go to “Realm Level Masters”.
2. Click on “Product” and then “Planning Unit”.
3. Right click on the planning unit to be edited.
4. Click “Map Volumes”.
5. Use the blue “Add Row Button” to add a new row or edit the existing one.
6. Click **Submit**.

#### Planning Unit Category

At the realm-level, planning units should be grouped in broad categories.

#### To add planning unit categories:

1. Go to “Realm Level Masters”.
2. Click on “Product” and then “Planning Unit Category”.
3. Write the name of the new category to add, click “Add” and then “Submit”.

#### Procurement Unit

An item-level description of the “planning unit” including supplier/manufacturer-specific attributes.

#### To add procurement units to the realm-level catalog:

1. Go to “Realm Level Masters” and Click on “Product”.
2. Click on “Procurement Unit”.
3. Click on the blue “add” button.
4. Enter all the required details and click **Submit**.

#### To update procurement units:

1. Click on any procurement unit that needs to be changed or updated.
2. Edit the required information and click **Update**.

#### Tracer Category

Tracer categories are a second tier, less broad grouping of product types specific to a Realm.

#### To add tracer categories to the realm-level catalog:

1. Go to “Realm Level Masters” and Click on “Product”.
2. Click on “Tracer Category”.
3. Click the blue “add” button.
4. Enter required details and click **Submit**.

#### To update/edit tracer categories:

1. Click on any row that needs to be changed or updated.
2. Update the required information and click **Update**.

### 10.E.9. i. Equivalency Unit

Equivalency Unit enables users to manage aggregate data across products that are different, but related.

#### To add an Equivalency Unit Mapping:

1. Go to “Realm Level Masters” and Click on “Equivalency Unit”.
2. Click on the ‘+Add Row’ button.
3. Enter the required details and click **Submit**.

_Example:_ A user is forecasting medicines to treat QATitis.

- 1 Treatment = 14 tablets of FASPicillin
- 1 Treatment = 5mL tube of FASPasone (conversion 1)
- 1 Treatment = 2mL vial of FASPicaine (conversion 0.5)

### 10.E.10. j. Technical Area

Technical Area specifies the focus of that program.

#### To add a Technical Area:

1. Click the blue “+” button in the Technical Area screen.
2. Enter the required details and click **Submit**.

#### To update a Technical Area:

1. Left click on the technical area that you wish to update.
2. Enter the desired edits and click **Submit**.

### 10.E.11. k. Procurement Agent

#### To add a Procurement Agent:

1. Click the blue “+” button in the Procurement Agent screen.
2. Enter the required details and click **Submit**.

#### To update a Procurement Agent:

1. Left click on the Procurement Agent that needs to be updated.
2. Input the desired change(s) and click **Update**.

#### Procurement Agent Planning Unit Details:

| Field                   | Definition                                              |
| :---------------------- | :------------------------------------------------------ |
| **SKU Code**            | Stock Keeping Unit Code to identify specific products.  |
| **Catalog Price**       | Price included in the procurement agent's catalog.      |
| **MOQ**                 | Minimum Order Quantity.                                 |
| **Units per Container** | Max units that fit in a shipping container.             |
| **Units per Pallet**    | Number of planning units packed onto a standard pallet. |

#### To add a Procurement Agent Planning Unit:

1. Right click on the desired procurement agent.
2. Select **Map Planning Unit**.
3. Click **Add Row**.
4. Enter details and click **Submit**.

#### To update a Procurement Agent Planning Unit:

1. Right click and select **Map Planning Unit**.
2. Double click into the cells and edit. Click **Submit**.

### 10.E.12. l. Procurement Agent Type

#### Add Procurement Agent Type:

1. Go to “Realm Level Masters” and click on “Procurement Agent Type”.
2. Click on the blue “+” button.
3. Enter details and click **Submit**.

### 10.E.13. m. Forecast Method

#### Add a Forecast Method:

1. Go to “Realm Level Masters” and click on “Forecast Method”.
2. Click on the blue “+Add Row” button.
3. Enter details and click **Submit**.

## 10.F. Setting Up a New Program

### 10.F.1. To set up a new Supply Planning Program:

1. Go to “Program Management” > “Setup Program”.
2. Fill in the Realm section and click on “Next”.
3. Select the Country, Technical Area(s), Organization, and Region(s).
4. Provide the Program Data and add in the planning unit(s).
5. Click **Submit**.

### 10.F.2. To set up a new Forecasting Program:

1. Go to “Program Management” > “Update Program Info”.
2. Click on the blue “+” icon.
3. Complete the required fields for Country, Technical area, Organization, Region, Forecasting Program, Program Manager, and the Version 1 Settings.
4. Click **Submit**.

## 10.G. Resetting the QAT Problem List

Realm administrators have the ability to reset the QAT Problem List for all programs. Resetting the QAT Problem List for a program will revert all problems with an “addressed” status to “open.”

1. Navigate to the Supply Plan Version and Review screen.
2. Click on the “Reset QPL” button.
3. Choose the Version Type, Status, and Program that should be reset.
4. Click **Submit**.

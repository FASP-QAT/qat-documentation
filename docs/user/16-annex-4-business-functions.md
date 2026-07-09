---
id: annex-4-business-functions
title: "Annex 4: Business Functions"
sidebar_label: "Annex 4: Business Functions"
sidebar_position: 16
---

# Annex 4: Business Functions

Business functions are a set of capabilities available to the user. They are used when creating roles (see **Roles (App Admin only)**). Each role has one or more business functions.
For master level data, the verbs used in the business functions are as follows:

* **List** – Allows user to see the table with the existing data for that master data element. If only “List X” is chosen, the user can only see “X” but cannot edit or add.
* **Edit** – Allows user to update or edit the master data element. Note: Always include “list” along with “edit” or the user will not be able to see the screen to edit data elements. **(NOTE: An entity cannot be deleted. Users can only 'Disable" entities.)**
* **Add** – Allows user to add a new record for the master data element. Note: Always include “list” along with “add” or the user will not be able to see the screen to add data elements.
* **Manage:** Allows user to perform all of the aforementioned functions

The above business function can be provided to users in any combination. For example:

* User A has only “List” access, so they can only view existing data (“read only”)
* User B has only “List” + “Edit” access, so they can view and edit existing data, but cannot add ‘new’ entities.
* User C has “List” + “Add” access, so they can add new entities and view the list of entities.
* User D has “Add” + “Edit” + “List” (Manage) access that enables performing all 3 actions.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', width: '5%' }}><strong>#</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', width: '20%' }}><strong>Menu Option</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', width: '25%' }}><strong>Business Function</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', width: '50%' }}><strong>Business Function Description ("Allows enabled user/s to...")</strong></th>
    </tr>
  </thead>
  <tbody>
    {/* Translations */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>1</strong></td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Translations</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Label translations</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Input/update the "static labels" for QAT enabled languages – which are reflected during new releases</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>2</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Database Translation</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Input/update the "dynamic labels" for QAT-enabled languages - which are reflected immediately</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>3</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Translations</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the translations, whether label or database</td>
    </tr>
    {/* Application Masters */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>4</strong></td>
      <td rowSpan={16} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Application Masters</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Application Dashboard</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the application dashboard</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>5</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Application-level Masters</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the master CRUDs at Application level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>6</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Country</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Setup and manage the country</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>7</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Currency</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Setup and manage the currency</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>8</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Dimension</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Setup and manage the dimension</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>9</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Language</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage the language setup and administration activities</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>10</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Role</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage the role creation and assignments</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>11</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Create Realm</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Create new realms (this is restricted to Application Admin role)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>12</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edit Realm</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Update/edit data related to an existing realm to which he/she has been provided access</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>13</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Realm</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>view the list of realms to which he/she has been provided access</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>14</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Show Realm Select</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the list of Realms available at the Application level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>15</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Region</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Setup and manage regions at country level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>16</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage User</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View, add, and update users, as well has assign specific access and roles</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>17</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Unit</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Setup and manage the units for the dimensions</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>18</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Upload User Manual</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Upload new version of user manual</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>19</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Usage Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add, edit, view usage periods.</td>
    </tr>
    {/* Realm Masters */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>20</strong></td>
      <td rowSpan={30} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Realm Masters</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Realm Level Masters</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View all Master screens at Realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>21</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Realm Country</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage the country</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>22</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Data Sources</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage data sources at realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>23</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Data Source</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>24</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Data Source Type</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage data sources types at realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>25</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Data Source Type</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>26</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Funding Source</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage funding source at realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>27</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Funding Source</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>28</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supplier</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage manufacturers at the realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>29</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Supplier</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>30</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Organization</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage organizations at realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>31</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Organization</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>32</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Organization Type</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage organization types at realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>33</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Map Procurement Agent</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Assign procurement agents to a program.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>34</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add Procurement Agent</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add/remove/edit procurement agents at the program level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>35</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add Program Specific Prices</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add program specific prices for different procurement agents</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>36</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Forecasting Unit</td>
      <td rowSpan={11} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>Manage product attributes as listed in the options</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>37</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Forecasting Units</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>38</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Country Planning Unit</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>39</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Planning unit</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>40</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Product Category</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>41</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Product Category</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>42</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Planning Unit Capacity</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>43</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Procurement Unit List</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>44</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Procurement Unit</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>45</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tracer Category</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>46</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Tracer Category</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>47</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Technical Area</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Technical area at Realm level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>48</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Technical Area</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>49</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Equivalency Unit</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add, edit, view equivalency units</td>
    </tr>
    {/* Program Management */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>50</strong></td>
      <td rowSpan={22} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Program Management</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Program Level Masters</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View all program level masters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>51</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alternate Reporting Unit (ARU) List</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage product attributes as listed in the options</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>52</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Set Up Program</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage a program, including updating program-level parameters (program name, lead time, freight %, etc.)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>53</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edit Program</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>54</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Programs</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>55</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Planning Units</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Planning units, including updating parameters (AMC settings, inventory parameters, shelf life, etc.)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>56</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List Budget</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage budget at the program level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>57</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Budget</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>58</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Delete Local Programs</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Delete local programs</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>59</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Import Program</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Import program</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Export Program</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Export Program</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>60</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Download Program</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Download program data (user can download the program and also use the "Down arrow" icon on the top right-hand corner of the screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>61</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>PipeLine Program Import</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Import pipeline data into QAT application</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>62</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Upload a version</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Upload a local version to the server</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>63</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supply Plan Version and Review</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>List and review the supply plan version list</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>64</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Approve a Version</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>To approve a final supply plan (enables the user to also access the supply plan &amp; review screen). The “Reviewed” check box function and “Resolved” status are also embedded in this Business Function</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>65</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage Integrations</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add or edit a program integration</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>66</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notification Bcc approve</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Receive email in BCC that supply plan was approved</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>67</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notification Bcc upload</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Receive email in BCC that supply plan was uploaded</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>68</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notification Bcc reject</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Receive email in BCC that supply plan was rejected</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>69</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notification To upload</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Receive email that supply plan was uploaded</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>70</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Version Settings</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Update and view forecasting program version settings</td>
    </tr>
    {/* Supply Plan Data */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>71</strong></td>
      <td rowSpan={5} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Supply Plan Data</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shipment Delinking</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Link, delink and update ERP shipment data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>72</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manual Tagging</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>73</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Program Data Tab</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Supply Plan Data tab</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>74</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Quantimed Import</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Manage import of data from Quantimed</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>75</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>QAT Forecast Import</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Import forecast from QAT Forecasting module</td>
    </tr>
    {/* Supply Planning */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>76</strong></td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Supply Planning</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supply plan</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View and edit access to the ‘Supply Planning’ Screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Scenario planning</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Perform supply plan-based scenario planning</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>77</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Supply plan report</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View a supply plan report</td>
    </tr>
    {/* Forecasting */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>78</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Forecasting</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Forecasting Module</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Access to the forecasting module</td>
    </tr>
    {/* Tree Forecasting */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>79</strong></td>
      <td rowSpan={5} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Tree Forecasting</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tree</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add, edit, view forecasting tree(s)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>80</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tree Templates</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add, edit, view tree templates</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>81</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modeling Validation</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the Modeling Validation output</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>82</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Product Validation</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the Product Validation output</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>83</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Usage Template</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Add, edit, view usage templates</td>
    </tr>
    {/* Consumption Forecasting */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>84</strong></td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Consumption Forecasting</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data Entry and Adjustment</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Access to Data Entry and Adjustment screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>85</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Extrapolation</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Access to Extrapolation screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>86</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Import from QAT supply plan</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Import consumption data from supply planning module</td>
    </tr>
    {/* Reports */}
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>87</strong></td>
      <td rowSpan={30} style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold', verticalAlign: 'middle' }}>Reports</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View Reports</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View all reports available</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>88</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>QAT Problem List</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the QAT Problem list and add new problem entries</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>89</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Create Problem</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Create &amp; update a "problem" data in QAT Problem List</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>90</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edit Problem</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>91</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Program Catalog</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the program catalog report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>92</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Stock Status Over Time</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View of Stock Status data over time</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>93</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Stock Status Matrix</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the Stock Status matrix data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>94</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Stock Status Snapshot</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View a snapshot of the stock status data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>95</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Stock Status Snapshot (Global)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the global (across countries and programs) stock status data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>96</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Consumption (Forecast vs Actual)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View a comparison of the consumption (forecast vs actuals)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>97</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Consumption (Global)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the global (across countries and programs) consumption data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>98</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Forecast Error (Monthly)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View a monthly forecast error list</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>99</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Forecast Error (by Planning Unit)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View a planning unit based forecast error report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>100</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shipments (Global)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the shipments at global (across countries and program) level</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>101</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shipment Overview</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View of all Shipments</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>102</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shipment Details</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the Shipment details</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>103</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shipment Cost Details</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the Shipment cost report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>104</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shipment Cost Overview</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View of the Shipments costs</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>105</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Budget</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the budget</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>106</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Procurement Agent Lead Time</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the procurement agent lead times</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>107</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Expiries</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the expired inventory details</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>108</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cost of Inventory</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View cost of inventory report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>109</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inventory Turns</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the inventory turns</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>110</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Stock Adjustment</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the manual stock adjustment data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>111</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Warehouse Capacity (by program)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View program-wide warehouse capacity</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>112</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Warehouse Capacity (by country)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the country-wide warehouse capacity</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>113</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compare and Select Forecast</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the compare and select forecast report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>114</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compare Version</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the compare version report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>115</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Forecast Summary</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the forecast summary report</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>116</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Monthly Forecast</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>View the monthly forecast report</td>
    </tr>
  </tbody>
</table>

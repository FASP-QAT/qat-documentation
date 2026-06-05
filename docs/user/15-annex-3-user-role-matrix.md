---
id: annex-3-user-role-matrix
title: "Annex 3: User Role Matrix"
sidebar_label: "Annex 3: User Role Matrix"
sidebar_position: 15
---

# Section 12. Annex 3: User Role Matrix

This matrix defines the permissions for every role within QAT. Permissions are categorized by functional area.

## 12.A. Annex 3.A. Role Descriptions.

<table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px', fontSize: '14px', fontFamily: 'var(--ifm-font-family-base)' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold', width: '25%' }}>Role</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Role description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Application Admin</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For managing app-wide settings (labels), create roles</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Realm Admin</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For managing realm specific parameters and realm masters (planning units, technical areas, orgs etc.)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Supply Plan Program Admin</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For managing program specific parameters (lead times, planning units, ARUs, budgets etc.)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Supply Plan Reviewer</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For those reviewing/approving supply plans.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Supply Plan Program User</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For those actively supply planning and needing to enter data.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Supply Plan Viewer - Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For anyone who only need to view reports (not including supply planning), but not enter data. Depending on the access settings, could be at global or program/country level.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Supply Plan Viewer - Supply Plan Review</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Supplemental role to reports viewer, for those who need to see status of supply plan review process. (Includes SP Notifications)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Supply Plan Viewer - Data</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Supplemental role to reports viewer, for those who need to access raw data entry screens for viewing and to see status of supply plan review process. This role allows downloading of supply plan data (allows for offline viewing), without ability to upload back to server.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Forecast Program Admin</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For managing program specific parameters (forecast period, planning units, equivalency units, usage templates, etc.).</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Forecast Program User</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For those actively forecasting and needing to enter data/build forecasts.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold' }}>Forecast Viewer</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>For anyone who only need to view forecasts and forecast outputs, but not enter data.</td>
    </tr>
  </tbody>
</table>

---

## 12.B. Annex 3.B. Permissions Matrix.
<div style={{ overflowX: 'auto' }}>
<table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '13px', fontFamily: 'var(--ifm-font-family-base)' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Business Function</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Application Admin</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Realm Admin</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Supply Plan Program Admin</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Supply Plan Reviewer</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Supply Plan Program User</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Supply Plan Viewer - Reports</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Supply Plan Viewer - Data</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Supply Plan Viewer - Supply Plan Review</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Forecast Program Admin</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Forecast Program User</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Forecast Viewer</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Application Masters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Application Dashboard</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Label Translations</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Database Translation</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Country</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Role</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Language</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Currency</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Dimension</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Unit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage User</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Assign role to user</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Realm</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Upload User Manual</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Usage Period</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Realm level Masters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Realm Dashboard</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Realm Country</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Region</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Data Source</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Data Source Type</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Funding Source</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Create/manage Organization</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Organization Type</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Procurement Agent</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Procurement Agent Type</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Supplier</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Alternate Reporting Unit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Forecasting Unit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Planning Unit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Planning Unit Category</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Planning Unit Volume</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Procurement Unit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Tracer Category</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Equivalency Unit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Technical Area</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Forecast Method</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Program Management</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Program Dashboard</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Setup/create a Program</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Update program info</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Planning unit (for a program)</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Map Procurement Agent</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Budget</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>N (they can see in Budget report)</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Import / Export Program</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Download Program</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Upload version</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>PipeLine Program Import</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View supply plan version &amp; review</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Review/Approve a Version</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Notification Cc Approve</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Notification Cc Upload</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Notification Cc Reject</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Notification to Approve</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Notification to Upload</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Notification to Reject</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Update Version Settings</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Supply plan data</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Supply plan data (consumption / inventory / shipments) in data entry screen</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/Edit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/Edit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Add/Edit</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>ERP shipment linking and delinking</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Import Quantimed data</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Supply planning</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage/edit Supply Plan</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Supply Plan</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Scenario Planning</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Supply Plan Report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Reports</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View QAT Problem List report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Program Catalog Report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Stock Status Reports</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Stock Status Over Time report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Stock Status Matrix report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Stock Status Snapshot report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Stock Status Snapshot (Global) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Consumption Reports</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Consumption (forecast vs actual) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Consumption (Global) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Forecast Error (Monthly) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Forecast Error by (by planning unit) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Shipment Reports</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Shipment (Global) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Shipment Overview report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Shipment Details report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Shipment Cost Details report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Shipment Cost Overview report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Budget report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Procurement Agent Lead Time report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Inventory Reports</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Expiries report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Cost of Inventory report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Inventory Turns report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Stock Adjustment report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Warehouse Capacity (by program) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>View Warehouse Capacity (by country) report</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Consumption-Based Forecast</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Import from QAT Supply Plan</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Data Entry and Adjustment</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Extrapolation</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Tree Forecast</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Manage Tree</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Tree Templates</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Usage Templates</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Manage</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>View</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Modeling Validations</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Product Validations</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr style={{ backgroundColor: '#cfe2f3' }}>
      <td colSpan="12" style={{ border: '1px solid #dddddd', padding: '8px', fontWeight: 'bold', textAlign: 'left' }}>Forecast Analysis Output</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Compare and Select Forecast</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Monthly Forecast</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Forecast Summary</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Version Comparison</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', }}>N</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#f9f9f9', }}>Y</td>
    </tr>
  </tbody>
</table>
</div>


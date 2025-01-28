---
id: backlog
title: Backlog
sidebar_label: Backlog
sidebar_position: 3
---

# Backlog

This is a list of issues and ideas that we have identified during the QAT training and handover in Cape Town in January 2025.

Note: this backlog is currently un-ordered, but will be ordered by priority.

## Issues & Ideas

| # | Problem | Ideas / Solutions | Jira # | Owner | Status | Type |
|---|---------|------------------|---------|--------|---------|------|
| 1 | Apostrophe can't be used in problem description and suggestion for adding a manual problem to the QPL. It can be used in notes. | Allow apostrophe in notes - it | [QAT-2729](https://qathelpdesk.atlassian.net/browse/QAT-2729) | | Not started | Improvement |
| 2 | Full master data sync - shouldn't be necessary if all goes well | Need to be able to reproduce the issue - hoping that fixing the ‘new release’ reload will eliminate this problem | | | Not started | |
| 3 | Fix the pop-up after login when you have outdated program downloaded. The issue with this is that there are multiple pop-ups if the user has multiple programs downloaded, the buttons are not customizable on the page and OK is the default, there is limited space for the message and limited display options. Also the dialog disappears if you navigate away from the page. Note: there are currently different messages for edited/unedited local programs. | Create a new page that will give the user a list of programs and a button to choose the action per program. A custom page will allow for custom formatting and buttons to make it clearer for users. | | | Not started | Bug |
| 4 | Login - new release pop-up - annoying for user to ctrl+shift+R and some users won't do this. We suspect this could cause the need to do a full master data sync | If there is a new version of the application, disable login button and add red text where login button should have been OR ‘update’ button that does the refresh for the user (ctrl+shift+R) | | | Not started | Improvement |
| 5 | Upload screen - if the upload is not possible (e.g. to upload a final version there must have no open problems) the upload button is hidden. It could be confusing for users if they expect to see a button | To improve usability, Dagmar suggested to disable the button instead of hiding it // Josh: worried about greyed out. We should explain why the button is not clickable. | | | Not started | Improvement |
| 6 | Data entry screen - the submit button is only visible if there is new or updated data. Should it always be visible to improve usability? | Following on from issue 5, noted this similar scenario. No proposed solution yet | | | Not started | Improvement |
| 7 | Upload conflict with different multiply vs divide ARUs | | QAT-5555 | | Not started | Bug |
| 8 | Session timeout (auto logout) when the user is actively using the app. Our hypothesis is that this is when user has multiple tabs open and an inactive tabs cause the logout | | | | Not started | Bug |
| 9 | Releases that require user upload/download their changes before the release to avoid corrupting and having to delete their local changes | Re-assess when there is a breaking upgrade that would cause this problem. Suggestion to add new page that shows what programs you currently have that are affected by upcoming releases. However this doesn't help if the user is on holiday or never logs in. A better solution is to perform a local DB upgrade to update the database at the same time as the release. | | Not started | Improvement |
| 10 | On upload screen, user is shown the red validation text. "Fail to upload" and it's not as efficient | If there is an error on upload, show the error page (to submit ticket) instead of just an error message. This will allow the user to upload their program | | | Not started | Improvement |
| 11 | On all error pages, it's inefficient because most users don't follow up with attaching the .zip export. | Allow auto-upload of program data in export - QAT should attach the specific program needed, or all programs d/led if unclear. Check the JIRA API to add attachment (maybe need a temp file) | | | Not started | Improvement |
| 12 | On errors page, show steps the user should take before submitting a bug report. This should reduce the number of bug reports that are fixed by a full master data sync | Add instructions to tell the user to refresh the app first (Control Shift R) and to do a master data sync (MDS) or full MDS, etc | | | Not started | Improvement |
| 13 | JEXCEL + open source + upgrade | Investigate JSpreadsheet open source license and assess if the functionality used in the app is included. Investigate the effort required to upgrade JExcel to the latest version of JSpreadsheet. Write a report | | | Not started | Task |
| 14 | Add Google Analytics | Adding GA could help understand users and prioritze work (online only). Could also use services like Hotjar that allow us to see what users are doing | | | Not started | Improvement |
| 15 | QAT will not catch potential "conflict" records by multiple users if the ARU is different but for the same month. Likewise, it's not catching potential duplicate adjustments/shipments. Let's say user A creates a shipment for 1,000 in month X and user b creates a shipment for 1,000 in month X, QAT will not flag this as a conflict even though it could be. | Identify how these conflicts will be identified (on which fields) then flag potential duplicates during the upload process. Allow the user to choose server, local or BOTH | [QAT-5555](https://qathelpdesk.atlassian.net/browse/QAT-5555) | | Not started | CR |
| 16 | Frontend mapping / queue to screen new FU/PUs from ARTMIS or other ERP systems to avoid duplicates (related to [QAT-3842](https://qathelpdesk.atlassian.net/browse/QAT-3842)) | have a front end screen that lists any time a new FU/PU is sent from ARTMIS. These FU/PUs will be put in a “queue” which means they won’t be available to users until mapped by the realm admin. Add "fuzzy" matching on FU/PUs and if there is no >80% match, we can assume it can automatically be mapped and added. | [QAT-5214](https://qathelpdesk.atlassian.net/browse/QAT-5214) | Dagmar/Alexio | Started | CR |

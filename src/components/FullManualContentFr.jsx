import React from 'react';
import FullManualContentBase from './FullManualContentBase';
import Part01 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/01-introduction.md';
import Part02 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/02-version-history.md';
import Part03 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/03-table-of-contents.md';
import Part04 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/04-overview.md';
import Part05 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/05-getting-started.md';
import Part06 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/06-managing-programs-and-versions.md';
import Part07 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/07-supply-planning-module-program-data.md';
import Part08 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/08-supply-planning-module-supply-planning.md';
import Part09 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/09-supply-planning-module-reports.md';
import Part10 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/10-forecasting-module-program-data.md';
import Part11 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/11-forecasting-module-forecasting.md';
import Part12 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/12-forecasting-module-reports-and-outputs.md';
import Part13 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/13-annex-1-application-realm-administrator-manual.md';
import Part14 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/14-annex-2-business-rules.md';
import Part15 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/15-annex-3-user-role-matrix.md';
import Part16 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/16-annex-4-business-functions.md';
import Part17 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/17-annex-5-pipeline-program-import.md';
import Part18 from '../../i18n/fr/docusaurus-plugin-content-docs/current/user/18-acronyms.md';

const parts = [
  Part01, Part02, Part03, Part04, Part05, Part06, Part07, Part08, Part09,
  Part10, Part11, Part12, Part13, Part14, Part15, Part16, Part17, Part18
];

export default function FullManualContentFr() {
  return <FullManualContentBase parts={parts} />;
}

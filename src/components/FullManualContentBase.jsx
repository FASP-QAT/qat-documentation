import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

export default function FullManualContentBase({ parts }) {
  const { siteConfig } = useDocusaurusContext();
  const { docVersion, uploadDate } = siteConfig.customFields;

  return (
    <div className="full-manual-content">
      <div className="print-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
         <h2 style={{ fontSize: '2.5rem', color: 'var(--ifm-color-primary)', marginBottom: '0.25rem' }}>
            <Translate id="manual.title">QAT User Manual</Translate>
         </h2>
         <div style={{ fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem', fontWeight: '500' }}>
            <Translate id="manual.version">Version</Translate>: {docVersion} | <Translate id="manual.date">Date</Translate>: {uploadDate}
         </div>
         <img src={useBaseUrl('img/QAT-logo.png')} alt="QAT Logo" style={{ height: '80px' }} />
      </div>
      {parts.map((Part, i) => (
        <div key={i} className="manual-page-break">
          <Part />
          {i < parts.length - 1 && <hr className="page-break-divider" />}
        </div>
      ))}
    </div>
  );
}

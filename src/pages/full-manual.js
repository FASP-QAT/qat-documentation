import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import FullManualContent from '@site/src/components/FullManualContent';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FullManualPage() {
  const { siteConfig } = useDocusaurusContext();
  const { docVersion } = siteConfig.customFields;
  const pageTitle = `QAT User Manual - ${docVersion}`;
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === 'true') {
      const timer = setTimeout(() => {
        window.print();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout title={pageTitle} noFooter noNavbar>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="no-print" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '1rem',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        borderBottom: '1px solid var(--ifm-color-emphasis-300)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontWeight: 'bold', color: 'var(--ifm-color-primary)' }}>
          Preparing Full User Manual for PDF Generation...
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => window.print()} 
            className="button button--primary"
            style={{ fontWeight: 'bold' }}
          >
            Confirm & Save as PDF
          </button>
          <button 
            onClick={() => window.history.back()} 
            className="button button--secondary"
          >
            Go Back
          </button>
        </div>
      </div>

      <div className="container" style={{ marginTop: '5rem', marginBottom: '5rem', maxWidth: 'none' }}>
        <FullManualContent />
      </div>
    </Layout>
  );
}

import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function DownloadPdfButton() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Use useDoc to reliably detect if we are in the User module
  let isUserModule = false;
  try {
    const { metadata } = useDoc();
    isUserModule = 
        metadata.source.toLowerCase().includes('user') || 
        metadata.permalink.toLowerCase().includes('docs/user');
  } catch (e) {
    // Fallback or not a doc page
  }
  
  if (!isUserModule) {
    return null;
  }

  const printUrl = useBaseUrl('/full-manual');

  const labels = {
    en: { idle: 'Download User Manual', busy: 'Generating...' },
    fr: { idle: 'Télécharger le Manuel Utilisateur', busy: 'Génération...' },
    es: { idle: 'Descargar Manual de Usuario', busy: 'Generando...' },
    pt: { idle: 'Baixar Manual do Usuário', busy: 'Gerando...' }
  };

  const currentLabels = labels[locale] || labels.en;

  const handleDownload = () => {
    setIsGenerating(true);
    
    // Create a hidden iframe
    const iframeId = 'pdf-generation-iframe';
    let iframe = document.getElementById(iframeId);
    
    if (iframe) {
        document.body.removeChild(iframe);
    }
    
    iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.style.position = 'fixed';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';
    iframe.src = printUrl;
    
    iframe.onload = () => {
        setTimeout(() => {
            try {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
            } catch (e) {
                console.error('Failed to trigger print on iframe:', e);
                window.open(printUrl + '?print=true', '_blank');
            }
            setIsGenerating(false);
        }, 1500);
    };
    
    document.body.appendChild(iframe);
  };

  return (
    <div className="no-print" style={{ 
      display: 'flex', 
      justifyContent: 'flex-end', 
      padding: '5px 0',
      marginBottom: '10px',
      borderBottom: '1px solid var(--ifm-color-emphasis-300)'
    }}>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="button button--outline button--primary button--sm"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '50px',
          fontWeight: '700',
          fontSize: '0.85rem',
          textTransform: 'none',
          padding: '6px 16px',
          opacity: isGenerating ? 0.7 : 1,
          cursor: isGenerating ? 'wait' : 'pointer'
        }}
      >
        {isGenerating ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4" strokeDashoffset="10">
              <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        ) : (
          /* Font Awesome 6 File PDF SVG Path */
          <svg width="16" height="16" viewBox="0 0 512 512" fill="#e74c3c">
            <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0c-8.8 0-16 7.2-16 16l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32zm32-80c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0-48 32 0zM128 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160zm320 16c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 0-16 0-32 0-16 0-16zm-176 8c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 144c0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80s-35.8-80-80-80zM304 368c0 26.5-21.5 48-48 48l0-96c26.5 0 48 21.5 48 48z" />
          </svg>
        )}
        {isGenerating ? currentLabels.busy : currentLabels.idle}
      </button>
    </div>
  );
}

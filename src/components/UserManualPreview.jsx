import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function UserManualPreview() {
    const manuals = [
        { label: 'English', value: 'en', pdf: '/user_manual/UserManual_en.pdf', docx: '/user_manual/UserManual_en.docx' },
        { label: 'French', value: 'fr', pdf: '/user_manual/UserManual_fr.pdf', docx: '/user_manual/UserManual_fr.docx' },
        { label: 'Spanish', value: 'sp', pdf: '/user_manual/UserManual_sp.pdf', docx: '/user_manual/UserManual_sp.docx' },
        { label: 'Portuguese', value: 'pr', pdf: '/user_manual/UserManual_pr.pdf', docx: '/user_manual/UserManual_pr.docx' },
    ];


    return (
        <div style={{ margin: '2rem 0' }}>
            <Tabs defaultValue="en">
                {manuals.map((manual) => (
                    <TabItem key={manual.value} value={manual.value} label={manual.label}>
                        <div style={{
                            height: '800px',
                            border: '1px solid var(--ifm-color-emphasis-300)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            backgroundColor: 'var(--ifm-background-color)'
                        }}>
                            <iframe
                                src={`${useBaseUrl(manual.pdf)}#view=FitH`}
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                title={`User Manual - ${manual.label}`}
                            />

                        </div>
                        <div style={{
                            marginTop: '1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0 0.5rem'
                        }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content-secondary)' }}>
                                Download:
                                <a href={useBaseUrl(manual.pdf)} style={{ marginLeft: '0.5rem' }}>PDF</a>
                            </span>
                            <a
                                href={useBaseUrl(manual.pdf)}
                                className="button button--primary button--sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open PDF in Full Screen
                            </a>

                        </div>
                    </TabItem>
                ))}
            </Tabs>
        </div>
    );
}

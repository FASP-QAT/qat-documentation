import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';


import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {docVersion, uploadDate} = siteConfig.customFields;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Quantification Analytics Tool
        </Heading>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '2rem auto', fontSize: '1.2rem' }}>
          The Quantification Analytics Tool (QAT) is a cloud-based software for country-led forecasting and supply planning (FASP). QAT has a forecasting module and a supply planning module, and can be used for any health commodity.
          </p>
      </div>
    </header>
  );
}

import DownloadPdfButton from '@site/src/components/DownloadPdfButton';

function ResourceColumns() {
  const resources = [
    {
      image: "img/home/QAT Overview Cover.png",
      heading: "Overview",
      text: <>
        <p>Download this overview to learn how QAT enhances supply planning through its improved 
        interface, advanced analytics, and automated data exchange.</p><p>This two-page document 
        highlights key features that help program managers optimize procurement, monitor 
        stock levels, and share data efficiently with stakeholders.</p>
      </>,
      link: "https://www.ghsupplychain.org/sites/default/files/2023-02/QAT_Overview_External.pdf"
    },
    {
      image: "img/home/QAT User Manual Cover Image.png",
      heading: "User Manual",
      isPremiumPdf: true, // Mark for background download
      text: <>
        <p>Download the QAT User Manual to learn how to use this supply planning tool.</p>
        <p>The manual covers:
        <ol>
          <li>Essential background and development information</li>
          <li>Step-by-step guidance for both online and offline functionality</li>
          <li>Advanced features including scenario planning and updated planning logic</li>
          <li>Best practices for master data management and program standardization</li>
          <li>Instructions for monitoring stock status, optimizing procurement, and sharing data</li>
        </ol></p>
      </>,
      link: "/full-manual?print=true"

    },
    {
      image: "img/home/QAT Reports Reference Sheet Image.png",
      heading: "Reports Reference Sheet",
      text: <>
        <p>Download the QAT Reports Reference Sheet to learn about the reports available in QAT, 
        which cover Stock Status, Consumption, Shipment, and Inventory.</p><p>The reference sheet 
        provides visual examples and brief descriptions of each report, including the 
        Program Catalog and Supply Plan Report. This guide helps users quickly identify 
        the most appropriate reports for their specific data analysis needs.</p>
      </>,
      link: "https://www.ghsupplychain.org/sites/default/files/2023-11/Reports%20Reference%20Sheet.pdf"
    }
  ];

  return (
    <div className="container">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        marginTop: '3rem',
        justifyContent: 'center',
        alignItems: 'start'
      }}>
        {resources.map((resource, index) => (
          <div key={index} style={{
            flex: '1 1 300px',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Heading as="h3" style={{ marginBottom: '1rem' }}>
              {resource.heading}
            </Heading>
            
            {resource.isPremiumPdf ? (
              /* Custom cover image and downloader for the User Manual */
              <div style={{ cursor: 'pointer' }}>
                <Link to={useBaseUrl(resource.link)}>

                   <img 
                    src={resource.image}
                    alt={resource.heading}
                    style={{
                      width: 'auto',
                      height: '200px',
                      objectFit: 'contain',
                      marginBottom: '1rem'
                    }}
                    className={styles.dropShadow}
                  />
                </Link>
              </div>
            ) : (
              <Link
                to={useBaseUrl(resource.link)}
                className={styles.imageLink}
              >

                <img 
                  src={resource.image}
                  alt={resource.heading}
                  style={{
                    width: 'auto',
                    height: '200px',
                    objectFit: 'contain',
                    marginBottom: '1rem'
                  }}
                  className={styles.dropShadow}
                />
              </Link>
            )}

            {resource.isPremiumPdf ? (
              <DownloadPdfButton 
                showEverywhere={true} 
                className="button button--primary" 
              />
            ) : (
              <Link
                className="button button--primary"
                to={useBaseUrl(resource.link)}
                style={{ marginTop: 'auto' }}
              >
                Download
              </Link>
            )}


            <div style={{ 
              textAlign: 'left',
              marginTop: '1rem'
            }}>
              {resource.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      {/* <ResourceColumns /> */}
      {/* <hr className="section-divider-footer" /> */}
      <br />
    </Layout>
  );
}

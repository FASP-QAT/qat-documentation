import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Quantification Analytics Tool
        </Heading>
        <p className="hero__subtitle">
          FASP QAT Documentation Platform
        </p>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '2rem auto', fontSize: '1.2rem' }}>
          The Quantification Analytics Tool (QAT), is a modernized solution for 
          country-led forecasting and supply planning. Funded by USAID, QAT 
          leverages new technologies and enhances the existing tools such as, 
          PipeLine and Quantimed. With an enhanced user interface and 
          usability, greater analytical capabilities and automated data 
          exchange, this new tool enables program managers to easily build 
          multiple forecasts for comparison and selection, optimize commodity 
          procurement and delivery schedules, monitor the stock status of 
          products and share data with external platforms and key stakeholders.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link
              className="button button--secondary button--lg"
              to="https://www.quantificationanalytics.org">
              Login
            </Link>
          </div>
      </div>
    </header>
  );
}

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
      link: "https://www.ghsupplychain.org/sites/default/files/2024-04/QAT-UserGuide.pdf"
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
            <Link
              to={resource.link}
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
            <Link
              className="button button--primary"
              to={resource.link}
              style={{ marginTop: 'auto' }}
            >
              Download
            </Link>
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
      <ResourceColumns />
      <hr className="section-divider-footer" />
      <main className="container">
        <div>
          <p style={{ textAlign: 'left' }}>
          For more information regarding QAT, please contact the FASP Team 
          at <a href="mailto:HSS_FASP_HQ@ghsc-psm.org">HSS_FASP_HQ@ghsc-psm.org</a>
          </p>
          <p style={{ textAlign: 'left', marginTop: '2rem' }}>
          The USAID Global Health Supply Chain Program-Procurement and Supply 
          Management (GHSC-PSM) project is funded under USAID Contract No. 
          AID-OAA-I-15-0004. GHSC-PSM connects technical solutions and proven 
          commercial processes to promote efficient and cost-effective health 
          supply chains worldwide. Our goal is to ensure uninterrupted supplies 
          of health commodities to save lives and create a healthier future for 
          all. The project purchases and delivers health commodities, offers 
          comprehensive technical assistance to strengthen national supply 
          chain systems, and provides global supply chain leadership. For more 
          information, visit ghsupplychain.org. The information provided in 
          this tool is not official U.S. government information and does not 
          represent the views or positions of the Agency for International 
          Development or the U.S. government.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
            <img src="/img/home/USAID-wordmark.png" alt="USAID" style={{ maxWidth: '300px', width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src="/img/home/PEPFAR-logo.png" alt="PEPFAR" style={{ maxWidth: '300px', width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src="/img/home/USAID-presidents-malaria-initiative.png" alt="PEPFAR Malaria Initiative" style={{ maxWidth: '300px', width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

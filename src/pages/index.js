import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Quantification Analytics Tool
        </Heading>
        <p className={styles.heroSubtitle}>
          Modern Country-Led Forecasting & Supply Planning
        </p>
        <div className={styles.heroDescriptionContainer}>
          <p className={styles.heroDescription}>
            Funded by USAID, QAT enables program managers to easily build 
            multiple forecasts, optimize commodity procurement, and monitor 
            stock status with advanced analytical capabilities and automated data exchange.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/user/introduction">
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/developer/overview">
              Architecture
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ResourceColumns() {
  const resources = [
    {
      image: "img/home/QAT Overview Cover.png",
      heading: "Overview Guide",
      description: "Learn how QAT enhances supply planning through advanced analytics and automated data exchange.",
      link: "https://www.ghsupplychain.org/sites/default/files/2023-02/QAT_Overview_External.pdf"
    },
    {
      image: "img/home/QAT User Manual Cover Image.png",
      heading: "User Manual",
      description: "Complete guide for online/offline functionality, scenario planning, and best practices.",
      link: "https://www.ghsupplychain.org/sites/default/files/2025-01/QAT%20User%20Manual_2024.12.31.pdf"
    },
    {
      image: "img/home/QAT Reports Reference Sheet Image.png",
      heading: "Reports Reference",
      description: "Visual guide to Stock Status, Consumption, and Inventory reports available in QAT.",
      link: "https://www.ghsupplychain.org/sites/default/files/2023-11/Reports%20Reference%20Sheet.pdf"
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {resources.map((props, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className={styles.premiumCard}>
                <div className={styles.cardHeader}>
                  <img src={props.image} alt={props.heading} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                  <Heading as="h3">{props.heading}</Heading>
                  <p>{props.description}</p>
                  <Link
                    className="button button--secondary button--block"
                    to={props.link}>
                    Download PDF
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
            <img src="img/home/USAID-wordmark.png" alt="USAID" style={{ maxWidth: '300px', width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src="img/home/PEPFAR-logo.png" alt="PEPFAR" style={{ maxWidth: '300px', width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src="img/home/USAID-presidents-malaria-initiative.png" alt="PEPFAR Malaria Initiative" style={{ maxWidth: '300px', width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

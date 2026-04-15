import React, { Suspense, lazy } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const FullManualContentEn = lazy(() => import('./FullManualContentEn'));
const FullManualContentFr = lazy(() => import('./FullManualContentFr'));
const FullManualContentEs = lazy(() => import('./FullManualContentEs'));
const FullManualContentPt = lazy(() => import('./FullManualContentPt'));

const Loading = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <div className="loader">Loading manual content...</div>
  </div>
);

export default function FullManualContent() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  return (
    <Suspense fallback={<Loading />}>
      {(() => {
        switch (locale) {
          case 'fr': return <FullManualContentFr />;
          case 'es': return <FullManualContentEs />;
          case 'pt': return <FullManualContentPt />;
          default: return <FullManualContentEn />;
        }
      })()}
    </Suspense>
  );
}

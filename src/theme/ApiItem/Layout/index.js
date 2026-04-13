import React from 'react';
import Layout from '@theme-original/ApiItem/Layout';
import DownloadPdfButton from '@site/src/components/DownloadPdfButton';

export default function LayoutWrapper(props) {
  return (
    <>
      <DownloadPdfButton />
      <Layout {...props} />
    </>
  );
}

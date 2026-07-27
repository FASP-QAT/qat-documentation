import React from 'react';
import OriginalSchemaTabs from '@theme-original/SchemaTabs';
import { useTabsContextValue, TabsProvider } from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function SchemaTabsWrapper(props) {
  const isBrowser = useIsBrowser();
  const value = useTabsContextValue(props);

  return (
    <TabsProvider
      value={value}
      key={String(isBrowser)}>
      <OriginalSchemaTabs {...props} />
    </TabsProvider>
  );
}

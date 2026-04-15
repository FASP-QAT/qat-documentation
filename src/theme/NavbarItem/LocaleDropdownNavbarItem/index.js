import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  label,
  ...props
}) {
  const {
    siteConfig: { baseUrl },
    i18n: { currentLocale, locales, localeConfigs, defaultLocale },
  } = useDocusaurusContext();
  const { pathname } = useLocation();

  const localeItems = locales.map((locale) => {
    // 1. Get the path relative to baseUrl
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    let relativePath = pathname.startsWith(normalizedBaseUrl)
      ? pathname.substring(normalizedBaseUrl.length)
      : pathname.startsWith(baseUrl.replace(/\/$/, ''))
        ? pathname.substring(baseUrl.replace(/\/$/, '').length)
        : pathname;

    // Remove leading slash if any
    if (relativePath.startsWith('/')) {
      relativePath = relativePath.substring(1);
    }

    // 2. Identify and remove any locale prefix from the relative path
    let purePath = relativePath;
    for (const l of locales) {
      if (purePath === l || purePath.startsWith(`${l}/`)) {
        purePath = purePath === l ? '' : purePath.substring(l.length + 1);
        break;
      }
    }

    // 3. Determine the target path
    const isUserModule = purePath.startsWith('docs/user') || purePath.startsWith('full-manual');
    const isHomePage = purePath === '' || purePath === '/';
    
    let targetPath;
    if (isUserModule || isHomePage) {
      targetPath = purePath;
    } else {
      targetPath = 'docs/user/introduction';
    }

    // 4. Construct the target URL
    const localePrefix = locale === defaultLocale ? '' : `${locale}/`;
    const fullPath = `${normalizedBaseUrl}${localePrefix}${targetPath}`.replace(/\/+/g, '/').replace(/\/$/, '');
    
    const finalPath = fullPath || normalizedBaseUrl;
    const to = `pathname://${finalPath}`;
    
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        locale === currentLocale
          ? mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  const dropdownLabel = label || (mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale].label);

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}

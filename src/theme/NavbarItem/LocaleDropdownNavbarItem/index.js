import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
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
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();

  const localeItems = locales.map((locale) => {
    // Use Docusaurus's built-in utility to get the correct URL for this locale.
    // This properly handles baseUrl and locale prefixes without manual manipulation.
    const alternateUrl = alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    });

    // The alternateUrl is the full pathname for the equivalent page in the target locale.
    // Extract just the path suffix (after the target locale's baseUrl) to check
    // if it's a user module page.
    // For default locale: baseUrl = /qat-documentation/
    // For other locales: baseUrl = /qat-documentation/{locale}/
    const targetLocaleConfig = localeConfigs[locale];
    const targetBaseUrl = targetLocaleConfig.baseUrl || baseUrl;
    const pathSuffix = alternateUrl.startsWith('pathname://')
      ? alternateUrl.substring('pathname://'.length).replace(targetBaseUrl, '')
      : alternateUrl.replace(targetBaseUrl, '');

    // Determine if this page exists in the target locale.
    // Only user module docs and the homepage are translated;
    // other pages (developer, product, API) should redirect to the introduction page.
    const isUserModule = pathSuffix.startsWith('docs/user') || pathSuffix.startsWith('full-manual');
    const isHomePage = pathSuffix === '' || pathSuffix === '/';

    let finalUrl;
    if (isUserModule || isHomePage) {
      // Page exists in this locale — use the Docusaurus-generated URL as-is
      finalUrl = alternateUrl;
    } else {
      // Page doesn't exist in this locale — redirect to the introduction page
      finalUrl = `pathname://${targetBaseUrl}docs/user/introduction`;
    }

    // Append search and hash from the current URL
    if (search || hash) {
      // Strip pathname:// prefix, append search/hash, then re-add prefix
      const hasPrefix = finalUrl.startsWith('pathname://');
      const rawUrl = hasPrefix ? finalUrl.substring('pathname://'.length) : finalUrl;
      finalUrl = `${hasPrefix ? 'pathname://' : ''}${rawUrl}${search}${hash}`;
    }

    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to: finalUrl,
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


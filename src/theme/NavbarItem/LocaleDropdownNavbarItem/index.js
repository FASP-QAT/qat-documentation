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
    siteConfig: {baseUrl},
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const {pathname} = useLocation();

  const localeItems = locales.map((locale) => {
    // 1. Get the path relative to baseUrl
    let relativePath = pathname.startsWith(baseUrl)
      ? pathname.substring(baseUrl.length)
      : pathname;

    // Remove leading slash if any
    if (relativePath.startsWith('/')) {
      relativePath = relativePath.substring(1);
    }

    // 2. Remove the current locale prefix to get the "pure" path
    let purePath = relativePath;
    const otherLocales = locales.filter(l => l !== 'en');
    for (const l of otherLocales) {
      if (purePath === l || purePath.startsWith(`${l}/`)) {
        purePath = purePath === l ? '' : purePath.substring(l.length + 1);
        break;
      }
    }

    // 3. Determine if we stay on the current page or go to user introduction
    const isUserModule = purePath.startsWith('docs/user') || purePath.startsWith('full-manual');
    
    let targetPath;
    if (isUserModule) {
      targetPath = purePath;
    } else {
      targetPath = 'docs/user/introduction';
    }

    // 4. Construct the target URL
    const localePrefix = locale === 'en' ? '' : `${locale}/`;
    // Ensure combine without double slashes (except the leading one from baseUrl)
    const fullPath = `${baseUrl}${localePrefix}${targetPath}`.replace(/\/+/g, '/');
    const to = `pathname://${fullPath}`;
    
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
            // class name. This cannot be substituted with isActive, because the
            // target URLs contain `pathname://` and therefore are not NavLinks!
            mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
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

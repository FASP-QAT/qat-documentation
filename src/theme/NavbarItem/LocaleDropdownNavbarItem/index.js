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
    // Check if we are currently in the "User" module or full manual
    const isUserModule = pathname.includes('/docs/user') || pathname.includes('/full-manual');

    let to;
    if (isUserModule) {
      // Stay on the same page but change the locale
      let relativePath = pathname.startsWith(baseUrl)
        ? pathname.substring(baseUrl.length)
        : pathname;

      if (currentLocale !== 'en' && relativePath.startsWith(`${currentLocale}/`)) {
        relativePath = relativePath.substring(currentLocale.length + 1);
      }
      
      const localePath = locale === 'en' ? '' : `${locale}/`;
      to = `pathname://${baseUrl}${localePath}${relativePath}`;
    } else {
      // If not in the user module, redirect to the user introduction in that language
      const localePath = locale === 'en' ? '' : `${locale}/`;
      to = `pathname://${baseUrl}${localePath}docs/user/introduction`;
    }
    
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

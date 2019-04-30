import * as React from 'react';
import forEach from 'lodash/forEach';
import { IntlProvider, addLocaleData, Locale } from 'react-intl';
import moment, { LocaleSpecification } from 'moment';

import locales, { LocaleTypes } from 'constants/locales';
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';
import { localizationStore, Stores } from '../stores';

forEach(locales, (locale, key) =>
  moment.defineLocale(
    key,
    (locale.dateTimeFormat as unknown) as LocaleSpecification
  )
);

// Go over all of the available locales and register them
forEach(locales, (_value, key: string) => {
  addLocaleData(({
    locale: key,
    // Couldn't find any documentation about 'pluralRuleFunction', throws error if not present
    pluralRuleFunction: () => {}
  } as unknown) as Locale);
});

interface OwnProps {
  children: React.ReactNode;
}

interface StateProps {
  locale?: LocaleTypes;
}

type Props = StateProps & OwnProps;

@inject((stores: Stores) => ({
  locale: stores.localizationStore.locale
}))
@observer
export class Localization extends React.Component<Props> {
  render() {
    const { locale, children } = this.props;

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={locales[locale!].translations}>
        {children}
      </IntlProvider>
    );
  }
}

autorun(() => {
  const currentLocale = localizationStore.locale;

  moment.locale(currentLocale);
});

export default Localization;

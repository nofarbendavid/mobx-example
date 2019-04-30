import { action, observable } from 'mobx';
import { LocaleTypes } from '../constants/locales';

export class LocalizationStore {
  @observable locale: LocaleTypes = 'en-US';

  @action setLocale(locale: LocaleTypes) {
    this.locale = locale;
  }
}

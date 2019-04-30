import enUS from 'constants/locales/en-US';
import {Locale} from "../../types/common.types";

// Add more locales using a type union e.g 'en-US' | 'he-IL'
export type LocaleTypes = 'en-US';

interface LocaleList {
  [key:string]: Locale
}

const locales: LocaleList = {
  'en-US': enUS,
};

export default locales;

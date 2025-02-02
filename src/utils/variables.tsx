import { Locale } from 'date-fns';
import * as locales from 'date-fns/locale';

export const BASEURL = 'https://dummyjson.com/';
export const AUTHTOKEN = '_fetkn';

// getDateFnsLocale should receive the language based on the user browser
// and return the locale to be used within the userChartData to format it according to user's browser preference

export const getDateFnsLocale = (language: string): Locale => {
  const fallbackLocale = locales.enUS;
  const localeKey = language.replace('-', '') as keyof typeof locales;

  return locales[localeKey] || fallbackLocale;
};

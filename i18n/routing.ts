
import {defineRouting} from 'next-intl/routing';

export type localesType = 'en' | 'pt-BR';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pt-BR'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
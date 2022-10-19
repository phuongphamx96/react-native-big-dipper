export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM_DEFAULT = 'default',
}

export enum Language {
  ENGLISH = 'en',
  VIETNAMESE = 'vi',
}

export enum DateFormat {
  LOCALE = 'locale',
  UTC = 'utc',
}

export enum FontFamily {
  GOOGLE_SANS = 'GoogleSans',
  ROBOTO = 'Roboto',
  LIBRE_FRANKLIN = 'LibreFranklin',
  SYSTEM_DEFAULT = 'default',
}

export type SettingsState = {
  theme: Theme;
  language: Language;
  dateFormat: DateFormat;
  fontFamily: FontFamily;
};

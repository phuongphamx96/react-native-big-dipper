export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM_DEFAULT = 'default',
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
  dateFormat: DateFormat;
  fontFamily: FontFamily;
};

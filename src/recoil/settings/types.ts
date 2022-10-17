export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  DEVICE = 'device',
}
export enum DateFormat {
  LOCALE = 'locale',
  UTC = 'utc',
}

export type SettingsState = {
  theme: Theme;
  dateFormat: DateFormat;
};

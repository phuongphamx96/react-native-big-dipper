import { equals } from 'ramda';
import { Platform, PlatformOSType } from 'react-native';

export const IS_ANDROID = equals<PlatformOSType>(Platform.OS, 'android');

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontFamily, fontFamilyState } from '@rnbd/recoil/settings';
import { FONT_FAMILY_KEY } from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useRecoilState } from 'recoil';

import { FontFamilyOption } from './types';

export const useFontFamilyOptions = (): FontFamilyOption[] => {
  return [
    {
      value: FontFamily.GOOGLE_SANS,
      label: 'Google Sans',
    },
    {
      value: FontFamily.ROBOTO,
      label: 'Roboto',
    },
    {
      value: FontFamily.LIBRE_FRANKLIN,
      label: 'Libre Franklin',
    },
    {
      value: FontFamily.SYSTEM_DEFAULT,
      label: 'System default',
    },
  ];
};

export const useSelectFontFamily = () => {
  const [fontFamily, setFontFamily] = useRecoilState(fontFamilyState);
  const options = useFontFamilyOptions();

  const onSelectFontFamily = async (newFontFamily: FontFamily) => {
    try {
      if (!equals(fontFamily, newFontFamily)) {
        await AsyncStorage.setItem(FONT_FAMILY_KEY, newFontFamily);
        setFontFamily(newFontFamily);
      }
    } catch (error) {
      console.error('onSelectFontFamily', error);
    }
  };

  return { options, fontFamily, setFontFamily, onSelectFontFamily };
};

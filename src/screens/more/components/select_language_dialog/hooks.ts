import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language, languageState } from '@rnbd/recoil/settings';
import { LANGUAGE_KEY } from '@rnbd/utils/constants/storage_keys';
import { equals } from 'ramda';
import { useRecoilState } from 'recoil';

import { LanguageOption } from './types';

export const useLanguageOptions = (): LanguageOption[] => {
  return [
    {
      value: Language.ENGLISH,
      label: 'English',
    },
    // {
    //   value: Language.VIETNAMESE,
    //   label: 'Tiếng Việt',
    // },
  ];
};

export const useSelectLanguage = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const options = useLanguageOptions();

  const onSelectLanguage = async (newLanguage: Language) => {
    try {
      if (!equals(language, newLanguage)) {
        await AsyncStorage.setItem(LANGUAGE_KEY, newLanguage);
        setLanguage(newLanguage);
      }
    } catch (error) {
      console.error('onSelectLanguage', error);
    }
  };

  return { options, language, setLanguage, onSelectLanguage };
};

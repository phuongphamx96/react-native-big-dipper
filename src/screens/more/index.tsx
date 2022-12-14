import { List, Screen, ScrollView } from '@rnbd/components';
import { Fragment, memo } from 'react';
import { List as PaperList, Portal } from 'react-native-paper';

import { useMore } from './hooks';

const More = () => {
  const {
    sections,
    SelectThemeDialog,
    SelectLanguageDialog,
    SelectDateFormatDialog,
    SelectFontFamilyDialog,
  } = useMore();

  return (
    <Fragment>
      <Screen>
        <ScrollView>
          {sections.map((section) => {
            return (
              <PaperList.Section key={section.title} title={section.title}>
                {section.items.map((sectionItem) => {
                  return (
                    <List.Item
                      key={sectionItem.formattedTitle}
                      {...sectionItem}
                    />
                  );
                })}
              </PaperList.Section>
            );
          })}
        </ScrollView>
      </Screen>
      <Portal>
        {SelectThemeDialog.render()}
        {SelectLanguageDialog.render()}
        {SelectDateFormatDialog.render()}
        {SelectFontFamilyDialog.render()}
      </Portal>
    </Fragment>
  );
};

export default memo(More);

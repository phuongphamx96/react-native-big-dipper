import { Screen, ScrollView } from '@rnbd/components';
import { List } from '@rnbd/components';
import { Fragment, memo } from 'react';
import { List as PaperList, Portal } from 'react-native-paper';

import { useMore } from './hooks';

const More = () => {
  const {
    sections,
    SelectThemeDialog,
    SelectDateFormatDialog,
    SelectFontFamilyDialog,
  } = useMore();

  return (
    <Fragment>
      <Screen>
        <ScrollView>
          {sections.map((section, sectionIndex) => {
            return (
              <PaperList.Section key={sectionIndex} title={section.title}>
                {section.items.map((sectionItem, sectionItemIndex) => {
                  return <List.Item key={sectionItemIndex} {...sectionItem} />;
                })}
              </PaperList.Section>
            );
          })}
        </ScrollView>
      </Screen>
      <Portal>
        {SelectThemeDialog.render()}
        {SelectDateFormatDialog.render()}
        {SelectFontFamilyDialog.render()}
      </Portal>
    </Fragment>
  );
};

export default memo(More);

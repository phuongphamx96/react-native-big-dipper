import { Screen, ScrollView } from '@rnbd/components';
import { Fragment, memo } from 'react';
import { List, Portal } from 'react-native-paper';

import { useMore } from './hooks';

const More = () => {
  const { sections, SelectThemeDialog, SelectDateFormatDialog } = useMore();

  return (
    <Fragment>
      <Screen>
        <ScrollView>
          {sections.map((section, sectionIndex) => {
            return (
              <List.Section key={sectionIndex} title={section.title}>
                {section.items.map((sectionItem, sectionItemIndex) => {
                  return <List.Item key={sectionItemIndex} {...sectionItem} />;
                })}
              </List.Section>
            );
          })}
        </ScrollView>
      </Screen>
      <Portal>
        {SelectThemeDialog.render()}
        {SelectDateFormatDialog.render()}
      </Portal>
    </Fragment>
  );
};

export default memo(More);

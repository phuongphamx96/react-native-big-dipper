/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false, // false because of the issue https://github.com/storybookjs/react-native/issues/152
      },
    }),
  },
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
  },
};

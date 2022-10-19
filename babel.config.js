module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@rnbd/components': './src/components',
          '@rnbd/i18n': './src/i18n',
          '@rnbd/navigation': './src/navigation',
          '@rnbd/recoil': './src/recoil',
          '@rnbd/screens': './src/screens',
          '@rnbd/utils': './src/utils',
        },
      },
    ],
  ],
};

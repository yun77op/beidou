'use strict';

const env = require('babel-preset-env');
const classProperties = require('babel-plugin-transform-class-properties');
const react = require('babel-preset-react');

module.exports = {
  presets: [
    [
      env,
      {
        targets: {
          // Compile for this current running node, eg. 8.9.3
          node: true,
        },
        useBuiltIns: true,
        // debug: true,
      },
    ],
    react,
  ],
  plugins: [classProperties]
};

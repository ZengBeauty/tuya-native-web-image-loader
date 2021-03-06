'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */

var createImageWrapper = exports.createImageWrapper = function createImageWrapper(classPath) {
  return function (size, images) {
    var uri = '' + images['@1x'];

    delete images['@1x'];

    var scalings = [];

    for (var scaling in images) {
      scalings.push('"uri' + scaling + '": ' + images[scaling] + ',');
    }

    return 'var AdaptiveImage = require( ' + classPath + ' );\n\nmodule.exports = new AdaptiveImage({\n    uri: ' + uri + ',' + scalings.join('') + '\n    width: ' + size.width + ',\n    height: ' + size.height + '\n});';
  };
};
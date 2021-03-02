'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _imageSize = require('image-size');

var _imageSize2 = _interopRequireDefault(_imageSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (path) {
  var _$exec = /@(\d)x\.png$/.exec(path),
      _$exec2 = (0, _slicedToArray3.default)(_$exec, 2),
      scale = _$exec2[1];

  var _sizeOf = (0, _imageSize2.default)(path),
      type = _sizeOf.type,
      width = _sizeOf.width,
      height = _sizeOf.height;

  return {
    type: type,
    width: width / scale,
    height: height / scale
  };
};
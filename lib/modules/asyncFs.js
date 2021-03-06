'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileAsync = exports.statAsync = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statAsync = exports.statAsync = function _callee(filePath) {
  return _regenerator2.default.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
            _fs2.default.stat(filePath, function (err, stats) {
              if (err) {
                reject(err);
              } else {
                resolve(stats);
              }
            });
          }));

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, null, undefined);
};

var readFileAsync = exports.readFileAsync = function _callee2(filePath) {
  return _regenerator2.default.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
            _fs2.default.readFile(filePath, function (err, data) {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          }));

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, undefined);
};
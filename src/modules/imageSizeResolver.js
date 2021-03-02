// @flow
import sizeOf from 'image-size';

module.exports = function(path: string): { width: number, height: number } {
  const [, scale] = /@(\d)x\.png$/.exec(path);
  const { type, width, height } = sizeOf(path);
  return {
    type,
    width: width / scale,
    height: height / scale,
  };
};

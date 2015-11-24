var translation = require('./index.json');
exports.translate = function (str) {
  Object.keys(translation).forEach(function(key) {
    str = str.replace(key, translation[key]);
  });
  return str;
};

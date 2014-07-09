
var leveljs = require('level-js');
var levelup = require('levelup');

module.exports = function(path,opts){
  opts = opts||{};
  opts.db = leveljs(path);
  return levelup(path,opts);
}

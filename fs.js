


var leveljs = require('level-js');
var levelup = require('levelup');


var filesystem = require('level-filesystem');
var fs = filesystem(levelup('pinoccio-editor',{db:leveljs}));

module.exports = fs;

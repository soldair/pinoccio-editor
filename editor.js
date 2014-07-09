
var ace = require('brace');
require('brace/mode/javascript');
require('brace/mode/c_cpp');
require('brace/theme/monokai');


module.exports = function(id){

  var editor = ace.edit(id);
  editor.getSession().setMode('ace/mode/javascript');
  editor.setTheme('ace/theme/monokai');

  return editor

}



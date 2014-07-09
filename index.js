
var editor = require('./editor');
var tree = require("./tree");
var fs = require('fs');
var hyperquest = require('hyperquest');



window.fs = fs;

module.exports = {
  fs:fs,
  editor:editor,
  tree:tree,
  request:hyperquest,
  test:function(){
    var req = hyperquest("http://localhost:8088/build",{method:"POST"});

    req.on('response',function(res){

      res.on('data',function(d){ console.log('response',d) });

    }).on('error',function (err){

      console.log('error sending request!',err);

    });
    
    fs.createReadStream('/bootstrap.ino').pipe(req);
  }
}

if(process.browser) window.pinoccioEditor = module.exports;

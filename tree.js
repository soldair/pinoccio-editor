// file tree!

var walkdir = require('walkdir');
var bs = require('binarysearch');

var EventEmitter = require('events').EventEmitter;

module.exports = function(start,cb){

  var ee = new EventEmitter();
  
  ee.files = [];

  var walk = walkdir(start||'/')

  walk.on('path',function(path){
    console.log('path!',path);
    bs.insert(ee.files,path);
    ee.emit('path',path);
  });


  walk.on('end',function(){
    ee.emit('loaded');
    cb(false,ee);
  })

  return ee;
}

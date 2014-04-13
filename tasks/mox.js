/*
 * grunt-mox
 * https://github.com/tchaplin/grunt-mox
 *
 * Copyright (c) 2013 tjchaplin
 * Licensed under the MIT license.
 */

'use strict';

var mox   = require('mox');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mox', 'Grunt module for using mox( A markdown javascript documentation generator)', function() {
    var done = this.async();
    var options = this.options({});

    grunt.verbose.writeflags(options, 'Options');
    
    var sources = this.data.sourceFiles;
    
    grunt.log.writeln('Generating mox documentation for:' + JSON.stringify(sources) + '...');
    outputOptions(options);

    mox.run(sources,options,function(error){
      if(error){
        grunt.log.errorlns(error)
        done();
      }
      grunt.log.writeln("Completed Generating Mox Documentation");
      grunt.log.ok();
      done();
    });
  });

  var outputOptions = function(options){

    if(options.outputFile){
      grunt.verbose.writeln('Generating output markdown to file:' + options.outputFile);
    }
    
    if(options.htmlOutputFile){
      grunt.verbose.writeln('Generating output html to file:' + options.htmlOutputFile);
    }
    
    if(options.moxJsonFile){
      grunt.verbose.writeln('Generating output mox json to file:' + options.moxJsonFile);
    }

    grunt.verbose.writeln('Using template:' + options.template);
  };

};

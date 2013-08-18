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
    
    var options = this.options({});
    
    grunt.verbose.writeflags(options, 'Options');

    var sources = this.data.sourceFiles;
    var template = this.data.template;
    var outputFile = this.data.outputFile;

    grunt.log.writeln('Generating mox documentation for:' + JSON.stringify(sources) + '...');
    grunt.log.writeln('Generated output will be saved to:' + outputFile);
    grunt.verbose.writeln('Using template:' + template);

    mox.run(sources,outputFile,template);

    grunt.log.ok();
  });

};

/*
 * grunt-mox
 * https://github.com/tchaplin/grunt-mox
 *
 * Copyright (c) 2013 tjchaplin
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    mox: {
      defaultTemplate: {
        sourceFiles : ['./test/fixtures/functionSomeClass.js'],
        options: {
          outputFile : "./tmp/functionSomeClass.md"
        }
      },
      definedTemplate: {
        sourceFiles : ['./test/fixtures/functionSomeClass.js'],
        options: {
          template : "category",
          outputFile : "./tmp/templates/category/functionSomeClass.md"
        }
      },
      moxjsonOutputFile: {
        sourceFiles : ['./test/fixtures/functionSomeClass.js'],
        options: {
          moxFile : "./tmp/functionSomeClass.json"
        }
      },
      htmlOutputFile: {
        sourceFiles : ['./test/fixtures/functionSomeClass.js'],
        options: {
          htmlFile : "./tmp/functionSomeClass.html"
        }
      },
      nameOption: {
        sourceFiles : ['./test/fixtures/functionSomeClass.js'],
        options: {
          name:"Grunt-Mox",
          outputFile : "./tmp/withNameFunctionSomeClass.md"
        }
      },
      versionOption: {
        sourceFiles : ['./test/fixtures/functionSomeClass.js'],
        options: {
          version:"v1.2",
          outputFile : "./tmp/withVersionFunctionSomeClass.md"
        }
      }
    },
    release: {
      options: {
        bump: true, //default: true
        file: "package.json", //default: package.json
        add: true, 
        commit: true,
        tag: true,
        push: true,
        pushTags: true,
        npm: true
      }
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-release");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mox', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

  grunt.registerTask("deploy", ["release"]);

};

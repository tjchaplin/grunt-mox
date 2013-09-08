# grunt-mox

> Grunt module for using mox( A markdown javascript documentation generator)

Check out the example mox output [here](https://github.com/tjchaplin/mox/tree/master/doc)

[![Build Status](https://travis-ci.org/tjchaplin/grunt-mox.png?branch=master)](https://travis-ci.org/tjchaplin/grunt-mox)

[![NPM](https://nodei.co/npm/grunt-mox.png?downloads=true)](https://nodei.co/npm/grunt-mox/)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mox --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mox');
```

## The "mox" task

### Overview
In your project's Gruntfile, add a section named `mox` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mox: {
    your_target: {
      sourceFiles : ['sourceFile1.js','sourceFile2.js'],
      options: {
        name: "Grunt-Mox",
        version:"0.1.0",
        template : "default",
        outputFile:"outputFile.md",
        moxJsonFile : "moxJsonFile.json",
        htmlFile : "htmlOutput.html"
      }
    },
  },
})
```

### Paramaters

#### sourceFiles
Type: `String | Array`

Source file(s) or directories to get documentation from

### Options

#### name
Type: `String`

Name of application or project generating documentation for.

#### version
Type: `String`

Version of documentation or application generating documentation for.

#### template
Type: `String`
Default: `default`

Template used to generate documentation. Can be the path to a custom template or one of the predefined mox templates.  See [mox documentation](https://github.com/tjchaplin/mox) for more details.

#### outputFile
Type: `String`

File path to output mox markdown documentation.

#### htmlFile
Type: `String`

File path to output dox html documentation.

#### moxJsonFile
Type: `String`

File path to output dox json object. See [mox documentation](https://github.com/tjchaplin/mox) for more details.

### Usage Examples

#### Default Template
In this example, the default mox template will be used to generate documentation for the specfied source files.

```js
grunt.initConfig({
  mox: {
    your_target: {
      sourceFiles:['sourceFile1.js','sourceFile2.js']
      options: {
        outputFile: 'outputFile.md'
      }
    },
  },
})
```

#### Mox Template
In this example, the category mox template will be used to generate documentation for the specfied source files.

```js
grunt.initConfig({
  mox: {
    your_target: {
      sourceFiles:['sourceFile1.js','sourceFile2.js']
      options: {
        outputFile: 'outputFile.md',
        template: 'category'
      }
    },
  },
})
```

#### Custom Template
In this example, a custom jade template will be used to generate documentation for the specfied source files.

```js
grunt.initConfig({
  mox: {
    your_target: {
      sourceFiles:['sourceFile1.js','sourceFile2.js']
      options: {
        outputFile: 'outputFile.md',
        template: 'someCustomTemplate.jade'
      }
    },
  },
})

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

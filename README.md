# grunt-mox

> Grunt module for using mox( A markdown javascript documentation generator)

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
      outputFile:"outputFile.md",
      sourceFiles: ['sourceFile1.js','sourceFile2.js']
    },
  },
})
```

### Paramaters

#### outputFile
Type: `String`

File to output dox documentation

#### sourceFiles
Type: `String | Array`

Source file(s) location to get documentation from

#### template
Type: `String`
Default: `default`

Template used to generate documentation. Can be the path to a custom template or one of the predefined mox templates.  See [mox documentation](https://github.com/tchaplin/mox") for more details.

### Usage Examples

#### Default Template
In this example, the default mox template will be used to generate documentation for the specfied source files.

```js
grunt.initConfig({
  mox: {
    your_target: {
      outputFile:['sourceFile1.js','sourceFile2.js'],
      sourceFiles: 'outputFilemd'
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
      outputFile:['sourceFile1.js','sourceFile2.js'],
      sourceFiles: 'outputFilemd',
      template: 'category'
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
      outputFile:['sourceFile1.js','sourceFile2.js'],
      sourceFiles: 'outputFilemd',
      template: 'someCustomTemplate.jade'
    },
  },
})

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

'use strict';

var grunt = require('grunt');
var fs = require('fs');
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.mox = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  defaultTemplate: function(test) {
    test.expect(1);

    var doesFileExist = fs.existsSync('./tmp/functionSomeClass.md');
    test.equal(doesFileExist, true, 'should be able to use a default template.');

    test.done();
  },
  definedTemplate: function(test) {
    test.expect(1);

    var doesFileExist = fs.existsSync('./tmp/templates/category/functionSomeClass.md');
    test.equal(doesFileExist, true, 'should be able to use a defined template as a parameter.');

    test.done();
  },
  moxjsonOutputFile: function(test) {
    test.expect(1);

    var doesFileExist = fs.existsSync('./tmp/functionSomeClass.json');
    test.equal(doesFileExist, true, 'should be able to generate mox json file.');

    test.done();
  },
  htmlOutputFile: function(test) {
    test.expect(1);

    var doesFileExist = fs.existsSync('./tmp/functionSomeClass.html');
    test.equal(doesFileExist, true, 'should be able to generate html file.');

    test.done();
  },
  nameOption: function(test) {
    test.expect(1);

    var doesFileExist = fs.existsSync("./tmp/withNameFunctionSomeClass.md");
    test.equal(doesFileExist, true, 'should be able to generate file with name option.');

    test.done();
  },
  versionOption: function(test) {
    test.expect(1);

    var doesFileExist = fs.existsSync("./tmp/withVersionFunctionSomeClass.md");
    test.equal(doesFileExist, true, 'should be able to generate file with version option.');

    test.done();
  }

};

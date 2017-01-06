var chai = require('chai');
var expect = chai.expect;
var validation = require('../src/validation.js');
var string;
var validateLength = expect(validation.validateLength(string));


describe("Validation", function () {
  it("should return -1 by default", function () {
    validateLength.to.equal(-1);
  });

  it("should return -1 if no valid strings are found", function () {
    var string = 'as234as';
    validateLength.to.equal(-1);
  });

  it("should return 2 if input is 'a9091Ba'", function () {
    var string = 'a9091BA';
    validateLength.to.equal(2);
  });
});

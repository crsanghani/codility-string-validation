var chai = require('chai');
var expect = chai.expect;
var validation = require('../src/validation.js');
var validateLength = validation.validateLength;


describe("Validation", function () {
  it("should return -1 by default", function () {
    var string = '';
    expect(validateLength(string)).to.equal(-1);
  });

  it("should return -1 if no valid strings are found", function () {
    var string = 'as234as';
    expect(validateLength(string)).to.equal(-1);
  });

  it("should return 2 if input is 'a9091Ba'", function () {
    var string = 'a9091Ba';
    expect(validateLength(string)).to.equal(2);
  });
});

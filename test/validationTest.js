var chai = require('chai');
var expect = chai.expect;
var validation = require('../src/validation.js');
var validateLength = validation.validateLength;

describe("Validation", function () {
  it("should return -1 by default", function () {
    expect(validateLength()).to.equal(-1);
  });
});

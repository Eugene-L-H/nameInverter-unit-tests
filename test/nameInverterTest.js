const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('Should return empty string when passed an empty string ', function() {
    const inputName = ' ';
    const expectedOutput = ' ';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('return a single name when passed a single name', function() {
    const inputName = 'Troy';
    assert.equal(nameInverter(inputName), 'Troy');
  });
});

describe('nameInverter', function() {
  it('return a single name when passed a single name with extra spaces', function() {
    const inputName = 'Troy  ';
    const expectedOutput = 'Troy';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('return a last-name, first-name when passed a first and last-name', function() {
    const inputName = 'Troy Pit';
    const expectedOutput = 'Pit, Troy';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
    const inputName = ' Troy Pit';
    const expectedOutput = 'Pit, Troy';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('return an empty string when passed a single honorific', function() {
    const inputName = 'Miss.';
    const expectedOutput = ' ';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('return honorific first-name when passed honorific first-name', function() {
    const inputName = 'Miss.';
    const expectedOutput = ' ';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = 'Dr. Troy Pit';
    const expectedOutput = 'Dr. Pit, Troy';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

describe('nameInverter', function() {
  it('throw an error when name is undefined', function() {
    const inputName = undefined;
    const expectedOutput = "throw 'Error'";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

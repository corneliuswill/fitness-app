const assert = require('assert');
const chai = require('chai');

/*
describe('Suite', function() {
    describe('Inner Suite', function () {
        it('should do something when some condition is met', function () {
        });
    });
});
*/
describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
     });
});
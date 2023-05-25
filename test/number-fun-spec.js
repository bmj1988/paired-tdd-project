const chai = require('chai')
const expect = chai.expect
const number = require('../problems/number-fun')
const returnsThree = number.returnsThree
const reciprocal = number.reciprocal

describe('returnsThree', function () {

    it('should return three', function () {
        expect(returnsThree()).to.equal(3)
    })

})
describe('reciprocal', function () {
    context('if valid argument is passed', function () {
        it('should return reciprocal of argument', function () {
            expect(reciprocal(10)).equal(1 / 10)
            expect(reciprocal(8)).equal(1 / 8)
        })
    })
    context('if invalid argument is passed', function () {
        it('should throw RangeError if argument less than 1 or greater than 100,000', function () {
            expect(() => reciprocal(-1)).throw(RangeError)
            expect(() => reciprocal(1000002)).throw(RangeError)
        })
    })
})

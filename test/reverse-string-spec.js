const chai = require('chai')
const expect = chai.expect
const reverseString = require('../problems/reverse-string.js')

describe('reverseString', function () {
    context('if passed argument is string', function () {
        it('should return a string with all characters in reverse order', function () {
            expect(reverseString('fun')).equal('nuf')
        })
    })
    context('if passed argument is not a string', function () {
        it('should throw an error if passed an argument that is not a string', function () {
            expect(() => reverseString(1)).to.throw(TypeError)
        })
    })

})

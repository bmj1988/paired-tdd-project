const chai = require('chai')
const expect = chai.expect
const Person = require('../problems/person')

describe('Person', function () {
    const bob = new Person('bob', 20)
    it('New instance should have name & age properties', function () {
        expect(bob.name).exist
        expect(bob.name).equal('bob')
        expect(bob.age).exist
        expect(bob.age).equal(20)
    })
    it('`sayHello` should greet the Person', function () {
        expect(bob.sayHello()).equal('Hello bob!')
    })
})

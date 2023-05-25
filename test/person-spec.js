const chai = require('chai')
const expect = chai.expect
const Person = require('../problems/person')

describe('Person', function () {
    const bob = new Person('bob', 20)
    const sally = new Person('sally', 25)
    it('New instance should have name & age properties', function () {
        expect(bob.name).exist
        expect(bob.name).equal('bob')
        expect(bob.age).exist
        expect(bob.age).equal(20)
    })
    it('`sayHello` should greet the Person', function () {
        expect(bob.sayHello()).equal('Hello bob!')
    })
    it('`visit` should return a string including argument name', function () {
        expect(bob.visit(sally)).equal('bob visited sally')
    })
    it('`switchVisit` should return a string including argument name', function () {
        expect(bob.switchVisit(sally)).equal('sally visited bob')
    })
})
describe('update(obj)', function () {
    const bob = new Person('bob', 20)
    const sally = new Person('sally', 25)
    context('Invalid Inputs', function () {
       it('should not accept non-objects as arguments', function () {
        expect(() => bob.update(5)).throw(TypeError)
       })
       it('should not accept arguments without name or age values', function () {
        expect(() => bob.update({})).throw(TypeError)
       })
    })
    context('Valid Inputs', function () {
        it('should update with new values', function () {
            bob.update(sally)
            expect(bob.name).to.equal('sally')
            expect(bob.age).to.equal(25)
        })
    })

})
describe('tryUpdate', function () {
    const bob = new Person('bob', 20)
    const sally = new Person('sally', 25)
    it('should return true if invoked successfully', function () {
        expect(bob.tryUpdate(sally)).equal(true)
    })
    it('should return false if it is not invoked successfully', function () {
        expect(bob.tryUpdate({})).equal(false)
    })
})
describe('greetAll', function () {
    const bob = new Person('bob', 20)
    const sally = new Person('sally', 25)
    const arr = [bob, sally]
    it('should return an array of sayHello called on every object in the input array', function() {
        expect(Person.greetAll(arr)).to.include('Hello bob!')
        expect(Person.greetAll(arr)).to.include('Hello sally!')
    })
})

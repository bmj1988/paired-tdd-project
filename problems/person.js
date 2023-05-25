class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static greetAll(arr) {
    return arr.map(el => el.sayHello())
  }
  sayHello() {
    return `Hello ${this.name}!`
  }
  visit(person) {
    return `${this.name} visited ${person.name}`
  }
  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`
  }
  update(obj) {
    if (typeof obj !== 'object') throw new TypeError('Input is not an object!')
    if (!obj.name || !obj.age) throw new TypeError('Object does not match!')
    this.name = obj.name
    this.age = obj.age
    return this

  }
  tryUpdate(obj){
    try {
      this.update(obj)
      return true
    }
    catch (e) {
      return false
    }
  }

}

module.exports = Person;

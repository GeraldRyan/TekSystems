// What will be the output?
var Animal = function (kind, type, name="fido") { 
  this.kind = kind,
  this.breed = type
  this.name = name
}

var playground = {
  animals: [], // can we make this private????

  addAnimal(animal) {
    this.animals.push(animal);
  },

  listAnimalKind(kind) {
    this.animals.forEach(function (animal) {
      if (animal.kind == kind) {
        console.log(animal.breed);
      }
    });
  },
  listAnimalName(kind) {
    this.animals.forEach(function (animal) {
      if (animal.kind == kind) {
        console.log(animal.name);
      }
    });
  }

}

playground.addAnimal(new Animal('dog', 'Labrador'));
playground.addAnimal(new Animal('dog', 'Goldren Retriever', "goldie"));
playground.addAnimal(new Animal('rabbit', 'Angola'));
playground.listAnimalKind('dog');
playground.listAnimalName('dog');

console.log(playground.animals) // Can we make this private?
// playground.listAnimalKind('rabbit');

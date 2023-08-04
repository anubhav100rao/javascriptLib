class Animal {
  static breed = "Elephant";
}

const elephant = new Animal();
console.log(Animal.breed);
console.log(elephant.breed);
console.log(Object.getPrototypeOf(elephant).breed);

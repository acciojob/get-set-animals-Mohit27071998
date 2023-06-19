//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}

	get species(){
		return this.species
	}
const species =  "Siamese";
	makeSound(){
		console.log( `The ${species} makes a sound`)
	}
}

class Dog extends Animal {
	barr(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
const species =  "Siamese";
const myCat = new Cat(species);
const species = "Golden Retriever"
 const myDog = new Dog(species);

console.log(cat.species); 
myCat.makeSound(); 
myCat.purr();

console.log(dog.species); 
myDog.makeSound(); 
myDog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

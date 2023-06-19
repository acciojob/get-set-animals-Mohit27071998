//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}

	get species(){
		return this.species
	}

	makeSound(){
		console.log("sound")
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
const cat = new Cat("Felis catus");
const dog = new Dog("Canis lupus familiaris");

console.log(cat.species); 
cat.makeSound(); 
cat.purr();

console.log(dog.species); 
dog.makeSound(); 
dog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

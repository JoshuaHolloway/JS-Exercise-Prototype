// These are the Britt's notes from her codepen from Wednesday's lecture [copy and pasted from codepen]

function Pet(attributes){
  this.name = attributes.name;
  this.species = attributes.species;
  this.pronoun = attributes.pronoun;
  this.favFood = attributes.favFood;
}

Pet.prototype.eat = function(){
  console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
}

function BabyPet(attributes){
  Pet.call(this, attributes);
  this.toy = attributes.toy; // this is a special attribute that belongs to the baby pets
}

// linking the Pet prototype with the BabyPet Prototype;
BabyPet.prototype = Object.create(Pet.prototype); 

BabyPet.prototype.play = function(){
  console.log(`${this.name} plays with ${this.pronoun} ${this.toy}`);
}

const petOne = new Pet({
  name: 'Ada',
  species: 'Bali Dog',
  pronoun: 'her',
  favFood: 'salmon',
});

const petTwo = new Pet({
  name: 'Harris',
  species: 'Dog',
  pronoun: 'his',
  favFood: 'anything that moves',
});

const petThree = new Pet({
  name: 'Savannah',
  species: 'cat',
  pronoun: 'her',
  favFood: 'chicken',
});

const petFour = new BabyPet({
  name: 'Noodles',
  species: 'Border Aussie',
  pronoun: 'his',
  favFood: 'steak',
  toy: 'ball',
});

const petFive = new BabyPet({
  name: 'Scary',
  species: 'Black Bear',
  pronoun: 'her',
  favFood: 'berries',
  toy: 'trash can',
});

petOne.eat();
petTwo.eat();
petThree.eat();
petFour.eat();
petFive.eat();
petFour.play();
petFive.play();
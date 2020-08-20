function Parent(attr) {
    this.name = attr.name;
    this.loc = attr.loc;
    this.phrase = attr.phrase;
}
Parent.prototype.speak = function() {
    console.log(`Phrase: ${this.phrase}`);
};
const parent = new Parent({name: 'x', loc: 'tulsa', phrase: 'hello'});
parent.speak();

function Child(attr) {
    // call function to inherit the properties
    Parent.call(this, attr);

    // Add a property:
    this.toy = attr.toy;
}

// Inherit the methods
Child.prototype = Object.create(Parent.prototype);

// Add new method
Child.prototype.play = function() {
    console.log(`Name: ${this.name},  Toy: ${this.toy}`);
}

const child = new Child({name: 'y', loc: 'new york', phrase: 'goodbye', toy: 'ball'});
child.speak();
child.play();
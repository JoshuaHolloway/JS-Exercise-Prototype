// This is the same as main.2.js but with class syntax :)

class Parent {
    constructor(attr) {
        this.name = attr.name;
        this.loc = attr.loc;
        this.phrase = attr.phrase;
    }

    speak() {
        console.log(`Phrase: ${this.phrase}`);
    }
}

const parent = new Parent({name: 'X', loc: 'tulsa', phrase: 'hello'});
parent.speak();

class Child extends Parent {
    constructor(attr) {
        super(attr);
        this.toy = attr.toy;
    }
    play() {
        console.log(`Name: ${this.name},  Toy: ${this.toy}`);
    }
}
const child = new Child({name: 'Y', loc: 'new york', phrase: 'goodbye', toy: 'ball'});
child.play();
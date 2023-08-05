// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 25;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
    this.name = n;
  }
  greet(phrase?: string) {
    if (phrase) {
      console.log("Zdar kokoti!!!" + phrase);
    } else {
      console.log("Napiš tam něco kemo");
    }
  }
}

let user1: Greetable;

user1 = new Person("Karlos");

user1.greet("dobrý den celý den");
console.log(user1);

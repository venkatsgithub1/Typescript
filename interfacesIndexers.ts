interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['John', 'Jane'];

let john: string = myArray[0];

/*

// Error, Animal can sometimes result in Dog.

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
*/

interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string; error.
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let strArray: ReadonlyStringArray = ['John', 'Jane'];
// strArray[1] = 'Joanna'; error since readonly.

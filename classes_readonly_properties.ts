// Elaborate
class Octopus {
    readonly name: string;
    readonly legs: number = 8;
    constructor(name: string) {
        this.name = name;
    }
}

let octopus = new Octopus('Kevin');
console.log(octopus.name);
/* octopus.name = 'Bob'; error. 
One can only assign variable as part of the construcor and not every time. */

// Easier way
class Octopus1 {
    readonly legs: number = 8;
    constructor(readonly name:string) {}
}

let octopus1 = new Octopus1('Bob');
console.log(octopus1.name);

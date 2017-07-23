class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters = 0): void {
        console.log(`${this.name} moved ${distanceInMeters} meters`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 36) {
        console.log('Galloping');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sam the Python');
sam.move();
let tom: Animal = new Horse('Tom the Palomino')
tom.move()

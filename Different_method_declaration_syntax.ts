class SomeClass {
    somenumber: number;
    somemethod = () => {
        this.somenumber = 5;
    }
}

let instance1 = new SomeClass;
instance1.somemethod();

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch(): string {
        return `Hello, I am ${this.name} and I work in ${this.department}`;
    }
}

let johnDoe = new Employee('John Doe', 'Sales');
console.log(johnDoe.getElevatorPitch());
/* console.log(johnDoe.name); error. 
variable name is protected and can't be used outside of instance. */

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('Moving with legs!');
    }
}

abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log("Department name:"+this.name);
    }
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting');
    }
    printMeeting(): void {
        console.log('Some logs');
    }
    generateReports(): void {
        console.log('Accounting Reports.');
    }
}

let acctDep = new AccountingDepartment();
acctDep.printName();
acctDep.printMeeting();
acctDep.generateReports();

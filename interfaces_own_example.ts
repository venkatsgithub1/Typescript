interface name {
    firstname:string;
    middlename?:string;
    lastname:string;
}

function constructName(nameInterface:name) {
    if (nameInterface.middlename) {
        return nameInterface.firstname+" "+nameInterface.middlename+" "+nameInterface.lastname;
    }
    return nameInterface.firstname+" "+nameInterface.lastname;
}

let someName={firstname:"John",middlename:"Elias",lastname:"Doe"}

let someName2={firstname:"Jane",lastname:"Doe"}

console.log(constructName(someName));
console.log(constructName(someName2));

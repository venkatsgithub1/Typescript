// Interface LabelledValue has one property of type string.
interface LabelledValue {
    label:string;
}

// function printLabel uses LabelledValue type variable as it's argument.
function printLabel(labelledobj:LabelledValue) {
    console.log(labelledobj.label);
}

// An object being used in printLabel function can have any number of properties,
// given it has the properties defined in LabelledValue.
// myobj on being passed to printLabel function implements LabelledValue interface.
let myobj={size:10,label:"size 10 object"};
printLabel(myobj);

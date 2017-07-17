// ? after property in interface implementation
// makes a property optional.

interface squareConfig {
    color?:string;
    width?:number;
}

function createSquare(squareConfiguration:squareConfig) {
    let newSquare={color:"white",area:100};
    if (squareConfiguration.color) {
        newSquare.color=squareConfiguration.color;
    }
    if (squareConfiguration.width) {
        newSquare.area=squareConfiguration.width*squareConfiguration.width;
    }
    return newSquare;
}

let mySquare={color:"black"}
console.log(createSquare(mySquare));

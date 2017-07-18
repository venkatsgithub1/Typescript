/*
interface clockConstructor {
    new ( hour: number, minute: number );
}

Throws error since, constructor of interfaces' own type cannot be 
implemented in the class implementing it.
*/

/*
Indirect usage:
*/
interface ClockConstructor {
  new (h:number,m:number):ClockInterface;
}

interface ClockInterface {
  tick();
}

function createClock(ctor:ClockConstructor,h:number,m:number):ClockInterface {
  return new ctor(h:number,m:number);
}

class DigitalClock implements ClockInterface {
  constructor (h:number,m:number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor (h:number,m:number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital=createClock(DigitalClock,12,17);
let analog=createClock(AnalogClock,9,10);

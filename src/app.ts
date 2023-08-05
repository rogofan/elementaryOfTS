type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Diana",
  privileges: ["Smát se každý den", "Dělat donovi jídlo"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//functional overloads
function addFn(a: number, b: number): number;
function addFn(a: string, b: string): string;
function addFn(a: Combinable, b: Combinable) {
  // this if statement is called typeguards
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addFn("Diana", "Karel");
console.log(result.length);

/////////optional chaining/////////
const fetchUserData = {
  id: "u1",
  name: "Karlos",
  //   job: { title: "CEO", description: "Boss of the company HREC" },
};
// console.log(fetchUserData?.job?.description);

const userInput = "";

//Nullish Coalescing the two ?? is if check when the value is null or undefined => else
const storedData = userInput ?? "Default";
console.log(storedData + " test");

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("startDate: " + emp.startDate);
//   }
// }
// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving....");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving truck");
//   }

//   loadCargo(amount: number) {
//     console.log("Množství nákladu: " + amount + " Tun");
//   }
// }

// type Vehicle = Truck | Car;

// const car1 = new Car();
// const truck1 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100);
//   }
// }

// useVehicle(car1);
// useVehicle(truck1);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Horse | Bird;

// // Pattern useful for union type and objects
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log(`${animal.type} is moving at speed: ` + speed + " km/h");
// }

// moveAnimal({ type: "bird", flyingSpeed: 69 });

// // Type casting////////////////////////
// // const userInput = <HTMLInputElement>document.getElementById("user-input");

// //exclamation mark
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
// userInput.value = "Hi there";

// //if check variant
// const userInputWithoutEM = document.getElementById("user-input");

// if (userInputWithoutEM) {
//   (userInputWithoutEM as HTMLInputElement).value = "Hi there second!";
// }

// /////index properties/////////////////
// interface ErrorContainer {
//   // {email: 'not a valid email, userName: 'Must start with capital character'}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   userName: "Mast start with capital",
// };

// ////////function overloads/////////

//class
// class Car{
//     constructor( model,make,year,min,max){
//        this.model=model,
//        this.make=make,
//        this.year=year,
//        this.cost=this.Carcost(min,max)
       
//     }

//     getCarInfo(){
//         return `A ${this.model} made by ${this.make} at ${this.year} ${this.cost}`
//         //`A called templet litarels 

//     }
// //     CarAge(year){
// //   return 2023-year;
// //     }
// Carcost(min,max){
//     return Math.floor(Math.random() * (max - min) ) + min;

// }

// } 
const car1= new Car("Camry","toyota",2010,10000,20000);
console.log(car1.getCarInfo());

// class person{
//    constructor(firstName,lastName,age){
//    this.firstName=firstName,
//    this.lastName=lastName,
//    this.age=age
// }
// getGreeting(){
//     return `Hi,Im ${this.firstName}  ${this.lastName} and Im ${this.age} years old `;
// }
// }
const person1 =new person("nour","asad",29);
console.log(person1.getGreeting());

//-----------arrow function---------//
////////////task1/////////////
// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
    
//     return counter;
//   }
  
//    const counterFunc = counter => {return counter > 100? counter = 0 : counter ++}
const counterFunc = (counter) =>  counter > 100? counter = 0 : counter ++;
console.log(counterFunc(105));

/////////task2////////
//  function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }
const nameAge = (name) => { return `Hey ${name}!`};

console.log(nameAge("WALAA")); 
console.log(nameAge("ATEF")); 

///////////////task3/////////////////

// const createFullName = (firstName, lastName) => {return firstName + " " + lastName;}
  
// const doubleNumber = number => {return number * 2;}
  
// const getEvenNumbers = array => { let evenNumbers = [];
//     for (let i of array) { (i % 2 === 0) ? evenNumbers.push(i) : null; } 
//     return evenNumbers;
// }

//////////////////////////////////////
//-----array method------//
//////////////task7////////////

// EX: Sqand sum the elements of this array using arrow functions and in 1 line of code. Then find the average of the array.

let nums = [2,4,5];
const sum =nums.reduce((acc,cur)=>acc+cur**2,0)
console.log(sum);

////////Map task 8//////////////

// EX:Use the map() function with arrow notation => to multiply each by 10 and return the result number of following array.

let list=[1,2,3,4,5,6,7,8];
let walaa = list.map(e=> e*10);
console.log(walaa);

/////////filter task 11///////////////

//EX: Create a function called evenOnly
// that accept an array
// and return an array of even number only

// Ex: evenOnly([1,8,6,4]) => [8,6,4]

let evenOnly = [1,8,6,4] ;
const newEvan =evenOnly.filter(e => e % 2 == 0)
console.log(newEvan);

/////////filter task 12///////////////

// EX:Create a function called multiFour
// that accept an array
// and return an array of these number that is a mutiply by 4

// Ex: multiFour([1,8,6,4]) => [8,4]

let multiFour = [1, 8 ,4,6];

const newmultiFour =multiFour.filter(x => x % 4 == 0 );
console.log(newmultiFour);


////////task10/////////
// EX: var persons = [
//     { name: { first: 'John', last: 'Hob' }, age: 35 },
//     { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
//     { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
//     { name: { first: 'Zues', last: 'Odin' }, age: 55 },
//     { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
//   ];
// //   Using the varabile persons
// //   Create a function called avgAge
// //   that accept an array
// //   and return average age of this array
  
// //   Ex: avgAge(persons) => 41.2

// function avgAge(array) {
//     let Age= array.reduce((acc,cur){
//     return acc+cur.Age;
// },0);
// return Age/Array.length;
// }
// console.log((avgAge(persons));

/////////////////////////
// let pepole = ["john", "JACOB", "jinGleHeimer", "schmidt"]

let makeStrings=([
    {  name: "Angelina Jolie",
       age: 80   },
   {   name: "Eric Jones",
       age: 2
   },
   {   name: "Paris Hilton",
       age: 5
   },
   {   name: "Kayne West",
       age: 16
   },
   {   name: "Bob Ziroll",
       age: 100
   }
 ]);


 let age_name=makeStrings.map(ele=> {
    if(ele.age>18){
        return `${ele.name}can go to The Matrix`
    }
    else{
        return `${ele.name}is under age!!", `
    }
 })
 console.log(age_name);

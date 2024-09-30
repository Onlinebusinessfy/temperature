console.log("Script");

//Creating sting variables
//keyword nameVariable=value;

let myName="Jane";
let lastName="Doe";

console.log(myName);
console.log(lastName);
console.log(myName + " " +lastName) //concatenation

//Creating numerical variables
let myAge=99;
console.log("Age: "+ myAge);

let myGrade=9.5;
console.log(myGrade)

//Creating boolean variables(true/false)
let isAdmin=true;
let isStudent=false;
let isProfessor=true;
console.log(isProfessor)

/* many lines of comment
xxxx
xxxx
xxxx
xxxx
*/

myName="Samantha";
lastName="Jimenez"
console.log("My name is "+myName+" "+lastName+", and I am "+myAge+" years old.");

let number1=10;
let number2=5;

//addition
let addition=number1 + number2;
console.log(number1+ "+" + number2 + "="+addition);
//subsctraction
let subtraction=number1 - number2;
console.log(number1+"-"+number2+"="+subtraction);
//multiplication
let multiplication=number1 * number2;
console.log(number1+"*"+number2+"="+multiplication);
//division
let division=number1 / number2;
console.log(number1+"/"+number2+"="+division);

//CONSTANTS
//keyword constName=value;

const pi=3.1416;
//pi=4.5; //we can't modify a constant
console.log(pi);
//calculate the area of a circle
const area=pi*5*5;
console.log(area);
//calculate the perimeter of a circle
const perimeter=2*pi*5;
console.log(perimeter);

//PROMPT: this is a simple way to interact with a user

let pet=prompt("Insert your pet name: ");
console.log("your pet is: "+pet)
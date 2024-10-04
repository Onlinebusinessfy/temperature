console.log("if-statement file");

// ---- if statement ----
// if(condition){
// code to be executed if condition is true
//}

if(1<2){
    console.log("I am inside the if statement");
}

let studentAge=45;
let studentAge2=35;

if(studentAge==studentAge2){
    console.log("Both student ages are equal");
}

// if-else statement
// if(condition){
// code to be executed if condition is true
// }else{
// code to be executed if condition is false
//}

if("Samantha"=="Jesus"){
    console.log("Sam us equals to Jesus");
}else{
    console.log("Sam is different than Jesus");
}

//Challenge:
//check if the age is greater that 21
// display "you are an adult"
// display "you are underage"

let age=20;
if(age>=21){
    console.log("You are an adult");
}else{
    console.log("You are underage")
}

// if-else if-else statements ---
//if(condition){
// code to be executed if condition1 is true
//}else if(condition2){
//code to be executed if condition2 is true
//}else{
// code to be executed if conditions are false
//}
age=75;

if(age<13){
    console.log("Child");
}else if(age<20){
    console.log("Teenager");
}else if(age<64){
    console.log("Adult");
}else{
    console.log("Senior");
}

let viewersAge=prompt("Enter your age:");

if(viewersAge<12){
    console.log("Ticket price is $5");
}else if(viewersAge<18){
    console.log("Ticket price is $8");
}else{
    console.log("Ticket price is $10")
}

let temperature=prompt("Enter the temperature in °C");
if(temperature<15){
    console.log("Wear a jacket");
}else if(temperature<25){
    console.log("Wear a sweater");
}else{
    console.log("Wear a t-shirt");
}

// using logical AND operator &&
age=25;

if(age<13){
    console.log("Child");
}else if(age>=13 && age<=19){
    console.log("Teenager");
}else if(age>=20 && age<=64){
    console.log("Adult");
}else{
    console.log("You are older than 64")
}
console.log("function");

// define a function with the name sayHello
function sayHello(){
    console.log("Hello");
}

sayHello();//trigger the fn

// functions with parameters
function greet(name){
    console.log("Welcome to the system " + name);
}

greet("Seth");
greet("Andrew");

// function that return values
function addNumbers(a,b){
    return a+b;
}

let result=addNumbers(3,5);//8
result=addNumbers(6,8);//14
console.log(result); //14

//function with default parameters

function greetings(name="Samantha"){
    console.log("Hello to "+name);
}

greetings("Ava");

// Challenge 1
function doubleNumber(number){
    let total=number*2;
    console.log(total)
    return total;
}

doubleNumber(4);
doubleNumber(10);

// Challenge 2
function combineNames(firstName="Unknown",lastName="Unknown"){
    return firstName+" "+lastName;
}

console.log(combineNames("Alice","Johnson"));
console.log(combineNames("Alice"));
console.log(combineNames());

// Challenge 3
function convertToSeconds(minutes){
    let seconds=minutes*60;
    console.log(seconds);
    return seconds;
}

convertToSeconds(5);
convertToSeconds(10);

function sayHello2(){
    let name=prompt("Enter your name: ");
    // document.getElementById("result").innerHTML="<p> Welcome to the system " + name + "</p>";
    //template string
    document.getElementById("result").innerHTML=`<p> Welcome to the system ${name} <p>`;
}


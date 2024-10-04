//Assignment 3
function TemperatureConverter(){
    let Temperature = prompt("Enter a temperature to convert it to Fahrenheit or Celsius, indicate it with C or F");
    if(Temperature.includes("C") || Temperature.includes("c")){
        fahrenheit = (parseInt(Temperature) * 9/5) + 32;
        document.getElementById("convTemp").innerHTML = `<p> Your ${Temperature} is equal to ${fahrenheit}°F </p>`;
    } else if(Temperature.includes("F") || Temperature.includes("f")){
        celsius = (parseInt(Temperature) - 32) * 5/9;
        document.getElementById("convTemp").innerHTML = `<p> Your ${Temperature} is equal to ${celsius}°C </p>`;
    }
}
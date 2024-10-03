function convertFahrenheit(temperature){
    let celsius = prompt("Enter the Celsius degrees to convert it to Fahrenheit: ");
    let fahrenheit = (celsius * 9/5) + 32;
    alert(temperature+"°C is equal to "+fahrenheit+ "°F")
    return fahrenheit;
}
function convertToCelsiousToFahrenheit(){
    let temperature = prompt("Enter temperature in celsious to convert it to fahrenheit: ");
    let fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("Faren").innerHTML = `<p> Your ${temperature}°C is equal to ${fahrenheit}°F </p>`;
    return fahrenheit;
}
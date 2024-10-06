function ConvertTemperatureRange(startValue,endValue,scale){
    const resultContainer=document.getElementById('result');
    resultContainer.innerHTML='';
    for(let temperature=startValue;temperature<=endValue;temperature++){
        if(scale.toUpperCase()=="C"){
            let tempConvert=((temperature * 9/5) + 32);
            document.write(`<div class="result-item">${temperature} °C = ${tempConvert.toFixed(2)} °F</div>`);
        }else if(scale.toUpperCase()=="F"){
            let tempConvert=((temperature - 32) * 5/9);
            document.write(`<div class="result-item">${temperature} °F = ${tempConvert.toFixed(2)} °C</div>`);
        }else{
            document.write("Invalid scale");
            return;
        }
    }
}

let startValue=parseInt(prompt("Enter the temperature you want to convert:"));
let endValue=parseInt(prompt("Enter the top temperature you want to convert:"));
let scale=prompt("Enter the scale you want to convert to (C or F):");

ConvertTemperatureRange(startValue,endValue,scale);

function updateThermometer() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const scaleInput = document.getElementById("scaleInput").value;
    const mercury = document.getElementById("mercury");
    const temperatureDisplay = document.getElementById("temperatureDisplay");

    let temperature = parseFloat(temperatureInput);
    let heightPercentage;

    if (scaleInput === "C") {
        heightPercentage = (temperature / 100) * 100;
    } else if (scaleInput === "F") {
        heightPercentage = ((temperature - 32) / (212 - 32)) * 100;
    }

    heightPercentage = Math.max(0, Math.min(100, heightPercentage));

    mercury.style.height = `${heightPercentage}%`;

    if (heightPercentage <= 33.33) {
        mercury.style.backgroundColor = 'blue';
    } else if (heightPercentage <= 66.67) {
        mercury.style.backgroundColor = 'orange';
    } else {
        mercury.style.backgroundColor = 'red';
    }

    temperatureDisplay.innerText = `${temperature} °${scaleInput}`;
}

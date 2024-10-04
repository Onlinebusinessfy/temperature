let hungerLevel=50;
const hungerDisplay=document.getElementById("hungerLevel");

function feedPet(){
    console.log("Feeding pet");

    // create a variable foodAmount
    let foodAmount=10;
    //discount the foodAmount to the hunger
    hungerLevel-=foodAmount;
    //hungerLevel=hungerLevel-foodAmount;
    //discount the foodAmount to the hunger
    if(hungerLevel>=0){
        hungerDisplay.innerHTML=hungerLevel;
    }else{
        alert("Your pet is overfeed!!");
        hungerLevel=0;
    }
    hungerDisplay.innerHTML=hungerLevel;
}
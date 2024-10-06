// document.write("<h2>For Loops</h2>");
// const numbers=[];
// for (let i = 0; i <= 100; i++) {
//     numbers.push(i);
// }
// let variable=prompt("Insert a number to obtain its multiplication table");
// let result;

// for(let i=0;i<numbers.length;i++){
//     result= variable*numbers[i];
//     document.write(variable+"x"+numbers[i]+"="+result+"<br>");
// }

for(let i=0;i<=10;i++){
    let result=2*1;
    document.write(`<p> 2 x ${i} = ${result} </p>`);
}

for(let i=2;i<21;i+=2){
    console.log(i);
}

//Mini challenge
function challenge(){
    for(let i=0;i<=100;i++){
        if(i==50){
            console.log("I found it")
    }else{
        console.log(i);
    }
    }
}

// challenge();

//Interactive multiplication
let number=prompt("Insert the number of the table you want to display");
function multTable(num){
    document.write(`Multi table of ${num}`);
    for(let i=0;i<=10;i++){
        let result=num*i;
        document.write(`<p> ${num} x ${i} = ${result} </p>`);
    }
}
multTable(number);

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }
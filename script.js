let A = 2;
let B = 3;
let C = 0;
let D = 0;
let numbers = [A,B,C,D];
let result = [];
let notAvailable = [];
const newNumbers = document.getElementById("newNumbers");

const update = () => {
    if(newNumbers.value.length >= 4){
        console.clear();
        result = [];
        notAvailable = [];
        x = newNumbers.value.slice(0,4);
        numbers = [];
        for (let i = 0; i < 4; i++){
            numbers.push(x[i]);
        }
        count(numbers);
    }else {
        alert("You need at least 4 numbers in the input")
    }
}
 
const check = (h1, h2, m1, m2) =>{
    let hour = h1 + "" + h2;
    let minutes = m1 + "" + m2;
    let tested = hour + ":" + minutes;
    console.log("Time tested: " + tested);
    if (hour < 24 && minutes <60){
        if (result.includes(tested)){
            console.log("Already on the list of posible times");
        }else {
            console.log("Added to the list of posible times");
            result.push(tested);
        }
    } else {
        console.log("NOT AVAILABLE");
        notAvailable.push(tested);
    }
    console.log("------------------------------------")
}

const clockCheck = (n1,n2,n3,n4) =>{
    check(n1,n2,n3,n4);
    check(n1,n3,n2,n4);
    check(n1,n4,n2,n3);
    check(n1,n4,n3,n2);
}


const rotateArray = x => x.unshift(x.pop());


const count = (x) =>{
    for (let i = 0; i<4; i++){
        console.group("Iteration: " + i);
        clockCheck(...x);
        rotateArray(x);
        console.groupEnd();
    }
    console.log("Total available: " + result);
    console.log("Lista total no disponibles: " + notAvailable);
    console.log("Cantidad de horas disponibles: " + result.length);
    return result.length;
}


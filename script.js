let A = 2;
let B = 3;
let C = 0;
let D = 0;
let numbers = [A,B,C,D];
let result = [];
let repited = [];
let notAvailable = [];


const check = (h1, h2, m1, m2) =>{
    let hour = h1 + "" + h2;
    let minutes = m1 + "" + m2;
    let tested = hour + ":" + minutes;
    console.log("Hora probado: " + tested);
    if (hour < 24 && minutes <60){
        if (result.includes(tested)){
            console.log("Ya esta en la lista");
            repited.push(tested);
            console.log("Nueva lista de repetidos: " + repited);
        }else {
            console.log("Se agrego a la lista");
            result.push(tested);
            console.log("Nueva lista total: " + result);
        }
    } else {
        console.log("NO DISPONIBLE");
        notAvailable.push(tested);
        console.log("Nueva lista de no disponibles: " + notAvailable);
    }
}

const clockCheck = (n1,n2,n3,n4) =>{
    check(n1,n2,n3,n4);
    check(n1,n3,n2,n4);
    check(n1,n4,n2,n3);
    check(n1,n4,n3,n2);
}


const rotateArray = (x) => x.unshift(x.pop());


const count = () =>{
    for (let i = 0; i<4; i++){
        console.log("Iteracion: " + i);
        clockCheck(...numbers);
        rotateArray(numbers);
    }
    return result.length;
}

count();


console.log("Lista total disponibles: " + result);
console.log("Lista total repetidos: " + repited);
console.log("Lista total no disponibles: " + notAvailable);
console.log("Cantidad de horas disponibles: " + result.length);






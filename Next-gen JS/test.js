// let name = "Jai"
// console.log("My name is "+name);

//arrow functions:

// function printMyName(name){
//     console.log(name);
// }
// printMyName("Jai");

const printMyName = (name) =>{
    console.log(name);
}
printMyName("Jai");

//^^ we can remove the parenthesis around name if we need to pass only ONE argument. In case of two ore more arguments, use parenthesis

//for functions with no arguments, pass an empty pair of parenthesis like

const printNothing = () => {
    console.log("Nothing");
}

printNothing();

//tip: always use parenthesis 

//returning values is also the same

const doubleIt = (num) =>{
    return num*2
}

console.log(doubleIt(10));

// for functions with only a return statement and nothing else, do this:

const tripleIt = (num) => num*3;

console.log(tripleIt(20));




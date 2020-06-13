// '...' is the spread operator

const numbers = [1,2,3];

const wrongArr = [numbers,4,5,6];

//this opens the array's values and inputs them into the result, one by one
const newArr = [...numbers,4,5,6];

console.log(wrongArr);
console.log(newArr);

const person = {
    name: "Jai",
    location: "Delhi"
}

// ...person opens the person object and distributes all the values to newPerson object:
const newPerson = {
    ...person,
    age: 19
}

console.log(newPerson);

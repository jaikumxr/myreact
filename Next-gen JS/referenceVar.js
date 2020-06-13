//arrays and objects in JS are reference assigned whereas Int, String etc are primitive and their values are copied whenever a new variable is assigned to a previous one. E.g:

let num1 = 10;
let num2 = num1;
num1 = 30;
console.log(num2);

//whereas

const person1 = {
    name:"jai",
    age:19
}

const person2 = person1;

person1.name = "Adi";

//person2 is simply pointed towards the object that person1 points to. declaring does not create a new object. This is the same for arrays also.

console.log(person2.name);


//we can use the spread operator to copy objects/arrays in an immutable way

const person3 = {
    ...person1
}

person1.name = "Kali";

//person3 is truly a new object now
console.log(person3.name);

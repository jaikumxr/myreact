// .map() is simply a .forEach() but for changing the array values and it also returns a new array 

const numbers = [10,20,30];

const doubleAll = numbers.map((num) =>{
    return num*2;
});

console.log(numbers);
console.log(doubleAll);


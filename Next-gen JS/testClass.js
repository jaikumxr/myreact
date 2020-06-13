class Human{
    constructor(){
        this.gender = "Man";
    }

    printGender(){
        console.log(this.gender);
        
    }
}

class Person extends Human{
    //default constructor syntax
    constructor(){
        //super constructor - executes constructor of super class
        super();
        this.name = "Jai";
        //updated this.gender
        this.gender = "Male";
    }

    printMyName(){
        console.log(this.name);
    }
}

const pers = new Person();

pers.printMyName();
pers.printGender();
class Human{
    gender = "Male"
    printGender = () =>{
        console.log(this.gender);        
    }
}

class Person extends Human{
    //no need to call super()
    name = "Jai";
    printName = () => {
        console.log(this.name);
    }
}

const pers = new Person();
pers.printName();
pers.printGender();
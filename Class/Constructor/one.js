//A special method to initialize object value
//will execute only once at the time of object creation automaticallly
//we cant invoke constructor method explicitly

class Employee{

    constructor(){
        console.log("Executes automatially only once")
    }
    get_Details(){
        console.log("Display details")
    }
}
let a1=new Employee();
new Employee();

console.log(a1.get_Details())
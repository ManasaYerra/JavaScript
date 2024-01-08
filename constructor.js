// constructor = a special method of a class,
//     accepts arguments and assigns properties

class student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}
const student1 = new student("Dany",30,8.2);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();
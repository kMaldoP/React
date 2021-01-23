class student{
    constructor(name, email, community){
    this.name = name;
    this.email = email;
    this.community = community;
    }
}
class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        if(this.students.filter(s => s.email === student.email).length){
            console.log("Student Already Registered")
        }else {
            this.students.push(student)
            console.log("New student registered")
        }    
    }
}
const student1 = new student( "steve", "steve@gmail.com", "tech");
const newCamp = new Bootcamp(" kevin", 12)
console.log(student1);
console.log(newCamp);
newCamp.registerStudent(student1);
console.log(newCamp);
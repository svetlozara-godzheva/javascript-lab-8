// Understanding and Creating Objects
function Student(name, age, enrolled, courses) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.courses = courses;
    this.print = function () {
        console.log(`Student name: ${this.name}`);
        console.log(`Student age: ${this.age}`);
        console.log(`Is ${this.name} enrolled: ${this.enrolled}`);
        console.log(`The courses that ${this.name} enrolls in are ${this.courses}`);
    };
}

let student1 = new Student("Mathilde", 18, true, ["Chemistry", "Management", "Analysis"]);

console.log(student1.name);
console.log(student1.age);

student1.print();

// Working with JSON
let jsonStudent1 = JSON.stringify(student1);
console.log(jsonStudent1);

let convertedJson = JSON.parse(jsonStudent1);
console.log(convertedJson);
// the converted JSON student and student1 are two different objects in the memory, hence the result would be false:
console.log(convertedJson === student1);
console.log(student1, convertedJson);

// Using Destructuring Assignment
let { name: studentName, courses: studentCourses } = student1;
console.log(studentName);
console.log(studentCourses);

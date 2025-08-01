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

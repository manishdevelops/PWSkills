// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add a method sayHello to greet the person.

function Person(age, name) {
    this.age = age;
    this.name = name;

    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const obj = new Person(22, "Manish");
obj.sayHello();

// Employee constructor inheriting from Person
function Employee(name, age, designation) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);

    // Initialize designation
    this.designation = designation;

    // Method to get employee details
    this.getDetails = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
}

const employee1 = new Employee('Manish', 22, 'Software Engineer');
employee1.getDetails(); 
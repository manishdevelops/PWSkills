const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science',
    GPA: 3.8,
    insEnrolled: true
};

for (let key in student) {
    // Accessing the key and value
    console.log(key + ':', student[key]);

    // Checking if the value is a string and converting it to uppercase
    if (typeof student[key] === 'string') {
        student[key] = student[key].toUpperCase();
    }

    // Adding a prefix to the key
    const prefixedKey = 'prop_' + key;
    student[prefixedKey] = student[key];

    // Deleting the original key
    delete student[key];
}

// Displaying the updated object
console.log('Updated student:', student);


// a
for (let key in person) {
    // Accessing the key and value
    console.log(key + ':', person[key]);
}


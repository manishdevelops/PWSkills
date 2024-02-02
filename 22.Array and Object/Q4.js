const student = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
]

const updateStu = (id, value) => {
    const studentToUpdate = student.find((ele) => ele.id === id);
    studentToUpdate && Object.assign(studentToUpdate, value);
}

const deleteStu = (id) => {
    student.filter((ele) => ele.id !== id);
}

const displayStu = () => {
    return student;
}

const findStuByGrade = (grade) => {
    const a = student.filter((ele) => ele.grade === grade);
    console.log(a);
}

const calcAvgAge = () => {
    const avgAge = student.reduce((acc, student) => acc + student.age, 0);
    console.log(avgAge / student.length);
}

//Add a student
student.push({ id: 4, firstName: 'Manish', lastName: 'Mandal', age: 23, grade: 'c' });

//Update student info
updateStu(4, { lastName: 'Kumar', age: 21 });

// delete a student
deleteStu(2);

// display list of students
displayStu();

// find student by grade
findStuByGrade('A');

// calculates the average age of student array
calcAvgAge();

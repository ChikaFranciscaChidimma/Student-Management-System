// Get elements
const studentForm = document.getElementById('studentForm');
const studentsList = document.getElementById('students');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const courseInput = document.getElementById('course');

// Data storage for students
let students = [];

// Add a new student
function addStudent(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const course = courseInput.value.trim();

    if (!name || !age || !course) {
        alert("All fields are required!");
        return;
    }

    const student = {
        id: Date.now(),
        name,
        age,
        course
    };

    students.push(student);
    displayStudents();
    studentForm.reset();
}

// Delete a student
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    displayStudents();
}

// Edit a student
function editStudent(id) {
    const student = students.find(student => student.id === id);
    if (student) {
        nameInput.value = student.name;
        ageInput.value = student.age;
        courseInput.value = student.course;
        deleteStudent(id);
    }
}

// Display the list of students
function displayStudents() {
    studentsList.innerHTML = '';
    students.forEach(student => {
        const studentItem = document.createElement('li');
        studentItem.innerHTML = `
            <span>${student.name} - Age: ${student.age}, Course: ${student.course}</span>
            <div>
                <button class="edit" onclick="editStudent(${student.id})">Edit</button>
                <button class="delete" onclick="deleteStudent(${student.id})">Delete</button>
            </div>
        `;
        studentsList.appendChild(studentItem);
    });
}

// Event listener for the form submission
studentForm.addEventListener('submit', addStudent);

// Initial display of students
displayStudents();

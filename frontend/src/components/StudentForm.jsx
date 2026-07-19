import { useState, useEffect } from "react";
import './StudentForm.css'

function StudentForm({onStudentAdded, selectedStudent, setSelectedStudent}) {
    const initialStudent = {
        name: "",
        roll_number: "",
        email: "",
        phone: "",
        gender: "",
        department: "",
        year: "",
        section: "",
        cgpa: "",
        attendance: "",
        address: "",
        date_of_birth: "",
        admission_date: "",
    
};
    const [student, setStudent] = useState(initialStudent);
    useEffect(() => {
    if (selectedStudent) {
        setStudent(selectedStudent);
    }
}, [selectedStudent]);
    console.log(selectedStudent);
    function handleChange(e) {
    setStudent({
        ...student,
        [e.target.name]: e.target.value
    });
}
    async function handleSubmit(e) {
    e.preventDefault();

    const method = selectedStudent ? "PUT" : "POST";

    const url = selectedStudent
        ? `http://127.0.0.1:8000/api/students/${selectedStudent.roll_number}/`
        : "http://127.0.0.1:8000/api/students/";

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    });

    if (response.ok) {
        alert(selectedStudent ? "Student updated successfully": "Student added successfully");
        setStudent(initialStudent);
        setSelectedStudent(null);
        onStudentAdded();
    } else {
        alert(
            selectedStudent
                ? "Student details were not updated. Try again!"
                : "Student details were not added. Try again!"
        );
    }
}
    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{selectedStudent ? "Edit Student" : "Add Student"}</legend>
                    <div className="form-grid">
                    <div className="form-group"><label htmlFor="name">Name:</label><input type="text" id="name" name="name" placeholder="Enter student name" value={student.name} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="roll_number">Roll Number:</label><input type="text" id="roll_number" name="roll_number" placeholder="Enter roll number" value={student.roll_number} onChange={handleChange} /></div>
                    <div className="form-group"><label htmlFor="email">Email:</label><input type="email" id="email" name="email" placeholder="Enter email" value={student.email} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="phone">Phone Number:</label><input type="tel" id="phone" name="phone" placeholder="Enter phone number" value={student.phone} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="gender">Gender:</label><select id="gender" name="gender" value={student.gender} onChange={handleChange}><option value="">Select Gender</option><option value="M">Male</option><option value="F">Female</option><option value="O">Other</option></select></div>
                    <div className="form-group"><label htmlFor="department">Department:</label><select id="department" name="department" value={student.department} onChange={handleChange}>
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="CSM">CSM</option>
                        <option value="CSD">CSD</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                    </select>
                    </div>
                    <div className="form-group"><label htmlFor="year">Year:</label><select id="year" name="year" value={student.year} onChange={handleChange}>
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                    </div>
                    <div className="form-group"><label htmlFor="section">Section:</label><input type="text"id="section" name="section" placeholder="Enter section" value={student.section} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="cgpa">CGPA:</label><input type="number" id="cgpa" name="cgpa" step="0.01" placeholder="Enter CGPA" value={student.cgpa} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="attendance">Attendance:</label><input type="number" id="attendance" name="attendance" min="0" max="100" placeholder="Enter Attendance" value={student.attendance} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="admission_date">Admission Date:</label><input type="date" id="admission_date" name="admission_date" value={student.admission_date} onChange={handleChange} /></div>
                    <div className="form-group"><label htmlFor="date_of_birth">Date of Birth:</label><input type="date" id="date_of_birth" name="date_of_birth" value={student.date_of_birth} onChange={handleChange}/></div>
                    <div className="form-group"><label htmlFor="address">Address:</label><textarea id="address" name="address" rows="3" placeholder="Enter Address" value={student.address} onChange={handleChange}/></div>
                    </div>
                    <div className="button-container"><button type="submit">{selectedStudent ? "Update Student" : "Add Student"}</button></div>

                </fieldset>
            </form>


        </div>
    );
}

export default StudentForm;
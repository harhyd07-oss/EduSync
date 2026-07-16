import { useState } from "react";

function StudentForm({onStudentAdded}) {
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

    function handleChange(e) {
    setStudent({
        ...student,
        [e.target.name]: e.target.value
    });
}
    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/students/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(student),}
            
        );
         if (response.ok) {
        alert("Student added successfully");
        setStudent(initialStudent);
        onStudentAdded();
    } else {
        alert("Student details were not added. Try again!")
    }
    
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add Student</legend>
                    Name:<input type="text" id="name" name="name" placeholder="Enter student name" value={student.name} onChange={handleChange}/><br />
                    Roll Number<input type="text" id="roll_number" name="roll_number" placeholder="Enter roll number" value={student.roll_number} onChange={handleChange} /><br />
                    Email:<input type="email" id="email" name="email" placeholder="Enter email" value={student.email} onChange={handleChange}/><br />
                    Phone Number:<input type="tel" id="phone" name="phone" placeholder="Enter phone number" value={student.phone} onChange={handleChange}/><br />
                    Gender:<select id="gender" name="gender" value={student.gender} onChange={handleChange}><option value="">Select Gender</option><option value="M">Male</option><option value="F">Female</option><option value="O">Other</option></select><br />
                    Department:<select id="department" name="department" value={student.department} onChange={handleChange}>
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="CSM">CSM</option>
                        <option value="CSD">CSD</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                    </select>
                    <br />
                    Year:<select id="year" name="year" value={student.year} onChange={handleChange}>
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                    <br />
                    Section:<input type="text"id="section" name="section" placeholder="Enter section" value={student.section} onChange={handleChange}/><br />
                    CGPA:<input type="number" id="cgpa" name="cgpa" step="0.01" placeholder="Enter CGPA" value={student.cgpa} onChange={handleChange}/><br />
                    Attendance:<input type="number" id="attendance" name="attendance" min="0" max="100" placeholder="Enter Attendance" value={student.attendance} onChange={handleChange}/><br />
                    Address: <textarea id="address" name="address" rows="3" placeholder="Enter Address" value={student.address} onChange={handleChange}/><br />
                    Date of Birth:<input type="date" id="date_of_birth" name="date_of_birth" value={student.date_of_birth} onChange={handleChange}/><br />
                    Admission Date:<input type="date" id="admission_date" name="admission_date" value={student.admission_date} onChange={handleChange} /><br /><br />
                    <button type="submit">Add Student</button>

                </fieldset>
            </form>

            <p>Name: {student.name}</p>
            <p>Roll Number: {student.roll_number}</p>

        </div>
    );
}

export default StudentForm;
import "./StudentCard.css"
function StudentCard({student}){
    return(
     
        <div className="card">
        <h2><strong>{student.name}</strong></h2>
        <p><strong>Roll Number : </strong>{student.roll_number}</p>
        <p><strong>Email : </strong>{student.email}</p>
        <p><strong>Phone : </strong>{student.phone}</p>
        <p><strong>Department : </strong>{student.department}</p>
        <p><strong>Year : </strong>{student.year}</p>
        <p><strong>CGPA : </strong>{student.cgpa}</p>
        <p><strong>Attendance : </strong>{student.attendance}</p>
        
        <div className="button-container">
            <button>Edit</button>
            <button>Delete</button>
            </div>    
        </div>
        
    )
}

export default StudentCard
import "./StudentCard.css"
function StudentCard({student, onEdit}){
    return(
     
        <div className="card">
        <h2><strong>{student.name}</strong></h2>
        <div className="details">
        <div className="detail-row">
            <strong>Roll Number</strong>
            <span>{student.roll_number}</span></div>
        <div className="detail-row">
            <strong>Email</strong>
            <span>{student.email}</span></div>
        <div className="detail-row">
            <strong>Phone</strong>
            <span>{student.phone}</span></div>
        <div className="detail-row">
            <strong>Department</strong>
            <span>{student.department}</span></div>
        <div className="detail-row">
            <strong>Year</strong>
            <span>{student.year}</span></div>
        <div className="detail-row">
            <strong>CGPA</strong>
            <span>{student.cgpa.toFixed(1)}</span></div>
        <div className="detail-row">
            <strong>Attendance</strong>
            <span>{student.attendance}%</span>
</div>
</div>
        
        
        <div className="button-container">
            <button className="edit-button" onClick={()=>onEdit(student)}>Edit</button>
            <button className="delete-button">Delete</button>
            </div>    
        </div>
        
    )
}

export default StudentCard
import './StudentList.css'
import StudentCard from './StudentCard'
function StudentList({students,onEdit}){
    return(
        <div className="student-list">
             {
    students.map((student) => (
  <StudentCard
    key={student.roll_number}
    student={student}
    onEdit={onEdit}
  />
))}
        </div>
    )
}
export default StudentList
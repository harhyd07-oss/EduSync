import './StudentList.css'
import StudentCard from './StudentCard'
function StudentList({students}){
    return(
        <div className="student-list">
             {
    students.map((student) => (
  <StudentCard
    key={student.roll_number}
    student={student}
  />
))}
        </div>
    )
}
export default StudentList
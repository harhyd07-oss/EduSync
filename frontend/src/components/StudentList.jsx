import StudentCard from './StudentCard'
function StudentList({students}){
    return(
        <div>
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
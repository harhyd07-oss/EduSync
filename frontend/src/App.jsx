import Welcome from './components/Welcome'
import {useState, useEffect}from 'react'
import StudentCard from './components/StudentCard'

function App() {
const [students, setStudents] = useState([])
useEffect(() => {
  async function getStudents(){
    const response =await fetch('http://127.0.0.1:8000/api/students/')
    const data = await response.json()
    console.log(data);
    setStudents(data)
    
  } 
 
  getStudents()
}, [])
  return (<>
    <Welcome college="EduSync" name="Harsha"/>
   <h2>Students</h2>
   {
    students.map((student) => (
  <StudentCard
    key={student.roll_number}
    student={student}
  />
))}
   </>
  )
}

export default App

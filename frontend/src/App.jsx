import Welcome from './components/Welcome'
import {useState, useEffect}from 'react'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
function App() {
const [students, setStudents] = useState([])
const [selectedStudent, setSelectedStudent] = useState(null);
useEffect(() => {
 
 
  getStudents()
}, [])
 async function getStudents(){
    const response =await fetch('http://127.0.0.1:8000/api/students/')
    const data = await response.json()
    console.log(data);
    setStudents(data)
    
  } 
  return (<>
    <Welcome college="EduSync" name="Harsha"/>
   <h2>Students</h2>
   <StudentForm onStudentAdded={getStudents} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}/>
   <StudentList students={students} 
   onEdit={setSelectedStudent}/>  </>
  )
}

export default App

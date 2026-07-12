import Welcome from './components/Welcome'
import {useState, useEffect}from 'react'
import StudentList from './components/StudentList'

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
   
   <StudentList students={students}/>  </>
  )
}

export default App

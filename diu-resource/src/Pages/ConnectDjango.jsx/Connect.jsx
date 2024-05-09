import axios from "axios"
import { useEffect, useState } from "react";

const Connect = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        async function getAllStudent() {
            try {
                const students = await axios.get("http://127.0.0.1:8000/api/student/")
                console.log(students.data)
                setStudents(students.data)
            } catch(error) {
                console.log(error);
            }
        }
        getAllStudent()
    },[])
    return (
        <div>
            <h1>Connect react to django</h1>
            {
                students.map((student, i) => {
                    return (
                        <h1 key={i}>{ student.stuname}</h1>
                    )
                })
}
        </div>
    );
};

export default Connect;
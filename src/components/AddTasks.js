import Calendar from 'react-calendar'
import { collection , addDoc, where, getDocs, query, } from "firebase/firestore"; 
import { useState,} from "react";
import { db  } from '../firebase'
import {Link} from 'react-router-dom'
import { auth } from "../firebase";
import {
  onAuthStateChanged
} from "firebase/auth";





const AddTasks = () => {


  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPerson, setTaskPerson] = useState("");
  const [user, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
 
  
    const addTask = async () => {
      const payload = {
        taskName: taskName,
        taskDate: taskDate,
        taskPerson: taskPerson,
      }
      const collectionRef = collection(db, "Groups");
      const q = query(collectionRef, where("users", 'array-contains-any', [user.uid]))
      const snapshot = await getDocs(q);

      const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id,}));
      
      results.forEach(async (result) => {
        const collectionRef = collection(db, "Groups", result.id, result.id);
        await addDoc(collectionRef, payload)
        console.log(result.id)
      })
    }

return (
        <div>
           <div className="container">
        < Calendar/>

           <input
              className="text-input-grey"
              placeholder="Name of task"
              onChange={(event) => {
                setTaskName(event.target.value);
              }}
            />
            <input
              className="text-input-grey"
              placeholder="When?"
              type="date"
              onChange={(event) => {
                setTaskDate(event.target.value);
              }}
            />
            <input
              className="text-input-grey"
              placeholder="Who?"
              onChange={(event) => {
                setTaskPerson(event.target.value);
              }}
            />

          <Link to='/task'><button className="btn" type="submit" onClick={addTask}>Add task</button></Link>
             
             
          </div>
        </div>
    )
    
}

export default AddTasks

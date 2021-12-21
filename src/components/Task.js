import {useEffect , useState} from 'react'
import {doc , collection , deleteDoc , getDocs,query, where } from 'firebase/firestore'
import { db } from '../firebase'
import Calendar from 'react-calendar'
import {Link} from 'react-router-dom'
import { auth } from "../firebase";
import {
  onAuthStateChanged
} from "firebase/auth";




function Task() {
    const [tasks, setTask] = useState([]);
    const [user, setUser] = useState({});


    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });



    

    useEffect(() => {

        const getTasks = async () => {
           
          const collectionRef = collection(db, "Groups");
          const q = query(collectionRef, where("users", 'array-contains-any', [`${user.uid}`]))
          const snapshot = await getDocs(q);
    
          const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id,}));
          
          results.forEach(async (result) => {
            const collectionRef = collection(db, "Groups", result.id, result.id);
            const data = await getDocs(collectionRef)
            setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
            console.log(result.id)
          })
          
        }
        getTasks()
      }, [user.uid]);

    
 


  const deleteTask = async(id) =>{
    const collectionRef = collection(db, "Groups");
    const q = query(collectionRef, where("users", 'array-contains-any', [user.uid]))
    const snapshot = await getDocs(q);

    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id,}));

    results.forEach(async (result) => {
      const taskDoc =  doc(db, "Groups", result.id, result.id, id);
     
    await deleteDoc(taskDoc)
    setTask(tasks.filter((task) => task.id !== id))
    console.log("Task deleted" + taskDoc.id)
    })
  }
      
    return (
        <div className='container'>

            < Calendar />

            {tasks.map((task) => {
             return <div key={task.id}
             onClick={() => {
               deleteTask(task.id)
             }} className="task-card">
             <div className="task-card-img">{task.taskPerson}</div>
             <div className="task-card-name container"><h3>{task.taskName}</h3><p>{task.taskDate}</p></div>
             <div className="task-card-done"></div>
           </div>
           })}
           <div className="add-container">
                <Link to="/addtasks"><button className='btn-add'>+</button></Link>
           </div>
           <Link to="/profile"><button className='btn'>Profile</button></Link>

        </div>
    )
}

export default Task

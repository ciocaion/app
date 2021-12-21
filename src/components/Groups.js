import { useState, useEffect, React } from "react";
import { collection, addDoc, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore"; 
import { db  } from '../firebase'
import { auth } from "../firebase";
import {
  onAuthStateChanged
} from "firebase/auth";
import { Link } from "react-router-dom";


const Groups = () => {
    
    const [groupName, setGroupName] = useState("");
    const [groups, setGroups] = useState([]);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    


    useEffect(() => {
      const getGroups = async () => {
        const data = await getDocs(collection(db, "Groups"));
        setGroups(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }
      getGroups()
    }, []);



    const createGroup = async () => {

            const collectionRef = collection(db, "Groups");
            const payload = { groupName: groupName, users:[user.uid]};
            const docRef = await addDoc(collectionRef, payload);
            console.log("Document id is:" + docRef.id)
    }

    const joinGroup = async (id) => {
      const docRef = doc(db, "Groups", id ) ;
      const payload = {users: arrayUnion(user.uid)};
      updateDoc(docRef, payload,)
      console.log(id,groupName)
    }

//    const getGroups = () => {
//      const data = getDoc(collection(db, "Groups"));
//      addDoc(data.doc.map((doc) => ({...doc.data(), id: doc.id })))
//    }
//  getGroups()




      

    return (
        <div className="container">
          <div className="container">
          <h3 className="group-heading">Create group:</h3>
            <input
                    className="text-input-grey"
                    placeholder="Group Name "
                    onChange={(event) => {
                        setGroupName(event.target.value);
                    }}
                />
              <Link to='/task'><button onClick={createGroup} className="btn btn-green">Create Group</button></Link>
          </div>
                <br/>
                <br/>


                  <h3 className="group-heading">Join existing group:</h3>
                {groups.map((group) => {
             return <div key={group.id}>
               <Link to='/task'>  <button className="btn btn-group" onClick={() => joinGroup(group.id)}> <h3>{group.groupName}</h3> </button></Link>
           </div>
           })}              
        </div>
    )
}



export default Groups

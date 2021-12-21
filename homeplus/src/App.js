import { useState, useEffect, React } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"; 
import { db  } from './firebase'
// Styles
import './styles/App.css'
import './styles/desktop-styles.css'
import './styles/tablet-styles.css'
import './styles/Calendar.css'
import './styles/avatar-grid.css'
//
import Login from './components/Login';
import Signup from './components/Signup';
import CalendarComponent from './components/Calendar'
import Home from './components/Home'
import Profile from './components/Profile';
import AddTasks from './components/AddTasks';
import Task from './components/Task';
import Groups from './components/Groups';
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";



function App() {
   
  const [userGroup, setUserGroup] = useState("")

  const [groups, setGroups] = useState([]);



  useEffect(() => {
    const getGroups = async () => {
      const data = await getDocs(collection(db, "Groups"));
      setGroups(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getGroups()
  }, []);


  return (
    <Router >
      <AuthProvider>
    <div className="App">
        <div className="container">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <PrivateRoute exact path="/calendar">
              < CalendarComponent />
            </PrivateRoute>

            <PrivateRoute exact path="/profile">
              < Profile />
            </PrivateRoute>

            <PrivateRoute exact path="/addtasks">
              < AddTasks userGroup={userGroup}/>
            </PrivateRoute>

            <PrivateRoute exact path="/task">
              < Task />
            </PrivateRoute>

            <PrivateRoute exact path="/groups">
              < Groups />
            </PrivateRoute>
            <Route exact path="/groups">
            {groups.map((group) => {
             return <div key={group.id}
             className="task-card">
            
             <label>
              <input onChange={(event) => {
                setUserGroup(event.target.value);
              }} type="radio" name="group"  value= {`${group.id}`} />
              <div >{`${group.id}`}</div>
              </label>

           </div>
           })}

            </Route>

            
          </Switch>
        </div>
    </div>
    </AuthProvider>
    </Router >
  );
}

export default App;

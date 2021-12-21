import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import {Link, useHistory} from 'react-router-dom'



const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const history = useHistory()
    
  // eslint-disable-next-line
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    const register = async () => {
      try {
         const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword,
        );
        history.push('/profile')
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  




    return (
        <div className="container">
          <div className="login-container container">
            <h2>Get Started</h2>
            <br/>
            <p>Create profile and continue</p>
            <br/>
            <input
              className="text-input"
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />

            <input
              className="text-input"
              placeholder="Password..."
              type="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button className="btn btn-green" onClick={register}>Register</button>
            <br/>
            <span>
              Already have an account? 
              <br/>
              <Link className="paragraph-link" to='/login'>
                Log in here</Link>
            </span>
          </div>
        </div>
      );
    }

export default Signup
 
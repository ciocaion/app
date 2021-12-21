import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import {Link, useHistory} from 'react-router-dom'





function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const history = useHistory()


    onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      
      const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          history.push('/profile')
          console.log(user);
        }
        catch (error) {
          console.log(error.message);
        }
      };

     


    return (
        <div className="container">
            <div className="login-container container">
              <h2>Welcome back. <br/> You have been missed!</h2>
                <br/> 
              <p>Let's sign you in.</p>
                <br/> 
              <input
                  className="text-input"
                  placeholder="Email..."
                  onChange={(event) => {
                      setLoginEmail(event.target.value);
                  }}
                />

              <input
                className="text-input"
                placeholder="Password..."
                type="password"
                onChange={(event) => {
                setLoginPassword(event.target.value);
                  }}
                />

              <button className="btn" onClick={login}>Log in</button>
                <br/>
                
              <span>Don't have an account?
                <br/>
                  <Link className="paragraph-link" to='/signup'>
                  Register here</Link>
                </span>
             </div>

        
        </div>
    )
}

export default Login

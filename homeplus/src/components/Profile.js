import {
  updateProfile,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'




const Profile = () => {
const [userName, setUserName] = useState("")
const [userAvatar, setUserAvatar] = useState("")
const [user, setUser] = useState({});
const history = useHistory()
  
onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
});



const update = () => {
  updateProfile(auth.currentUser, {
    displayName: userName, 
    photoURL: userAvatar,
  }).then(() => {
    console.log(auth.currentUser.displayName)
    console.log(auth.currentUser.photoURL)
    console.log("Profile updated !")
  }).catch((error) => {
    alert('an error occured')
  });
}

const logout = async () => {
  await signOut(auth);
  history.push('/login')
};


  return (
    <div>
      <div className="container">    
     

          <img className="profile-avatar" src={user.photoURL} alt="Current Profile"/>    
          <br/>  
          <h4>{user.email}</h4>  


                <input
                  className="text-input-grey"
                  placeholder={user.displayName}
                  onChange={(event)  => { 
                    setUserName(event.target.value);
                  }}
                />



        <br/>
       
            <div className="avatar-grid">
              
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="avatar1"  value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar1.png?alt=media&token=f543e257-935f-4e94-bc4c-9611912cf67c" />
              <div className="avatar1"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar2.png?alt=media&token=468c3144-577b-491b-9214-7f85447b89a9" />
              <div className="avatar2"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar3.png?alt=media&token=4bc834f9-f006-47d4-a69d-63e9bd38154c" />
              <div className="avatar3"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar4.png?alt=media&token=24bf51f1-4024-4867-bf55-fcc653395f1c" />
              <div className="avatar4"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar5.png?alt=media&token=bcce5f1d-ed99-463a-96d2-fd0a16cba69a" />
              <div className="avatar5"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar6.png?alt=media&token=d32e57c3-22b1-4c2b-b004-deca4726bdf3" />
              <div className="avatar6"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar7.png?alt=media&token=1cacce34-33cc-4ceb-a004-8c20a76795d3" />
              <div className="avatar7"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar8.png?alt=media&token=a00f8b50-50f7-41d9-bd5a-ececdfaae9fc" />
              <div className="avatar8"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar9.png?alt=media&token=bccc1321-a832-4b63-becb-2971dfee2339" />
              <div className="avatar9"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar10.png?alt=media&token=3bd5631b-3530-4a5b-8da3-8228d894e527" />
              <div className="avatar10"></div>
              </label>  

              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar11.png?alt=media&token=1931d318-e1e5-487f-91d3-003c8e8b5942" />
              <div className="avatar11"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar12.png?alt=media&token=9ad9d219-af97-4815-be72-b4f2d85e7186" />
              <div className="avatar12"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar13.png?alt=media&token=385adfa7-b5ea-4d37-bf17-2c5cdb14531c" />
              <div className="avatar13"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar14.png?alt=media&token=3b27a392-3da5-4655-872b-02455b2ada90" />
              <div className="avatar14"></div>
              </label>
                            
              <label>
              <input onChange={(event) => {
                setUserAvatar(event.target.value);
              }} type="radio" name="test" value="https://firebasestorage.googleapis.com/v0/b/homeplus-5c895.appspot.com/o/avatar15.png?alt=media&token=10859b97-6a4f-4f8c-8558-7cfe86b40f61" />
              <div className="avatar15"></div>
              </label>
              
              
              

      </div>
            <button className="btn" onClick={update}>Update</button>
            <Link to="/task"><button className='btn btn-green'>See Tasks</button></Link>
            <Link to="/groups"><button className='btn btn-green'>Join Group</button></Link>
            

        </div>
        <br/>
        <div className="log-out">
            <h4> User Logged In: </h4>
            {user?.email}    
            <button className="btn" onClick={logout}>Sign Out</button>
          </div>
    </div>
  )
}

export default Profile

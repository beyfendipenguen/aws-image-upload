import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

const UserProfiles = () => {
  const [userProfiles, setUserPrifles] = useState([]);
  const fetchUserProfiles = () =>{
    axios.get("http://localhost:8080/api/v1/user-profile/").then(res => {
      console.log(res);
      setUserPrifles(res.data);
    });
  }
  useEffect(() => {
    fetchUserProfiles();
  },[]);

  return userProfiles.map((userProfile, index) => {
    return (
      <div key={index}>
        <h1>
          {userProfile.userName}
        </h1>
        <p>
          {userProfile.userProfileId}
        </p>
      </div>
    )
  })
}

function App() {
  return (
    <div className="App">
      <UserProfiles/>
    </div>
  );
}

export default App;

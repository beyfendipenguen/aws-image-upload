import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

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
        {/*TODO: profile image*/}
        <br/>
        <br/>
        <h1>
          {userProfile.userName}
        </h1>
        <p>
          {userProfile.userProfileId}
        </p>
        <Dropzone/>
        <br/>
        <br/>

      </div>
    )
  })
}

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const file = acceptedFiles[0];
    console.log(file);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop profiel image,or click to select profile image</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserProfiles/>
    </div>
  );
}

export default App;

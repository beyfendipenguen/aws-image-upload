import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

const UserProfiles = () => {
  const [userProfiles, setUserPrifles] = useState([]);

  /* updating objects and arrays in state : https://www.w3schools.com/react/react_usestate.asp */
  const fetchUserProfiles = () =>{
    axios.get("http://localhost:8080/api/v1/user-profile/").then(res => {
      console.log(res);
      setUserPrifles(res.data);
    });
  }
  /* Runs only on the first render : https://www.w3schools.com/react/react_useeffect.asp */
  useEffect(() => {
    fetchUserProfiles();
  },[]);

  return userProfiles.map((userProfile, index) => {
    return (
      <div key={index}>
        {userProfile.userProfileId ? (
        <img
        src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`} alt=''
        />
        ) : null}
        <br/>
        <br/>
        <h1>
          {userProfile.userName}
        </h1>
        <p>
          {userProfile.userProfileId}
        </p>
        <Dropzone {...userProfile}/>
        <br/>
        <br/>

      </div>
    )
  })
}

function Dropzone({userProfileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file",file);
    axios
      .post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
    formData,
    {
      headers: {
        "Contnet-Type": "multipart/form-data"
      }
    }
    )
    .then(res =>{
      alert("image upload successfully",res);
      window.location.reload();
    })
    .catch(err=>{
      alert("operation failed",err);
    });
  },[]);
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

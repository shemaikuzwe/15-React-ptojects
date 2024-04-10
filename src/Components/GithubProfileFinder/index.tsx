import {useEffect, useState} from "react";
import User from './user.tsx';
import './style.css';
export default function GithubProfileFinder(){
    const [userName,setUserName]=useState("shemaIkuzwe");
    const [userData,setUserData]=useState([]);
    const [loading,setLoading]=useState(false);
    function handleSubmit(){
      fetchGithubUserData()
    }
    async function fetchGithubUserData(){
        setLoading(true);
       const response=await fetch(`https://api.github.com/users/${userName}`);
       const data=await response.json();
       if(data){
           setUserData(data);
           setLoading(false);
           setUserName("");
       }
    }
    useEffect(()=>{
        fetchGithubUserData()
    },[]);
    if (loading){
        return <h1>Loading....</h1>
    }
    return(
      <div className="github-profile-container">
          <div className="input-wrapper">
              <input
               type="text"
               name="username"
               placeholder="Enter github username"
               value={userName}
                onChange={(event)=> setUserName(event.target.value)}
                />
              <button onClick={handleSubmit}>Search</button>
          </div>
          {userData !== null ?
              <User user={userData}/>
              :"User not found"}
      </div>
    );
}
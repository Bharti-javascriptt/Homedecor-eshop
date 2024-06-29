// SignIn.js

import React, {useState,useEffect} from 'react';
import './Signin.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
     
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("user")
    if(auth){
      navigate("/")
    }

  },[])
   
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const emailchange = (event) => {
    setemail(event.target.value);
    console.log(event)
  }
const passchange = (event) => {
    setpassword(event.target.value);
    console.log(event)

  }


  const collectdata =async()=>{
    console.log(email,password)
    let result= await fetch ('http://localhost:4000/signin',{

      method: 'post',
      body: JSON.stringify({ email, password}),
      headers: {
        'Content-Type': 'application/json'
      } ,
     });

     result =await result.json();
     console.warn(result);

     if(result){
      localStorage.setItem("user",JSON.stringify(result))

      navigate("/")
     }
     else{
      alert("please enter correct detail")
     }
    }




  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Sign-In</h1>
        <div className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email or mobile phone number</label>
            <input type="text" id="email" name="email" value={email} onChange={emailchange} autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label><br/>
            <input type="password" onChange={passchange} value={password} id="password" name="password" />
          </div>
          <button type="submit" onClick={collectdata} className="signin-button">Sign-In</button>
        </div>
        
      </div>
    </div>
  );
};

export default SignIn;

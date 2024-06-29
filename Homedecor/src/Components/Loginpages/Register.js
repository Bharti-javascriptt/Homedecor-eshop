
import React, { useState ,useEffect} from 'react'
// import './Register.css'; // Import CSS file for styling
import { Link, } from 'react-router-dom';
import './Register.css'
import { useNavigate } from 'react-router-dom';



const Register = () => {

  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate("/home")
    }
  })


  const [name, setname] = useState();
  const [email, setemail] = useState();

  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();

  const changehandler = (event) => {
    setname(event.target.value);
    console.log(event)
  }
  const b = (event) => {
    setemail(event.target.value);
    console.log(event)
  }

  const c = (event) => {
    setpassword(event.target.value);
    console.log(event)

  }
  const d = (event) => {
    setcpassword(event.target.value);
    console.log(event)

  }

  // ?? register data through api

  const  collectdata = async () => {
    // console.warn(name, email, password);
    let result = await fetch('http://localhost:4000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password}),
      headers: {
        'Content-Type': 'application/json'
      } ,
    });
    let b = await result.json();
    console.log(b)
    localStorage.setItem("user",JSON.stringify(b));
    if(result){
      navigate('/')
    }}

  return (
    <div>
      <div className="signup-container">
        <div className="signup-box">
          <h1>Create account</h1>
          <div className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Your name</label><br />
              <input type="text" id="name" name="name" value={name} autoFocus onChange={changehandler} />
            </div>
            <div className="form-group second">
              <label htmlFor="email">Email</label><br />
              <input type="email" id="email" value={email} name="email" onChange={b} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label><br />
              <input type="password" id="password" value={password} name="password" onChange={c} />
            </div>
            
            <div className="form-group">
              <label htmlFor="cpassword2">Confirm Pass</label><br/>
              <input type="password" id="cpassword2" value={cpassword} name="cpassword2" onChange={d} />
            </div>
          </div>

          <button type="submit" onClick={collectdata } className="signup-button">Submit</button>

          <hr />
          {/* <p className="signin-link">
          Already have an account? <a href="#">Sign-In</a>
        </p> */}
          <div className='signin-link'>
            Already Have An Account
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register;



// Signup.js






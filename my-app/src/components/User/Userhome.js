import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

function Userhome() {

  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")

  const [regdata,setregData]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    conformpassword:""
  })

  function setRegData(e,propName){
    let temp=e.target.value
    setregData(data =>({
     ...data,[propName]:temp
    }))
    
     }
     

     async function changeData(e){
      e.preventDefault()
      // const data=new FormData(e.target)
      console.log(regdata)


       fetch("http://localhost:4000/user/login",{
        method:"POST",
        headers:{"content-type":"application/json","accept":"application/json"},
        body:JSON.stringify(regdata)
        
    })
    .then((data)=>data.json())
    .then((responce)=>console.log(responce))
    .catch((error)=>console.log(error.message))
     }
    
    

  return (
    <div>
        <Home/>
        <div className="Logo">LOGO</div>
        <div className="Text">TEXT WILL<br/> BE DISPLAYED<br/> HERE</div>
        <div className="form-box">
          <div className="top">
          <Link to="/" style={{textDecoration:'none', marginTop:'15px'}}>Vendor</Link>
            <p style={{}}>User</p>
          </div>

          <div className="heading">
            <h2>Sign in your Account</h2>
          </div>
          <div className="form">
            <form method="post" onSubmit={changeData}>
              <div className="input">
                {" "}
                <input type="text" placeholder="Phone/Email" name='email'
                 onChange={e=>setRegData(e,"email")} />
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" name='password'
                onChange={e=>setRegData(e,"password")}  />
              </div>
              <div className="forget">
                {" "}
                <Link to="/forgetPassword" style={{textDecoration:'none'}}>Forget Password</Link>
              </div>

              <div className="footer">
                <div className="create">
                  {" "}
                  <Link to="/createuseraccount" style={{textDecoration:'none'}}>Create Account</Link>
                </div>
                  <Link to='/Userproposals' style={{textDecoration:'none',color:'white'}}>
                <button className="button" type="submit">Sign In
                </button>
                  </Link>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
  }

export default Userhome





 
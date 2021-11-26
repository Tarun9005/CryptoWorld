import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useState } from 'react'

export default function Login() {

  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const history = useHistory("")
 
  const LoginHandeller = () => {
      fetch("http://localhost:3004/userDetails")
      .then(response=>response.json())
      .then(data=>
       {
           //console.log(data)
           let authSuccess = 0;
           data.map((user)=>{
             //  console.log("in map")
              if(user.email === username && user.password === password){
                  authSuccess = 1;
                  localStorage.setItem('token', username)
                  console.log("authenticated")
              }
              
          })

          if(authSuccess === 1){
             // console.log("login successful")
              document.getElementById("mtch").innerHTML = "";
              history.push("/cryptoexchange")
              window.location.reload();
          }else{
            document.getElementById("mtch").innerHTML = "The given credentials do not match!";

          }
       })

      
   
  }



    return (
        <>
            <section className="">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p id="logintxt" className="lead fw-bold mb-0 me-3 mt-5">Sign in to explore more!</p>
            
          </div>

          

          
          <div className="form-outline mb-4 mt-5">
          <label className="form-label" for="form3Example3">Email address</label>
            <input id="loginemail" type="email" onChange={(e) => setusername(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter a valid email address" required />
            
          </div>

         
          <div className="form-outline mb-3">
          <label className="form-label" for="form3Example4">Password</label>
            <input type="password" onChange={(e) => setpassword(e.target.value)} id="loginpassword" className="form-control form-control-lg"
              placeholder="Enter password" required />
           
          </div>
          <p className="form-errors" id="mtch"></p>

          {/* <div className="d-flex justify-content-between align-items-center">
            
           
            <a href="#!" className="text-body">Forgot password?</a>
          </div> */}

          <div className="text-center text-lg-start mt-4 pt-2">
            <button id="loginbtn" type="button" onClick={LoginHandeller} className="btn btn-dark btn-lg loginbtn"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link
             to="/register" className="link-danger">
            Register
            </Link>
                </p>

                <p className="small fw-bold mt-2 pt-1 mb-0">Forgot Password! <Link
             to="/reset" className="link-danger">
            Reset Password
            </Link>
                </p>


          </div>

        </form>
      </div>
    </div>
  </div>
  </section>
        </>
    )
}

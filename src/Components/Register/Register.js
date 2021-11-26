import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const history = useHistory("")
  let alertMessage = null;
  let idAlreadyExists = false;
  const createAccount = (data) => {
    console.log(data)
   // console.log(data.contact, data.fullname)
    let name = data.fullname;
    let contact = data.contact
    let password = data.password;
    let email = data.email;
    let confirmpass=data.confirmpass;
    let favourites = new Array();


    if(confirmpass!=password){
      document.getElementById("msg").innerHTML = "Password does not match";
     
    }
    else{
      document.getElementById("msg").innerHTML = "";
    fetch("http://localhost:3004/userDetails")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.map((user) => {
                    if (user.email === email) {
                        idAlreadyExists = true
                        //console.log("email matched")
                    }
                })
                if (idAlreadyExists) {
                  //console.log("This email id is already taken")
                  document.getElementById("exists").innerHTML = "This email id is already taken";
                  history.push("/register");
              }
              
              
              else {
                document.getElementById("msg").innerHTML = "";
                  console.log("accout created successfully")
                  fetch('http://localhost:3004/userDetails', {
                      method: "POST",
                      headers: {
                          "Content-type": "application/json"
                      },
                      body: JSON.stringify({ email, name, contact, password , favourites}),
                  })
                  history.push("/login");
              }

          })

  }
  }



    return (
        <>
             <section className="">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit(createAccount)}>
          <div className="d-flex flex-row align-items-center justify-content-center
           justify-content-lg-start">
            <p className="lead fw-bold mb-0 me-3 mt-5">Register to explore more!</p>
            
          </div>

          
          <div className="form-outline mb-4 mt-5">
          <label className="form-label" for="form3Example3">Name</label>
            <input type="text" id="registername" className="form-control form-control-lg"
              placeholder="Enter your name" {...register("fullname", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 4
                                })} />
                          <p className="form-errors">{errors.fullname?.type === 'required'
                        && "Input length should be more than 3 and less than 20"}</p>
            
          </div>
          
          <div className="form-outline mb-4 ">
          <label className="form-label" for="form3Example3">Email address</label>
            <input type="email" id="registeremail" className="form-control form-control-lg"
              placeholder="Enter a valid email address"  {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    },
                                })} />
                                <p className="form-errors">{(errors.email?.type
                                 === 'required' || errors.email?.type === 'pattern') 
                                 && "Enter valid email"}</p>
                                 <p className="form-errors" id="exists"></p>
            
          </div>

          <div className="form-outline mb-4 ">
          <label className="form-label" for="form3Example3">Contact number</label>
            <input type="number" id="registercontact" className="form-control 
            form-control-lg"
              placeholder="Enter a valid phone number" {...register("contact", {
                                    required: true,
                                    pattern: {
                                        value: /(7|8|9)\d{9}/
                                    },
                                    maxLength: 10
                                })} />
                                <p className="form-errors" id="phonetxt">{(errors.contact?.type 
                                === 'required' 
                        || errors.contact?.type === 'pattern'
                        || errors.contact?.type === 'maxLength') 
                        && "Enter valid 10 digit number"}</p>
            
          </div>

         
          <div className="form-outline mb-3">
          <label className="form-label" for="form3Example4">Password</label>
            <input type="password" id="registerpassword" className="form-control 
            form-control-lg"
              placeholder="Enter password" placeholder="Password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}/>
                        <p className="form-errors" id="regpass">{errors.password?.type === 'required' 
        || errors.password?.type==='minLength' && "Password length should be more than 5"}</p>
            
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" for="form3Example4">Confirm Password</label>
            <input type="password" id="registerconfirmpassword" className="form-control 
            form-control-lg"
              placeholder="Confirm password" {...register("confirmpass", {
                                    required: true,
                                    minLength: 6,
                                })}
                                />
                        <p className="form-errors" id="msg"></p>
            
          </div>


          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" id="registerbtn" className="btn btn-dark btn-lg loginbtn"
              >Register</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?<Link
             to="/login" className="link-danger">
            Login
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

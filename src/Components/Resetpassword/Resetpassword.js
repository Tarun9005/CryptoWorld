import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'


export default function Resetpassword() {

 var check=-1
  let name=""
  let id=""
  let contact=""
  let favourites=new Array()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const history = useHistory("")
    let alertMessage = null;
  let idAlreadyExists = false;
  const resetpass = (data) => {
    console.log(data)
   // console.log(data.contact, data.fullname)
    let password = data.password;
    let email = data.email;
    let confirmpass=data.confirmpass;
     
    if(confirmpass!=password){
        check=100
       
      }
      else{
        document.getElementById("confirmsg").innerHTML = ""
      
        fetch("http://localhost:3004/userDetails")
               .then(res => res.json())
               .then(data => {
                  data.map(item => {
                     if (item.email === email) {
                       check=1
                        id=item.id
                        name=item.name
                        contact=item.contact
                        favourites=item.favourites
                        fetch(`http://localhost:3004/userDetails/${item.id}`, {
                            method: "PUT",
                            headers: {
                               "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email, name, contact,password,favourites,id }),
                         })
                         history.push("/login")
                            
                            //document.getElementById("success").innerHTML = "Password updated Successfully"     
                        }
                      
                    })
                })





      }


if(check===100)
document.getElementById("confirmsg").innerHTML = "Password does not match" 
else
document.getElementById("emailnot").innerHTML = "Email does not exist" 




  }


    return (
        <>
          <section className="">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://specopssoft.com/wp-content/uploads/2020/04/password-reset-tool.jpg" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        
          <div className="d-flex flex-row align-items-center justify-content-center
           justify-content-lg-start">
            <p className="lead fw-bold mb-0 me-3 mt-5">Reset your password!</p>
            
          </div>
          <form onSubmit={handleSubmit(resetpass)}>
          
          <div className="form-outline mb-4 mt-5">
          <label className="form-label" for="form3Example3">Email address</label>
            <input type="email" id="resetemail" className="form-control form-control-lg"
              placeholder="Enter a valid email address" {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    },
                                })}  />
                                 <p className="form-errors">{(errors.email?.type
                                 === 'required' || errors.email?.type === 'pattern') 
                                 && "Enter valid email"}</p>
                                 <p className="form-errors" id="checkemail"></p>
                                
          </div>

          

         
          <div className="form-outline mb-3">
          <label className="form-label" for="form3Example4">New Password</label>
            <input type="password" id="newpass" className="form-control 
            form-control-lg"
              placeholder="Enter password" placeholder="Password"
              {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}      />
                                <p className="form-errors">{errors.password?.type === 'required' 
        || errors.password?.type==='minLength' && "Password length should be more than 5"}</p>
                       
            
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" for="form3Example4">Confirm new Password</label>
            <input type="password" id="newconfirmpass" className="form-control 
            form-control-lg"
              placeholder="Confirm password"  {...register("confirmpass", {
                                    required: true,
                                    minLength: 6,
                                })}
                                />
                        <p className="form-errors" id="confirmsg"></p>
            
          </div>

          <p className="form-errors" id="emailnot"></p>
          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" id="resetbtn" className="btn btn-dark btn-lg loginbtn"
              >Reset</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?<Link
             to="/login" className="link-danger">
            Login
            </Link>
                </p>

                <p className="success-msg" id="success"></p>

          </div>

        </form>
      </div>
    </div>
  </div>
  </section>  
        </>
    )
}

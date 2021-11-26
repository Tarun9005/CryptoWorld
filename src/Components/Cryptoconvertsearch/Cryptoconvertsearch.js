import React from 'react'
import { useState } from 'react'
//import Cryptoconvertoption from '../Cryptoconvertoptions/Cryptoconvertoption'
import Cryptoconverter from '../CryptoConverter/Cryptoconverter'

//    function inputUser(e) {
//          console.log(e.target.value)
//     }
const Cryptoconvertsearch=(props)=>{

   const [coin, setCoin] = useState("")
   const [money,setmoney]=useState("INR")
    const inputFunction=(e)=>{
       const data=e.target.value
       //console.log(data)
       setCoin(data)
   }





    return (
        <>
         <p className="welcomeconverter">Welcome to Crypto Coverter Page</p>
         <div className="container">
            <div className="row">
            <div className="col-6">
                    <input type="text" id="cryptocoinname" className="form-control"  placeholder="Enter your Crypto Coin" 
                      onChange={inputFunction} value={coin} />
                      </div>
            <div className="col-6">
            
                    <select value={money} onChange={(event)=>{
                        setmoney(event.target.value)
                    }} className="form-control">
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="AED">AED</option>
                        <option value="AUD">AUD</option>
                        <option value="HUF">HUF</option>
                       
                        
                    </select>
                </div>  
                </div>
                <Cryptoconverter name={coin} currenci={money}/>
                
                </div>
                </>
       
    );
};
export default Cryptoconvertsearch;


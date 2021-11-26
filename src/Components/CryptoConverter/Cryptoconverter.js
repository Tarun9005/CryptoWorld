import React from 'react'
//import Cryptoconvertoption from '../Cryptoconvertoptions/Cryptoconvertoption'
import Cryptoconvertsearch from '../Cryptoconvertsearch/Cryptoconvertsearch'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Trending from '../Trending/Trending'

 const Cryptoconverter=(props)=> {

  // var x=""
  // if(props.currenci=="INR")
  // x="INR"
  // else if(props.currenci=="USD")
  // x="USD"
  // else if(props.currenci=="EUR")
  // x="EUR"
  // else if(props.currenci=="AED")
  // x="AED"
  // else if(props.currenci=="AUD")
  // x="AUD"
  // else if(props.currenci=="HUF")
  // x="HUF"
  // else
  // x="none"
  
      const [cname, setcname] = useState("")
       const searchcoin=()=>{
           
         fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currenci}&ids=${props.name}&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
                 .then(response => response.json())
                 .then(data => {
                    const x=data.length
                     //console.log(data)
                     //console.log(idiom)
                     setcname(data)
                    
                     
                    })
                 .catch(()=>console.log("Error occurred"))
         }
         useEffect(()=>searchcoin(),[])

      
         

    return (
        <>    
           
          <div className="text-center mt-3"><button className="searchbtn btn btn-dark" id="searchbtncryp" onClick={()=>{
        searchcoin()
    }}>Search</button></div> 

     
  {
                           cname.length===1?
      
                           
                           
                           <div className="col-12 mt-5">

                           <div className="p-4 shadow-4 rounded-3 jumbtron mb-5 jumb">
<div className="row">
<div className="col-4"><img src={cname[0].image} alt="coinimage" className="coinimg"/></div>
<div className="col-4"><h2 className="text-center mt-5">{cname[0].name}</h2></div>
  <div className="col-4"><p>
  <h2 className="text-center mt-5"> {cname[0].current_price}</h2>
  </p></div>
  
</div>
  <hr className="my-4" />

 <span><b>Market Cap Rank: </b>{cname[0].market_cap_rank}</span>
 <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Market Cap: </b>{cname[0].market_cap}</span>
 <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Price Change in 24h: </b>{cname[0].price_change_24h}</span>
 <span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Price Change in 24h in % </b>: {cname[0].price_change_percentage_24h} %</span>
</div>
</div>


                       : cname.length===10?
                       //code for 10 elements
                       
                       
                       <div className="col-12 mt-5">
                       
                       
                       {cname.map(function(object, i){
        return (<>
        
<div className="p-4 shadow-4 rounded-3 jumbtron bgexchange mb-5 jumb" key={object.id}>
<div className="row">
<div className="col-4"><img src={object.image} alt="coinimage" className="coinimg"/></div>
<div className="col-4"><h2 className="text-center mt-5 mobsmall">{object.name}</h2></div>
  <div className="col-4">
  <h2 className="text-center mt-5 mobsmall"> {object.current_price}</h2>
  </div>
  
</div>
  <hr className="my-4" />

 <span><b><i>Market Cap Rank: </i></b> {object.market_cap_rank}</span>
 <span>&nbsp;&nbsp;&nbsp;&nbsp;<b><i>Market Cap: </i></b>{ object.market_cap}</span>
 <span>&nbsp;&nbsp;&nbsp;&nbsp;<b><i>Price Change in 24h: </i></b> {object.price_change_24h}</span>
 <span>&nbsp;&nbsp;&nbsp;&nbsp;<b><i>Price Change in 24h in %: </i></b> {object.price_change_percentage_24h} %</span>
</div>


        </>
        )
    })}</div>
                       
                       
                       
                       //code ends for 10 elements
                        : <div className="row">
                          <div className="col-12">
                           <div className="text-center"><img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?size=338&ext=jpg"/>
                           </div>
                          </div>
                          
                            <div><h4 className="text-center" id="nodatacryp">Sorry! No data found</h4></div>
                          
                        </div>
                       }
   



            </>



        
        
    );
  }
    export default Cryptoconverter;


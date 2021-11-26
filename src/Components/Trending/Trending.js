import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from '../Carousel/Carousel';

export default function Trending() {
   
     
   const [trend, setTrend] = useState([])
   const getTrend= () =>{
       axios.get('https://api.coingecko.com/api/v3/search/trending')
       .then(response=>{
          
           const myTrend=response.data
           setTrend(myTrend.coins)
           
       })
           
       }
      
       //console.log(trend)
       useEffect(()=>getTrend(),[])
       
       




    return (
        <>
        
        <div className="container">
            <p className="trendingtxt">Top Trending coins as searched by users in the last 24 hours!</p>
            
            

        
            <div className="row">
            
             
                {trend.map(post=>{
                    return(
                       
                        <div className="col-md-4 col-lg-4 col-sm-6 col-12" key={post.item.score}>
             
            
             <div className="card mt-4">
             
                 <img src={post.item.large} className="card-img-top trendingimg" alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title text-center">{post.item.name}</h5>
                     <p className="card-text text-center">
                         Market Cap Rank: {post.item.market_cap_rank}
                     </p>
                     <p className="text-center"><b>Price in BTC: </b>{post.item.price_btc}</p>
                     <p className="text-center"><a href="https://www.coingecko.com/en/discover/trending-cryptocurrencies-india" target="_blank">
                     <button type="button" className="btn btn-dark">Read More</button></a></p>
                     
                 </div>
             </div>
 
             
             </div>
                    )
                })}
                 
                  

                 
             


                

   
           
            </div>




        </div>
        </>

    )
}

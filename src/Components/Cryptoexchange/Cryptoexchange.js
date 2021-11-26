import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Cryptoexchangecard from '../Cryptoexchangecard/Cryptoexchangecard'

export default function Cryptoexchange() {
    
    const [cryptoex, setCryptoex] = useState([])
    const getCryptoex= () =>{
        axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=18&page=18')
        .then(response=>{
           
            const myCrypto=response.data
            
            setCryptoex(myCrypto)
            
        })
            
        }
       
      
        useEffect(()=>getCryptoex(),[])
        console.log(cryptoex)


    return (
        <>
        <p id="cryptocompanies" className="text-center mt-3 exchangeheading">List of Cryptoexchange Companies!</p>
        <p className="text-center exchangesubheading">A marketplace where you can buy and sell
         cryptocurrencies.</p>
        <div className="container">
        <div className="row">

{cryptoex.map(companies=>{
                    return(
                       
                        <div className="col-md-4 col-lg-4 col-sm-6 col-12" key={companies.id}>
             
            
                        <Cryptoexchangecard id={companies.id} name={companies.name}
                         image={companies.image}
            url={companies.url} trustrank={companies.trust_score_rank} 
            country={companies.country} year={companies.year_established}/>
 
             
             </div>
             
                    )
                })}
        </div>
            </div>
          
        </>
    )
}

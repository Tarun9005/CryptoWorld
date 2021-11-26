import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Cryptoexchangecard from '../Cryptoexchangecard/Cryptoexchangecard'
export default function Wishlist() {
 

    const [myfavourites, setmyfavourites] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/userDetails")
            .then(response => response.json())
            .then(data => {
                data.map((user) => {
                    if (user.email === localStorage.getItem('token')) {
                        console.log(user.favourites)
                        setmyfavourites(user.favourites)
                    }
                })
            })
    }, [])



    return (
        <>
        
        <h4 className="text-center mt-5" id="wishlistmsg">View all your saved Cryptoexchange companies!</h4>
                   <h4 className="text-center mt-5 exploremobile">You can explore, add and remove more</h4>
                   <div className="container">
                   <div className="row">
        {myfavourites.length !=0
                ?
                myfavourites.map((cryp) => (
                    
                  
                    

                    <div className="col-md-4 col-lg-4 col-sm-6 col-12" key={cryp.id}>
                    <Cryptoexchangecard 
                    id={cryp.id}
                    name={cryp.name}
                    image={cryp.image}
                    trustrank={cryp.trustrank} 
                    country={cryp.country}
                    year={cryp.year}
                    url={cryp.url}


                    />
                    </div>
                   
                    
                    
      

         ))
         
                :
                <>
                   <div className="col-12 mt-5 text-center">
                       <div className="wishlistimg"><img src="https://elitejewelryhouse.com/assets/images/empty-wishlist.png" alt="wishlistimage"/>
                       </div>
                       <h4 className="mt-4">Your wishlist is empty! Explore and add to your wishlist</h4>
                   </div>
                  
                       
                  
                  
                </>
            }
            </div>
            </div>

        </>
    )
}

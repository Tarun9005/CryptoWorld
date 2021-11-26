import React from 'react'

export default function Cryptoexchangecard(props) {


   
    let showDeleteButton = false;
    if (window.location.pathname === "/wishlist") {
        showDeleteButton = true;
    }


  


    const removeFromFavourites = (selectedCrypto) => {
        
        fetch("http://localhost:3004/userDetails")
            .then(response => response.json())
            .then(data => {
                data.map((user) => {
                    if (user.email === localStorage.getItem('token')) {
                        let id = user.id;
                        let name = user.name;
                        let contact = user.contact
                        let password = user.password;
                        let email = user.email;
                        
                        let favourites = user.favourites;
                        
                        let index = favourites.findIndex(obj => obj.id===selectedCrypto.id)
                   
                        favourites.splice(index, 1);
                                fetch(`http://localhost:3004/userDetails/${id}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-type": "application/json"
                                    },
                                    body: JSON.stringify({ email, name, contact, password, favourites }),
                                })
                                //myFunc()
                                window.location.reload();
                      
                    }
                })
            })
    }

    const addtoFavourites = (selectedCrypto) => {
        fetch("http://localhost:3004/userDetails")
            .then(response => response.json())
            .then(data => {
                data.map((user) => {


                    if (user.email === localStorage.getItem('token')) {
                        let alreadyInFav = false;

                        user.favourites.map((favouriteItem) => {

                            if (favouriteItem.id === selectedCrypto.id) {
                                alreadyInFav = true;
                            }
                        })

                        if (alreadyInFav) {
                            //console.log("Already in Favourites")
                            myFun()
                        } else {
                            let name = user.fullname;
                            let contact = user.contact
                            let password = user.password;
                            let email = user.email;
                            let id = user.id;
                            let favourites = user.favourites;
                            favourites.push(props)
                            fetch(`http://localhost:3004/userDetails/${id}`, {
                                method: "PUT",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify({ name, contact, password, email, favourites })
                            })
                           
                            //console.log("added to wishlist")
                            myFuny()
                           
                           
                      
                         
                        }
                    }
                })

            })


    }

    function myFun(){
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    function myFuny(){
        var x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
 

    return (
        <>
           
           <div id="snackbar">Already added in Wishlist!</div>
           <div id="snackbar2">Added to wishlist!</div>
           
           <div className="card cardexchange mt-4">
             <div className="row">
                 <div className="col-6">
                 <img src={props.image} className="card-img-top exchangeimg" alt="companylogo"/>
                 </div>
                 <div className="col-6 mt-4">
                 <span className="text-center exchangename">{props.name}</span>
                 </div>
             </div>
            
            
             <div className="card-body mt-2">
                 
                 <p className="card-text">
                     <b>Trust Rank: </b>{props.trustrank}
                 </p>
                 <p className="card-text">
                     <b>Country: </b>{props.country}
                 </p>
                 <p className="card-text">
                     <b>Year: </b>{props.year}
                 </p>
                 <a href={props.url} target="_blank">
                 <button type="button" className="btn btn-dark">Explore</button></a>
                 <span className="wishbtn">
                 {
                    showDeleteButton
                        ?
                        <button className="btn btn-warning delbtn" onClick={() => removeFromFavourites(props)}><i className="far fa-trash-alt"></i>

                        </button>
                        :
                        <button type="button" id="btnfavaddition" className="btn btn-dark" onClick={() => addtoFavourites(props)}>Wishlist</button>
                        
                }
                 </span>
                 
             </div>
         </div>


       

    




        </>
    )
}

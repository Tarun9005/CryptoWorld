import React from 'react'

export default function About() {
    return (
        <div>
            <div className="container">
                <h2 className="text-center mt-4">Learn all about Crypto-World!</h2>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-6">
                 
                   <p><b><i>Crypto-World</i></b> is all about the crypto coins. You can see the list of
                   top 7 trending coins in last 24 hours. You can even see their market cap
                   rank and their price in BTC. You can also exchange any crypto coin to
                   any currency of your choice. Just type in the coin name and select the
                   currency from the dropdown. You can even see the information like
                   market cap rank, the price change percentage in 24 hours etc. </p>
                  
                   <p>You can even get the info about <b><i>Crypto-Exchange</i></b> companies.
                   A list of some top crypto exchange companies is shown with the option
                   of visiting their website and read about them in detail.
                   You can even wishlist a particular crypto exchange company of your choice.
                   For adding it to wishlist you'll have to register as a user. If you are
                   already a user then you must log in. Explore more about Cryptocoins <a
                    href="https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know" target="_blank"> here.</a> </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <div><img className="aboutpic" src="https://www.pymnts.com/wp-content/uploads/2021/01/bitcoin-1.png" 
                    alt="bitcoinpic"/></div>
                    </div>
                </div>
                   
                   
            </div>
        </div>
    )
}

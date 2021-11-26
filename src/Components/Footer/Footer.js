import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-white footerbg mt-5">

            <div className="container pt-4">

                <section className="mb-4">

                    <a className="btn btn-link btn-floating btn-lg text-white m-1" href="https://www.facebook.com/groups/CryptoCurrencyCollectorsClubPublicForum/"
                     role="button" target="_blank" data-mdb-ripple-color="dark" ><i className="fab fa-facebook-f"></i></a>


                    <a className="btn btn-link btn-floating btn-lg text-white m-1"
                        href="https://twitter.com/search?q=%23CRYPTOCURRENCY" target="_blank"
                        role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-twitter"></i></a>



                    <a className="btn btn-link btn-floating btn-lg text-white m-1"
                        href="https://www.instagram.com/cryptolocg/?hl=en" target="_blank"  role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-instagram">
                        </i></a>


                    <a className="btn btn-link btn-floating btn-lg text-white m-1"
                        href="https://in.linkedin.com/company/coingecko" target="_blank" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-linkedin"></i></a>

                   
                </section>

            </div>

            <div className="text-center text-white p-3 copybg">
                © 2021 Copyright:
                <span className="text-white"><b> Crypto-World</b></span>
            </div>

        </footer>
    )
}

import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-interval="20">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://d2908q01vomqb2.cloudfront.net/9e6a55b6b4563e652a23be9d623ca5055c356940/2021/05/11/digital-currency.jpg" className="d-block w-100" alt="bitcoinimage"/>
      <div className="carousel-caption d-none d-md-block">
      
        <h5 className="cheading">Welcome to Crypto-World!</h5>
        <p>A place where you can explore all about Crypto Coins.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/ultra-hd-abstract-bitcoin-crypto-currency-blockchain-technology-world-map-background-illustration-global-106043487.jpg" className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="cheading">Convert Cryto Currency!</h5>
        <p>You can convert crypto currency market rate to any currency of you choice.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn3.vectorstock.com/i/1000x1000/15/52/digital-bitcoin-crypto-currency-background-vector-19381552.jpg" className="d-block w-100" alt="bitcoinimage"/>
      <div className="carousel-caption d-none d-md-block">
      
        <h5 className="cheading">Explore top Crypto Exchangers!</h5>
        <p>Explore and wishlist your favourite crypto exchange companies.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

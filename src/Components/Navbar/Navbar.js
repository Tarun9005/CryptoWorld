import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


function Navbar(){

  const history = useHistory("")
  const logout = () => {
    localStorage.clear('token')
    history.push("/")
    window.location.reload();
  }


    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand crypto" href="#">Cryto-World</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>

        <li className="nav-item">
        <Link to="/converter" className="nav-link active">Crypto-Converter</Link>
          
        </li>
        

        {
                  localStorage.getItem('token') ?
                    <>
                    <li className="nav-item">
          <Link to="/cryptoexchange" className="nav-link active">Crypto-Exchanges</Link>
        </li>
                    </>
                    :
                    <>
                    <li className="nav-item">
          <Link to="/register" className="nav-link active">Crypto-Exchanges</Link>
        </li>
                    </>
                }

        <li className="nav-item">
        <Link to="/about" className="nav-link active">About</Link>
        </li>
        {
                  localStorage.getItem('token') ?
                    <>
                    <li className="nav-item">
          <Link to="/wishlist" className="nav-link active">Wishlist</Link>
        </li>
                    </>
                    :
                    <>
                    <li className="nav-item">
          <Link to="/register" className="nav-link active">Wishlist</Link>
        </li>
                    </>
                }
      </ul>


      {
                  localStorage.getItem('token') ?
                    <>
                    <ul className="navbar-nav">
        <li className="nav-item">
          <a type="button" className="nav-link active" onClick={logout} aria-current="page">Logout</a>
        </li>
        </ul>
                    </>
                    :
                    <>
                    <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link active" aria-current="page">Login/Register</Link>
        </li>
        </ul>
                    </>
                }






      
    </div>
  </div>
</nav>










    )
}

export default Navbar;
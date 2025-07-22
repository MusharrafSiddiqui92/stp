import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top text-white bg-primary">
        <div className="container-fluid " style={{ padding: '0', height: '35px' }}>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse bg-primary" style={{ fontSize: '20px',opacity:'0.8' }} id="navbarNavDropdown">
            <ul className="navbar-nav w-100 justify-content-center gap-4 pt-1">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active text-white" aria-current="page" href="#" style={{fontWeight:'bolder'}}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#" onClick={() => navigate('/gadgets')}  style={{fontWeight:'bolder'}}>
                  Gadgets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#" onClick={() => navigate('/peripheral')}  style={{fontWeight:'bolder'}}>
                  Peripheral
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-white" href="#" onClick={() => navigate('/mobiles')}  style={{fontWeight:'bolder'}}>
                  Mobiles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="https://wa.me/+923463825908" target='_blank'  style={{fontWeight:'bolder'}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Nav

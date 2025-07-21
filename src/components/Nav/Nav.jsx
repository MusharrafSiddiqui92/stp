import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top text-white bg-primary">
        <div className="container-fluid " style={{ padding: '0', height: '15px' }}>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse bg-blur-primary" style={{ fontSize: '20px' }} id="navbarNavDropdown">
            <ul className="navbar-nav w-100 justify-content-center gap-4 pt-1">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active text-white" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#" onClick={() => navigate('/gadgets')}>
                  Gadgets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#" onClick={() => navigate('/peripheral')}>
                  Peripheral
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-white" href="#" onClick={() => navigate('/mobiles')}>
                  Mobiles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="https://wa.me/+923463825908" target='_blank'>
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

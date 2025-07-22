import React from 'react'
import { useNavigate } from 'react-router-dom';

const Explore = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="display-6 text-center mt-5" style={{ fontWeight: 'bold' }}>Explore Our Categories</div>
              <div className="cards d-flex flex-column flex-lg-row justify-content-evenly align-items-center gap-4 flex-wrap mt-5">
                <div className="card shadow-lg" style={{ width: "18rem" }}>
                    <img src="./images/smartphone.png" className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">Mobile Phone</h5>
                        <p className="card-text">
                            Top phones from Apple,Samsung,Xiomi,Oppo and much more.
                        </p>
                        <a href="#" className="btn btn-outline-primary rounded-0" onClick={() => navigate('/mobiles')}>
                            Go To Products
                        </a>
                    </div>
                </div>

                <div className="card shadow-lg" style={{ width: "18rem" }}>
                    <img src="./images/gadgets.png" className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">Gadgets</h5>
                        <p className="card-text">
                            Top phones from Apple,Samsung,Xiomi,Oppo and much more.
                        </p>
                        <a href="#" className="btn btn-outline-primary rounded-0"onClick={() => navigate('/gadgets')}>
                            Go To Products
                        </a>
                    </div>
                </div>

                <div className="card shadow-lg" style={{ width: "18rem" }}>
                    <img src="./images/hardware.png" className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">Peripheral Devices</h5>
                        <p className="card-text">
                            Top phones from Apple,Samsung,Xiomi,Oppo and much more.
                        </p>
                        <a href="#" className="btn btn-outline-primary rounded-0"onClick={() => navigate('/peripheral')}>
                            Go To Products
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore

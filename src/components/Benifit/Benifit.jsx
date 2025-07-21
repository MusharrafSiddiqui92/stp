import React from 'react'

const Benifit = () => {
  return (
    <>
    <div className='display-6 mt-5 text-center'>
      Why Shop With Shaoib Tech Pool?
    </div>
    <div className="logo-card d-flex flex-column flex-lg-row justify-content-evenly align-items-center gap-4 flex-wrap mt-4">
<div className="card  shadow-lg" style={{ width: "18rem" }}>
  <img src="./images/trusted.png" className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
  <div className="card-body">
    <h5 className="card-title">Trusted Products</h5>
    <p className="card-text">
      We offeer only genuine and quality checked products.
    </p>
    {/* <a href="#" className="btn btn-primary">
      Go somewhere
    </a> */}
  </div>
</div>

<div className="card  shadow-lg" style={{ width: "18rem" }}>
  <img src="./images/delivery.png" className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
  <div className="card-body">
    <h5 className="card-title">Fast Delivery</h5>
    <p className="card-text">
      Quick and safe delivery right to your doorstep.
    </p>
    {/* <a href="#" className="btn btn-primary">
      Go somewhere
    </a> */}
  </div>
</div>

<div className="card  shadow-lg" style={{ width: "18rem" }}>
  <img src="./images/support.png" className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
  <div className="card-body">
    <h5 className="card-title">Support</h5>
    <p className="card-text">
      Dedicated customer support for all your queries.
    </p>
    {/* <a href="#" className="btn btn-primary">
      Go somewhere
    </a> */}
  </div>
</div>

    </div>
    </>
  )
}

export default Benifit

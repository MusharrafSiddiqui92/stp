import React from 'react'

const Cover = () => {
  return (
    <div className="container-fluid bg-primary d-flex flex-column flex-lg-row justify-content-center align-items-center">
<div className="display-3 text-white">Shoaib Tech Pool
  <span className='fs-6'><p>Your Destination for Mobiles,Gadgets & <br /> Tech Accessories.</p>
  <div><a href="https://wa.me/+923463825908" target='_blank'  className="btn btn-outline-light rounded-0">Shop Now</a></div></span>
</div>
<div className="image" style={{ maxWidth: '400px', width: '100%' }}><img src="./images/1.png" alt="" className='img-fluid' style={{width:'100%',height:'auto'}}/></div>
    </div>
  )
}

export default Cover

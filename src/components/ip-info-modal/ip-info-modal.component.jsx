import React from 'react'
import './ip-info-modal.component.css'
const IpInfoModal = ({ip,location,isp})=>{
  return(
    <>
    <div className="container">
      <div className= 'column'>
        <p className="title">IP ADDRESS</p>
        <p className="info">{ip}</p>
        </div>
        <div className='column'>
        <p className="title">LOCATION</p>
        <p className="info">{location.city}, {location.region} {location.postalCode} </p>
        </div>
        <div className='column'>
        <p className="title">TIMEZONE</p>
        <p className="info">{location.timezone}</p>
        </div>
        <div className='column'>
        <p className="title">ISP</p>
        <p className="info">{isp}</p>
        </div>
        </div>  
    </>
    )
}
export default IpInfoModal
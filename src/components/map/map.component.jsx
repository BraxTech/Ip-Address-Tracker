import React from 'react';
import GoogleMapReact  from 'google-map-react'
import Marker from './marker.png' 
import './map.component.css'

const Map = ({lat,lng}) =>{
    const coords=[lat,lng]
    return(
        <>
   <div className='mapContainer' style={{height:'70vh', width:'100vw', zIndex:'0',display:'block'}}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyCb69zor5jkH9qDHeeDOz4VxRnwpLt7SnM'}}
            defaultCenter={0}
            center= {coords}
            defaultZoom={12}
            margin={[50,50,50,50]}
            // options={''}
            // onChain ={''}
            // onChildClick={''}
>
<div  lat={Number(lat)} lng={Number(lng)}>
    <img src={Marker} alt="" style={{height:'3em', width:'3em'}}/>
    </div>

            </GoogleMapReact>

        </div>

        </>
    )
}
export default Map;
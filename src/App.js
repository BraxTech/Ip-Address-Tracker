import './App.css';
import IpInfoModal from './components/ip-info-modal/ip-info-modal.component';
import Header from './components/header/header.component';
import Map from './components/map/map.component';
import Axios from 'axios';
import {useEffect, useState} from 'react'
require('dotenv').config()

function App() {
  const [searchIp,setSearchIp] = useState('8.8.8.8')
  const [ipData, setIpData] = useState([])
const [isFetched, setIsFetched] = useState((false))
  
useEffect(()=>{
  const getIpData = async ()=>{
    await Axios.get(`https://geo.ipify.org/api/v2/country,city?
    apiKey=
    ${process.env.REACT_APP_API_KEY}&
    ipAddress=${searchIp}`)
    .then((res)=>{
         setIpData(res.data)
         setIsFetched(true)
         console.log(res.data)
       })
     }
     getIpData()
},[searchIp])


  return (
    <div className="App">
      <Header setSearchIp={setSearchIp} searchIp={searchIp}/>
      {isFetched?<IpInfoModal ip={ipData.ip} location={ipData.location} isp={ipData.isp}/>:null} 
      {isFetched?<Map lng={ipData.location.lng} lat={ipData.location.lat}/> :null} 
     
     
    </div>
  );
  
}

export default App;

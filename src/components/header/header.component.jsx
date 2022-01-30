import React from 'react'
import SearchBar from '../searchbar/search-bar.component';
import './header.component.css';
const Header = ({searchIp, setSearchIp}) =>{
    return(
    <>
    <div className="header">
    <h1>IP Address Tracker</h1>
    <SearchBar searchIp={searchIp} setSearchIp={setSearchIp}/>
    </div>
    </>
    )
}
export default Header;
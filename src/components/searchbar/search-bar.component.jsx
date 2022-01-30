import React from 'react'
import './search-bar.component.css'
import Arrow from './magnify.svg'
const SearchBar=(props)=>{
    


   
function onSubmit(e){
    e.preventDefault()
    props.setSearchIp(e.target.searchip.value)
  
}
    return(
    <>
    <div className="search">
        <form action="submit" onSubmit={onSubmit}>
   <input type="text" name="searchip" id="" placeholder="Search for any IP address or domain" /> 
      <button className="submit"> <img src={Arrow} alt="search button" className="Arrow"  /></button>
        </form>
   </div>
    </>
    )
}
export default SearchBar;
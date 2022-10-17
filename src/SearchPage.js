import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className='SearchPage'>
        <div className="SearchPage_info">
        <p>62 stays . 26 august to 30 
            august . 2 guest</p>
            <h1>Stays nearby</h1>
            <Button vriant="outlined">Cancellation Flexibility</Button>
            <Button vriant="outlined">Type of place</Button>
            <Button vriant="outlined">Price</Button>
            <Button vriant="outlined">Rooms and beds</Button>
            <Button vriant="outlined">More filters</Button>
        </div>
        <SearchResult 
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 .bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"/>
        <SearchResult 
        img="https://www.smarterravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location=""
        title="Independent luxury studio apartment"
        description="2 guest . 3 .bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen"
        price=""
        total=""/>
        <SearchResult 
        img=""
        location=""
        title=""
        description=""
        price=""
        total=""/>
    </div>
    

  )
}

export default SearchPage
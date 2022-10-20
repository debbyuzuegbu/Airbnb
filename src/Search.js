import React, { useState } from 'react';
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    function handleselect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onchange={handleselect} />
        <h2>Number of guests <PeopleIcon /></h2>
        <input mib={0} defaultvalue={2} type="number" />
        <Link to="search"><Button className='searchbutton'>Search Airbnb</Button></Link>
    </div>
  )
}

export default Search 
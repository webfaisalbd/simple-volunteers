import React, { useState } from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activity from '../Activity/Activity';

const Volunteer = () => {
    const [volunteer,setVolunteer]= useVolunteer();
    const [searchResult,setSearchResult]= useState([]);
    // console.log(volunteer);

    const handleChange = (event) => {
        
        const searchText= event.target.value;
        const result= volunteer.filter(v=> v.title.includes(searchText))
        setSearchResult(result);
    }

    return (
        <div>
            <h3>Total Volunteers Activities: {volunteer.length}</h3>

            <input onChange={handleChange} style={{margin:"20px"}} type="text" name="" id="" placeholder='Search' />

            <div className="activity-container">
                   {
                       searchResult.map(activity=> <Activity
                       key={activity._id}
                       activity={activity}
                       ></Activity>)
                   }
            </div>
           
        </div>
    );
};

export default Volunteer;
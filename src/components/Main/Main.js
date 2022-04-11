import React, { useEffect, useState } from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activity from '../Activity/Activity';
import './Main.css'
const Main = () => {
    
    const [volunteer]= useVolunteer();
    

    


    return (
        <div className=''>
            <h3> Volunteers Activities:  {volunteer.length} </h3>

           

           <div className='activity-container'>
                  
                   {
                       volunteer.map(activity=> <Activity
                       key={activity._id}
                       activity={activity}
                       ></Activity>)
                   }
            </div>
        </div>
    );
};

export default Main;
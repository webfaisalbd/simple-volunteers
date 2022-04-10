import React from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activity from '../Activity/Activity';

const Volunteer = () => {
    const [volunteer,setVolunteer]= useVolunteer();
    // console.log(volunteer);
    return (
        <div>
            <h3>this is volunteer {volunteer.length}</h3>
            <div className="activity-container">
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

export default Volunteer;
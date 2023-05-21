import React from 'react';

export default function Clinics_list({ clinics_w_dists, checked_days, phone_show }) {

    const days_of_week = ["monday", "tuesday", "wednesday", "thursday", "friday" ];

    console.log("Clinics_list", clinics_w_dists);

    return (
	    <>
	    
    	{ clinics_w_dists.map( function (clinic, index) {

	    if (checked_days[clinic.day_of_week] === true) {
	
    		return (
			<li key={`clinic_${index}`}>{clinic.title}
    			<ul>
    			<li key={`clinic_${index}_advisor`}>{clinic.advisor}</li>
    			<li key={`clinic_${index}_dist`}>{clinic.distance} km</li>
    			<li key={`clinic_${index}_time`}>{clinic.day_of_week} {clinic.time_start} - {clinic.time_end}</li>
    			</ul>
    		        </li>
		)

	    }
	    
	} ) }
	
	</>

    );
		
    
    
}

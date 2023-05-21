import React from 'react';

export default function Clinics_list({ clinics_w_dists, checked_days, show_phone_only }) {

    console.log("Clinics_list", clinics_w_dists);

    return (

    	clinics_w_dists.map( (clinic,index) => {

	    // if ( checked_days[0] === true && clinic["day_of_week"] === "Monday" ) {

	    // } else if 
	
    	return <li key={`clinic_${index}`}>{clinic.title}
    	<ul>
    	    <li key={`clinic_${index}_dist`}>{clinic.distance} km</li>
    	    <li key={`clinic_${index}_time`}>{clinic.time_start} - {clinic.time_end}</li>
    	    </ul>
    	</li>
    } )
	   );
		
    
    
}

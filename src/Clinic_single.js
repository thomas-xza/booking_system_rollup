import React from 'react';

export default function Clinic_single({ clinic, index }) {

    return (
	    <>
	    <li key={`clinic_${index}`}>{clinic.title}
    	    <ul>
    	    <li key={`clinic_${index}_advisor`}>{clinic.advisor}</li>
    	    <li key={`clinic_${index}_dist`}>{clinic.distance} km</li>
    	    <li key={`clinic_${index}_time`}>{clinic.day_of_week} {clinic.time_start} - {clinic.time_end}</li>
    	    </ul>
    	    </li>
	    </>

    );
		
    
    
}

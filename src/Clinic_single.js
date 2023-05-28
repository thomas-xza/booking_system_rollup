import React from 'react';

export default function Clinic_single({ clinic, index, set_booking, set_page_flow }) {

    const handle_selection = (e) => {

	set_booking(clinic)

	set_page_flow(30)

    }

    return (
    	    <li key={`clinic_${index}`}>{clinic.title}
	    <ul>
    	    <li key={`clinic_${index}_dist`}>{clinic.distance} km</li>
    	    <li key={`clinic_${index}_time`}>{clinic.time_start} - {clinic.time_end}</li>
    	    <li key={`clinic_${index}_day`}>{clinic.day_of_week}</li>
    	    <li key={`clinic_${index}_advisor`}>{clinic.advisor}</li>
	    <button key={`clinic_${index}_button`} onClick={handle_selection}>Select this clinic</button>
	    </ul>
    	    </li>
    );
    
    
}

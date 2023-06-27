import React from 'react';
import { title_case } from './general_funcs.js';

export default function Clinic_single({ clinic, index, set_booking, set_page_flow }) {

    const handle_selection = (e) => {

	set_booking(clinic)

	set_page_flow(30)

    }

    const map_link_to_clinic = `https://duckduckgo.com/?q=${clinic.postcode.split(" ").join("+")}&t=h_&ia=web&iaxm=maps`

    return (
    	    <li key={`clinic_${index}`}>{clinic.title}
	    <ul>

	{
	    clinic.longitude !== 0 ?

    	    <li key={`clinic_${index}_dist`}>
		<a href={map_link_to_clinic} target="_blank">{clinic.distance} km</a>
		</li> : null

	}

    	    <li key={`clinic_${index}_time`}>{clinic.time_start} - {clinic.time_end}</li>
    	    <li key={`clinic_${index}_day`}>{title_case(clinic.day_of_week)}</li>
    	    <li key={`clinic_${index}_advisor`}>{title_case(clinic.advisor)}</li>
	    <button key={`clinic_${index}_button`} onClick={handle_selection}>Select this clinic</button>
	    </ul>
    	    </li>
    );
    
    
}

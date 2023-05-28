import React from 'react';

import Clinic_single from "./Clinic_single.js";

export default function Clinics_list({ clinics_w_dists, checked_days, phone_show, set_booking, set_page_flow }) {

    console.log("Clinics_list", clinics_w_dists);
    
    return (
	    <>

    	{ clinics_w_dists.map( function (clinic, index) {

	    if (checked_days[clinic.day_of_week] === true) {

		if ( (clinic.longitude === 0 && phone_show === true)
		     || (clinic.longitude !== 0 ) ) {

		    return (<>
			<Clinic_single
		    clinic={clinic}
		    index={index}
		    set_booking={set_booking}
		    set_page_flow={set_page_flow}
		    key={index}
			/><br/>
			    </>)
		    
		}

	    }
	    
	} ) }
	
	</>

	);

    
    
}

import React from 'react';

import Clinic_single from "./Clinic_single.js";

export default function Clinics_list({ clinics_w_dists, checked_days, phone_show }) {

    console.log("Clinics_list", clinics_w_dists);
    
    return (
	    <>
	
    	{ clinics_w_dists.map( function (clinic, index) {

	    if (checked_days[clinic.day_of_week] === true) {

		if (clinic.title === "Telephone" && phone_show === true) {

		    return <Clinic_single clinic={clinic} index={index}/>
		    
		} else if (clinic.title !== "Telephone") {

		    return <Clinic_single clinic={clinic} index={index}/>

		}

	    }
	    
	} ) }
	
	</>

	);

	// <Clinic_single clinic={clinic} index={index}>
		
    
    
}

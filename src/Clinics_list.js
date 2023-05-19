import React from 'react';

export default function Clinics_list({ clinics_w_dists, checked_days }) {

    console.log("Clinics_list", clinics_w_dists);

    const handle_on_change = (index) => {
	
	console.log(index);
	
    };

    return (clinics_w_dists.map( (clinic) => {
	
	return <li>{clinic.title}</li>
    } )
	   );
		
    
    
}

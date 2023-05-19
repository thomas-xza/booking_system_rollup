import React from 'react';

export default function User_selections({ checked_days, set_checked_days, phone_show, set_phone_show }) {

    const handle_on_change = (index) => {
	
	console.log(index);
	
    };

    return (

	checked_days.map( (day, index) => {

	    <input
                    type="checkbox"
                    id={`checked_day_${index}`}
                    name={name}
                    value={name}
                    checked={checked_days[index]}
                    onChange={() => handle_on_change(index)}
                />

	
	})
	
    // 	return <li>{clinic.title}
    // 	<ul>
    // 	    <li>{clinic.distance} km</li>
    // 	    <li>{clinic.time_start} - {clinic.time_end}</li>
    // 	    </ul>
    // 	</li>
    // } )
    );
		
    
    
}

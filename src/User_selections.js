import React from 'react';

function new_obj(key_name, prev_boolean) {

    return { [key_name]: !prev_boolean }
    
}

export default function User_selections({ checked_days, set_checked_days, phone_show, set_phone_show }) {

    const days_of_week = ["monday", "tuesday", "wednesday", "thursday", "friday" ];

    const handle_on_change = (day) => {

	set_checked_days(
	    {    ...checked_days, ...new_obj(day, checked_days[day]) }
 	)
	
    };

    return (

	    <div>{ days_of_week.map( (day) => {

	    	return (
	    		<>
			<label key={`checkbox_label_${day}`}>
	    		<input type="checkbox"
                    key={`checkbox_box_${day}`}
                    checked={checked_days[day]}
                    onChange={() => handle_on_change(day)} />
	    		{day}
		    </label>
	    		</>
	    	       )

	    } ) }</div>

    );

}

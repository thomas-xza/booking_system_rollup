import React from 'react';
import { useState } from 'react';

import { format_date_time,
         title_case } from './general_funcs.js';


export default function Confirm_sms({ form_data, booking, appt_time, checkboxes }) {

    const full_addr = () => {

	if (checkboxes[0] === true) {

	    return [ "Telephone" ]

	} else {

	    return ( [ booking.title, ...booking.address, booking.postcode ]
		     .filter( (non_null) => { return non_null } )
		   );

	}

    }

    const gen_sms_msg = (appt_time) => { return [
	"Hi there. Thanks for talking with me. Your appointment details follow.\n",
	"Time: ",
	`${title_case(booking.day_of_week)} ${format_date_time(appt_time)} \n`,
	"Advisor:",
	title_case(booking.advisor),
	"\nLocation:",
	...full_addr(),
	"\nIf you would like to change time or location please contact us via text, freephone, or email ",
	"\nKing regards", "Lewisham Stop Smoking Service",
	"\n08000820388",
	"quit@smokefreelewisham.co.uk"
    ].join("\n") };

    return (
	    <div className="jsx">
	    
	    <pre>{gen_sms_msg(appt_time)}</pre>
	    
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(form_data.phone) }}>
	    Copy {form_data.phone} to clipboard (for Google Messages)
	</button>
	    
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_sms_msg(appt_time)) }}>
	    Copy SMS to clipboard (for Google Messages)
	</button> <br/>
	    
	    <button className="medium"
	onClick={() => {alert("If someone gives me a credit card I can make this button work! $0.0446 per message as of May 2023.")} }>
	    Send this SMS via Vonage</button>

	</div>
    );
}


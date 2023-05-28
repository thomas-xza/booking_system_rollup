import React from 'react';
import { useState } from 'react';

import { title_case } from './general_funcs.js';

export default function Confirm_sms({ form_data, booking, appt_time }) {

    const full_addr = [ booking.title, ...booking.address, booking.postcode ]
	  .filter( (el) => { return el } );

    const gen_sms_msg = (appt_time) => { return [
	"Hi there. Thanks for talking with me. Your appointment details follow.\n",
	"Time: ", `${title_case(booking.day_of_week)} ${appt_time} \n`,
	"Advisor:", title_case(booking.advisor), "\nLocation", ...full_addr,
	"\nPlease contact us if you would like to change time or location.",
	"\nKing regards", "Lewisham Stop Smoking Service"
    ].join("\n") };

    return (
	    <>
	    
	    <pre>{gen_sms_msg(appt_time)}</pre>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(form_data.phone) }}>
	    Copy {form_data.phone} to clipboard (for Google Messages)
	</button>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_sms_msg(appt_time)) }}>
	    Copy SMS to clipboard (for Google Messages)
	</button>
	    <br/>
	    
	    <button className="medium"
	onClick={() => {alert("If someone gives me a credit card I can make this button work! $0.0446 per message as of May 2023.")} }>
	    Send this SMS via Vonage</button>

	</>
    );
}


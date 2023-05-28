import React from 'react';
import { useState } from 'react';

import Confirm_calendar from './Confirm_calendar.js';
import Confirm_sms from './Confirm_sms.js';
import Confirm_outro from './Confirm_outro.js';

import { title_case } from './general_funcs.js';

export default function Confirm({ form_data, booking, set_page_flow }) {

    const [appt_time, set_appt_time] = useState("DATE & TIME HERE");
    
    const handle_time_change = (e) => {

	if (e.target.value === "") {

	    set_appt_time("DATE & TIME HERE")

	} else {

	    set_appt_time(e.target.value) }

    }

    const gen_csv_entry = (appt_time) => {
	
	return `${booking.title.split(" ")[0]}, ${appt_time.split(",").join(" ")}, ${title_case(booking.advisor)}`
    
    }

    return (
	    <div className="Confirm">

	    <button className="medium" onClick={ () => {set_page_flow(10)} }>Back to initial form</button> 

	    <button className="medium" onClick={ () => {set_page_flow(20)} }>Back to clinic selection</button>
	    <br/>

	    <h1>Confirmation</h1>

	    <strong>1. Copy to calendar:</strong><br/>

	    <Confirm_calendar form_data={form_data} booking={booking}/>

	    <br/>

	    <strong>2. Paste date & time from calendar:</strong><br/>

	<div className="jsx">

	    <textarea className="oneline" value={appt_time} onChange={(e) => {
		handle_time_change(e)
	    }}/><br/><br/>

	</div>
	    
	    <strong>3. Copy text for client:</strong><br/>

	    <Confirm_sms form_data={form_data} booking={booking} appt_time={appt_time}/>

	    <br/>

	    <strong>4. Copy text for spreadsheet:</strong><br/>

	<div className="jsx">

	    <pre>{gen_csv_entry(appt_time)}</pre>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_csv_entry(appt_time)) }}>
	    Copy entry to clipboard
	</button>

	    <br/><br/>

	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(form_data.name) }}>
	    Copy {form_data.name} to clipboard
	</button>	    

	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(form_data.postcode) }}>
	    Copy {form_data.postcode} to clipboard
	</button>	    

	</div>

	    <Confirm_outro/>

	</div>
    );
}


import React from 'react';
import { useState } from 'react';

import { title_case } from './general_funcs.js';

export default function Confirm({ form_data, booking, set_page_flow }) {

    const [appt_time, set_appt_time] = useState("DATE & TIME HERE");
    
    const gen_cal_entry = () => {

	if (booking.longitude === 0) {
	    return "Phone" + form_data.name + " - " + form_data.phone }
	
	return form_data.name + "(F2F) - " + form_data.phone
    }

    const full_addr = [ booking.title, ...booking.address, booking.postcode ]
	  .filter( (el) => { return el } );

    const gen_sms_msg = (appt_time) => { return [
	"Hi there. Thanks for talking with me. Your appointment details follow.\n",
	"Time: ", `${title_case(booking.day_of_week)} ${appt_time} \n`,
	"Advisor:", title_case(booking.advisor), "\nLocation", ...full_addr,
	"\nKing regards", "Lewisham Stop Smoking Service"
    ].join("\n") };

    const gen_csv_entry = (appt_time) => {
	
	return `${booking.title.split(" ")[0]}, ${appt_time}, ${title_case(booking.advisor)}`
    
    }

    const closing_comment = `<h3>Issues:</h3>
	    <ul>
	   <li> "Add to calendar" will only work if NHS
	change to use <a href="https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0&preserve-view=true" target="_blank">the latest Microsoft JSON API</a> (could be a long time, NHS is currently on the
<a href="https://digital.nhs.uk/developer/api-catalogue/nhsmail" target="_blank">Exchange API</a> which is <a href="https://github.com/OfficeDev/ews-managed-api" target="_blank">almost deprecated</a>) or if all LSSS staff move to <a href="https://developers.google.com/calendar/api/guides/overview" target="_blank">Google calendar</a> until then</li>
<li>It would also be possible to actually show only available appointments and select from them if something could be done about the calendar</li>
<li>"Send text via Vonage" will only work if someone gives me a credit card to <a href="https://www.vonage.co.uk/communications-apis/sms/pricing/">pay the fees</a></li>
<li>If the clinics change there is not *yet* a user-friendly way to update them on this website</li>
</ul>
<br/><br/>

<h3>Potential improvements:</h3><br/>
<ul>
<li>After entering someone's details the 1st time, it could be stored within the browser (localStorage) on the computer, making selection possible, for the same person, next time</li>
<li>It should be possible to change the set of clinics (currently hardcoded) when the applications loads, such as with a user-friendly file (.csv) that can be edited in Excel.</li>
</ul>
<br/><br/><br/><br/><br/>
`;

    const handle_time_change = (e) => {

	if (e.target.value === "") {

	    set_appt_time("DATE & TIME HERE")

	} else {

	    set_appt_time(e.target.value) }

    }

    return (
	    <>

	<h1>Confirmation</h1>

	    <strong>Input date & time here:</strong><br/>
	    <textarea className="oneline" value={appt_time} onChange={(e) => {
		handle_time_change(e)
	    }}/><br/><br/>
	    
	<strong>For calendar:</strong><br/>

	    <pre>{gen_cal_entry(appt_time)}</pre>
	    <button className="medium"
	onClick={() => {alert("Unless NHS update to a newer (more programmable) version of Outlook online, or LSSS move to a Google calendar, this button won't do anything - see 'Issues' at bottom of page.")} }>
	    Add to calendar
	</button>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_cal_entry(appt_time))}}>
	    Copy calendar entry to clipboard
	</button>	    
	    <br/><br/>

	<strong>For text to client:</strong><br/>

	    <pre>{gen_sms_msg(appt_time)}</pre>
	    <button className="medium"
	onClick={() => {alert("If someone gives me a credit card I can make this button work! $0.0446 per message as of May 2023.")} }>
	    Send this SMS via Vonage</button><br/>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(form_data.phone) }}>
	    Copy {form_data.phone} to clipboard (for Google Messages)
	</button>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_sms_msg(appt_time)) }}>
	    Copy SMS to clipboard (for Google Messages)
	</button>	    
	    <br/><br/>

	<strong>For spreadsheet:</strong><br/>

	    <pre>{gen_csv_entry(appt_time)}</pre>
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_csv_entry(appt_time)) }}>
	    Copy entry to clipboard
	</button>	    

	    <br/><br/>

	    <div dangerouslySetInnerHTML={{__html: closing_comment }}/>

	</>
    );
}


import React from 'react';
import { useState } from 'react';

import { title_case } from './general_funcs.js';

export default function Confirm({ form_data, booking, set_page_flow }) {

    console.log(booking)

    const calendar_entry = form_data.name + " - " + form_data.phone;

    if (booking.longitude !== 0) {

	const full_addr = [ booking.title, ...booking.address, booking.postcode ];

    } else {

	const full_addr = [ "This is a telephone appointment." ];
	
    };

    const text_msg = [ "Hi there. Thanks for talking with me. Your appointment details follow",
		       "\nTime:", "", "\nAdvisor:", booking.advisor, "\nLocation", ...full_addr,
		       "\nKing regards", "Lewisham Stop Smoking Service" ].join("\n");

    const spreadsheet_entry = booking.title.split(" ")[0] + ",  , " + title_case(booking.advisor);

    const closing_comment = `OK here are the catches: <br/>
	    <ul>
	   <li> Can only get 'Add to calendar' to work if NHS
	change to use <a href="https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0&preserve-view=true">the latest Microsoft JSON API</a> (could be a long time, NHS is currently on the
<a href="https://digital.nhs.uk/developer/api-catalogue/nhsmail">Exchange API</a> which is <a href="https://github.com/OfficeDev/ews-managed-api">almost deprecated</a>) or if all LSSS staff move to <a href="https://developers.google.com/calendar/api/guides/overview">Google calendar</a> until then</li>
<li>"Send text via Vonage" will only work if someone gives me a credit card to <a href="https://www.vonage.co.uk/communications-apis/sms/pricing/">pay the fees</a></li>`;

    return (
	    <>

	For calendar:<br/>

	    <textarea value={calendar_entry}/><br/>
	    <button>Add to calendar</button>
	    <button>Copy to clipboard</button>	    
	    <br/><br/>

	For text to client:<br/>

	    <textarea value={text_msg}/><br/>
	    <button>Send text via Vonage</button>
	    <button>Copy to clipboard (for Google Messages)</button>
	    <br/><br/>

	For spreadsheet:<br/>

	    <textarea value={spreadsheet_entry}/><br/>
	    <button>Copy to clipboard</button>

	    <br/><br/>

	    <div dangerouslySetInnerHTML={{__html: closing_comment }}/>

	</>
    );
}


import React from 'react';
import { useState } from 'react';

import Oauth from './Oauth.js'
import Form from './Form.js'
import Booking from './Booking.js'
import Confirm from './Confirm.js'

export default function App() {

    const [page_flow, set_page_flow] = useState(10);

    const [form_data, set_form_data] = useState({ "name": "",
    						  "postcode": "", postcode_valid: 0,
    						  "phone": "", phone_valid: 0 });
    
    // const [page_flow, set_page_flow] = useState(20);
    
    // const [form_data, set_form_data] = useState({ "name": "J",
    // 						  "postcode": "SE13 6LH", postcode_valid: 1,
    // 						  "phone": "07777777777", phone_valid: 1 });
    
    const [booking, set_booking] = useState();

    switch (page_flow) {

    case 0:

	return(
	    <Oauth
		set_page_flow={set_page_flow}
	    />	    
	)

    case 10:

	return (
	    <Form
		form_data={form_data}
		set_form_data={set_form_data}	
		set_page_flow={set_page_flow}
	    />
	)

    case 20:

	return(
	    <Booking
		form_data={form_data}
		booking={booking}
		set_booking={set_booking}
		set_page_flow={set_page_flow}
	    />
	)

    case 30:

	return(
	    <Confirm
		form_data={form_data}
		booking={booking}
		set_page_flow={set_page_flow}
	    />
	)

    };
    
}


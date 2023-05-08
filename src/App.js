import React from 'react';
import { useState } from 'react';

import Oauth from './Oauth.js'
import Form from './Form.js'
import Booking from './Booking.js'
import Confirm from './Confirm.js'

export default function App() {

    const [page_flow, set_page_flow] = useState(2);

    const [form_data, set_form_data] = useState({ name: "",
						  phone: "07777777777",
						  phone_valid: 0,
						  postcode: "SE10 9NF",
						  postcode_valid: 0 });
    
    const [booking, set_booking] = useState();

    switch (page_flow) {

    case 0:

	return(
	    <Oauth
		set_page_flow={set_page_flow}
	    />	    
	)

    case 1:

	return (
	    <Form
		form_data={form_data}
		set_form_data={set_form_data}	
		set_page_flow={set_page_flow}
	    />
	)

    case 2:

	return(
	    <Booking
		form_data={form_data}
		booking={booking}
		set_booking={set_booking}
		set_page_flow={set_page_flow}
	    />
	)

    case 3:

	return(
	    <Confirm
		form_data={form_data}
		booking={booking}
		set_page_flow={set_page_flow}
	    />
	)

    };
    
}


import React from 'react';
import { useState } from 'react';

import Oauth from './Oauth.js'
import Form from './Form.js'
import Booking from './Booking.js'
import Confirm from './Confirm.js'

export default function App() {

    const [page_flow, set_page_flow] = useState(1);

    const [form_data, set_form_data] = useState({ name: "",
						  phone: "",
						  postcode: "",
						  valid: 0 });
    
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


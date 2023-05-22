import React from 'react';
import { useState, useEffect } from 'react';

import { validate_postcode, validate_phone } from './validators.js';

export default function Form({ form_data, set_form_data, set_page_flow }) {

    const handle_name = (e) => {

	set_form_data({ ...form_data, name: e.target.value })

    }
    
    const handle_phone = (e) => {

	set_form_data({ ...form_data,
			phone: e.target.value,
			phone_valid: validate_phone(e.target.value) });

    }
    
    const handle_postcode = (e) => {

	set_form_data({ ...form_data,
			postcode: e.target.value,
			postcode_valid: validate_postcode(e.target.value) });

    };

    const handle_confirm = (e) => {

	if ( form_data.phone_valid === 1
	     && form_data.postcode_valid === 1 ) {

	    set_page_flow(2);

	}
	
    };

    useEffect(() => {

	console.log(form_data);

    },[form_data]);
    
    return (

	    <div className="form">
	    
	    <h1>Client/patient entry</h1>

	Here is some bogus info for testing purposes (copy and paste):<br/>
	    John<br/>
	    07777777777<br/>
	    SE13 7RY<br/>
	    
	    <label>Name:</label>

	    <input value={form_data.name} onChange={handle_name}>
	    </input><br/>
	    
	    <label>Phone:</label>

	    <input value={form_data.phone} onChange={handle_phone}>
	    </input>
	    {form_data.phone_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>
	    
	    <label>Postcode:</label>
	    
	    <input value={form_data.postcode} onChange={handle_postcode}>
	    </input>
	    {form_data.postcode_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>

	    {
		form_data.postcode_valid === 1 &&
		    form_data.phone_valid === 1 ?
		    
		<button onClick={handle_confirm}>Find appointment</button >
		:
		<div class="loading">Awaiting your inputs</div>
		
	    }

	</div>
   );
}


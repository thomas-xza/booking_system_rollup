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

	if ( form_data.phone === 1
	     && form_data.postcode_valid === 1 ) {

	    set_page_flow(2);

	}
	
    };

    useEffect(() => {

	console.log(form_data);

    },[form_data]);
    
    return (
	<div className="form">
	    
	    <label>Name:</label>

	    <input value={form_data.name} onChange={handle_name}>
	    </input><br/>
	    
	    <label>Phone:</label>

	    <input value={form_data.phone} onChange={handle_phone}>
	    </input>
	    {form_data.phone_valid === 0 && <em>Incomplete/invalid phone number</em>}
	    <br/>
	    
	    <label>Postcode:</label>
	    
	    <input value={form_data.postcode} onChange={handle_postcode}>
	    </input>
	    {form_data.postcode_valid === 0 && <em>Incomplete/invalid postcode</em>}
	    <br/>


	    <button onClick={handle_confirm}>Select booking</button >
	    
	</div>
   );
}


import React from 'react';
import { useState } from 'react';

export default function Form(form_data, set_form_data) {

    const handle_name = (e) => {

	//  validate_name(name)

	console.log(form_data);

	set_form_data({ ...form_data, name: e.target.value });

    }
    
    const handle_phone = (e) => {

	//  validate_phone(phone)

	set_form_data({ ...form_data, phone: e.target.value });

    }
    
    const handle_postcode = (e) => {

	//  validate_postcode(postcode) ...

	set_form_data({ ...form_data, postcode: e.target.value });

    }

    const handleSubmit = (event) => {
	
	event.preventDefault();

	console.log(event.target.value);
	
	console.log(event);
	
    }
    
    return (
	<div className="form">
	    
	    <label>Name:</label>

	    <input value={form_data.name} onChange={handle_name}>
	    </input><br/>
	    
	    <label>Phone:</label>

	    <input value={form_data.phone} onChange={handle_phone}>
	    </input><br/>
	    
	    <label>Postcode:</label>
	    
	    <input value={form_data.postcode} onChange={handle_postcode}>
	    </input><br/>
	    
	    <input type="submit" />
	    
	</div>
   );
}


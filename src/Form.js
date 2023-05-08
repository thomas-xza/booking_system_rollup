aimport React from 'react';
import { useState } from 'react';

export default function Form({ form_data, set_form_data, set_page_flow }) {

    const handle_name = (e) => {

	//  validate_name(name)

	console.log(form_data);

	set_form_data({ ...form_data, name: e.target.value });

    }
    
    const handle_phone = (e) => {

	//  validate_phone(phone)

	console.log(form_data);

	set_form_data({ ...form_data, phone: e.target.value });

    }
    
    const handle_postcode = (e) => {

	//  const valid_flag = validate_postcode(postcode) ...

	console.log(form_data);

	set_form_data({ ...form_data, postcode: e.target.value, valid: valid_flag });

    };

    const handle_confirm = (e) => {

	if ( form_data.valid === 1 ) {

	    set_page_flow(2);

	}
	
    };
    
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
	    
	    <button onClick={handle_confirm} />
	    
	</div>
   );
}


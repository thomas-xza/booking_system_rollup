import React from 'react';
import { useState, useEffect } from 'react';

import { validate_postcode, validate_phone } from './validators.js';

export default function Form({ form_data, set_form_data, set_page_flow }) {

    const handle_test = () => {

	set_form_data({ name: "John Smith",
			postcode: "SE13 7RY", postcode_valid: 1,
			phone: "0777 7777 777", phone_valid: 1,
			paste: "" })	
	
    };

    const handle_clear = () => {

	set_form_data({ name: "",
			postcode: "", postcode_valid: 0,
			phone: "", phone_valid: 0,
			paste: "" })	
	
    };

    const handle_name = (e) => {

	set_form_data({ ...form_data, name: e.target.value })

    }
    
    const handle_phone = (e) => {

	set_form_data({ ...form_data,
			phone: e.target.value.replace("\t", " "),
			phone_valid: validate_phone(e.target.value) });

    }
    
    const handle_postcode = (e) => {

	set_form_data({ ...form_data,
			postcode: e.target.value,
			postcode_valid: validate_postcode(e.target.value) });

    };

    const handle_paste = (e) => {

	const paste_data = e.target.value.split("\t")

	const extract_name = () => {
	    
	    try { return paste_data[0] + " " + paste_data[1]
		  
		} catch { return "" } }
	    
	const extract_phone = () => {
		
	    try { return paste_data[0] } catch { return "" } }

	const extract_postcode = () => {
		    
	    try { return paste_data[0] } catch { return "" } }

	set_form_data({ name: extract_name(),
			phone: extract_phone(),
			phone_valid: validate_phone(extract_phone),
			postcode: extract_postcode(),
			postcode_valid: validate_postcode(extract_postcode),			
			paste: e.target.value });

    };

    const handle_confirm = (e) => {

	if ( form_data.phone_valid === 1
	     && form_data.postcode_valid === 1 ) {

	    set_page_flow(20);

	}
	
    };

    useEffect(() => {

	console.log(form_data);

    },[form_data]);
    
    return (

	    <div className="form">
	    
            <div className="topbar">
	    <button onClick={() => {set_page_flow(5)}}>To clinic editor</button >
	    </div>
		    
	    <h1>Client/patient entry</h1>

	    <label>Name:</label><br/>

	    <input value={form_data.name} onChange={handle_name}>
	    </input><br/>

	    <label>Postcode:</label><br/>
	    
	    <input value={form_data.postcode} onChange={handle_postcode}>
	    </input>
	    {form_data.postcode_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>

	    <label>Phone:</label><br/>

	    <input value={form_data.phone} onChange={handle_phone}>
	    </input>
	    {form_data.phone_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>

	    <label>Paste from Excel:</label><br/>

	    <input value={form_data.paste} onChange={handle_paste}>
	    </input>
	    {form_data.phone_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>

	<div class="jsx">
	    
	    <button onClick={handle_test}>Load test data</button >
	    <button onClick={handle_clear}>Clear form</button >
	    <br/>
		    
	    {
		form_data.postcode_valid === 1 &&
		    form_data.phone_valid === 1 ?
		    
		<button onClick={handle_confirm}>Find appointment</button >
		:
		<div className="loading">Awaiting your inputs</div>
		
	    }

	</div>
	
	</div>
   );
}


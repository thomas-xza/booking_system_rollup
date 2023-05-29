import React from 'react';
import { useState, useEffect } from 'react';

import Editor_intro from './Editor_intro.js';

import { validate_day,
	 validate_postcode,
	 validate_address,
	 validate_num_within_range } from './validators.js';

export default function Editor({ clinics_obj, set_clinics_obj, set_page_flow }) {

    const [tmp_clinics_str, set_tmp_clinics_str] = useState(JSON.stringify(clinics_obj, null, 4));
    
    const [validation_res, set_validation_res] = useState(
	validation_initiate(
	    JSON.stringify(clinics_obj, null, 4)
	));
    
    function handle_change(e) {

	set_validation_res(validation_initiate(e.target.value));
	
	set_tmp_clinics_str(e.target.value);

    }

    function validation_initiate(clinics_obj_as_str) {

	const loaded_clinics = function () {

	    try {

    		return JSON.parse(clinics_obj_as_str)

	    } catch (error) {
		
		console.log("JSON PARSE ERROR")

		return {}

	    }

	};

	const gen_validation_res = function () {

	    try {
	    
		return validate_implicitly(loaded_clinics())

	    } catch {

		return [ 0, 0, 0, 0, 0, 0, 0 ]

	    }

	};

	console.log([ loaded_clinics().length ].concat(gen_validation_res()));

	return [ loaded_clinics().length ].concat(gen_validation_res());

    }

    function validate_implicitly (loaded_clinics) {

	////  Build an object to know which functions to use to validate
	////  different categories of data.

	const validation_targets_implicit = {
	    
	    "day_of_week": (data) => { return validate_day(data) },
	    
    	    "time_start":  (data) => { return validate_num_within_range(data, 0, 2400) },
	    
    	    "time_end":    (data) => { return validate_num_within_range(data, 0, 2400) },
	    
    	    "postcode":    (data) => { return validate_postcode(data) },
	    
    	    "address":     (data) => { return validate_address(data) },
	    
    	    "latitude":    (data) => { return validate_num_within_range(data, -1, 52) },
	    
    	    "longitude":   (data) => { return validate_num_within_range(data, -1, 52) }
	    
	}

	////  Iterate over the categories of data.

	////  Subiterate over the clinics (plural), checking if the data within
	////  each clinic fits the validation for that category of data.

	////  Returns an array, the size being the quantity of different
	////  data categories.

	const validation_res_implicit = Object.keys(validation_targets_implicit).map(

	    function(field_name) {

    		return loaded_clinics.reduce(
		    
		    function (total, clinic) {
		
			// console.log(field_name, clinic.title,
			// 	   validation_targets_implicit[field_name](clinic[field_name]))

			return (
			    validation_targets_implicit[field_name](clinic[field_name]) === 1 ?
				total + 1 : total
			)
			
		    }, 0
		    
		)

	    }

	)

	return validation_res_implicit;

    }

    return (
	    <div className="editor">
	    
	    <br/>

	<Editor_intro/>
	
	    <textarea value={tmp_clinics_str} onChange=
	    { (e) => { handle_change(e) } }
	    />

	<br/>

	<strong>Detected the following:</strong>

	    <ul>
	    <li> {validation_res[0]} clinics </li>
	    <li> {validation_res[1]} valid <code>day_of_week</code> </li>
	    <li> {validation_res[2]} valid <code>time_start</code></li>
	    <li> {validation_res[3]} valid <code>time_end</code></li>
	    <li> {validation_res[4]} valid <code>postcode</code></li>
	    <li> {validation_res[5]} valid <code>address</code></li>
	    <li> {validation_res[6]} valid <code>latitude</code></li>
	    <li> {validation_res[7]} valid <code>longitude</code></li>
	    </ul>
	    
	    <br/><br/>
	    
	</div>
    );
    
};


// "day_of_week": (data) => { return validate_day(data) },
    	    // "time_start":  (data) => { return validate_num_within_range(data, 0, 2400) },
    	    // "time_end":    (data) => { return validate_num_within_range(data, 0, 2400) },
    	    // "postcode":    (data) => { return validate_postcode(data) },
    	    // "address":     (data) => { return validate_address(data) },
    	    // "latitude":    (data) => { return validate_num_within_range(data, -1, 52) },
    	    // "longitude":   (data) => { return validate_num_within_range(data, -1, 52) }
	    

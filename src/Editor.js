import React from 'react';
import { useState, useEffect } from 'react';

import { default_clinics } from './clinics_from_csv.json';

import { validate_day,
	 validate_postcode,
	 validate_address,
	 validate_num_within_range } from './validators.js';

export default function Editor({ clinics_obj, set_clinics_obj, set_page_flow }) {

    const [tmp_clinics_obj, set_tmp_clinics_obj] = useState(JSON.stringify(clinics_obj, null, 4));
    
    const [valid_clinics, set_valid_clinics] = useState(JSON.stringify(clinics_obj, null, 4));
    
    function handle_change(e) {

	const validation_results = validation_initiate(e.target.value);

	set_tmp_clinics_obj(e.target.value);

    }

    function validation_initiate(new_clinics_set) {

	const loaded_clinics = function () {

	    try {

    		return JSON.parse(new_clinics_set);

	    } catch (error) {
		
		console.log("JSON PARSE ERROR", error)

		return {}

	    }

	};

	if (loaded_clinics() === {}) {

	    return validation_targets.map( () => { return 0 } )

	} else {

	    return validate_implicitly(loaded_clinics())

	}

    }

    function validate_implicitly (loaded_clinics) {

	//  Build an object to know which functions to use to validate
	//  different categories of data.

	const validation_targets_implicit = {
	    
	    "day_of_week": (data) => { return validate_day(data) },
	    
    	    "time_start":  (data) => { return validate_num_within_range(data, 0, 24) },
	    
    	    "time_end":    (data) => { return validate_num_within_range(data, 0, 24) },
	    
    	    "postcode":    (data) => { return validate_postcode(data) },
	    
    	    "address":     (data) => { return validate_address(data) },
	    
    	    "latitude":    (data) => { return validate_num_within_range(data, 0, 52) },
	    
    	    "longitude":   (data) => { return validate_num_within_range(data, 0, 52) }
	    
	}

	//  Iterate over the categories of data.

	//  Subiterate over the clinics (plural), checking if the data within
	//  each clinic fits the validation for that category of data.

	//  Returns an array, the size being the quantity of different
	//  data categories.

	const validation_results_implicit = Object.keys(validation_targets_implicit).map(

	    function(field_name) {

    		return loaded_clinics.map(
		    
		    function (clinic) {

			if ( validation_targets_implicit[field_name](clinic[field_name]) === 1 ) {

			    return 1 }
			
		    }
		    
		).length

	    }

	)

	console.log("implicit", validation_results_implicit);

	return validation_results_implicit;

    }

    	// const validation_targets = [ "day_of_week",
    	// 			     "time_start",
    	// 			     "time_end",
    	// 			     "postcode",
    	// 			     "address",
    	// 			     "latitude",
    	// 			     "longitude" ]

	//  1. iterate through the data fields names to validate
	//  2. subiterate through the clinics

	// const validation_results = validation_targets.map(

	//     function(field_name) {

    	// 	return loaded_clinics.map(
		    
	// 	    function (clinic) {

	// 		if ( validate_onesizefitsall(field_name, clinic[field_name]) === 1 ) {

	// 		    return 1 }
			
	// 	    }
		    
	// 	).length

	//     }

	// )
	
	// console.log("onesizefitsall", validation_results)

    // function validate_onesizefitsall(field_name, data) {

    // 	switch (field_name) {

    // 	case "day_of_week":

    // 	    return validate_day(data)

    // 	case "time_start":

    // 	    return validate_num_range(data, 0, 24)

    // 	case "time_end":

    // 	    return validate_num_range(data, 0, 24)

    // 	case "postcode":

    // 	    return validate_postcode(data)

    // 	case "address":

    // 	    return validate_address(data)

    // 	case "longitude":

    // 	    return validate_num_range(data, 0, 52)

    // 	case "latitude":

    // 	    return validate_num_range(data, 0, 52)

    // 	}

    // }
	
    return (
	    <div className="editor">
	    
	    <br/>
	    
	    <h1>Clinic set editor</h1>

	This page is about editing the set of clinics which will be loaded when making a booking. <br/>

	Basically the formatting of the following textbox (which contains data in Javascript format) has to be what the Javascript engine in your brower can understand. This page was created so that you can edit the data and get immediate feedback (at bottom of page) if your edits are not compatible with this booking system. <br/><br/>

	The following expectations should be known, before starting:
	    <ul>
	    <li><code>day_of_week</code> must always be a lowercase, full day name</li>
	    <li><code>time_start</code> and <code>time_end</code> must always be integers between 0 and 2400</li>
	    <li><code>postcode</code> must always be uppercase and be a standard, full UK postcode</li>
	    <li><code>address</code> must be a set of quotes, separated by commas, within square brackets (imitate the pattern of the default list)</li>
	    <li><code>longitude</code> and <code>latitude</code> must always be numbers between 0 and 52</li>
	    <li>any quantity of clinics is permitted</li>
	    </ul>

	    <strong>Note that once you close your browser any edits will not be saved, so you need to make a copy and store it elsewhere, for laster pasting back in.</strong> <br/><br/>
	
	    <textarea value={tmp_clinics_obj} onChange=
	    { (e) => { handle_change(e) } }
	    />

	<ul>


	</ul>
	    
	    <br/><br/>
	    
	</div>
    );
    
};

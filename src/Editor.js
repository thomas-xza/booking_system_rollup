import React from 'react';
import { useState, useEffect } from 'react';

import { default_clinics } from './clinics_from_csv.json';

import { validate_day,
	 validate_postcode,
	 validate_time,
	 validate_address,
	 validate_coordinate } from './validators.json';

export default function Editor({ clinics_obj, set_clinics_obj, set_page_flow }) {

    const [tmp_clinics_obj, set_tmp_clinics_obj] = useState(JSON.stringify(clinics_obj, null, 4));
    
    function handle_change(e) {

	const validation_results = validate_all_data(e.target.value);

	set_tmp_clinics_obj(e.target.value);

    }

    function validate_all_data(new_clinics_set) {

    	const validation_targets = [ "day_of_week",
    				     "time_start",
    				     "time_end",
    				     "postcode",
    				     "address",
    				     "latitude",
    				     "longitude" ]

	try {

    	    loaded_clinics = JSON.parse(new_clinics_set);

	} catch { return validation_targets.map( () => return 0 )  }

	//  1. iterate through the data fields names to validate
	//  2. subiterate through the clinics

	const validation_results = validation_targets.map( function(field_name) {

    	    loaded_clinics.map(
		
		function (clinic) {

		    if ( validate_onesizefitsall(field_name, clinic[field_name]) === 1 ) {

			return 1

		    }
		    
		}
		
	    ).length

	}
							 }
    }

    function validate_onesizefitsall(field_name, data) {

	switch (field_name) {

	case "day_of_week":

	    return validate_day(data)

	case "time_start":

	    return validate_time(data)

	case "time_end":

	    return validate_time(data)

	case "postcode":

	    return validate_postcode(data)

	case "address":

	    return validate_address(data)

	case "longitude":

	    return validate_coordinate(data)

	case "latitude":

	    return validate_coordinate(data)

	}

	

    }
	
	
    // 	const validation_results = {

    // 	    "day_of_week": validate_day(clinics_set, validate_day_of_week),

    // 	    "time_start": validate_time(clinics_set, validate_time),

    // 	    "time_end": validate_time(clinics_set, validate_time),

    // 	    "postcode": validate_time(clinics_set, validate_time),

	    

    // 	}

    // }

    return (
	    <div className="editor">
	    
	    <br/>
	    
	    <h1>Clinic set editor</h1>

	This page is about editing the set of clinics which will be loaded when making a booking. <br/>

	Basically the formatting of the following textbox (which contains data in Javascript format) has to be what the Javascript engine in your brower can understand. This page was created so that you can edit the data and get immediate feedback if you make a mistake. <br/><br/>

	The following expectations should be known, before starting:
	    <ul>
	    <li><code>day_of_week</code> must always be a lowercase, full day name</li>
	    <li><code>time_start</code> and <code>time_end</code> must always be integers between 0 and 2400</li>
	    <li><code>postcode</code> must always be uppercase and be a standard, full UK postcode</li>
	    <li><code>address</code> must be a set of strings within an array (copy pattern of default list if you are unsure what that means)</li>
	    <li><code>longitude</code> and <code>latitude</code> must always be number between 0 and 52</li>
	    <li>any quantity of clinics is permitted</li>
	    </ul>

	    <strong>Note that once you close your browser any edits will not be saved, so you need to make a copy and store it elsewhere, for laster pasting back in.</strong>
	

	

	    <textarea value={tmp_clinics_obj} onChange={(e) => {
		handle_change(e) }} />

	<ul>


	</ul>

	    
	    <br/><br/>
	    
	</div>
    );
    
};

import React from 'react';
import { useState, useEffect } from 'react';

import { default_clinics } from './clinics_from_csv.json';

export default function Editor({ clinics_obj, set_clinics_obj, set_page_flow }) {

    function handle_change(e) {

	// reload_parse();

	set_clinics_obj(e.target.value);

    }

    function forward_default() {

	set_clinics_obj(JSON.parse(default_clinics))
    };

    
    return (
	    <div className="editor">
	    
	    <button onClick={() => {forward_default}}>Forward with default set (as of May 2023)</button >
	    <br/>
		    
	    <h1>Clinic set editor</h1>

	    <textarea value={JSON.stringify(clinics_obj, null, 4)} onChange={(e) => {
		handle_change(e)
	    }}/><br/><br/>
	
	</div>
    );
    
};

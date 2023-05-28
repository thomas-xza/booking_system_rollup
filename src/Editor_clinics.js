import React from 'react';
import { useState, useEffect } from 'react';

import { clinics } from './clinics_from_csv.json';

export default function Editor_clinics({ clinics_set, set_clinics_set, set_page_flow }) {

    const [clinics_set, set_clinics_set] = useState({});
    
    return (
	    <div className="editor_clinics">
	    
            <button className="medium" onClick={ () => {set_page_flow(10)} }>Back to initial form</button>
	    <br/>

	    <h1>Booking selection</h1>

	    <Mapbox postcode={form_data.postcode}
	mapbox_resp={mapbox_resp}
	set_mapbox_resp={set_mapbox_resp}
	    />

     <User_selections checked_days={checked_days}
	set_checked_days={set_checked_days}
	phone_show={phone_show}
	set_phone_show={set_phone_show}
	    />

	    <br/>

	<strong>Ordered by closest first...</strong><br/>
	    
	    <Clinics_list
	clinics_w_dists={clinics_w_dists}
	checked_days={checked_days}
	phone_show={phone_show}
	set_booking={set_booking}
	set_page_flow={set_page_flow}/>
	
	</div>
    );
    
};

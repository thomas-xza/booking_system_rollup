import React from 'react';
import { useState, useEffect } from 'react';

import Mapbox from './Mapbox.js';
import User_selections from './User_selections.js';
import Clinics_list from './Clinics_list.js';
import { calculate_distances } from './process_mapbox_resp.js';

export default function Booking({ form_data, booking, set_booking, set_page_flow }) {

    const [mapbox_resp, set_mapbox_resp] = useState({});

    const [clinics_w_dists, set_clinics_w_dists] = useState([]);

    const [checked_days, set_checked_days] = useState({ "monday": true,
							"tuesday": true,
							"wednesday": true,
							"thursday": true,
							"friday": true });

    const [phone_show, set_phone_show] = useState(true);

    useEffect(() => {

    	if (typeof mapbox_resp.longitude !== 'undefined') {

    	    calculate_distances(mapbox_resp, clinics_w_dists, set_clinics_w_dists);

    	}

    }, [mapbox_resp]);
    
    return (
	    <div>
	    
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

	<strong>Ordered by closest first...</strong><br/><br/>
	    
	    <Clinics_list
	clinics_w_dists={clinics_w_dists}
	checked_days={checked_days}
	phone_show={phone_show}
	set_booking={set_booking}
	set_page_flow={set_page_flow}/>
	
	</div>
    );
    
};

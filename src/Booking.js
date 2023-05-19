import React from 'react';
import { useState, useEffect } from 'react';

import Mapbox from './Mapbox.js';
import { calculate_distances } from './process_mapbox_resp.js';

export default function Booking({ form_data, booking, set_booking, set_page_flow }) {

    const [mapbox_resp, set_mapbox_resp] = useState({});

    const [clinics_w_dists, set_clinics_w_dists] = useState({});

    useEffect(() => {

	if (typeof mapbox_resp.longitude !== 'undefined') {

	    calculate_distances(mapbox_resp, clinics_w_dists, set_clinics_w_dists);

	}

    }, [mapbox_resp]);
    
    return (
	<div>
	    <h1>Booking selection</h1>

	    <Mapbox postcode={form_data.postcode}
		  mapbox_resp={mapbox_resp}
		  set_mapbox_resp={set_mapbox_resp}
	    />
	    
	</div>
    );
    
};

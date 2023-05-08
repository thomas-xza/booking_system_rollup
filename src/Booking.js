import React from 'react';
import { useState, useEffect } from 'react';

import Mapbox from './Mapbox.js';

export default function Booking({ form_data, booking, set_booking, set_page_flow }) {

    const [mapbox_res, set_mapbox_res] = useState({});
    
    useEffect(() => {

	if (mapbox_res.longitude) {


	}

    },[mapbox_res]);
    
    return (
	<div>
	    <h1>Booking selection</h1>

	    <Mapbox postcode={form_data.postcode}
		  mapbox_res={mapbox_res}
		  set_mapbox_res={set_mapbox_res}
	    />
	    
	</div>
   );
}


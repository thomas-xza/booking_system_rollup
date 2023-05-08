import React from 'react';
import { useState, useEffect } from 'react';

import { load_distances } from './load_distances.js';

export default function Booking({ form_data, booking, set_booking, set_page_flow }) {

    const [distances, set_distances] = useState(2);
    
    useEffect(() => {

	load_distances(form_data.postcode);

    },[form_data]);

    return (
	<h1>hello</h1>
   );
}


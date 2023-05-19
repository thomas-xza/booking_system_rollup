import React from 'react';
import { useState, useEffect } from 'react';

import Mapbox from './Mapbox.js';

export default function Booking({ form_data, booking, set_booking, set_page_flow }) {

    const [mapbox_res, set_mapbox_res] = useState({});

    console.log(JSON.stringify([
	{
	    "title": "Telephone",
	    "alt_title": "",
	    "advisor": "maria",
	    "day_of_week": "monday",
	    "time_start": 1000,
	    "time_end": 1330,
	    "postcode": "",
	    "latitude": 0,
	    "longitude": 0,
	    "notes": "",
	    "url": ""
	},
	{
	    "title": "Grove Medical Centre GP",
	    "alt_title": "",
	    "advisor": "ronnie",
	    "day_of_week": "monday",
	    "time_start": 900,
	    "time_end": 1700,
	    "postcode": "SE8 3QH",
	    "latitude": 51.48995,
	    "longitude": -0.03526,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/gp-surgery/grove-medical-centre/G85085"
	},
	{
	    "title": "Catford Library",
	    "alt_title": "",
	    "advisor": "shireen",
	    "day_of_week": "monday",
	    "time_start": 1000,
	    "time_end": 1600,
	    "postcode": "SE6 4JU",
	    "latitude": 51.445868,
	    "longitude": -0.020799,
	    "notes": "",
	    "url": "https://lewisham.gov.uk/myservices/libraries/branches/catford-library"
	},
	{
	    "title": "Bellingham Green Surgery GP",
	    "alt_title": "",
	    "advisor": "ronnie",
	    "day_of_week": "tuesday",
	    "time_start": 900,
	    "time_end": 1400,
	    "postcode": "SE6 3JB",
	    "latitude": 51.430378,
	    "longitude": -0.02426,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/gp-surgery/bellingham-green-surgery/K2T3Y"
	},
	{
	    "title": "Rushey Green GP",
	    "alt_title": "",
	    "advisor": "maria",
	    "day_of_week": "tuesday",
	    "time_start": 1300,
	    "time_end": 1400,
	    "postcode": "SE6 4JH",
	    "latitude": 51.449319,
	    "longitude": -0.018045,
	    "notes": "only 1300-1400 available for new clients",
	    "url": "https://www.nhs.uk/services/gp-surgery/novum-health-partnership-rushey-green-group-practice/G85633"
	},
	{
	    "title": "University Hospital Lewisham",
	    "alt_title": "",
	    "advisor": "birsel",
	    "day_of_week": "tuesday",
	    "time_start": 1200,
	    "time_end": 1700,
	    "postcode": "SE13 6LH",
	    "latitude": 51.454023,
	    "longitude": -0.017942,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/hospital/university-hospital-lewisham/RJ224"
	},
	{
	    "title": "Downham Leisure Centre",
	    "alt_title": "",
	    "advisor": "ronnie",
	    "day_of_week": "tuesday",
	    "time_start": 1500,
	    "time_end": 1900,
	    "postcode": "BR1 5EP",
	    "latitude": 51.426849,
	    "longitude": 0.00981,
	    "notes": "",
	    "url": "https://www.1life.co.uk/Downham-Health-and-Leisure-Centre/"
	},
	{
	    "title": "Telephone",
	    "alt_title": "",
	    "advisor": "maria",
	    "day_of_week": "wednesday",
	    "time_start": 1000,
	    "time_end": 1330,
	    "postcode": "",
	    "latitude": 0,
	    "longitude": 0,
	    "notes": "",
	    "url": ""
	},
	{
	    "title": "South Lewisham GP",
	    "alt_title": "",
	    "advisor": "matt",
	    "day_of_week": "wednesday",
	    "time_start": 1300,
	    "time_end": 1400,
	    "postcode": "SE6 2SS",
	    "latitude": 51.429997,
	    "longitude": -0.013458,
	    "notes": "only 1300-1400 available for new clients",
	    "url": "https://www.nhs.uk/services/gp-surgery/south-lewisham-health-centre/N5T5S"
	},
	{
	    "title": "Deptford Library",
	    "alt_title": "The Library at Deptford Lounge",
	    "advisor": "birsel",
	    "day_of_week": "wednesday",
	    "time_start": 1030,
	    "time_end": 1500,
	    "postcode": "SE8 4RJ",
	    "latitude": 51.477479,
	    "longitude": -0.023593,
	    "notes": "",
	    "url": "https://lewisham.gov.uk/myservices/libraries/branches/the-library-at-deptford-lounge"
	},
	{
	    "title": "Jenner Health Centre GP",
	    "alt_title": "Modality Lewisham",
	    "advisor": "ronnie",
	    "day_of_week": "wednesday",
	    "time_start": 900,
	    "time_end": 1700,
	    "postcode": "SE23 1HU",
	    "latitude": 51.442387,
	    "longitude": -0.041139,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/gp-surgery/modality-lewisham/G85004"
	},
	{
	    "title": "Telephone",
	    "alt_title": "",
	    "advisor": "alison",
	    "day_of_week": "wednesday",
	    "time_start": 900,
	    "time_end": 1100,
	    "postcode": "",
	    "latitude": 0,
	    "longitude": 0,
	    "notes": "",
	    "url": ""
	},
	{
	    "title": "Burnt Ash Surgery GP",
	    "alt_title": "Lee Health Centre",
	    "advisor": "alison",
	    "day_of_week": "wednesday",
	    "time_start": 1200,
	    "time_end": 1700,
	    "postcode": "SE12 8NP",
	    "latitude": 51.452782,
	    "longitude": 0.009913,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/gp-surgery/burnt-ash-surgery/G85027"
	},
	{
	    "title": "Telephone",
	    "alt_title": "",
	    "advisor": "alison",
	    "day_of_week": "thursday",
	    "time_start": 1330,
	    "time_end": 1700,
	    "postcode": "",
	    "latitude": 0,
	    "longitude": 0,
	    "notes": "",
	    "url": ""
	},
	{
	    "title": "Wells Park Practice GP",
	    "alt_title": "",
	    "advisor": "maria",
	    "day_of_week": "thursday",
	    "time_start": 1300,
	    "time_end": 1330,
	    "postcode": "SE26 6JQ",
	    "latitude": 51.430508,
	    "longitude": -0.063327,
	    "notes": "only 1300-1330 available for new clients",
	    "url": "https://www.nhs.uk/services/gp-surgery/wells-park-practice/G85114"
	},
	{
	    "title": "Downham Leisure Centre",
	    "alt_title": "",
	    "advisor": "ronnie",
	    "day_of_week": "thursday",
	    "time_start": 930,
	    "time_end": 1430,
	    "postcode": "BR1 5EP",
	    "latitude": 51.426054,
	    "longitude": 0.012947,
	    "notes": "",
	    "url": "https://www.1life.co.uk/Downham-Health-and-Leisure-Centre/"
	},
	{
	    "title": "Hilly Fields Medical Centre GP",
	    "alt_title": "",
	    "advisor": "ronnie",
	    "day_of_week": "friday",
	    "time_start": 800,
	    "time_end": 1600,
	    "postcode": "SE4 1JN",
	    "latitude": 51.456803,
	    "longitude": -0.024011,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/gp-surgery/hilly-fields-medical-centre-the-lewisham-care-partnership/T8U5Q"
	},
	{
	    "title": "Waldron Health Centre clinic",
	    "alt_title": "",
	    "advisor": "birsel",
	    "day_of_week": "friday",
	    "time_start": 1030,
	    "time_end": 1630,
	    "postcode": "SE14 6LD",
	    "latitude": 51.476288,
	    "longitude": -0.03191,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/service-directory/waldron-health-centre/N10876025"
	},
	{
	    "title": "University Hospital Lewisham",
	    "alt_title": "",
	    "advisor": "maria",
	    "day_of_week": "friday",
	    "time_start": 1030,
	    "time_end": 1600,
	    "postcode": "SE13 6LH",
	    "latitude": 51.453023,
	    "longitude": -0.017942,
	    "notes": "",
	    "url": "https://www.nhs.uk/services/hospital/university-hospital-lewisham/RJ224"
	}
    ], null, 4));
		
    useEffect(() => {

	if (mapbox_res.longitude) {

	    // console.log(JSON.stringify([{"test":"example"}]))

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

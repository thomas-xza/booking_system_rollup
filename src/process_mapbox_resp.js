import React from 'react';
import { default_clinics } from './clinics_from_csv.json';

export function calculate_distances(mapbox_resp, clinics_w_dists, set_clinics_w_dists) {

    const clinics_calc = clinics.map(function (clinic) {

	if ( clinic.longitude !== 0 ) {

	    return { ...clinic,
		     'distance': compute_distance(mapbox_resp.longitude,
						  mapbox_resp.latitude,
						  clinic.longitude,
						  clinic.latitude)
		   };

	} else { return { ...clinic, 'distance': 0 } }
	
    });

    const sorted_clinics_w_dists = [ ...clinics_calc ];

    set_clinics_w_dists(sorted_clinics_w_dists.sort((a,b) => a.distance - b.distance));

};

function compute_distance(origin_long, origin_lat, dest_long, dest_lat) {

    const long_dist = origin_long - dest_long;

    const lat_dist = origin_lat - dest_lat;

    return Math.floor(
	Math.sqrt(long_dist * long_dist + lat_dist * lat_dist)
	    * 99 * 100) / 100;

};

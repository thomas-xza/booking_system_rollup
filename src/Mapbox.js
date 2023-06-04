import React from 'react';

export default function Mapbox({ postcode, mapbox_resp, set_mapbox_resp }) {
    
    if (typeof mapbox_resp.longitude !== 'undefined') {
	
	// return (
	//     JSON.stringify(mapbox_resp)
	// )

	return (
	    <>
		<em>{postcode} is located in {mapbox_resp.borough}</em>
		<br/>
		<br/>
		<strong>Select client availability</strong>:
	    </>
	)
	
    } else {
	
	load_distances(postcode, mapbox_resp, set_mapbox_resp);

	return (
		<div className="loading">Loading Mapbox API</div>
	)

    }

};

export async function load_distances(postcode, mapbox_resp, set_mapbox_resp) {

    const url = postcode_to_url(postcode);

    const mapbox_json = await fetch_with_retries(url, 100);

    store_data(postcode, mapbox_json, mapbox_resp, set_mapbox_resp);

};

async function fetch_with_retries(url, retry_count) {

    try {
	
	return await fetch(url)
	    .then(res => res.json());

    } catch (error) {

	console.log("retrying fetch(), retry_count");

	return fetch_with_retries(url, retry_count + 1)

    }
    
};

export function postcode_to_url(postcode) {

    //  Note: limit as of 2023-04 is 600 geocode requests/minute
    //  https://docs.mapbox.com/api/overview/

    //  'AAA AAA'
    //  -->  'https://api.mapbox.com/...AAA AAA...'

    const mapbox_api_key = 'pk.eyJ1IjoidGVzdC14emEiLCJhIjoiY2xnOXNiaWRvMWFtcDNlcWxzZjRmZDdldSJ9.lKZ_CDvdIh1Y9dw2DGjbOA';

    return 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        postcode + ', United Kingdom.json?access_token=' +
        mapbox_api_key;

};

export function store_data(postcode, mapbox_json, mapbox_resp, set_mapbox_resp) {
    
    console.log("store_data()", mapbox_json, "\n", mapbox_json.features[0])

    try {
	
	const top_hit_coords = mapbox_json.features[0].geometry.coordinates;

	const borough = mapbox_json.features[0].context[0].text || ""

	const source_obj = {
	    'postcode': postcode,
	    'longitude': top_hit_coords[0],
	    'latitude': top_hit_coords[1],
	    'borough': borough
	};

	console.log("source_obj()", source_obj);

	set_mapbox_resp(source_obj);

    } catch {

    }

};


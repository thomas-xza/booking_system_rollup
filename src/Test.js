import React from 'react';
import destinations from './locations.json';

export default function Test({ postcode, mapbox_res, set_mapbox_res }) {

    
    if (mapbox_res.longitude) {
	
	return (
	    JSON.stringify(mapbox_res)
	)
	
    } else {
	
	load_distances(postcode, mapbox_res, set_mapbox_res);

	return (
		<div className="loading">Calling Mapbox API</div>
	)

    };

};

export async function load_distances(postcode, mapbox_res, set_mapbox_res) {

    const url = postcode_to_url(postcode);

    const mapbox_json = await fetch(url)
	  .then(res => res.json())

    mapbox_json.resolve(store_data(postcode, mapbox_json, mapbox_res, set_mapbox_res));
    
};

function store_data(postcode, mapbox_json, mapbox_res, set_mapbox_res) {
    
    console.log("store_data()", mapbox_json, "\n", mapbox_json.features[0])

    const top_hit_coords = mapbox_json.features[0].geometry.coordinates;

    const source_obj = {
	'postcode': postcode,
	'longitude': top_hit_coords[0],
	'latitude': top_hit_coords[1]
	// 'borough': mapbox_json.features[0].context[0].text || ""
    };

    console.log(source_obj);

    set_mapbox_res(source_obj);

};

async function fetch_data(location_obj, index) {

    //  { postcode: 'AAA AAA', ... }
    //  -->  { postcode: 'AAA AAA', ...,
    //        long: '0.002020',
    //        lat: '-0.304373' }

    const url = postcode_to_url(location_obj['postcode']);

    return location_obj;

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


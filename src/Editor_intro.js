import React from 'react';
import { useState, useEffect } from 'react';

export default function Editor_intro () {

    return (
	<div>
    
	    <h1>Clinic set editor</h1>

	This page is about editing the set of clinics which will be loaded when making a booking. <br/>

	Basically the formatting of the following textbox (which contains data in Javascript format) has to be what the Javascript engine in your brower can understand. This page was created so that you can edit the data and get immediate feedback (at bottom of page) if your edits are not compatible with this booking system. <br/><br/>

	The following expectations should be known, before starting:
	    <ul>
	    <li>any quantity of clinics is permitted</li>
	    <li><code>day_of_week</code> must always be a lowercase, full day name</li>
	    <li><code>time_start</code> and <code>time_end</code> must always be integers between 0 and 2400</li>
	    <li><code>postcode</code> must always be uppercase and be a standard, full UK postcode</li>
	    <li><code>address</code> must be a set of quotes, separated by commas, within square brackets (imitate the pattern of the default list)</li>
	    <li><code>longitude</code> and <code>latitude</code> must always be numbers between -1 and 52</li>
	    <li>telephone clinics must have <code>longitude</code> set to <code>0</code> and do not need to have valid <code>postcode</code>, but do need to have <code>longitude</code> set to 0</li>
	    </ul>

	    <strong>Note that once you close your browser any edits will not be saved, so you need to make a copy and store it elsewhere, for laster pasting back in.</strong> <br/><br/>

	</div>
    )

}

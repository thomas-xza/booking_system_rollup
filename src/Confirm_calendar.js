import React from 'react';
import { useState } from 'react';

export default function Confirm_calendar({ form_data, booking, checkboxes }) {

    const gen_cal_entry = () => {

	return `${phone_chk(0)}${form_data.name}${phone_chk(1)} - ${phones_all()} - ${tdt_chk()}`
    }

    const gen_cal_subentry = () => {

	if ( form_data["returnee"] === false ) {
    
	    return [ form_data["dob"],
		     form_data["address"],
		     form_data["postcode"],
		     form_data["phone"],
		     form_data["phone_alt"]
		   ].join("\n").trim()

	} else { return "This client is a returnee." }
	
    }

    const phone_chk = (pos) => {

	if (checkboxes[0] === true && pos === 0) {

	    return "Call "

	} else if (checkboxes[0] === false && pos === 0 && booking.advisor === "alison" ) {

	    return "F2F "

	} else if (checkboxes[0] === false && pos === 1 && booking.advisor !== "alison" ) {

	    return " F2F"

	}

	return ""

    }


    
    const tdt_chk = () => {

    	return (form_data["tdt"] === true) ? "[TDT]" : ""

    }
    
    const returnee_chk = () => {

    	return (form_data["returnee"] === true) ? "(RETURNEE) " : "(new) "

    }

    const phones_all = () => {

	if ( form_data.phone_alt === "" ) {

	    return phone(form_data.phone)

	} else {

	return [ phone(form_data.phone), phone(form_data.phone_alt) ]
		.join(" & ").trim()

	}

    }
    
    const phone = (phone) => {

	try {

	    return phone.replace(/[\- \(\)]/g, "").match(/.{1,4}/g).join(" ")

	} catch { return "" }

    }

    return (
	<div className="jsx">
		    
	    <pre>{gen_cal_entry()}</pre>
	
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_cal_entry())}}>
	    Copy calendar entry to clipboard
	</button>

	    <button className="medium"
	onClick={() => {alert("Unless NHS update to a newer (more easily programmable) version of Outlook online, or LSSS move to a Google calendar, this button won't do anything - see 'Issues' at bottom of page.")} }>
	    Add to calendar
	</button> <br/><br/>

	    <pre>{gen_cal_subentry()}</pre>
	
            {
                form_data.returnee === false ?

	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_cal_subentry())}}>
	    Copy calendar sub-entry to clipboard
		</button>
		    :
		<em></em>

            }

	</div>	    
    );
}


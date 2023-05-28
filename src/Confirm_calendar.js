import React from 'react';
import { useState } from 'react';

export default function Confirm_calendar({ form_data, booking }) {

    const [custom_extras, set_custom_extras] = useState([ booking.longitude === 0, false ]);

    const gen_cal_entry = () => {

	return `${phone_chk(0)}${form_data.name}${phone_chk(1)} - ${phone()} - ${form_data.postcode} ${tdt_chk()}`	
    }

    const phone_chk = (pos) => {

	if (custom_extras[0] === true && pos === 0) {

	    return "Call "

	} else if (custom_extras[0] === false && pos === 1) {

	    return " F2F"

	}

	return ""

    }

    const tdt_chk = () => {

	return (custom_extras[1] === true) ? "[TDT]" : ""

    }
    
    const phone = () => {

	return form_data.phone.replace(/[\- \(\)]/g, "").match(/.{1,4}/g).join(" ")

    }

    const handle_checkbox = (position) => {

	const new_state = custom_extras.map(
	    (item, index) =>
		index === position ? !item : item
	)

	set_custom_extras(new_state)
					       	
    };

    return (
	<div className="jsx">
	
	    <label key="checkbox_label_phone">
	    <input type="checkbox"
	key="checkbox_box_phone"
	checked={custom_extras[0]}
	onChange={() => handle_checkbox(0)} />
	    Phone
	</label>

	    <label key="checkbox_label_tdt">
	    <input type="checkbox"
	key="checkbox_box_tdt"
	checked={custom_extras[1]}
	onChange={() => handle_checkbox(1)} />
	    TDT
	</label>

	    <br/>
	    
	    <pre>{gen_cal_entry()}</pre>
	
	    <button className="medium"
	onClick={() => {navigator.clipboard.writeText(gen_cal_entry())}}>
	    Copy calendar entry to clipboard
	</button>	    <br/>

	    <button className="medium"
	onClick={() => {alert("Unless NHS update to a newer (more easily programmable) version of Outlook online, or LSSS move to a Google calendar, this button won't do anything - see 'Issues' at bottom of page.")} }>
	    Add to calendar
	</button>
	    
	</div>	    
    );
}


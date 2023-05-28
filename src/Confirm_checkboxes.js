import React from 'react';
import { useState } from 'react';

export default function Confirm_checkboxes({ form_data, booking, checkboxes, set_checkboxes }) {

    const handle_checkbox = (position) => {

	const new_state = checkboxes.map(
	    (item, index) =>
		index === position ? !item : item
	)

	set_checkboxes(new_state)

    };

    return (
	    <div className="jsx">

	    <label key="checkbox_label_phone">
	    <input type="checkbox"
	key="checkbox_box_phone"
	checked={checkboxes[0]}
	onChange={() => handle_checkbox(0)} />
	    Phone
	</label>

	    <label key="checkbox_label_tdt">
	    <input type="checkbox"
	key="checkbox_box_tdt"
	checked={checkboxes[1]}
	onChange={() => handle_checkbox(1)} />
	    TDT
	</label>

	</div>
    )
}

import React from 'react';

export default function User_selections({ checked_days, set_checked_days, phone_show, set_phone_show }) {

    const handle_on_change = (index) => {
	
	set_checked_days[index] = false
	
    };

    return (
	    <div>
	    <input type="checkbox"
                    key="checked_day_0"
                    checked={checked_days[0]}
                    onChange={() => handle_on_change(0)}
            />
	    Monday
	    <input type="checkbox"
                    key="checked_day_1"
                    checked={checked_days[1]}
                    onChange={() => handle_on_change(1)}
            />
	    Tuesday
	    <input type="checkbox"
                    key="checked_day_2"
                    checked={checked_days[2]}
                    onChange={() => handle_on_change(2)}
            />
	    Wednesday
	    <input type="checkbox"
                    key="checked_day_3"
                    checked={checked_days[3]}
                    onChange={() => handle_on_change(3)}
            />
	    Thursday
	    <input type="checkbox"
                    key="checked_day_4"
                    checked={checked_days[4]}
                    onChange={() => handle_on_change(4)}
            />
	    Friday
	</div>
    );
		
    
    
}

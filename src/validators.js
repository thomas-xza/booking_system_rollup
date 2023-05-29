
export function validate_postcode(postcode) {

    const processed = postcode
	  .toUpperCase()
	  .match(/[A-Z]{1,2}[0-9]{1,2} +[0-9]{1,2}[A-Z]{2}/) || [];

    return (processed[0]) ? 1 : 0;

}

export function validate_phone(phone) {

    const init = phone.match(/[0-9]/g) || [];

    const all_nums = init.join('').replace(/^447/i, '07');

    if (all_nums.length === 11) {

	return 1;

    } else {

	return 0;

    };

}

export function validate_day(day) {

    const days_of_week = ["monday", "tuesday", "wednesday", "thursday", "friday" ];

    return(
	days_of_week.includes(day) ? 1 : 0
    );

}

export function validate_address(address) {

    try {

	const strings_quantity = address.reduce( function(total, element) {

	    return(
		typeof element === typeof "" ? total + 1 : total
	    );

	}, 0);

	return(
	    strings_quantity === address.length ? 1 : 0
	);

    } catch { return 0 };

}

export function validate_num_within_range(data, range_low, range_high) {

    try {

	if ( data >= range_low && data <= range_high ) {

	    return 1

	} else { return 0 }

    } catch { return 0 };

}

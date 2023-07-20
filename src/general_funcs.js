
export function title_case(str) {
    
    return str.toLowerCase().split(' ').map(function(word) {
	
	return (word.charAt(0).toUpperCase() + word.slice(1));
	
    }).join(' ');
    
}

export function check_day_matches_date(target_day, date_time) {

    try {

	const date_obj = convert_date_str_to_obj(
	    extract_date(date_time) + " 00:00"
	)

	const date_obj_day = date_obj.toLocaleDateString("en-GB", { weekday: 'long' });

	if ( date_obj_day.toLowerCase() === target_day.toLowerCase() ) {

	    return 0

	} else { return 1 }

    } catch { return 1 };

}

export function format_date_time(date_time) {

    try {

	const date_time_obj = convert_date_str_to_obj(date_time)

	return date_time_obj.toLocaleDateString("en-AU") + ", "
	    + date_time_obj.toLocaleTimeString("en-AU", {
		hours: "numeric",
		minutes: "numeric" } ).replace(":00 ", "")

    } catch { return date_time }
    
}

function convert_date_str_to_obj(date_time) {

    const date_str = extract_date(date_time).split("/")

    const time_str_24 = extract_time(date_time).split(":")

    return new Date(date_str[2], date_str[1] - 1, date_str[0],
		    time_str_24[0], time_str_24[1])

}

function extract_date(str) {

    return str.match("[0-9]*/[0-9]*/[0-9]*")[0]

}

function extract_time(str) {

    return str.match("[0-9]*:[0-9]*")[0]

}

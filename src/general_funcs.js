
export function title_case(str) {
    
    return str.toLowerCase().split(' ').map(function(word) {
	
	return (word.charAt(0).toUpperCase() + word.slice(1));
	
    }).join(' ');
    
}

export function check_day_matches_date(target_day, date) {

    try {

	const day_of_week = convert_day_to_number(target_day)

	const nums_to_seek = [
	    
	    find_next_dates_of_day(day_of_week, 1),
	    
	    find_next_dates_of_day(day_of_week, 2)
	    
	]

    console.log(nums_to_seek)

	if (RegExp(nums_to_seek[0]).test(date) === true ||
	    RegExp(nums_to_seek[1]).test(date) === true) {

	    return 0

	} else { return 1 }

    } catch { return 1 };

}

export function find_next_dates_of_day(day_of_week, week_quantity) {

    const today = new Date();

    console.log(today)

    return String(
	
	today.getDate() +
	    (day_of_week + 7 * week_quantity - today.getDay())
	    % (7 * week_quantity)
	
    ).padStart(2, '0');

    
}

function convert_day_to_number(day) {

    switch(day) {

    case "monday": return 1;

    case "tuesday": return 2;

    case "wednesday": return 3;

    case "thursday": return 4;

    case "friday": return 5;

    };

}

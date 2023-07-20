import { check_day_matches_date,
	 find_next_dates_of_day,
	 format_date_time } from './general_funcs.js';

test('monday', () => { 
    expect(
	check_day_matches_date(
	    "monday", "24/07/2023"
	)
    )
	.toBe(
	    0
	);
});

test('tuesday', () => { 
    expect(
	check_day_matches_date(
	    "tuesday", "04/11/2025"
	)
    )
	.toBe(
	    0
	);
});

test('wednesday invalid', () => { 
    expect(
	check_day_matches_date(
	    "wednesday", "25/07/2023"
	)
    )
	.toBe(
	    1
	);
});

test('date time', () => {
    expect(
	format_date_time(
	    "01/01/1970 15:00"
	)
    )
	.toBe(
	    "01/01/1970, 3:00pm"
	);
});

test('date time 2', () => {
    expect(
	format_date_time(
	    "01/01/1970 12:00"
	)
    )
	.toBe(
	    "01/01/1970, 12:00pm"
	);
});

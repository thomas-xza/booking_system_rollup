import { check_day_matches_date,
	 find_next_dates_of_day,
	 format_date_time } from './general_funcs.js';

//  Note: these tests cannot work permanently, unless computer's clock
//  is changed...

test('monday', () => { 
    expect(
	find_next_dates_of_day(
	    1, 0
	)
    )
	.toBe(
	    "24"
	);
});

test('monday', () => { 
    expect(
	find_next_dates_of_day(
	    1, 1
	)
    )
	.toBe(
	    "31"
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

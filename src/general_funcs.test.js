import { check_day_matches_date,
	 find_next_dates_of_day } from './general_funcs.js';

//  Note: these tests cannot work permanently, unless computer's clock
//  is changed...

test('monday', () => { 
    expect(
	find_next_dates_of_day(
	    1, 1
	)
    )
	.toBe(
	    "05"
	);
});

test('monday', () => { 
    expect(
	find_next_dates_of_day(
	    1, 2
	)
    )
	.toBe(
	    "12"
	);
});


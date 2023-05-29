import { validate_day,
	 validate_address,
	 validate_num_within_range } from './validators.js';


test('invalid address', () => { 
    expect(
	validate_address(
	    ["blah", 0]
	)
    )
	.toBe(
	    0
	);
});

test('extreme address', () => { 
    expect(
	validate_address(
	    []
	)
    )
	.toBe(
	    1
	);
});

test('valid address', () => { 
    expect(
	validate_address(
	    ["blah", "more", "etc"]
	)
    )
	.toBe(
	    1
	);
});



test('valid num range', () => { 
    expect(
	validate_num_within_range(
	    1, 0, 10
	)
    )
	.toBe(
	    1
	);
});

test('invalid num range', () => { 
    expect(
	validate_num_within_range(
	    -50, 100, 200
	)
    )
	.toBe(
	    0
	);
});

test('extreme num range', () => { 
    expect(
	validate_num_within_range(
	    1, 1, 100000
	)
    )
	.toBe(
	    1
	);
});


test('valid day', () => { 
    expect(
	validate_day(
	    "monday"
	)
    )
	.toBe(
	    1
	);
});

test('invalid day upcase', () => { 
    expect(
	validate_day(
	    "MONDAY"
	)
    )
	.toBe(
	    0
	);
});

test('invalid', () => { 
    expect(
	validate_day(
	    "fri"
	)
    )
	.toBe(
	    0
	);
});

// test('valid', () => { 
//     expect(
// 	validate_(
// 	    ""
// 	)
//     )
// 	.toBe(
// 	    1
// 	);
// });


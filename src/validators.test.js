import { validate_phone, validate_postcode } from './validators.js';

test('valid postcode 1', () => { 
    expect(
	validate_postcode(
	    "tw9 1dn"
	)
    )
	.toBe(
	    1
	);
});

test('valid postcode 2', () => { 
    expect(
	validate_postcode(
	    "N1 9AL "
	)
    )
	.toBe(
	    1
	);
});

test('valid postcode 3', () => { 
    expect(
	validate_postcode(
	    "NW4 3AS"
	)
    )
	.toBe(
	    1
	);
});

test('valid postcode 4', () => { 
    expect(
	validate_postcode(
	    "E15 1DE"
	)
    )
	.toBe(
	    1
	);
});

test('extreme postcode 1', () => { 
    expect(
	validate_postcode(
	    "Ox10     0eL   "
	)
    )
	.toBe(
	    1
	);
});

test('extreme postcode 2', () => { 
    expect(
	validate_postcode(
	    ""
	)
    )
	.toBe(
	    0
	);
});

test('invalid postcode 1', () => { 
    expect(
	validate_postcode(
	    "NW43AS"
	)
    )
	.toBe(
	    0
	);
});

test('invalid postcode 2', () => { 
    expect(
	validate_postcode(
	    "TW 1DN"
	)
    )
	.toBe(
	    0
	);
});

test('invalid postcode 3', () => { 
    expect(
	validate_postcode(
	    "OX10 000"
	)
    )
	.toBe(
	    0
	);
});

test('invalid postcode 4', () => { 
    expect(
	validate_postcode(
	    "n1"
	)
    )
	.toBe(
	    0
	);
});


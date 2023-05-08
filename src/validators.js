
export function validate_postcode(postcode) {

    const processed = postcode
	  .toUpperCase()
	  .match(/[A-Z]{1,2}[0-9]{1,2} +[0-9]{1,2}[A-Z]{2}/) || []

    return (processed[0]) ? 1 : 0;

}

export function validate_phone(phone) {

    const init = phone.match(/[0-9]/g) || []

    const all_nums = init.join('').replace(/^447/i, '07')

    if (all_nums.length === 11) {

	return 1

    } else {

	return 0

    }
    // 	  .match(/[0-9]{11}/) || [];

    // return (processed[0]) ? 1 : 0;

}


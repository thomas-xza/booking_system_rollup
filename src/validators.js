
export function validate_postcode(postcode) {

    const processed = postcode
	  .toUpperCase()
	  .match(/[A-Z]{1,2}[0-9]{1,2} +[0-9]{1,2}[A-Z]{2}/)

    // .match() actually returns different types...
	
    return (Array.isArray(processed)) ? 1 : 0;

}

export function validate_phone(phone) {

    const processed = phone
	  .match(/[0-9]/).join("")
	  .match(/[0-9]{11}/)

    // .match() actually returns different types...

    return (Array.isArray(processed)) ? 1 : 0;

}


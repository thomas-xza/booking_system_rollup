import React from 'react';
import { useState } from 'react';
import Form from './Form.js'

export default function App() {

    const [form_data, set_form_data] = useState({});
    
    return (
	<Form
	    form_data={form_data}
	    set_form_data={set_form_data}
	/>
    );
}


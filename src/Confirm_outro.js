import React from 'react';
import { useState } from 'react';

export default function Confirm_outro() {

    const closing_comment = `<h3>Issues:</h3>
	    <ul>
	   <li> "Add to calendar" will only work if NHS
	change to use <a href="https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0&preserve-view=true" target="_blank">the latest Microsoft JSON API</a> (could be a long time, NHS is currently on the
<a href="https://digital.nhs.uk/developer/api-catalogue/nhsmail" target="_blank">Exchange API</a> which is <a href="https://github.com/OfficeDev/ews-managed-api" target="_blank">almost deprecated</a>) or if all LSSS staff move to <a href="https://developers.google.com/calendar/api/guides/overview" target="_blank">Google calendar</a> until then</li>
<li>It would also be possible to actually show only available appointments and select from them if something could be done about the calendar</li>
<li>"Send text via Vonage" will only work if someone gives me a credit card to <a href="https://www.vonage.co.uk/communications-apis/sms/pricing/">pay the fees</a></li>
<li>If the clinics change there is not *yet* a user-friendly way to update them on this website</li>
</ul>
<br/>

<h3>Potential improvements:</h3>
<ul>
<li>After entering someone's details the 1st time, it could be stored within the browser (localStorage) on the computer, making selection possible, for the same person, next time</li>
<li>It should be possible to change the set of clinics (currently hardcoded) early on, such as by uploading a user-friendly file (.csv) that can be edited in Excel.</li>
</ul>
<br/><br/><br/><br/><br/>
`;

    return (
	<>

	    <br/><br/>

	    <hr/>
	    <div dangerouslySetInnerHTML={{__html: closing_comment }}/>
	    </>
    );
}


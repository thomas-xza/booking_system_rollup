
Introduction
-----

This is a booking system  designed to automate the administrative side, in  a  way that  is  as  backwards-compatible  as  possible, of  a
council-funded public service.

It was built with the following libraries:
- React
- Babel
- Rollup
- Jest

It was hard to find a minimalist bundler that was compatible with React, until I eventually stumbled on a working starting point, located at:

[https://www.codeguage.com/blog/setup-rollup-for-react](https://www.codeguage.com/blog/setup-rollup-for-react)

A copy of the above tutorial is also available in `docs/`


Quickstart
----------

Clone this repo, and then run:

    npm install

    npm run serve

The booking system should then be available at `localhost:3000` on your computer.

Alternatively, you can just open the pre-bundled version, found at:

    public/booking_system_full.html


How it works
-----

The web app is split into 4 separate pages, with top-level state and rendering being controlled by `App.js`, and therefore room for growth between them.

**0. Clinic JSON editor**

 - `Editor.js`

 - This is used to keep the web app futureproof, by allowing the list of clinics to be edited. It provides info on data expectations, and runs realtime data-validation on JSON edits (the code for this is actually nicely implicit) with live feedback for the user.


**1. Client data entry**

 - `Form.js`

 - Again realtime data validation is run here, with live feedback given, typical form entry stuff.


**2. Clinic selector**

 - `Clinics_list.js`, `Mapbox.js`, `Clinic_single.js`

 - This page is responsible for transmitting the client's postcode to the Mapbox API, and then comparing the co-ordinates received to the list of clinics, then ordering the clinics by distance from client. There are also a few show/hide options, so that different days can be hidden for when the client is unavailable.

**3. Confirmation page**

 - `Confirm.js`

 - Arguably the most disappointing page which highlights some unbearable inefficiencies of the public sector, this page presents the selections in ways which make it as easy as possible to enter the data into various other legacy systems.


Tests
----

Admittedly, since I was new to React, I never got round to writing tests for rendering JSX, but I did lean heavily on general Javascript unit tests via `jest`, mainly for data validation, such as for postcode and phone. Doing this during initial data entry meant that the data is always in the expected formats, for the rest of the web app, and has been found to be very reliable.

To run tests:

    npm run test


Build process
-------------

To build the source code:

    npm run build

Or to automatically build after each change:

    npm run autobuild

The above run the Rollup tool with various arguments, see `package.json`

Now Rollup will only bundle into separate files, so, to bundle everything into 1 file for easier portability, there is a more basic Shell script, `inline_version.sh`, which can be run with:

    npm run inline
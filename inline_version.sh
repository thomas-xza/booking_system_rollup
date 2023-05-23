#!/bin/sh

cat public/index_inline_skel_head.html	>  public/booking_system_full.html

cat public/bundle.js			>> public/booking_system_full.html

cat public/index_inline_skel_tail.html	>> public/booking_system_full.html

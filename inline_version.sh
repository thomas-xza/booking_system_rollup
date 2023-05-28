#!/bin/sh

cat public/index_inline_skel_head.html	        >  public/booking_system_full.html

cat public/css/normalize.css                    >>  public/booking_system_full.html

cat public/css/stylize.css                      >>  public/booking_system_full.html

cat public/index_inline_skel_head_post_css.html	>>  public/booking_system_full.html

cat public/bundle.js			        >> public/booking_system_full.html

cat public/index_inline_skel_tail.html	        >> public/booking_system_full.html

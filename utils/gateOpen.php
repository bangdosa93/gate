<?php
	#GPIO 4  - Gate open signal out
 	#GPIO 3  - Gate reverse signal out
 	#GPIO 2  - MAG Door signal out
 	#GPIO 14 - EMPTY RELAY
 	#GPIO 15 - Sound module signal out

	system("gpio -g mode 4 out");
	system("gpio -g mode 15 out");
	system("gpio -g write 4 0");
	system("gpio -g write 15 1");
	usleep(500000);
	system("gpio -g write 4 1");
	usleep(500000);
	system("gpio -g write 15 0");
?>

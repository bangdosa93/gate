<?php
 	#GPIO 4  - Gate open signal out
 	#GPIO 3  - Gate reverse signal out
 	#GPIO 2  - MAG Door signal out
 	#GPIO 14 - EMPTY RELAY
 	#GPIO 15 - Sound module signal out

	system("gpio -g mode 14 out");
	system("gpio -g mode 18 out");
	system("gpio -g write 14 1");
	system("gpio -g write 18 1");
	usleep(500000);
	system("gpio -g write 14 0");
	usleep(500000);
	system("gpio -g write 18 0");
?>

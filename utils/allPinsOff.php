<?php
	#GPIO 4  - Gate open signal out
 	#GPIO 3  - Gate reverse signal out
 	#GPIO 2  - MAG Door signal out
 	#GPIO 14 - EMPTY RELAY
 	#GPIO 15 - Sound module signal out

	system("gpio -g mode 4 out");
	system("gpio -g mode 3 out");
	system("gpio -g mode 2 out");
	system("gpio -g mode 14 out");
	system("gpio -g mode 15 out");


 	system("gpio -g write 4 1");
	system("gpio -g write 3 1");
	system("gpio -g write 2 1");
	system("gpio -g write 14 1");
	system("gpio -g write 15 0");
?>

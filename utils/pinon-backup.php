<?php
 	#GPIO 14 - Gate remote signal out
	#GPIO 18 - Sound module output

	system("gpio -g mode 14 out");
	system("gpio -g mode 18 out");
	system("gpio -g write 14 1");
	system("gpio -g write 18 1");
	usleep(500000);
	system("gpio -g write 14 0");
	usleep(500000);
	system("gpio -g write 18 0");
?>

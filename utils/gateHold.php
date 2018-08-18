<?php
 	# GPIO 4  - Gate open signal out
	# GPIO 3  - Gate reverse signal out
	# GPIO 2  - MAG Door signal out
	# GPIO 14 - EMPTY RELAY
	# GPIO 15 - Sound module signal out

	system("gpio -g mode 4 out");
	system("gpio -g mode 3 out");
	system("gpio -g mode 15 out");
	
	system("gpio -g write 4 0");
	system("gpio -g write 3 0");
	usleep(1000000);
	system("gpio -g write 4 1");
	
	
	for ($x = 0; $x <= 4; $x++) {
		system("gpio -g write 15 1");
		usleep(70000);
  		system("gpio -g write 15 0");
		usleep(70000);
	}	 

  	// usleep(500000);
  	// system("gpio -g write 14 0");
	
	
?>

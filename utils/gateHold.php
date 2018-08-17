<?php
 	#GPIO 14 - Gate remote signal out
	#GPIO 18 - Sound module output

	system("gpio -g mode 14 out");
	system("gpio -g mode 18 out");
	system("gpio -g write 14 1");
	
	for ($x = 0; $x <= 4; $x++) {
		system("gpio -g write 18 1");
		usleep(70000);
  		system("gpio -g write 18 0");
		usleep(70000);
	}	 

  	// usleep(500000);
  	// system("gpio -g write 14 0");
	
	
?>

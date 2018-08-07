<?php
	system("gpio -g mode 14 out");
	system("gpio -g mode 18 out");
	system("gpio -g write 14 0");
	system("gpio -g write 18 0");
?>


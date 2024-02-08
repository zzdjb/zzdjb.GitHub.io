<?php
$myfile = fopen("newfile.html", "w") or die("Unable to open file!");
$value = $_POST['value'];
fwrite($myfile, $value);
fclose($myfile);
?>
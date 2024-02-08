<?php 
    //接收JS传递过来的参数: filename和文件内容: value
    $filename = $_POST["filename"];  //也可以用: $_REQUEST["filename"]
    $value    = $_POST["value"];  
    //新建或覆盖文件
    $newfile = fopen($filename, "w") or die("Unable to open file!");
    //将文件内容写入
    fwrite($newfile, $value);
    //关闭文件
    fclose($newfile);
?>
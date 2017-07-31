<?php
/*此页面中为通用代码，由其他php页面调用*/
header('Content-Type:application/json;charset=UTF-8');

$conn=mysql_connect('localhost','root','root');
$sql="SET NAMES UTF8";
mysql_query($conn,$sql);
$output=[];




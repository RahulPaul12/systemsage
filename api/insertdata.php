<?php
$host="localhost";
$user="root";
$password="";
$db="systemsage";



$conn = new mysqli($host,$user, $password, $db );
if(!$conn){
    die("connection failed");
}else{
    $value= rand(1,100);
    $sql = "INSERT INTO `data` (`value`) VALUES ($value) ";
    $result = $conn->query($sql);  

     $conn->close();   
}



?>
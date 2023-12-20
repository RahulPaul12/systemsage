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
    $sql = "INSERT INTO data (value) VALUES ($value)";
    $result = $conn->query($sql);
    

    $sql2 = "SELECT * FROM `data`" ; // Adjust the query as needed
    $result2 = $conn->query($sql2);


    

    $data= array();
    echo json_encode($data);
     $conn->close();   
}



?>
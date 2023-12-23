<?php
$host="localhost";
$user="root";
$password="";
$db="systemsage";



$conn = new mysqli($host,$user, $password, $db );
if(!$conn){
    die("connection failed");
}else{

    $value = rand(1,100);
    $slinsert = "INSERT INTO `data`(`value`) VALUES ('$value')";
    $result1= $conn->query($slinsert);

    
    $sqlget = "SELECT * FROM `data` ORDER BY `time` DESC LIMIT 10";
    $result = $conn->query($sqlget);  
  
    $data= array();
    if($result-> num_rows>0){
        while($row = $result->fetch_assoc()){
            $data[]=array(
                "x"=> $row["time"],
                "y"=> $row["value"],
            );
    }}
    
     
     
      $conn->close();
    header('Content-Type: application/json');
    echo json_encode($data);
    
}

?>
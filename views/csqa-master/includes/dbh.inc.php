<?php

$serverName = "localhost";
$userName = "root";
$dbName = "csqa";
$dbPassword = "";

$conn = mysqli_connect( $serverName,$userName, $dbPassword, $dbName);

if(!$conn){
    die("connection error : " . mysqli_connect.error()); 
}
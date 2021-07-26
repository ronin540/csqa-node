<?php

if(isset($_POST['submit'])){
    $userId = $_POST['userId'];
    $title = $_POST['title'];
    $body  = $_POST['body'];
    require_once "../includes/dbh.inc.php";

$sql = "INSERT INTO questions (user_id, title, body) VALUES (?,?,?);";

//initialize statement
$stmt = mysqli_stmt_init($conn);

if(!mysqli_stmt_prepare($stmt, $sql)){
    header("location:newQuestion.php?msg=stmtFailed");
    exit();
}

mysqli_stmt_bind_param($stmt, "sss",$userId,$title, $body);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
header("location: ../newQuestion.php?msg=questionAddedSuccessfully");
exit();
}


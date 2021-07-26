<?php

if(isset($_POST['submit'])){
    $user_id = $_POST['userId'];
    $q_id   =  $_POST['q_Id'];
    $ans    =  $_POST['text'];

    
    include_once "../includes/dbh.inc.php";
    $query = "INSERT INTO answers (user_id, q_id, answer) VALUES (?, ? , ?)";

    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $query)){
        die();
        header("location:../question.php?msg=stmtFailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, 'sss', $user_id, $q_id, $ans);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location:../question.php?q=$q_id");
    exit();

}
    


<?php

if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST['password'];

    
    require_once "../includes/dbh.inc.php";
    require_once "../includes/functions.inc.php";

    if(emptyInputSignin($username, $password) !== false) {
        header("location: ../signin.php?err=empty_input");
        exit();
    }
    if(isset($_POST['remember'])){
       setcookie('username', $username, time()+(30000));
       setcookie('pwd', $password, time()+(30000));
        }else{
        setcookie('username', $username, 30);
       setcookie('pwd', $password,30);
    }
    login($conn, $username, $password);

}
else {
    header("location: ../signin.php");
        exit();
}
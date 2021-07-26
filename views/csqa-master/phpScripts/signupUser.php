<?php

if(isset($_POST['submit'])){
    $username   = $_POST['userName'];
    $userEmail  = $_POST['email'];
    $userPwd    = $_POST['password'];
    $pwdRepeat  = $_POST['password2'];

    require_once "../includes/dbh.inc.php";
    require_once "../includes/functions.inc.php";


    if(emptyInputSignup($username, $userEmail, $userPwd, $pwdRepeat)  == false){
        header("location: ../signup.php?err=empty_input");
        exit();
    }
    if(userName($username) == false){
        header("location: ../signup.php?err=invalid_username");
        exit();
    }
    if(userEmail($userEmail) !== false){
        header("location: ../signup.php?err=invalid_user_email");
        exit();
    }
    if(pwdMatch($userPwd, $pwdRepeat) !== false){
        header("location: ../signup.php?err=password_dont_match");
        exit();
    }
    if(userNameIsExists($conn, $username, $userEmail) !== false){
        header("location: ../signup.php?err=username_is_exist");
        exit();
    }

    createUser($conn,$username, $userEmail ,$userPwd);
}
else {
    header("location: ../signup.php");
    exit();
}
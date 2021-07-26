<?php

function emptyInputSignup($username, $userEmail, $userPwd, $pwdRepeat) {
    $result;
    if(empty($username) || empty($userEmail) || empty($userPwd) || empty($pwdRepeat)){
        $result = false;
    }else {
        $result = true;
    }
    return $result;
}


function userName($userName) {
    $result;
    if(!preg_match("/^[a-zA-Z0-9]*$/", $userName)){
        
        $result = false;
    }else {
        $result = true;
    }
    return $result;
}

function userEmail($userEmail) {
    $result;
    if(!filter_var($userEmail, FILTER_VALIDATE_EMAIL)){
        $result = true;
    }else {
        $result = false;
    }
    return $result;
}

function pwdMatch($userPwd, $pwdRepeat) {
    $result;
    if($userPwd !== $pwdRepeat){
        $result = true;
    }else {
        $result = false;
    }
    return $result;
}


// using prepared statement
// function userNameIsExists($conn, $username, $userEmail) {

//     $sql = "SELECT * FROM users WHERE userName = ? OR userEmail = ?;";
//     $stmt = mysqli_stmt_init($conn);
//     if(!mysqli_stmt_prepare($stmt,$sql)){
//         header("location: ../signup.php?err=stmtfailed");
//         exit();
//     }
//     mysqli_stmt_bind_param($stmt, "ss", $username, $userEmail);
//     mysqli_stmt_execute($stmt);

//     $resultData = mysqli_stmt_get_result($stmt);

//     if($row = mysqli_fetch_assoc($resultData)){
//         return $row;
//     }else {
//         $result = false;
//         return $result;
//     }

//     mysqli_stmt_close($stmt);
// }


function userNameIsExists($conn, $username, $userEmail) {

        $sql = "SELECT * FROM users WHERE userName = ? OR userEmail = ?;";
        
        if($stmt = mysqli_prepare($conn,$sql)){
            mysqli_stmt_bind_param($stmt, "ss", $username, $userEmail);
            mysqli_stmt_execute($stmt);
            $resultData = mysqli_stmt_bind_result($stmt,$userId, $username, $email, $pass);
        if(mysqli_stmt_fetch($stmt)){
            $data = array(
                "userId"=>$userId,
                "username"=>$username,
                "email" => $email, 
                "userPwd" => $pass);
            return $data;
        }else {
            $result = false;
            return $result;
        }
    
        mysqli_stmt_close($stmt);
        }
     }


// insert user
function createUser($conn,$username, $userEmail,$userPwd) {

    $sql = "INSERT INTO users (userName, userEmail,userPwd) VALUE (?, ?, ?);";
    $stmt = mysqli_stmt_init($conn);
    
    if(!mysqli_stmt_prepare($stmt,$sql)){
        header("location: ../signup.php?err=stmtfailed");
        exit();
    }

    $hashedPwd = password_hash($userPwd, PASSWORD_DEFAULT);
 
    mysqli_stmt_bind_param($stmt, "sss", $username, $userEmail, $hashedPwd);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../signin.php?msg=signup_succesful");
}

// Login Script

function emptyInputSignin($username, $password) {
    $result;
    if(empty($username) || empty($password)){
        $result = true;
    }else {
        $result = false;
    }
    return $result;
}

function login($conn, $username, $password){
    $userNameExists = userNameIsExists($conn,$username, $username);
    if($userNameExists === false){
        header("location: ../signin.php?msg=plzCheckLoginOrPwd");
        exit();
    }

    $pwdhashed = $userNameExists['userPwd'];
    $checkPwd = password_verify($password, $pwdhashed);

    if($checkPwd === false) {
    header("location: ../signin.php?msg=plzCheckLoginOrPwd");       
    exit();
    }
    else if($checkPwd === true) {
        
        session_start();
        $_SESSION['userId'] =  $userNameExists['userId'];
        $_SESSION['username'] =  $userNameExists['username'];
        
        header("location: ../index.php");
        exit();
    }
}
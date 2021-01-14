<?php
    include('./library/conn.php');

    $user_account = $_REQUEST['account'];
    $user_passward = $_REQUEST['password'];

    $sql = "select * from user where user_account = '$user_account'";
    // var_dump($sql);

    $re = $mysqli->query($sql);
    // var_dump($re);

    if($re->num_rows>0){
        echo '<script>alert("用户名已存在")</script>';
        echo '<script>location.href="../src/html/registered.html"</script>';
        $mysqli->close();
        die();
    }
    $insertSql = "insert into user (user_name,user_account,user_password,phone,sex) values ('渣哥','$user_account','$user_passward','16536949665',2)";

    $res = $mysqli->query($insertSql);
    $mysqli->close();

    if($res){
        echo '<script>alert("注册成功")</script>';
        echo '<script>location.href="../src/html/login.html"</script>';
    }
?>
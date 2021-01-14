<?php
    include('./library/conn.php');

    $user_account = $_REQUEST['user_account'];
    $user_passward = $_REQUEST['password'];

    $sql = "select * from user where user_account = '$user_account' and user_password = '$user_passward'";
    
    $result = $mysqli->query($sql);
    // var_dump($result);
    $mysqli->close();

    if($result->num_rows>0){
        $row = $result->fetch_assoc();

        setcookie('username',$row['user_account'],time()+3600*24,'/');
        setcookie('isLogined','true',time()+3600*24,'/');

        // echo '<script>alert("登录成功");</script>';
        echo '<script>location.href="../src/html/shouye.html"</script>';

    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../src/html/login.html"</script>';

    }
?>
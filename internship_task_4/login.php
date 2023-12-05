<?php
     $name = $_POST['name'];
     $password = $_POST['password'];

     //Database Connection
     $conn = new mysqli('localhost', 'root', '', 'test');
     if ($conn->connect_error) {
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("select * from registration where name = ?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if ($stmt_result->num_rows > 0) {
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password){
                echo "<h2>Login Successfully</h2>";
            }else{
                echo "<h2>Invalid Password</h2>";
            }
        }else{
            echo "<h2>Invalid Username</h2>";
        }
    }
?>
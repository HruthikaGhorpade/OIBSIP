<?php
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$age = $_POST['age'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirmpassword = $_POST['confirmpassword'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'test');
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration(name, mobile, age, email, password, confirmpassword)
        VALUES(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("siisss", $name, $mobile, $age, $email, $password, $confirmpassword);
    $stmt->execute();
    if ($stmt->error) {
        echo "Error: " . $stmt->error;
    } else {
        echo "Registration Successful...";
    }
    $stmt->close();
    $conn->close();
}
?>

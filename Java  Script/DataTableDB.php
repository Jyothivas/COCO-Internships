<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$servername = "localhost:8889";
$username = "root";
$password = "Shree@721";
$database = "MyDB";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sr = $_POST["sr"];
    $email = $_POST["email"];
    $age = $_POST["age"];
    $gender = $_POST["gender"];

    $stmt = $conn->prepare("INSERT INTO Employee  VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isss", $sr, $email, $age, $gender);

    if ($stmt->execute()) {
        echo "Data added successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    


    $stmt->close();
}

$conn->close();
?>

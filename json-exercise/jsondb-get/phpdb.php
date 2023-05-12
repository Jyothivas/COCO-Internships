<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["x"], false);

$conn = new mysqli('localhost','root','','cocodb');

$stmt = $conn->prepare("SELECT CustomerName FROM customer LIMIT ?");
$stmt->bind_param("s", $obj->limit); 
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
$stmt->close();
echo json_encode($outp);
?>
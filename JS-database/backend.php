<?php
    function insert(){
        $array=$_GET['data'];
        $data = explode(",", $array);
        $conn = new mysqli('localhost','root','','cocodb');
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO employee(Email,Age,Gender) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $data[0], $data[1], $data[2]);
        $stmt->execute();
        $stmt->close();
        $display = "SELECT * FROM employee";
        $result = $conn->query($display);
        $empinfo=array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $empinfo[] = $row;
            }
        }
        $empinfo_json = json_encode($empinfo);
        echo $empinfo_json;      
}

insert();
    
?>
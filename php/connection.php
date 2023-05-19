<?php
  $servername = "localhost";
  $user = "root";
  $pass = "root";
  $dbname = "catherine_website";

  $conn = new mysqli ($servername, $user, $pass, $dbname);

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
  
    if (isset($_POST["save_as_json"]) && $_POST["save_as_json"] == "true") {
    
      $formData = array(
        'name' => $name,
        'email' => $email,
        'message' => $message
      );
    
      $jsonData = file_get_contents('message.json');
      $data = json_decode($jsonData, true);
    
      $data['messages'][] = $formData;

      $jsonData = json_encode($data);
      file_put_contents('message.json', $jsonData);
    }

  
    $sql = "INSERT INTO contact(nama, email, messages) VALUES ('$name', '$email', '$message')";
    mysqli_query($conn, $sql);

  }
  mysqli_close($conn);
?>
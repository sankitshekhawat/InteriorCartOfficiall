<?php
$firstName = $_POST['firstName'];
$email = $_POST['email'];
$Number = $_POST['Number'];
$message = $_POST['message'];

// Database connection
$conn = new mysqli('localhost', 'root', 'test_1', 'your_database_name');

if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO registration (firstName, email, Number, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $email, $Number, $message);

    // Execute
    if ($stmt->execute()) {
        echo "Registration successful.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>

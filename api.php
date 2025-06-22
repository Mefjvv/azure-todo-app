<?php
header('Content-Type: application/json');
// Tutaj możesz dodać obsługę połączenia z Azure Database
// Na potrzeby demonstracji zwracamy przykładowe dane
echo json_encode(['status' => 'ok', 'message' => 'ToDo API działa!']);
?>

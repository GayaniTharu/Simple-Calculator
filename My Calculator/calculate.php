<?php
// Retrieve the JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Evaluate the expression and send the result as JSON
$expression = $data['expression'];
$result = eval("return $expression;");
echo json_encode(['result' => $result]);
?>

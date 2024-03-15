<?php
function checkPortStatus($ip, $port) {
    $timeout = 2; // Tiempo de espera en segundos

    $fp = @fsockopen($ip, $port, $errno, $errstr, $timeout);
    if ($fp !== false) {
        fclose($fp);
        return true; // Puerto abierto
    } else {
        return false; // Puerto cerrado
    }
}

$ip = '186.64.113.209';
$port = 7777;

$status = checkPortStatus($ip, $port);

// Mostrar imagen según el estado del puerto
if ($status) {
    echo '<img src="ok.png" alt="OK">';
} else {
    echo '<img src="off.png" alt="OFF">';
}
?>

<?php

try {
    $db = new PDO("mysql:host=localhost;dbname=JavaScriptApp;charset=utf8", "root","");
}catch (PDOException $e){
    echo $e->getMessage();
    die();
}

$list = $db->query("SELECT * from phone_book")->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($list);
<?php



if(isset($_POST["full_name"]) && isset($_POST["email"]) && isset($_POST["phone"])){

    try {
        $db = new PDO("mysql:host=localhost;dbname=JavaScriptApp;charset=utf8", "root","hyOP.28!dsEd");
    }catch (PDOException $e){
        echo $e->getMessage();
        die();
    }

    $prepare = $db->prepare("INSERT INTO phone_book SET full_name = :full_name, email = :email, phone = :phone");

    $insert = $prepare->execute(array(
        "full_name" => $_POST["full_name"],
        "email" => $_POST["email"],
        "phone" => $_POST["phone"],
    ));

    echo $insert;

}


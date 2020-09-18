<?php

if(isset($_POST["first_name"]) && isset($_POST["last_name"])){

    $first_name  = $_POST["first_name"];
    $last_name = $_POST["last_name"];

    echo "Welcome " . $first_name . " " . $last_name;

}
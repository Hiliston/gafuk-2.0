<?php
include "auth.php";
include "access.php";
include "commands.php";
include "json.php";
include "compositions.php";
include  "market.php";


function start(){
    $jsonStr = file_get_contents("php://input");
    $json_array = getJSONAsk2($jsonStr);
    echo $json_array;
}


start();



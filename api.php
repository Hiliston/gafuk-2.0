<?php
include "json.php";
include "auth.php";
include "access.php";
include "commands.php";

function start(){
    //$json_array = getJSONAsk($_GET);
    //var_dump($_GET);


    $jsonStr = file_get_contents("php://input");
    $json_array = getJSONAsk($jsonStr);
    echo $json_array;
    //var_dump($jsonStr);
}


start();



//      https://gafuk.ru/api.php?user=1212122&token=fghhsdfgdssf&data="тут пошел JSON"

/*
    JSON формат

{
    "status": "ok",
    "command": "",
    "auth": {
                "login": "",
                "token": ""
            },
    "get_data": {

               },
}



 $array = [                                     //Массив для ответа оп API
        "status" => "ok/error",
        "command" => "none(get_news/get_compositions/get_market/get_personal_area/get_personal_messages)",
        "auth" => [
            "login" => "$login",
            "token" => "$token",
            "need_confirm_email" => "true/false"
            ],
        "data" => [
            "login" => "",
            "email" => "",
            "group_id" => "",
            "score" => "",
            "avatar" => "",
            "registration" => "",
            "last_visit" => ""
                    ],
    ];







Доступные команды: auth, personal, messages, market, need_confirm_email

*/


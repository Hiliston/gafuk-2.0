<?php
include "json.php";
include "auth.php";
include "access.php";
include "commands.php";

function start(){
    $json_array = getJSONAsk($_GET);
    echo $json_array;
}






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
        ]
    ];







Доступные команды: auth, personal, messages, market, need_confirm_email

*/


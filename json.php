<?php
function getJSONAsk2($array)
{
    $json_ask = json_decode($array, true);

    if(!empty($json_ask)){
        $auth = globalAuth($json_ask);
        //var_dump($auth);

        $command = $json_ask['command'];

        $user_access = checkUserAccess($json_ask['auth']['login']);

        if($auth['success'] === "true"){
            $data = makeData($json_ask);
            if(($data != null) && ($data !== "not enough rights")){
                $status = "true";
            }else{
                $status = "false";
            }

        }else{
            $status = "false";
            $data = "null";
        }
    }else{
        $status = "false";
        $data = "null";
    }

    $array_answer = [                                     //Массив для ответа оп API
        "status" => "$status",
        "command" => "$command",
        "auth" => $auth,                     //$auth - Массив с блоком авторизации
        "user_access" => $user_access,
        "data" => $data
    ];

    $json_answer = json_encode($array_answer);
    return $json_answer;

}

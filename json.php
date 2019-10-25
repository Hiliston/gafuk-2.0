<?php
function getJSONAsk2($array)
{
    $json_ask = json_decode($array, true);
    if(!empty($json_ask)){
        $auth = globalAuth($json_ask);
        //var_dump($auth);

        $command = $json_ask['command'];
        
        if($auth['success'] == "true"){
            $status = "true";
            $data = makeData($json_ask);
            $array_answer = [                                     //Массив для ответа оп API
                "status" => "$status",
                "command" => "$command",
                "auth" => $auth,                     //$auth - Массив с блоком авторизации
                "data" => $data
            ];
        }else{
            $status = "false";
            $data = "none";
            $array_answer = [                                     //Массив для ответа оп API
                "status" => "$status",
                "command" => "$command",
                "auth" => $auth,                     //$auth - Массив с блоком авторизации
                "data" => $data
            ];
        }

        $json_answer = json_encode($array_answer);
        return $json_answer;




    }else{
        $status = "false";
        $data = "none";
        $array_answer = [                                     //Массив для ответа оп API
            "status" => "$status",
            "command" => "none",
            "auth" => "none",                     //$auth - Массив с блоком авторизации
            "data" => $data
        ];
        $json_answer = json_encode($array_answer);
        return $json_answer;
    }

}

<?php

function getJSONAsk($array){
    $json_ask = json_decode($array);
    $login = $json_ask['auth']['login'];
    $token = $json_ask['auth']['token'];

    if($json_ask['auth']['need_confirm_email'] == true){

        $email_token = $json_ask['auth']['email_token'];
        $verify_email_token = verifyEmailToken($login, $email_token);
        $array2 = makeJSONAnswerFirstStep($verify_email_token,$login,$token);

    }else{

        $verify_email_token = true;
        $array2 = makeJSONAnswerFirstStep($verify_email_token,$login,$token);

    }











    if($json_ask['command'] == "get_personal_area"){

    }elseif ($json_ask['command'] == "get_compositions"){

    }elseif ($json_ask['command'] == "get_market"){

    }elseif ($json_ask['command'] == "get_personal_messages"){

    }elseif ($json_ask['command'] == "get_news"){

}

    $json_answer = json_encode($array2);
    return $json_answer;
}








function makeJSONAnswerFirstStep($verify_email_token, $login, $token, $command){
    $status = 'none';
    if ($verify_email_token == true){
        //$status == "ok";
        $auth = auth($login, $token);


        //$command = 'none';
        $need_confirm_email = false;

        $array2 = [                                     //Массив для ответа оп API
            "status" => "$status",
            "command" => "$command",
            "auth" => [
                "login" => "$login",
                "token" => "$token",
                "need_confirm_email" => "$need_confirm_email"
            ]
        ];

        if ($auth == 'success'){                        //Авторизация прошла успешно

            $status == "ok";

            //return $array2;

        }elseif($auth == 'not_success'){

            $status == "error";

            //return $array2;

        }elseif ($auth == 'need_confirm_email'){                 //Требуется подтверждение по почте
            $status == "ok";

            $need_confirm_email == true;
            //return $array2;
        }
    }else{
        //$status == "false";

        $array2 = [                                     //Массив для ответа оп API
            "status" => "$status",
            "command" => "$command",
            "auth" => [
                "login" => "$login",
                "token" => "$token",
                "need_confirm_email" => "false"
            ]
        ];
    }

return $array2;

}
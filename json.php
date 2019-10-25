<?php

function getJSONAsk($array){
    $json_ask = json_decode($array);
    //var_dump($json_ask);

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
            $result = getPersonalArea($login, $array2);



            /* $array = [                                     //Запрос к API
        "status" => "ok/error",
        "command" => "get_personal_area(edit_personal_area)",
        "auth" => [
            "login" => "$login",
            "token" => "$token",
            "need_confirm_email" => "true/false"
            ],
        ];*/

            /* $array = [                                     //Ответ от API
            "status" => "ok/error",
            "command" => "get_personal_area(edit_personal_area)",
            "auth" => [
                        "login" => "$login",
                        "token" => "$token",
                        "need_confirm_email" => "true/false"
                         ],
              "data" => [
                        "email" => "",
                        "group_id" => "",
                        "score" => "",
                        "avatar" => "",
                        "registration" => "",
                        "last_visit" => ""
                        ],
                ];*/

    }elseif ($json_ask['command'] == "get_compositions"){

    }elseif ($json_ask['command'] == "get_market"){

    }elseif ($json_ask['command'] == "get_personal_messages"){

    }elseif ($json_ask['command'] == "get_news"){

}

    $json_answer = json_encode($result);
    return $json_answer;
}








function makeJSONAnswerFirstStep($verify_email_token, $login, $token, $command){
    $status = 'none';
    $success = false;
    if ($verify_email_token == true){
        //$status == "ok";
        $auth = auth($login, $token);


        //$command = 'none';
        $need_confirm_email = false;

        $array2 = [                                     //Массив для ответа оп API
            "status" => "$status",
            "command" => "$command",
            "auth" => [
                "success" => "$success",
                "login" => "$login",
                "token" => "$token",
                "need_confirm_email" => "$need_confirm_email"
            ]
        ];

        if ($auth == 'success'){                        //Авторизация прошла успешно

            $status == "ok";
            $success == true;
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
                "success" => "$success",
                "login" => "$login",
                "token" => "$token",
                "need_confirm_email" => "false"
            ]
        ];
    }

return $array2;

}



function test3(){
    $array4 = [                                     //Массив для ответа оп API
        "a" => "1",
        "b" => "2",
        "c" => "7"
    ];

    $array5 = [                                     //Массив для ответа оп API
        "status" => "1",
        "command" => "2",
        "auth" => [
            "success" => "3",
            "login" => "4",
            "token" => "5",
            "need_confirm_email" => "false"
        ]
    ];

    $a = $array4['a'];
    $b = $array4['b'];
    $c = $array4['c'];

    $array5['data'][0] = $a;
    $array5['data'][1] = $b;
    $array5['data'][2] = $c;

    var_dump($array5);
    //echo $array5;
}

//test3();



function test4(){
    $array = [                                     //Запрос к API
        "status" => "ok",
        "command" => "get_personal_area",
        "auth" => [
            "login" => "hiliston",
            "token" => "12345",
            "need_confirm_email" => "false"
        ],
    ];

    var_dump(json_encode($array));
}

//test4();
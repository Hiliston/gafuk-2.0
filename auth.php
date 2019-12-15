<?php
function auth($login, $token){                  //Функция авторизации
    $query = "select * from users where login = '$login'";
    $array = connectDB($query);
    //var_dump($array);
    if ($array['token'] == "none"){           //Проверка на миграцию из старой ДБ
        $newtoken = createNewToken($login, $token);
        if($newtoken == true){
            $command = "proofYourMail";
            $email = generateMail($command, $login);
            if($email == true){
                $auth = "need_confirm_email";
                return $auth;
            }

        }


    }else{                                      //Если не мигрировал, проходим авторизацию
        if ($token == $array['token']){         //Токен совпадает, авторизация успешна
            $auth = "success";
            return $auth;
        }else{
            $auth = "not_success";              //Токен не совпал, ошибка
            return $auth;
        }
    }


}

function createNewToken($login, $token){           //Функция менят пользователю токен
    $query = "UPDATE users SET token = '$token' WHERE login = '$login'";
    $array = connectDB($query);

    if (!empty($array)){
        $email_token = rand(100000, 999999);
        $timeset = time();
        //$lastday = (int)floor($dateto - $datefrom);

        $query2 = "INSERT INTO `temporaly_token`(`login`, `email_token`, `timeset`) VALUES ('$login', '$email_token', '$timeset')";
        $array2 = connectDB($query2);
        //var_dump($array2);
        return $array2;
    }
}

function generateMail($command, $login){                //Отправляет пользователю письма
    if($command == "proofYourMail"){
        $query = "select email, token from users where login = '$login'";
        $array = connectDB($query);                     //Массив с логином и токеном

        $token = $array['token'];

        $to = $array['email'];
        $subject = "Восстановление пароля gafuk";

        $query2 = "select email_token from temporaly_token where login = '$login' and timeset = (select max(timeset) from temporaly_token)";
        $array2 = connectDB($query2);
        $email_token = $array2['email_token'];

        $array_letter = [                                     //Конечный массив со всеми данными
            "status" => "true",
            "command" => "get_personal_messages",
            "auth" => [
                "login" => "$login",
                "token" => "$token",
                "need_confirm_email" => "true",
                "email_token" => "$email_token"
                        ]
                ];
        $json = json_encode($array_letter);

        $letterLink = "http://gafuk-new/$json";
        $message = file_get_contents('./templates/letter.html');
        str_replace('$letterLink', $letterLink, $message); //Ищем ссылку в шаблоне и заменяем массивом из переменной

        $result = mail($to, $subject, $message);                  //Отправляем письмо
        //var_dump($result);
        return $result;

    }elseif ($command == "hello"){

    }

}


function verifyEmailToken($login, $email_token){
    $verify = false;
    $query = "select email_token from temporaly_token where login = '$login' and timeset = (select max(timeset) from temporaly_token)";
    $array = connectDB($query);

    if($array['email_token'] = $email_token){
        $verify == true;
    }else{
        $verify == false;
    }
    return $verify;
}

function globalAuth($array){
    $login = $array['auth']['login'];
    $token = $array['auth']['token'];
    $need_confirm_email = $array['auth']['need_confirm_email'];

    if ($need_confirm_email == "true"){                         //Требуется проверка email?
        $email_token = $array['auth']['email_token'];

        $verify_email_token = verifyEmailToken($login, $email_token);

        if ($verify_email_token == true){                      //Если проверка email токена прошла успешно
            $auth = auth($login, $token);                       //Инициируем проверку логина + токена

            if ($auth == 'success'){                        //Авторизация прошла успешно
                $success = "true";

            }elseif($auth == 'not_success'){                //Авторизация провалена
                $success = "false";

            }
        }else{                                                  //Проверка email токена провалена
            $success = "false";
            }
    }else{                                                      //Не требуется проверка email
        $auth = auth($login, $token);                       //Инициируем проверку логина + токена

        if ($auth == 'success'){                        //Авторизация прошла успешно
            $success = "true";

        }elseif($auth == 'not_success'){
            $success = "false";

        }elseif ($auth == 'need_confirm_email'){                 //Требуется подтверждение по почте
            $success = "false";
            $need_confirm_email = "true";
        }
    }

    $global_auth = [
        "success" => "$success",
        "login" => "$login",
        "token" => "$token",
        "need_confirm_email" => "$need_confirm_email"
    ];
    return $global_auth;                                   //Возвращаем блок auth
}

function connectDB($query){
    $host = "localhost";

    /*$user = "root";
    $password = "root";
    $database = "gafuk_new";*/

    $user = "api_bd_user";
    $password = "l76Rmq0";
    $database = "api";

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    $result = mysqli_query($link, $query);
    //var_dump($result);
    $type = gettype($result);
    if($type == 'boolean'){
        return $result;
        //var_dump($result);
    }else{
        $row = mysqli_fetch_assoc($result);
        //var_dump($row);
    }
    return $row;
}


function connectDB_fetch_all($query){
    $host = "localhost";

    /*$user = "root";
    $password = "root";
    $database = "gafuk_new";*/

    $user = "api_bd_user";
    $password = "l76Rmq0";
    $database = "api";

    /*$database = "id9657271_id9593311_gafuk";
    $user = "id9657271_id9593311_root";
    $password = "root1";*/

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    $result = mysqli_query($link, $query);
    //var_dump($result);
    $type = gettype($result);
    if($type == 'boolean'){
        return $result;
        //var_dump($result);
    }else{
        $row = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //var_dump($row);
    }
    return $row;
}
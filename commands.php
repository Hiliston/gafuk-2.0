<?php
/*function getPersonalArea($login, $array2){
    $query = "select * from users where login = '$login'";
    $result = connectDB($query);

    $email = $result['email'];
    $group_id = $result['group_id'];
    $score = $result['score'];
    $avatar = $result['avatar'];
    $registration = $result['registration'];

    $array2['data']['email'] = $email;
    $array2['data']['group_id'] = $group_id;
    $array2['data']['score'] = $score;
    $array2['data']['avatar'] = $avatar;
    $array2['data']['registration'] = $registration;

    return $array2;
}*/

function makeData($array){
    $command = $array['command'];
    if($command == "get_personal_area") {
        $data = getPersonalArea($array);

    }elseif ($command == "get_compositions"){

    }elseif ($command == "get_market"){

    }elseif ($command == "get_personal_messages"){

    }elseif ($command == "get_news"){

    }


    return $data;
}

function getPersonalArea($array){
    $login = $array['auth']['login'];
    $query = "select id, login, email, group_id, score, avatar, registration, last_visit, telegram from users where login = '$login'";
    $result = connectDB($query);
    return $result;

}
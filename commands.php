<?php
function getPersonalArea($login, $array2){
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
}
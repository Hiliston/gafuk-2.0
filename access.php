<?php
function checkGroupAccess($login){
    $query = "select group_id from users where login = '$login'";
    $group_id = connectDB($query);
    return $group_id['group_id'];
}

function checkUserAccess($login){
    //var_dump($login);
    $query1 = "select id from users where login = '$login'";
    $user_id = connectDB($query1);
    $user_id = $user_id['id'];
    //var_dump($user_id['id']);

    $query2 = "select * from access where user_id = '$user_id'";
    $user_access = connectDB($query2);
    return $user_access;

}


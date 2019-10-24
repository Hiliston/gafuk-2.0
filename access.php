<?php
function checkAccess($login){
    $query = "select group_id from users where login = '$login'";
    $group_id = connectDB($query);
    return $group_id['group_id'];
}
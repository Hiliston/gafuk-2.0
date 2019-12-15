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
    $access_level = checkGroupAccess($array['auth']['login']);
    $user_access = checkUserAccess($array['auth']['login']);

    if($command == "get_personal_area") {
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = getPersonalArea($array);
        }else{
            $data = "not enough rights";
        }

    }elseif ($command == "get_compositions"){
        $need_access_level = 4;
        if(($access_level <= $need_access_level) && ($user_access['compositions'] = 1)){
            $data = getCompositions($array);
        }else{
            $data = "not enough rights";
        }

    }elseif ($command == "get_market"){
        $need_access_level = 4;
        if(($access_level <= $need_access_level) && ($user_access['market'] = 1)){
            $data = getMarket($array);
        }else{
            $data = "not enough rights";
        }

    }elseif ($command == "get_personal_messages"){
        $need_access_level = 4;
        if(($access_level <= $need_access_level) && ($user_access['messages'] = 1)){
            $data = getPersonalMessages($array);
        }else{
            $data = "not enough rights";
        }
    }elseif ($command == "get_news"){

    }elseif ($command == "get_games"){

    }elseif ($command == "get_users"){

    }elseif ($command == "get_friend_list"){
        $need_access_level = 4;
        if(($access_level <= $need_access_level) && ($user_access['users'] = 1)){
            $data = getFriendList($array);
        }else{
            $data = "not enough rights";
        }
    }elseif ($command == "get_black_list"){
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = getBlackList($array);
        }else{
            $data = "not enough rights";
        }
    }

    /*==================Функции изменения данных==================*/

    elseif ($command == "send_personal_messages"){
        $need_access_level = 4;
        if(($access_level <= $need_access_level) && ($user_access['messages'] = 1)){
            $data = sendPersonalMessages($array);
        }else{
            $data = "not enough rights";
        }
    }elseif ($command == "grant_user_access"){
        $need_access_level = 2;
        if(($access_level <= $need_access_level) && ($user_access['edit_access'] = 1)){
            $data = grantUserAccess($array);
        }else{
            $data = "not enough rights";
        }
    }elseif ($command == "check_personal_message"){
        $need_access_level = 4;
        if(($access_level <= $need_access_level) && ($user_access['messages'] = 1)){
            $data = checkPersonalMessage($array);
        }else{
            $data = "not enough rights";
        }
    }elseif (($command == "add_friend") && ($user_access['users'] = 1)){
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = addFriend($array);
        }else{
            $data = "not enough rights";
        }
    }elseif (($command == "add_black_list") && ($user_access['users'] = 1)){
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = addBlackList($array);
        }else{
            $data = "not enough rights";
        }
    }elseif (($command == "delete_friend") && ($user_access['users'] = 1)){
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = deleteFriend($array);
        }else{
            $data = "not enough rights";
        }
    }elseif (($command == "confirm_friend") && ($user_access['users'] = 1)){
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = confirmFriend($array);
        }else{
            $data = "not enough rights";
        }
    }elseif (($command == "delete_black_list") && ($user_access['users'] = 1)){
        $need_access_level = 4;
        if($access_level <= $need_access_level){
            $data = deleteBlackList($array);
        }else{
            $data = "not enough rights";
        }
    }


    return $data;
}

/*==================Функции запроса данных==================*/


function getPersonalArea($array){
    $login = $array['auth']['login'];
    $query = "select id, login, email, group_id, score, avatar, registration, last_visit_date_time, online_status, telegram from users where login = '$login'";
    $result = connectDB($query);
    return $result;

}

function getPersonalMessages($array){
    $login = $array['auth']['login'];
    //var_dump($login);
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);
    $user_id = $result1['id'];
    //var_dump($user_from_id);
    //$min = (int)($array['data'][0]['list']) * 10;
    /*$max = 10;
    if((int)($array['data'][0]['list']) == 1){
        $min = 1;
    }elseif((int)($array['data'][0]['list']) > 0){
        $min = ((int)($array['data'][0]['list'])) * 10;
    }else{
        $result2 = null;
    }*/

   /* $offset = (int)$array['data'][0]['list'] * 10 - 10;

    $limit = 10;
    $query2 = "цвцввцфвц";
    $result2 = connectDB_fetch_all($query2);
    ///var_dump($query2);
    return $result2;*/
}


function getFriendList($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $user_id = $result1['id'];
    $query2 = "SELECT user_two as friend_id  FROM `friend_list` WHERE user_one = '$user_id' and confirm = 'confirmed'
                union
                select user_one as friend_id  FROM `friend_list` WHERE user_two = '$user_id' and confirm = 'confirmed'
                 ";
    $confirmed_friends = connectDB_fetch_all($query2);

    $query3 = "select user_two from `friend_list` where user_one = '$user_id' and confirm = 'wait'";
    $output_request = connectDB_fetch_all($query3);

    $query4 = "select user_two from `friend_list` where user_one = '$user_id' and confirm = 'abort'";
    $output_aborted = connectDB_fetch_all($query4);

    $query5 = "select user_one from `friend_list` where user_two = '$user_id' and confirm = 'wait'";
    $input_request = connectDB_fetch_all($query5);

    $query6 = "select user_one from `friend_list` where user_two = '$user_id' and confirm = 'abort'";
    $input_aborted = connectDB_fetch_all($query6);

    $friend_list = [
        'confirmed' => $confirmed_friends,
        'output_request' => $output_request,
        'output_aborted' => $output_aborted,
        'input_request' => $input_request,
        'input_aborted' => $input_aborted,
    ];

    return $friend_list;


    //INSERT INTO `friend_list` (`user_id`, `friend_id`) VALUES ('1', '3'), ('2', '3');
}

function getBlackList($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $user_id = $result1['id'];
    $query2 = "SELECT user_two as enemy_id FROM `black_list` WHERE user_one = '$user_id'";
    $output_blocked = connectDB_fetch_all($query2);

    $query3 = "select user_one as enemy_id FROM `black_list` WHERE user_two = '$user_id'";
    $input_blocked = connectDB_fetch_all($query3);

    $black_list = [
        'output_blocked' => $output_blocked,
        'input_blocked' => $input_blocked,
    ];

    return $black_list;


    //INSERT INTO `friend_list` (`user_id`, `friend_id`) VALUES ('1', '3'), ('2', '3');
}

function getUserInformationLite(){

}

function getUserInformationFull(){

}
/*==================Функции изменения данных==================*/


function grantUserAccess($array){
    $user_id = $array['user_access']['user_id'];
    $messages = $array['user_access']['messages'];
    $compositions = $array['user_access']['compositions'];
    $market = $array['user_access']['market'];
    $users = $array['user_access']['users'];
    $news = $array['user_access']['news'];
    $edit_access = $array['user_access']['edit_access'];

    $query1 = "select user_id from access where user_id = '$user_id'";
    $result1 = connectDB($query1);
    if (!empty($result1['user_id'])){
        $query2 = "UPDATE `access` SET `messages` = '$messages', `compositions` = '$compositions', `market` = '$market', `users` = '$users', `news` = '$news', `edit_access` = '$edit_access' WHERE `access`.`user_id` = '$user_id'";
        $result2 = connectDB($query2);
    }else{
        $query2 = "INSERT INTO `access` (`access_rule_id`, `user_id`, `messages`, `compositions`, `market`, `users`, `news`, `edit_access`) VALUES (NULL, '$user_id', '$messages', '$compositions', '$market', '$users', '$news', '$edit_access')";
        $result2 = connectDB($query2);
    }


    return $result2;
}

function sendPersonalMessages($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);
    //var_dump($array);

    $user_from_id = $result1['id'];
    $user_to_id = $array['data'][0]['user_to_id'];
    $message = $array['data'][0]['message'];
    $timeset = $array['data'][0]['timeset'];
    //$timeset = date();
    //var_dump($user_to_id);

    if ($user_from_id == $user_to_id){      //Проверка, что пользователь не пытается слать сообщения сам себе
        $result2 = null;
    }else{
        $query4 = "select user_two as blocked_user from black_list where user_one = '$user_to_id'
                    union 
                    select user_one as blocked_user from black_list where user_two = '$user_to_id'";
        $result4 = connectDB_fetch_all($query4);

        if (!empty($result4[0]['blocked_user'])){  //Проверка, что пользователь не в блок листе
            $result2 = null;
        }else{
            $query3 = "select dialog_id from dialogs where (user_from_id = '$user_from_id' and user_to_id = '$user_to_id') or (user_from_id = '$user_to_id' and user_to_id = '$user_from_id')";
            $result3 = connectDB($query3);

            if(empty($result3['dialog_id'])){
                $dialog_id = uniqid();//rand(10000000, 99999999);
            }else{
                $dialog_id = $result3['dialog_id'];
            }
            $message_id = uniqid();
            $query2 = "INSERT INTO `dialogs` (`dialog_id`, `message_id`, `user_from_id`, `user_to_id`, `message`, `timeset`) VALUES ('$dialog_id', '$message_id', '$user_from_id', '$user_to_id', '$message', '$timeset');";
            $result2 = connectDB_fetch_all($query2);
        }

    }
    return $result2;
}

function checkPersonalMessage($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $user_id = $result1['id'];
    $message_id = $array['data'][0]['message_id'];
    $query2 = "select message_id from dialogs where message_id = '$message_id' and user_from_id = '$user_id' or user_to_id = '$user_id'";
    $result2 = connectDB($query2);

    if (!empty($result2['message_id'])){
        $query3 = "update `dialogs` set `cheked` = '1' where message_id = '$message_id'";
        $result3 = connectDB($query3);
    }else{
        $result3 = null;
    }
    return $result3;
}

function addFriend($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $friend_id = $array['data'][0]['friend_id'];
    $user_id = $result1['id'];
    if ($user_id == $friend_id){      //Проверка, что пользователь не пытается добавить в друзья самого себя
        $result2 = null;
    }else{                          //Проверка, что пользователи еще не являются друзьями
        $query2 = "select user_two from friend_list where user_one = '$user_id' and user_two = '$friend_id'
                    union 
                    select user_one from friend_list where user_two = '$user_id' and user_one = '$friend_id'";
        $result2 = connectDB_fetch_all($query2);
        if (!empty($result2)){
            $result2 = null;
        }else{ //Проверка, что ползователи не забанили друг друга

            $query4 = "select user_two as blocked_user from black_list where user_one = '$friend_id'
                    union 
                    select user_one as blocked_user from black_list where user_two = '$friend_id'";
            $result4 = connectDB_fetch_all($query4);

            if (!empty($result4[0]['blocked_user'])){  //Проверка, что ползователи не забанили друг друга
                $result2 = null;
            }else{
                $query2 = "INSERT INTO `friend_list` (`record_id`, `user_one`, `user_two`, `confirm`) VALUES (NULL, '$user_id', '$friend_id', 'wait');";
                $result2 = connectDB($query2);
            }
        }
    }
    return $result2;
}

function confirmFriend($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $user_id = $result1['id'];
    $friend_id = $array['data'][0]['friend_id'];
    $query2 = "UPDATE `friend_list` SET `confirm` = 'confirmed' WHERE user_two = '$user_id' and user_one = '$friend_id' ";
    $result2 = connectDB($query2);

    return $result2;
}


function deleteFriend($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $user_id = $result1['id'];
    $friend_id = $array['data'][0]['friend_id'];
    $query2 = "delete  from friend_list where (user_one = '$user_id' and user_two = '$friend_id') or (user_two = '$user_id'and user_one = '$friend_id')";
    $result2 = connectDB($query2);

    return $result2;
}

function addBlackList($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $enemy_id = $array['data'][0]['enemy_id'];
    $user_id = $result1['id'];
    if ($user_id == $enemy_id){      //Проверка, что пользователь не пытается добавить в черный список самого себя
        $result3 = null;
    }else{                          //Проверка, что пользователи еще не заблокировали друг друга
        $query2 = "select user_two from black_list where user_one = '$user_id' and user_two = '$enemy_id'
                    union 
                    select user_one from black_list where user_two = '$user_id' and user_one = '$enemy_id'";
        $result2 = connectDB_fetch_all($query2);
        //var_dump($result2);
        if (!empty($result2)){
            $result2 = null;
        }else{
            $query2 = "INSERT INTO `black_list` (`record_id`, `user_one`, `user_two`) VALUES (NULL, '$user_id', '$enemy_id');";
            //var_dump($query2);
            $result2 = connectDB($query2);
                if (!empty($result2)){
                    $query2 = "delete  from friend_list where user_one = '$user_id' and user_two = '$enemy_id' or user_two = '$user_id'and user_one = '$enemy_id'";         //Разрыв связи между пользователями

                    $result2 = connectDB($query2);

                }
        }
    }
    return $result2;
}

function deleteBlackList($array){
    $login = $array['auth']['login'];
    $query1 = "select id from users where login = '$login'";
    $result1 = connectDB($query1);

    $user_id = $result1['id'];
    $enemy_id = $array['data'][0]['enemy_id'];
    $query2 = "delete  from black_list where (user_one = '$user_id' and user_two = '$enemy_id')";
    $result2 = connectDB($query2);

    return $result2;
}

function changeOnlineStatus(){

}
/*==================Функции обратного вызова==================*/
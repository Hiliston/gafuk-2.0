-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 25 2019 г., 18:55
-- Версия сервера: 8.0.15
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `gafuk`
--

-- --------------------------------------------------------

--
-- Структура таблицы `compositions`
--

CREATE TABLE `compositions` (
  `composition_id` int(11) NOT NULL,
  `game_name` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `temporaly_token`
--

CREATE TABLE `temporaly_token` (
  `login` text NOT NULL,
  `email_token` int(11) NOT NULL,
  `timeset` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `temporaly_token`
--

INSERT INTO `temporaly_token` (`login`, `email_token`, `timeset`) VALUES
('hiliston', 891181, 1572015997);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` text NOT NULL,
  `token` text NOT NULL,
  `email` text NOT NULL,
  `group_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `avatar` text NOT NULL,
  `registration` date NOT NULL,
  `last_visit` date NOT NULL,
  `last_ip` text NOT NULL,
  `telegram` text NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `token`, `email`, `group_id`, `score`, `avatar`, `registration`, `last_visit`, `last_ip`, `telegram`, `active`) VALUES
(1, 'hiliston', '12345', 'hiliston@yandex.ru', 1, 50, '1.jpg', '2019-12-20', '2019-10-01', '192.168.1.1', '@niga', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user_group`
--

CREATE TABLE `user_group` (
  `group_id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user_group`
--

INSERT INTO `user_group` (`group_id`, `description`) VALUES
(1, 'admin'),
(2, 'organizator'),
(3, 'moderator'),
(4, 'user'),
(5, 'guest');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `compositions`
--
ALTER TABLE `compositions`
  ADD PRIMARY KEY (`composition_id`);

--
-- Индексы таблицы `temporaly_token`
--
ALTER TABLE `temporaly_token`
  ADD PRIMARY KEY (`login`(20));

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`group_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

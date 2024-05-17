-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 07, 2023 lúc 11:30 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `create_exam`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_name` varchar(100) NOT NULL,
  `correct_answer` tinyint(1) DEFAULT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `answer`
--

INSERT INTO `answer` (`id`, `question_id`, `answer_name`, `correct_answer`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 0, '4 nội dung', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 0, '3 nội dung', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 1),
(2, 0, '5 nội dung', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 2),
(3, 0, '2 nội dung', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 3),
(4, 1, 'Nói đi đôi với làm', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 4),
(5, 1, 'Tu dưỡng đạo đức suốt đời', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 5),
(6, 1, 'Nâng cao dân trí', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 6),
(7, 1, 'Yêu thương con người', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 7),
(8, 2, '1909', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 8),
(9, 2, '1908', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 9),
(10, 2, '1906', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 10),
(11, 2, '1907', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 11),
(12, 3, 'Liên Xô vĩ đại', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 12),
(13, 3, 'Đường Kách Mệnh', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 13),
(14, 3, 'Đạo đức cách mạng', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 14),
(15, 3, 'Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 15),
(16, 4, 'Thông báo trong chương trình sử dụng các lệnh tính toán, thông báo các biến sử dụng trong thân chươn', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 16),
(17, 4, 'Khai báo các câu lệnh được sử dụng trong chương trình. Phải tạo các câu lệnh trước thì mới sử dụng đ', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 17),
(18, 4, 'Thông báo cho bộ tiền biên dịch thêm các thư viện chuẩn trong C++. Các lệnh được sử dụng trong thân ', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 18),
(19, 4, 'Không có đáp án đúng.', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 19),
(20, 5, '1', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 20),
(21, 5, '2', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 21),
(22, 5, '3', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 22),
(23, 5, '4', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 23),
(24, 6, 'Là stream đầu ra chuẩn trong C++.', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 24),
(25, 6, 'Là lệnh chú thích trong C++', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 25),
(26, 6, 'Là stream đầu vào chuẩn của C++.', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 26),
(27, 6, 'Là lệnh khai báo một biến.', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 27),
(28, 7, 'Là lệnh chú thích trong C++.', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 28),
(29, 7, 'Là lệnh khai báo một biến.', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 29),
(30, 7, 'Là stream đầu ra chuẩn trong C++.', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 30),
(31, 7, 'Là stream đầu vào chuẩn của C++.', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 31),
(32, 8, 'Dấu ,', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 32),
(33, 8, 'Dấu .', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 33),
(34, 8, 'Dấu :', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 34),
(35, 8, 'Dấu ;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 35),
(36, 9, '>>', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 36),
(37, 9, '<<', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 37),
(38, 9, '//', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 38),
(39, 9, '||', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 39),
(40, 10, ' * và * ', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 40),
(41, 10, '<<', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 41),
(42, 10, '//', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 42),
(43, 10, '>>', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 43),
(44, 11, '>>', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 44),
(45, 11, ' * và * ', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 45),
(46, 11, '<<', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 46),
(47, 11, '//', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 47),
(48, 12, '*Lập trình C++', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 48),
(49, 12, '//Lập trình C++', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 49),
(50, 12, ' ', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 50),
(51, 12, '\\Lập trình C++', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 51),
(52, 13, ';', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 52),
(53, 13, '= ;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 53),
(54, 13, 'int item = 0;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 54),
(55, 13, 'Tất cả đều sai', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 55),
(56, 14, '0', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 56),
(57, 14, '-1', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 57),
(58, 14, '1', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 58),
(59, 14, 'Do not return a value', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 59),
(60, 15, 'start()', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 60),
(61, 15, 'system()', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 61),
(62, 15, 'main()', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 62),
(63, 15, 'program()', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 63),
(64, 16, 'funct;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 64),
(65, 16, 'funct x, y;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 65),
(66, 16, 'funct();', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 66),
(67, 16, 'int funct();', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 67),
(68, 17, 'int funct();', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 68),
(69, 17, 'int funct(int x) {return x=x+1;}', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 69),
(70, 17, 'void funct(int) {printf( “Hello” );', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 70),
(71, 17, 'void funct(x) {printf( “Hello” ); }', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 71),
(72, 18, ':', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 72),
(73, 18, ';', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 73),
(74, 18, '-', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 74),
(75, 18, 'A newline', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 75),
(76, 19, 'end;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 76),
(77, 19, 'break;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 77),
(78, 19, 'stop;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 78),
(79, 19, 'continue;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 79),
(80, 20, 'all', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 80),
(81, 20, 'continue', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 81),
(82, 20, 'default', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 82),
(83, 20, 'orther', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 83),
(84, 21, 'One', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 84),
(85, 21, 'Zero', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 85),
(86, 21, 'Hello World', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 86),
(87, 21, 'ZeroHello World', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 87),
(88, 22, 'int x;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 88),
(89, 22, 'int &x;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 89),
(90, 22, 'ptr x;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 90),
(91, 22, 'int *x;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 91),
(92, 23, '*a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 92),
(93, 23, 'a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 93),
(94, 23, '&a;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 94),
(95, 23, 'address(a);', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 95),
(96, 24, 'a;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 96),
(97, 24, '*a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 97),
(98, 24, '&a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 98),
(99, 24, 'address(a);', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 99),
(100, 25, 'a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 100),
(101, 25, 'val(a);', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 101),
(102, 25, '*a;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 102),
(103, 25, '&a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 103),
(104, 26, 'new', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 104),
(105, 26, 'malloc', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 105),
(106, 26, 'create', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 106),
(107, 26, 'value', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 107),
(108, 27, 'b→var;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 108),
(109, 27, 'b.var;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 109),
(110, 27, 'b-var;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 110),
(111, 27, 'b>var;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 111),
(112, 28, 'b→var;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 112),
(113, 28, 'b.var;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 113),
(114, 28, 'b-var;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 114),
(115, 28, 'b>var;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 115),
(116, 29, 'struct {int a;}', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 116),
(117, 29, 'struct a_struct {int a;}', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 117),
(118, 29, 'struct a_struct int a;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 118),
(119, 29, 'struct a_struct {int a;};', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 119),
(120, 30, 'struct foo;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 120),
(121, 30, 'struct foo var;', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 121),
(122, 30, 'foo;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 122),
(123, 30, 'int foo;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 123),
(124, 31, 'int arr[10];', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 124),
(125, 31, 'int arr;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 125),
(126, 31, 'arr{10};', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 126),
(127, 31, 'array arr[10];', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 127),
(128, 32, '29', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 128),
(129, 32, '28', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 129),
(130, 32, '0', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 130),
(131, 32, 'Programmer-defined', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 131),
(132, 33, 'array arr[20][20];', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 132),
(133, 33, 'int arr[20][20];', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 133),
(134, 33, 'int arr[20, 20];', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 134),
(135, 33, 'char arr[20];', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 135),
(136, 34, 'foo[6];', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 136),
(137, 34, 'foo[7];', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 137),
(138, 34, 'foo(7);', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 138),
(139, 34, 'foo;', 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 139);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `authen`
--

CREATE TABLE `authen` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(100) NOT NULL,
  `value_service` varchar(100) NOT NULL,
  `create_at` datetime NOT NULL,
  `time_release` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `authen`
--

INSERT INTO `authen` (`id`, `user_id`, `token`, `value_service`, `create_at`, `time_release`, `delete_flag`) VALUES
(0, 0, 'fiuiwfafiweifiweuf', 'ET2031', '2023-04-02 00:25:12', '2023-04-03 00:00:00', 0),
(1, 1, 'gewafklewfiwfegdrf', 'ET3310', '2023-04-02 00:00:00', '2023-04-03 00:00:00', 0),
(2, 2, 'iuksvueffuedrudkdg', 'SSH1151', '2023-04-02 07:30:00', '2023-04-03 00:00:00', 0),
(3, 3, 'fhjksdfueuwfwifure', 'ET2100', '2023-04-03 04:00:00', '2023-04-04 00:00:00', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chapter`
--

CREATE TABLE `chapter` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `chapter_name` varchar(100) NOT NULL,
  `chapter_number` int(11) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chapter`
--

INSERT INTO `chapter` (`id`, `course_id`, `chapter_name`, `chapter_number`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 1, 'Phần C', 1, 4, '2023-04-02 00:23:44', 4, '2023-04-02 00:23:54', 0, 0),
(1, 1, 'Phần C++', 2, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 1),
(2, 2, 'Phân tích luận điểm cách mạng giải phóng dân tộc phải đi theo con đường vô sản của Hồ Chí Minh', 3, 4, '2023-04-02 00:23:44', 4, '2023-04-02 00:23:54', 0, 2),
(3, 3, 'Giới thiệu', 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 3),
(4, 3, 'Mảng', 2, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 4),
(5, 3, 'Cấu trúc danh sách', 3, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 5),
(6, 3, 'Danh sách móc nối', 4, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 6),
(7, 3, 'Đệ quy', 5, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 7),
(8, 3, 'Cây', 6, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 8),
(9, 3, 'Các giải thuật sắp xếp & tìm kiếm', 7, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 9),
(10, 3, 'Đồ thị', 8, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `created_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `course`
--

INSERT INTO `course` (`id`, `created_id`, `name`, `code`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 1, 'Kỹ thuật mật mã', 'ET3310', '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 1, 'Kỹ thuật lập trình C/C++', 'ET2031', '2023-04-02 00:25:12', 1, '2023-04-02 00:25:30', 0, 1),
(2, 1, 'Tư tưởng Hồ Chí Minh', 'SSH1151', '2023-04-02 00:30:44', 1, '2023-04-02 00:32:54', 0, 2),
(3, 1, 'Cấu trúc dữ liệu & giải thuật', 'ET2100', '2023-04-02 02:30:44', 1, '2023-04-02 02:32:54', 0, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `exam`
--

CREATE TABLE `exam` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `semester` varchar(30) NOT NULL,
  `school_year` varchar(30) NOT NULL,
  `exam_type` varchar(30) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `exam`
--

INSERT INTO `exam` (`id`, `course_id`, `semester`, `school_year`, `exam_type`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 2, '2022-2', '2022-2023', 'Cuối kỳ', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `exam_question`
--

CREATE TABLE `exam_question` (
  `id` int(11) NOT NULL,
  `exam_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `exam_question`
--

INSERT INTO `exam_question` (`id`, `exam_id`, `question_id`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 0, 0, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 0, 1, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 1),
(2, 0, 2, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 2),
(3, 0, 3, 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` varchar(50) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `level`
--

INSERT INTO `level` (`id`, `level`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 'Khó', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 'Trung bình', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 1),
(2, 'Dễ', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `role` varchar(100) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `permission`
--

INSERT INTO `permission` (`id`, `role`, `created_id`, `created_at`) VALUES
(0, 'Admin', 1, '2023-04-02 00:25:12'),
(1, 'Trưởng bộ môn', 1, '2023-04-02 00:25:12'),
(2, 'Phó bộ môn', 1, '2023-04-02 00:25:12'),
(3, 'Giảng dạy', 1, '2023-04-02 00:27:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `question_name` varchar(300) NOT NULL,
  `level_id` int(11) NOT NULL,
  `question_weight` float NOT NULL,
  `image` varchar(50) NOT NULL DEFAULT '',
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `question`
--

INSERT INTO `question` (`id`, `section_id`, `question_name`, `level_id`, `question_weight`, `image`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 3, 'Quan điểm của Hồ Chí Minh về vai trò của văn hóa có mấy nội dung?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 3, 'Theo Hồ Chí Minh, nguyên tắc xây dựng đạo đức của con người Việt Nam trong thời đại mới cần phải có là:', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 1),
(2, 3, 'Hồ Chí Minh tham gia phong trào chống thuế của nông dân Trung Kỳ năm nào?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 2),
(3, 3, '“Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong”. Câu nói trên của Hồ Chí Minh nói trong tác phẩm nào?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 3),
(4, 0, 'Trong cấu trúc chương trình C++, lệnh #include dùng để làm gì?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 4),
(5, 0, 'Trong cấu trúc chương trình C++ có bao nhiêu hàm main()?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 5),
(6, 0, 'Lệnh cout trong C++ có tác dụng gì?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 6),
(7, 0, 'Lệnh cin trong C++ có tác dụng gì?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 7),
(8, 0, 'Kết thúc một dòng lệnh trong chương trình C++, ta sử dụng ký hiệu gì?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 8),
(9, 0, 'Lệnh cout trong C++ đi kèm với cặp dấu nào?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 9),
(10, 0, 'Để chú thích trên 1 dòng lệnh trong chương trình C++, ta dùng cặp dấu nào?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 10),
(11, 0, 'Để chú thích trên nhiều dòng lệnh trong chương trình C++, ta dùng cặp dấu nào?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 11),
(12, 0, 'Chú thích nào sau đây là chính xác?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 12),
(13, 0, 'Cách khai báo biến nào sau đây là đúng?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 13),
(14, 0, 'What is the correct value to return to the operating system upon the successful completion of a program?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 14),
(15, 0, 'What is the only function all C programs must contain?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 15),
(16, 0, 'Which of the following is a valid function call (assuming the function exists)?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 16),
(17,0,'Which of the following is a complete function?', 2, 0.25,null,1,'2023-4-2 0:23:44',1,'2023-4-2 0:23:54',0,17),
(18, 0, 'Which follows the case statement?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 18),
(19, 0, 'What is required to avoid falling through from one case to the next?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 19),
(20, 0, ' What keyword covers unhandled possibilities?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 20),
(21, 1, 'What is the result of the following code?\r\n    #include <stdio.h>\r\n    void main(){\r\n        int x = 0;\r\n        switch(x)\r\n        {\r\n        case 1: printf( \"One\" );\r\n        case 0: printf( \"Zero\" );\r\n        case 2: printf( \"Hello World\" );\r\n    }', 2, 0.25, '', 1, '0123-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 21),
(22, 1, 'Which of the following is the proper declaration of a pointer?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 22),
(23, 1, 'Which of the following gives the memory address of integer variable a?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 23),
(24, 1, 'Which of the following gives the memory address of a variable pointed to by pointer a?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 24),
(25, 1, 'Which of the following gives the value stored at the address pointed to by pointer a?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 25),
(26, 1, 'Which of the following is the proper keyword or function to allocate memory in C?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 26),
(27, 1, 'Which of the following accesses a variable in structure b?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 27),
(28, 1, 'Which of the following accesses a variable in a pointer to a structure, *b?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 28),
(29, 1, 'Which of the following is a properly defined struct?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 29),
(30, 1, 'Which properly declares a variable of struct foo?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 30),
(31, 1, 'Which of the following correctly declares an array?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 31),
(32, 1, 'What is the index number of the last element of an array with 29 elements?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 32),
(33, 1, 'Which of the following is a two-dimensional array?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 33),
(34, 1, 'Which of the following correctly accesses the seventh element stored in foo, an array with 100 elements?', 2, 0.25, '', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 34);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `section_name` varchar(100) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `section`
--

INSERT INTO `section` (`id`, `chapter_id`, `section_name`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 0, 'Tổng quan C/C++', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 0, 'Hướng Hàm', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 1),
(2, 1, 'Hướng đối tượng', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 2),
(3, 2, 'Tư tưởng HCM', 1, '2023-04-23 12:12:17', 1, '2023-04-23 12:12:17', 0, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` int(11) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `school` varchar(100) NOT NULL,
  `faculty` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `code`, `gender`, `birthday`, `email`, `password`, `school`, `faculty`, `created_at`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 'Nguyễn Khánh Toàn', 20203610, 'Nam', '26/08/2002', 'toanngusee@gmail.com', '123456', 'Trường Đại học Bách Khoa Hà Nội', 'Điện tử viễn thông', '2023-04-02 00:23:44', '2023-04-02 00:23:54', 0, 0),
(1, 'Toan oc cho', 20203611, 'Nam', '26/09/2002', 'toanoccho@gmail.com', '123456', 'Trường Đại học Bách Khoa Hà Nội', 'Kỹ thuật hóa học', '2023-04-02 00:25:12', '2023-04-02 00:25:30', 0, 1),
(2, 'Quyền Quang Minh', 20193723, 'Nam', '1/10/2001', 'minh@gmail.com', '123456', 'Trường Đại học Bách Khoa Hà Nội', 'Điện tử viễn thông', '2023-04-02 00:30:44', '2023-04-02 00:32:54', 0, 2),
(3, 'Phạm Quang Huy', 20193728, 'Nam', '1/1/2001', 'huy@gmail.com', '123456', 'Trường Đại học Bách Khoa Hà Nội', 'Điện tử viễn thông', '2023-04-02 00:30:44', '2023-04-02 00:32:54', 0, 3),
(4, 'Toan oc heo', 20203612, 'Nam', '26/10/2002', 'toanocheo@gmail.com', '123456', 'Trường Đại học Bách Khoa Hà Nội', 'Kỹ thuật vật liệu', '2023-04-02 00:30:44', '2023-04-02 00:32:54', 0, 4),
(28, 'Nguyen Khanh Toan99', 20207390, 'Buê đê', '26/08/2002', 'toanngu@gmail.com', '$2b$10$mVppm6MdlwI1892WixFNXu8Ql78dQdcS64/VWzExQSqW6XN2jBfXO', 'Trường đời', 'khoa nhân văn', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(29, 'Nguyen Khanh Toan44', 20207392, 'Buê đê', '11/11/2011', 'toanngu1@gmail.com', '$2b$10$328GYwwtlwcUCyVvUjjEZeetTXeYeytUJ817go9QduTBngqBS0VJ.', 'Trường Đại học Bách Khoa Hà Nội', 'Điện tử viễn thông', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_course`
--

CREATE TABLE `user_course` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user_course`
--

INSERT INTO `user_course` (`id`, `course_id`, `user_id`, `permission_id`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(1, 1, 0, 1, 1, '2023-04-02 00:25:12', 1, '2023-04-02 00:30:00', 0, 1),
(2, 1, 0, 3, 1, '2023-04-02 00:25:12', 1, '2023-04-02 00:30:00', 0, 2),
(3, 1, 1, 2, 1, '2023-04-02 00:25:12', 1, '2023-04-02 00:30:00', 0, 3),
(4, 3, 3, 3, 1, '2023-04-02 00:27:12', 1, '2023-04-02 00:29:00', 0, 4);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `authen`
--
ALTER TABLE `authen`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `exam_question`
--
ALTER TABLE `exam_question`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `user_course`
--
ALTER TABLE `user_course`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `user_course`
--
ALTER TABLE `user_course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
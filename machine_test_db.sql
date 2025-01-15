-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2025 at 08:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `machine_test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CategoryId` int(11) NOT NULL,
  `CategoryName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CategoryId`, `CategoryName`) VALUES
(1, 'Mobiles'),
(2, 'Fridge'),
(3, 'Laptop'),
(4, 'Bags'),
(5, 'Footwear'),
(6, 'Clothing'),
(7, 'Opticals'),
(8, 'Watches'),
(9, 'Beauty Product'),
(10, 'Headphones'),
(11, 'MotorCycle'),
(12, 'MotorCycleCars');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductId` int(11) NOT NULL,
  `ProductName` text NOT NULL,
  `ProductCategory` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductId`, `ProductName`, `ProductCategory`) VALUES
(1, 'iPhone 14', 'Mobiles'),
(2, 'Samsung Galaxy S23', 'Mobiles'),
(3, 'OnePlus 11', 'Mobiles'),
(4, 'Google Pixel 7', 'Mobiles'),
(5, 'Xiaomi Mi 13', 'Mobiles'),
(6, 'Sony Xperia 1 V', 'Mobiles'),
(7, 'Huawei Mate 50', 'Mobiles'),
(8, 'Oppo Find X6', 'Mobiles'),
(9, 'Vivo X90 Pro', 'Mobiles'),
(10, 'Realme GT 3', 'Mobiles'),
(11, 'Whirlpool Double Door', 'Fridge'),
(12, 'LG Frost Free Refrigerator', 'Fridge'),
(13, 'Samsung Smart Refrigerator', 'Fridge'),
(14, 'Bosch 600L Fridge', 'Fridge'),
(15, 'Haier Single Door', 'Fridge'),
(16, 'Godrej 3 Star Fridge', 'Fridge'),
(17, 'Panasonic 360L', 'Fridge'),
(18, 'IFB Double Door Fridge', 'Fridge'),
(19, 'Kelvinator Top Freezer', 'Fridge'),
(20, 'LG Side-by-Side Fridge', 'Fridge'),
(21, 'Nike Air Max', 'Footwear'),
(22, 'Adidas Ultraboost', 'Footwear'),
(23, 'Puma Running Shoes', 'Footwear'),
(24, 'Reebok Classic', 'Footwear'),
(25, 'Converse Chuck Taylor', 'Footwear'),
(26, 'Vans Old Skool', 'Footwear'),
(27, 'Under Armour Sneakers', 'Footwear'),
(28, 'Skechers Go Walk', 'Footwear'),
(29, 'Fila Disruptor', 'Footwear'),
(30, 'New Balance 990', 'Footwear'),
(31, 'L’Oreal Paris Shampoo', 'Beauty Product'),
(32, 'Maybelline New York Mascara', 'Beauty Product'),
(33, 'Nivea Skin Cream', 'Beauty Product'),
(34, 'Olay Total Effects', 'Beauty Product'),
(35, 'Dove Body Wash', 'Beauty Product'),
(36, 'Garnier Face Mask', 'Beauty Product'),
(37, 'Neutrogena Sunscreen', 'Beauty Product'),
(38, 'Lakme Foundation', 'Beauty Product'),
(39, 'Clinique Moisturizer', 'Beauty Product'),
(40, 'Bioderma Face Cleansing', 'Beauty Product'),
(41, 'Apple MacBook Pro', 'Laptop'),
(42, 'Dell XPS 13', 'Laptop'),
(43, 'HP Spectre x360', 'Laptop'),
(44, 'Lenovo ThinkPad X1', 'Laptop'),
(45, 'Asus ZenBook', 'Laptop'),
(46, 'Microsoft Surface Laptop', 'Laptop'),
(47, 'Acer Swift 3', 'Laptop'),
(48, 'Razer Blade 15', 'Laptop'),
(49, 'Samsung Galaxy Book', 'Laptop'),
(50, 'Huawei MateBook X', 'Laptop'),
(51, 'Gucci Handbag', 'Bags'),
(52, 'Prada Backpack', 'Bags'),
(53, 'Chanel Tote Bag', 'Bags'),
(54, 'Michael Kors Crossbody', 'Bags'),
(55, 'Louis Vuitton Shoulder Bag', 'Bags'),
(56, 'Fossil Leather Bag', 'Bags'),
(57, 'Coach Satchel', 'Bags'),
(58, 'Kate Spade Wallet', 'Bags'),
(59, 'Samsonite Luggage', 'Bags'),
(60, 'Tumi Duffel Bag', 'Bags'),
(61, 'Levi’s Jeans', 'Clothing'),
(62, 'H&M T-shirt', 'Clothing'),
(63, 'Zara Jacket', 'Clothing'),
(64, 'Nike Hoodie', 'Clothing'),
(65, 'Adidas Sweatshirt', 'Clothing'),
(66, 'Uniqlo Pants', 'Clothing'),
(67, 'Tommy Hilfiger Shirt', 'Clothing'),
(68, 'Gucci Dress', 'Clothing'),
(69, 'Lacoste Polo Shirt', 'Clothing'),
(70, 'Puma Tracksuit', 'Clothing'),
(71, 'Rolex Submariner', 'Watches'),
(72, 'Omega Speedmaster', 'Watches'),
(73, 'Tag Heuer Carrera', 'Watches'),
(74, 'Casio G-Shock', 'Watches'),
(75, 'Fossil Hybrid HR', 'Watches'),
(76, 'Seiko 5', 'Watches'),
(77, 'Patek Philippe Calatrava', 'Watches'),
(78, 'Breitling Navitimer', 'Watches'),
(79, 'Apple Watch Series 7', 'Watches'),
(80, 'Citizen Eco-Drive', 'Watches'),
(81, 'Sony WH-1000XM4', 'Headphones'),
(82, 'Bose QuietComfort 35', 'Headphones'),
(83, 'Sennheiser Momentum 3', 'Headphones'),
(84, 'Beats Studio3', 'Headphones'),
(85, 'JBL Club One', 'Headphones'),
(86, 'Bang & Olufsen Beoplay', 'Headphones'),
(87, 'Apple AirPods Pro', 'Headphones'),
(88, 'Anker Soundcore Q30', 'Headphones'),
(89, 'Skullcandy Crusher', 'Headphones'),
(90, 'Marshall Major IV', 'Headphones'),
(91, 'Ray-Ban Aviator', 'Opticals'),
(92, 'Oakley Holbrook', 'Opticals'),
(93, 'Carrera Square Frame', 'Opticals'),
(94, 'Persol Classic', 'Opticals'),
(95, 'Tom Ford Round Frame', 'Opticals'),
(96, 'Prada Rectangular Frame', 'Opticals'),
(97, 'Gucci Square Sunglasses', 'Opticals'),
(98, 'Fastrack Wayfarer', 'Opticals'),
(99, 'Titan Polarized', 'Opticals'),
(100, 'Vogue Eyewear', 'Opticals');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

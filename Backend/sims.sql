-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2025 at 10:38 AM
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
-- Database: `sims`
--

-- --------------------------------------------------------

--
-- Table structure for table `spare_part`
--

CREATE TABLE `spare_part` (
  `Spare_id` int(11) NOT NULL,
  `Name` varchar(253) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Quantity` varchar(255) NOT NULL,
  `UnitPrice` int(11) NOT NULL,
  `TotalPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `spare_part`
--

INSERT INTO `spare_part` (`Spare_id`, `Name`, `Category`, `Quantity`, `UnitPrice`, `TotalPrice`) VALUES
(1, 'rice ', 'food', '500 kilogram', 100, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `stock_in`
--

CREATE TABLE `stock_in` (
  `StockIN_id` int(11) NOT NULL,
  `StockInName` varchar(250) NOT NULL,
  `StockInQuantity` varchar(255) NOT NULL,
  `StockInDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock_in`
--

INSERT INTO `stock_in` (`StockIN_id`, `StockInName`, `StockInQuantity`, `StockInDate`) VALUES
(1, 'rice ', '2 kilogram', '2025-12-18');

-- --------------------------------------------------------

--
-- Table structure for table `stock_out`
--

CREATE TABLE `stock_out` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `StockInQuantity` int(11) NOT NULL,
  `StockOutQuantity` int(11) NOT NULL,
  `StockOutUnitPrice` int(11) NOT NULL,
  `StockOutTotalPrice` int(11) NOT NULL,
  `StockOutDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock_out`
--

INSERT INTO `stock_out` (`id`, `Name`, `StockInQuantity`, `StockOutQuantity`, `StockOutUnitPrice`, `StockOutTotalPrice`, `StockOutDate`) VALUES
(1, 'rice ', 12, 20, 42, 10, '2025-12-18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'Munyengabe', 'munyengabebeckham@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `spare_part`
--
ALTER TABLE `spare_part`
  ADD PRIMARY KEY (`Spare_id`);

--
-- Indexes for table `stock_in`
--
ALTER TABLE `stock_in`
  ADD PRIMARY KEY (`StockIN_id`);

--
-- Indexes for table `stock_out`
--
ALTER TABLE `stock_out`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `spare_part`
--
ALTER TABLE `spare_part`
  MODIFY `Spare_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stock_in`
--
ALTER TABLE `stock_in`
  MODIFY `StockIN_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stock_out`
--
ALTER TABLE `stock_out`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

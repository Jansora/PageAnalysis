/*
 Navicat Premium Data Transfer

 Source Server         : 10.243.147.87 mysql
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : 10.243.147.87:3306
 Source Schema         : application

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 19/08/2020 11:35:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for TEMPLATE
-- ----------------------------
DROP TABLE IF EXISTS `TEMPLATE`;
CREATE TABLE `TEMPLATE`  (
  `Id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `template` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_at` timestamp(0) NOT NULL,
  `update_at` timestamp(0) NOT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  UNIQUE INDEX `Id`(`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

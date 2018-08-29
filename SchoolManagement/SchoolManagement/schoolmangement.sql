/*
 Navicat MySQL Data Transfer

 Source Server         : project
 Source Server Type    : MySQL
 Source Server Version : 100134
 Source Host           : localhost:3306
 Source Schema         : schoolmangement

 Target Server Type    : MySQL
 Target Server Version : 100134
 File Encoding         : 65001

 Date: 24/08/2018 05:03:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2018_08_20_032250_create_data_table', 1);
INSERT INTO `migrations` VALUES (4, '2018_08_20_114648_create_schools_table', 1);
INSERT INTO `migrations` VALUES (5, '2018_08_20_115814_create_school_datas_table', 2);
INSERT INTO `migrations` VALUES (6, '2018_08_20_120418_create_school_datas_table', 3);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for school_datas
-- ----------------------------
DROP TABLE IF EXISTS `school_datas`;
CREATE TABLE `school_datas`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `school_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `week` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `elect_eur` decimal(10, 2) NOT NULL,
  `elect_kwh` decimal(10, 2) NOT NULL,
  `heating_eur` decimal(10, 2) NOT NULL,
  `heating_kwh` decimal(10, 2) NOT NULL,
  `water_eur` decimal(10, 2) NOT NULL,
  `water_litres` decimal(10, 2) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `school_datas_school_id_index`(`school_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of school_datas
-- ----------------------------
INSERT INTO `school_datas` VALUES (1, 3, 2021, 17, 10, 33.00, 22.00, 223.00, 33.00, 23.00, 23.00, '2018-08-20 10:59:27', '2018-08-20 18:08:12');
INSERT INTO `school_datas` VALUES (2, 2, 2018, 30, 8, 25.00, 50.00, 231.00, 125.00, 888.00, 783.00, '2018-08-21 02:49:56', '2018-08-20 21:54:36');
INSERT INTO `school_datas` VALUES (3, 1, 2018, 23, 2, 256.00, 123.00, 458.00, 147.00, 256.00, 235.00, '2018-08-13 04:12:47', '2018-08-22 05:19:09');
INSERT INTO `school_datas` VALUES (4, 4, 2017, 15, 12, 563.00, 458.00, 256.00, 785.00, 25.25, 145.00, '2018-08-19 04:13:00', '2018-08-20 04:13:05');
INSERT INTO `school_datas` VALUES (5, 4, 2018, 23, 5, 123.00, 369.00, 147.00, 259.00, 245.00, 2548.00, '2018-08-06 04:15:10', '2018-08-13 04:15:13');
INSERT INTO `school_datas` VALUES (6, 2, 2014, 34, 8, 33.00, 23.00, 234.00, 23.00, 234.00, 34.00, '2018-08-20 21:53:32', '2018-08-20 21:53:32');

-- ----------------------------
-- Table structure for schools
-- ----------------------------
DROP TABLE IF EXISTS `schools`;
CREATE TABLE `schools`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of schools
-- ----------------------------
INSERT INTO `schools` VALUES (1, 'Hello', '2018-08-20 08:24:06', '2018-08-20 08:24:06');
INSERT INTO `schools` VALUES (2, 'Makolaro', '2018-08-20 10:56:48', '2018-08-20 10:56:48');
INSERT INTO `schools` VALUES (3, 'kalton', '2018-08-20 17:27:39', '2018-08-20 17:27:39');
INSERT INTO `schools` VALUES (4, 'alexapoldola', '2018-08-20 17:27:45', '2018-08-20 17:27:45');
INSERT INTO `schools` VALUES (5, 'nikolay', '2018-08-20 21:53:05', '2018-08-20 21:53:05');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;

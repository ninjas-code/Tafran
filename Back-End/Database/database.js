

//creating schema but it's not completed it still need modifying 




CREATE DATABASE  IF NOT EXISTS `fdp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fdp`;
// -- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)

// -- Host: 127.0.0.1    Database: fdp
// -- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


// -- Table structure for table `meals`


DROP TABLE IF EXISTS `meals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `meals` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


//  Dumping data for table `meals`


LOCK TABLES `meals` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `meals` VALUES (1,'شاورما'),(2,'زنجر'),(3,'حمص'),(4,'منسف'),(5,'مندي'),(6,'برجر'),(7,'بروستيد'),(8,'زربيان'),(9,'برياني'),(10,'كبسة'),(11,'فول'),(12,'سمك'),(13,'فلافل'),(14,'الرشوف'),(15,'مكموره'),(16,'بيتزا'),(17,'كوشري'),(18,'عرايس'),(19,'كباب');
/*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;

// -- Table structure for table `mealtype`


DROP TABLE IF EXISTS `mealtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `mealtype` (
  `id` int(11) NOT NULL,
  `MealId` int(11) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `mealId` FOREIGN KEY (`id`) REFERENCES `meals` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mealtype`
--

LOCK TABLES `mealtype` WRITE;
/*!40000 ALTER TABLE `mealtype` DISABLE KEYS */;
INSERT INTO `mealtype` VALUES (1,1,'Normal'),(2,1,'Double'),(3,2,'Normal'),(4,2,'Double'),(5,3,'Normal'),(6,4,'Double'),(7,4,'Normal'),(8,5,'Double'),(9,6,'Normal'),(10,6,'Double'),(11,7,'Normal'),(12,7,'Double'),(13,8,'Normal'),(14,9,'Normal'),(15,10,'Normal'),(16,11,'Normal'),(17,12,'Double'),(18,12,'Normal'),(19,13,'Normal');
/*!40000 ALTER TABLE `mealtype` ENABLE KEYS */;
UNLOCK TABLES;


// -- Table structure for table `restaurants`


DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restaurants` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


// -- Dumping data for table `restaurants`


LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Hashem','Mamdouh Al Sarayrah St 6, Amman 11151','06 463 6440'),(2,'BabAlyemen','Amman-Jibyha','06 533 1880'),(3,'Ghazal','Abdallah Ghosheh St','07 9700 7555'),(4,'TaimBurger','Rainbow','+962 7 9040 9406'),(5,'ShawarmaReem','JabalAmman','+962 6 464 5725'),(6,'GhaithRest','AlledStreet','962 6 568 3954'),(7,'Shahrazad','Downtown','06 463 6792'),(8,'PizzaAlreef',' Raeq Al Nabulsi ',' (06) 568 7087'),(9,'KoushariCo','Amman11195','+962 7 7778 7562'),(10,'KebabExpress','CityMall','+962(0)5851741'),(11,'Hadramout','UniversityStreet','0783625481'),(12,'KFC','Gardenz','0792174592');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;


// -- Table structure for table `restmealmenue`


DROP TABLE IF EXISTS `restmealmenue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restmealmenue` (
  `RestId` int(11) NOT NULL,
  `MealTypeId` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`RestId`,`MealTypeId`),
  KEY `MealTypeId_idx` (`MealTypeId`),
  CONSTRAINT `MealTypeId` FOREIGN KEY (`MealTypeId`) REFERENCES `mealtype` (`id`),
  CONSTRAINT `RestId` FOREIGN KEY (`RestId`) REFERENCES `restaurants` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


// -- Dumping data for table `restmealmenue`


LOCK TABLES `restmealmenue` WRITE;
/*!40000 ALTER TABLE `restmealmenue` DISABLE KEYS */;
INSERT INTO `restmealmenue` VALUES (1,5,1),(1,12,1),(1,15,1),(2,8,2),(2,13,2),(2,14,2),(2,15,2),(3,1,2),(3,2,2),(3,3,2),(3,4,2),(3,8,3),(3,9,2),(3,10,3),(4,9,2),(4,10,2),(5,1,2),(5,2,2),(6,5,1),(6,12,1),(6,15,1),(7,11,2),(7,12,3),(8,16,3),(8,17,5),(9,18,4),(10,19,4),(11,6,5),(11,7,6),(12,9,5),(12,10,6),(12,11,5),(12,12,8);
/*!40000 ALTER TABLE `restmealmenue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

// -- Dump completed on 2019-05-17 17:50:40

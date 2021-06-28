        CREATE TABLE IF NOT EXISTS `nodejs`.`user` (
          `user_id` INT NOT NULL AUTO_INCREMENT,
          `email` VARCHAR(200) NOT NULL,
          `name` VARCHAR(10) NOT NULL,
          `password` VARCHAR(500) NOT NULL,
          `year` INT NOT NULL,
          `month` INT NOT NULL,
          `day` INT NOT NULL,
          `createdAt` DATETIME NOT NULL,
          `updatedAt` DATETIME NULL,
          `gender` CHAR(1) CHECK ( 'gender' IN ( 'M','F' )),
          PRIMARY KEY (`user_id`))
        ENGINE = InnoDB
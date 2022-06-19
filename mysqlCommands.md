Follow the instructions for running the mysql in a docker from this link:
https://hub.docker.com/r/mysql/mysql-server

```
MacBook-Pro:restapi vivek$ docker run -p 3306:3306 --name=mysql1 -d mysql/mysql-server:5.7
Unable to find image 'mysql/mysql-server:5.7' locally
5.7: Pulling from mysql/mysql-server
fae25b9d3939: Pull complete
1b4901d6b4a1: Pull complete
65015893ca76: Pull complete
82fe76c95481: Pull complete
3292176f57b6: Pull complete
826faa291993: Pull complete
d31c2b8e8c13: Pull complete
fade2a0af17d: Pull complete
Digest: sha256:c6a77862b9daddb0bd91dfdae324cb8d6aff983788be0c8e6c6ba0a1657731eb
Status: Downloaded newer image for mysql/mysql-server:5.7
9a9bc3bddf0510814303083773c971d0c1bd30ca9f7f764bf9139e00022edaa1
MacBook-Pro:restapi vivek$
MacBook-Pro:restapi vivek$
MacBook-Pro:restapi vivek$ docker ps | grep mysql
9a9bc3bddf05   mysql/mysql-server:5.7   "/entrypoint.sh mysq…"   48 seconds ago   Up 47 seconds (healthy)   3306/tcp, 33060/tcp      mysql1
MacBook-Pro:restapi vivek$

MacBook-Pro:restapi vivek$ docker logs mysql1 2>&1 | grep GENERATED
[Entrypoint] GENERATED ROOT PASSWORD: ud4/FgLj6,:y247o5.9MASC4BKrE^*;;
MacBook-Pro:restapi vivek$

MacBook-Pro:restapi vivek$ docker exec -it mysql1 mysql -uroot -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 5.7.38

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'Pa5Sw0rD';
Query OK, 0 rows affected (0.00 sec)

mysql>
mysql> SELECT host FROM mysql.user WHERE User = 'root';
+-----------+
| host      |
+-----------+
| localhost |
+-----------+
1 row in set (0.00 sec)

mysql> CREATE USER 'root'@'%' IDENTIFIED BY 'Pa5Sw0rD';
Query OK, 0 rows affected (0.00 sec)

mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
Query OK, 0 rows affected (0.00 sec)

mysql>
mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)

mysql>
```

Now Adding the following entries 

```
mysql> CREATE DATABASE node_mysql_crud_db;
Query OK, 1 row affected (0.00 sec)

mysql>
mysql> use node_mysql_crud_db;
Database changed
mysql>
mysql> CREATE  TABLE IF NOT EXISTS `employees` (   `id` BIGINT UNSIGNED AUTO_INCREMENT,   `first_name` VARCHAR(255) NOT NULL,   `last_name` VARCHAR(255) NOT NULL,   `email` VARCHAR(255) NOT NULL,   `phone` VARCHAR(50) NOT NULL,   `organization` VARCHAR(255) NOT NULL,   `designation` VARCHAR(100) NOT NULL,   `salary` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,   `status` TINYINT UNSIGNED DEFAULT 0,   `is_deleted` TINYINT UNSIGNED DEFAULT 0,   `created_at` DATETIME NOT NULL,   `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,   PRIMARY KEY (`id`)) ENGINE = InnoDB;
Query OK, 0 rows affected (0.01 sec)

mysql>
mysql> exit
```

Now, connect mysql container from the localhost.

```
MacBook-Pro:restapi vivek$ mysql -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 31
Server version: 5.7.38 MySQL Community Server (GPL)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```

Then insert the values in the database table 

```
INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Maria', 'Anders', 'mariaanders@gmail.com', '1234567890', 'Microsoft', 'Full Stack Developer', '50000.00', '1', '0', '2022-06-19 21:14:30');

INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Ana', 'Trujilo', 'anatrujilo@gmail.com', '9876543210', 'Google', 'Software Engineer', '55500.00', '1', '0', '2022-06-19 21:14:30');

INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Antonio', 'Moreno', 'antoniomoreno@gmail.com', '8967452301', 'Amazon', 'Senior Software Engineer', '65500.00', '1', '0', '2022-06-19 21:14:30');

INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Thomas', 'Hardy', 'thomashardy@gmail.com', '2143658709', 'Microsoft', 'Full Stack Developer', '70000.00', '1', '0', '2022-06-19 21:14:30');

INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Christina', 'Berglund', 'christinaberglund@gmail.com', '8976453201', 'Meta', 'Software Architect', '80000.00', '1', '0', '2022-06-19 21:14:30');

s```
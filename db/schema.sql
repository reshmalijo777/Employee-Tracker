DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department(
     id INT NOT NULL PRIMARY KEY auto_increment,
     name VARCHAR(30));
     
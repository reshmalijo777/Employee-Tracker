DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department(
     id INT NOT NULL PRIMARY KEY auto_increment, emp_name VARCHAR(30));

CREATE TABLE roles( 
     id INT NOT NULL PRIMARY KEY auto_increment,
     title VARCHAR(30) NOT NULL,
     salary DECIMAL NOT NULL, 
     department_id INT,
     FOREIGN KEY(department_id) REFERENCES department(id));

CREATE TABLE employee(
     id INT NOT NULL PRIMARY KEY auto_increment,
     first_name VARCHAR(30), 
     last_name VARCHAR(30), 
     role_id INT ,
     FOREIGN KEY(role_id) REFERENCES roles (id), 
     manager_id INT,
     FOREIGN KEY(manager_id)REFERENCES employee(id));

     
USE employee_tracker_db;

INSERT INTO department(name) 
VALUES ("Accountant"),
    ("Finance"),
    ("Audit"),
    ("Sales"),
    ("Manager");

INSERT INTO roles(title,salary,department_id)
VALUES("Senior Manager", 80000, 1),
("Junior Developer", 70000, 2),
("Lead Developer", 90000,3),
("Accountant", 60000,4),
("Auditor",190000,5);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES("Lia","Joseph",1,1),
("Luke","Joseph",2,Null),
("Lijo","Lukose",3,2),
("Mishma","Paul",4,4),
("Krishma","Paul",5,NULL);

    

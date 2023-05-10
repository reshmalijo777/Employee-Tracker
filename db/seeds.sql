INSERT INTO department(emp_name) 
VALUES ("Accountant"),
    ("Finance"),
    ("Audit"),
    ("Sales"),
    ("Manager");

INSERT INTO roles(title,salary,department_id)
VALUES("Senior Manager", 80000, 101),
("Junior Developer", 70000, 102),
("Lead Developer", 90000,101),
("Accountant", 60000,108),
("Auditor",90000,103);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("Lia","Joseph",01,5),
("Luke","Joseph",03,Null),
("Lijo","Lukose",09,8),
("Mishma","Paul",01,8);
("Krishma","Paul",08,NULL)

    

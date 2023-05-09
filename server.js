const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const table=require('console.table');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rechukutty77',
      database: 'employee-tracker_db'
    },
    console.log(`Connected to the employee-tracker database.`)
  );

  function init(){
    inquirer
    .promt([
        {
            type:"list",
            message: "Select from the following options!!!!",
            name:"options",
            choices:["view all departments", "view all roles"," view all employees", 
           "add a department", "add a role", "add an employee", "update an employee role"]
        }   
    ])

    .then(function(answer){
        switch(answer.options){
            case "view all department": 
            show_dept();
            break;
            case "view all roles": 
            show_roles();
            break;
            case"view all employees":
            show_emp();
            break;
            case"add a department":
            add_dept();
            break;
            case"add a role":
            add_role();
            break;
            case "add an employee":
            add_emp();
            break;
            case"update an employee role":
            update_emp();
        }
    })
  }
  init();

  const viewDept = `SELECT * from department`;  
  db.query(viewDept, (err, results) => {
    err? console.error(err):console.table(results);
    init();
    });
  




  

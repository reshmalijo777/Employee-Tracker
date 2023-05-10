const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const Table = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rechukutty77',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee-tracker database.`)
  );

  function init(){
    inquirer
    .prompt([
        {
            type:"list",
            message: "Select from the following options!!!!",
            name:"options",
            choices:["View all departments", 
                      "View all roles",
                      "View all employees", 
                      "Add a department",
                      "Add an employee", 
                      "Add a role", 
                      "Update an employee role"]
        }
      ])

    .then(function(answer){
        switch(answer.options){
            case "View all departments": show_Dept();
            break;
            case "View all roles": show_Roles();
            break;
            case"View all employees": show_Emp();
            break;
            case"Add a department": add_Dept();
            break;
            case"Add an employee": add_Emp();
            break;
            case "Add a role": add_Roles();
            break;
            case"Update an employee role": update_Emp();
            break;        
        }
    })
  }
 init();

 function show_Dept(){  
 const sql = 'SELECT * FROM department';
  db.query(sql, (err, res) => {
    err? console.error(err):console.table(res);
     init();
    })
  };

  function show_Roles(){  
    const sql = 'SELECT * FROM roles';
     db.query(sql, (err, res) => {
       err? console.error(err):console.table(res);
       init();
       })
   };
  
   function show_Emp(){  
    const sql = 'SELECT * FROM employees';
    db.query(sql, (err, res) => {
      err? console.error(err):console.table(res);
      init();
    })
   };
     
   function add_Dept(){
    inquirer
    .prompt([
      {
      type:"input",
      message:"Enter the department you want to add!!!",
      name:"newDept"
    }
    ])
    .then(function(answer){
      db.query(`INSERT INTO department (name) VALUES(?)`, answer.newDept,(err,res)=>{
        db.query(`SELECT * FROM department`, (err, res) => {
          err? console.error(err):console.table(res);
           init();
          })
    })
   })
  }

  function add_Emp(){
    inquirer
    .prompt([
      {
      type:"input",
      message:"Enter the first name of employee!!!",
      name:"firstName"
    },
    {
      type:"input",
      message:"Enter the last name of employee!!!",
      name:"lastName"
    },
    ])
    .then(function(answer){
      db.query(`INSERT INTO employees(first_name, last_name) VALUES(?,?)`, [answer.firstName,answer.lastName],(err,res)=>{
        db.query(`SELECT * FROM employees`, (err, res) => {
          err? console.error(err):console.table(res);
           init();
          })
    })
   })
  }



  

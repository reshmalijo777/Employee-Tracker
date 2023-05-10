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
            choices:["view all departments", 
                      "view all roles",
                      "view all employees", 
                      "add a department", 
                      "add a role", 
                      "add an employee", 
                      "update an employee role"]
        }
      ])

    .then(function(answer){
        switch(answer.options){
            case "view all departments": show_Dept();
            break;
            case "view all roles": show_Roles();
            break;
            case"view all employees": show_Emp();
            break;
            case"add a department": add_Dept();
            break;
            case"add a role": add_Role();
            break;
            case "add an employee": add_Emp();
            break;
            case"update an employee role": update_Emp();
            process.exit();         
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
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, res) => {
      err? console.error(err):console.table(res);
      init();
    })
   };
     
   



  

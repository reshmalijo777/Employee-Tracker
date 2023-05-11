# Employee-Tracker
Challenge-12


## Description

This is a Employee-Tracker which helps to manage a company's employee database, using Node.js, Inquirer, and MySQL. The user is able to view and manage the departments, roles, and employees so that it can organize and plan my business.

Video-Demonstration:
-[Screencastify.webm](https://github.com/reshmalijo777/Employee-Tracker/assets/128992593/07079171-d68f-4be2-b739-2122b80b4130)

## Table Of Contents

  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#Questions)

## Usage

## User Story

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Installation

  To run this project we need to install Node.js. Then create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. We need `package.json` with the required dependencies. You can create one by running `npm init -y` when you first set up the project, before installing any dependencies.You’ll need to use the MySQL2 package to connect to your MySQL database and perform queries, and the Inquirer package (`npm i inquirer@8.2.4`) to interact with the user via the command line.

## License

  None

## Contributors
  - Reshma Paul

  ## Questions

  If you have any Questions,<br>
  Contact me at -[Email](snowley777@gmail.com)<br>
  -[GitHub](https://github.com/reshmalijo777/Employee-Tracker)


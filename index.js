#!/usr/bin/env node
console.log("======================================= WELCOME ===============================");
console.log("======================================== TO DO LIST =================================");
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'enter add in your todo❓❓',
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'do you want to add more✅  ❌',
            default: "false"
        },
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}

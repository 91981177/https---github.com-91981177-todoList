#!usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What Do You want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do You want to add more in your todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("your todo list!");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("not founf todo!!");
}

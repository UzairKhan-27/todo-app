import { arrayTodo } from "."
import { displayTodo } from "./displayTodo";

function displayToday()
{
    const newArray=arrayTodo.filter(checkDueDateStatus);
    console.log(newArray)
    displayTodo(newArray);
}
function checkDueDateStatus(todo)
{
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate); // "17-6-2022"

    return todo.dueDate===currentDate;
}
export {displayToday}
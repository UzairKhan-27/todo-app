import { createTodo } from "./createTodo";
import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";
import { showDialog } from "./handleDialog";

function addProject(event)
{
    console.log(event.target.id);
    showDialog();
}

export {addProject}
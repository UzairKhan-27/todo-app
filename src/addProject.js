import { createTodo } from "./createTodo";
import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";

function addProject(event)
{
    console.log(event.target.id);
    let title=prompt("title");
    let description=prompt("description");
    let date=prompt("date");
    arrayTodo.push(createTodo(title,description,date,"hola"));
    displayTodo();
}
export {addProject}
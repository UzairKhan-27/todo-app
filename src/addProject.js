import { createTodo } from "./createTodo";
import { arrayTodo } from ".";

function addProject(event)
{
    console.log(event.target.id);
    let title=prompt("title");
    let description=prompt("description");
    let date=prompt("date");
    arrayTodo.push(createTodo(title,description,date,"hola"));
    console.log(arrayTodo);
}
export {addProject}
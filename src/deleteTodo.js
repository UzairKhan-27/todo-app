import { arrayTodo } from ".";
import { getLastCharacter } from "./changeCompleteStatus"
import { displayTodo } from "./displayTodo";


function deleteTodo(event)
{
    let deleteButtonID=getLastCharacter(event.target.id);
    arrayTodo.splice(deleteButtonID,1);
    displayTodo(arrayTodo);    
}

export {deleteTodo}
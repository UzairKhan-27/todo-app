import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";

function changeCompleteStatus(event)
{
    if(!event.target.id)
        return;

    console.log("here");
    console.log(event.target);
    console.log(event.target.id);
    arrayTodo[event.target.id].complete=!(arrayTodo[event.target.id].complete);
    console.log(arrayTodo[event.target.id].complete);
    displayTodo();
}
export{changeCompleteStatus}
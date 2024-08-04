import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";

function changeCompleteStatus(event)
{

    let checkButtonID=getLastCharacter(event.target.id);
    
    console.log(event.target);
    console.log(event.target.id);

    arrayTodo[checkButtonID].complete=!(arrayTodo[checkButtonID].complete);
    displayTodo();
}

function getLastCharacter(string)
{
    return string.charAt(string.length-1);
}
export{changeCompleteStatus}
import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";

function changeCompleteStatus(event)
{

    let lastChar=event.target.id;
    lastChar=lastChar.charAt(lastChar.length-1)
    
    console.log(lastChar+"hola");
    console.log(event.target);
    console.log(event.target.id);
    arrayTodo[lastChar].complete=!(arrayTodo[lastChar].complete);
    console.log(arrayTodo[lastChar].complete);
    displayTodo();
}
export{changeCompleteStatus}
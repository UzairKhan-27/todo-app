import { arrayTodo } from ".";
import { getLastCharacter } from "./changeCompleteStatus";
import { closeDialog, resetDialog, showDialog } from "./handleDialog";

function editTodo(event)
{
    console.log("EDIT");
    showDialog();
    let editButtonID=getLastCharacter(event.target.id);
    document.getElementById("title").value=arrayTodo[editButtonID].title;
    document.getElementById("description").value=arrayTodo[editButtonID].description;
    document.getElementById("dueDate").value=arrayTodo[editButtonID].dueDate;
    document.getElementById("priority").value=arrayTodo[editButtonID].priority;
    arrayTodo.splice(editButtonID,1);

    // closeDialog();
        // resetDialog();

    
}
export{editTodo}
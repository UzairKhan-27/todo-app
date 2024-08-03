import { arrayTodo } from ".";
import { createTodo } from "./createTodo";
import { displayTodo } from "./displayTodo";
import { closeDialog } from "./handleDialog";
import { resetDialog } from "./handleDialog";

function handleDialogSubmission(event)
{
    event.preventDefault();
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let dueDate=document.getElementById("dueDate").value;
    let priority=document.getElementById("priority").value;
    if(title==="")
    {
        alert("Fill the title and Due Date");
        return;
    }
    description=(description==="") ? "NO DESCRIPTION": document.getElementById("description").value
    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(priority);
    closeDialog(); 
    resetDialog();

    arrayTodo.push(createTodo(title,description,priority,dueDate));
    displayTodo();
}

export{handleDialogSubmission}
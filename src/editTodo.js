import { arrayTodo } from ".";
import { getLastCharacter } from "./changeCompleteStatus";
import { displayTodo } from "./displayTodo";
import { closeDialog, resetDialog, showDialog } from "./handleDialog";

function editTodo(event) 
{
    console.log("edit");
    console.log(event.target.parentNode.id);
    console.log(event.target.textContent);
    console.log(event.target.classList.value);
    
    
    
    
    let temp = event.target.textContent;
    let key=(event.target.classList.value);


    const userInput = document.createElement("input");
    
    if(key==="priority")
    {
        editPriority(event);
        return 0;
    }
    
    else if (key==="dueDate")
        userInput.setAttribute("type", "date");

    else
        userInput.setAttribute("type", "text");

    userInput.value = temp;

    event.target.textContent = '';

    event.target.appendChild(userInput);

    userInput.focus();

    userInput.addEventListener("blur", () => 
    {
        console.log("here "+arrayTodo[event.target.parentNode.id].key)
        arrayTodo[event.target.parentNode.id][key]=userInput.value;
        displayTodo();
        
    });
}
function editPriority(event) 
{

    const selection = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.textContent = "Normal";
    option1.value = "Normal";
    option2.textContent = "Urgent";
    option2.value = "Urgent";

    selection.appendChild(option1);
    selection.appendChild(option2);

    // Append the select element to the target
    event.target.appendChild(selection);
    selection.focus();

    selection.addEventListener("change", e => {
        event.target.textContent=e.target.value;
    })
}


export{editTodo}
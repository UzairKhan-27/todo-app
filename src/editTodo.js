import { arrayTodo } from ".";
import { getLastCharacter } from "./changeCompleteStatus";
import { displayTodo } from "./displayTodo";
import { closeDialog, resetDialog, showDialog } from "./handleDialog";

function editTodo(event) {
    console.log("edit");
    console.log(event.target.parentNode.id);
    console.log(event.target.textContent);
    console.log(event.target.classList.value);

    let temp = event.target.textContent;
    const userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userInput.value = temp;

    // Clear the existing text content
    event.target.textContent = '';

    // Append the input element to the target
    event.target.appendChild(userInput);

    // Focus the input element for immediate editing
    userInput.focus();

    // Optionally, handle input blur to save the changes
    userInput.addEventListener("blur", () => {
        // Update the target's text content with the input value
        // event.target.textContent = userInput.value;
        let key=(event.target.classList.value);
        console.log("here "+arrayTodo[event.target.parentNode.id].key)
        arrayTodo[event.target.parentNode.id][key]=userInput.value;
        displayTodo();
        
    });
}

export{editTodo}
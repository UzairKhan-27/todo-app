import './style.css';
import { addProject } from './addProject';
import { handleDialogSubmission } from './dialogSubmission';
import { displayTodo } from './displayTodo';
import { resetDialog } from './handleDialog';
import { displayCompleteTodo } from './displayCompleteTodo';
import { displayToday } from './displayToday';
import { displayUpcoming } from './displayUpcoming.js';
import { displayMissed } from './displayMissed';
import { updateProjectDropdown } from './updateProjectDropdown.js';
import { createNewProject } from './createNewProject.js';
import { displayProject } from './displayProject.js';
import { deleteProject } from './deleteProject.js';
import { displayProjectList } from './displayProjectList.js';

let arrayTodo=[];
let arrayProjects=["Default"];
updateProjectDropdown();
function updateArrayTodo(newArray) {
    arrayTodo = newArray;
}
function updateArrayProjects(newArray) {
    arrayProjects = newArray;
    // updateProjectDropdown();
    displayProjectList();
}
function updateArrayTodoID()
{
    let i=0;
    arrayTodo.forEach(item=>{

        item.id=i;
        i++;
    })
}

displayProjectList();





const projectList=document.querySelector(".lists");
console.log(projectList);
projectList.addEventListener("click",displayProject);

const newTask=document.querySelector("#new-task");
newTask.addEventListener("click",addProject);

const newProject=document.querySelector("#new-project");
newProject.addEventListener("click",createNewProject);

const submitButton=document.querySelector("#submit");
submitButton.addEventListener("click",handleDialogSubmission);

const inbox=document.querySelector("#inbox");
inbox.addEventListener("click", ()=>displayTodo(arrayTodo));

document.querySelector('dialog').addEventListener('close', resetDialog);

const completed=document.querySelector("#completed");
completed.addEventListener("click",displayCompleteTodo)

const today=document.querySelector("#today");
today.addEventListener("click",displayToday);

const upcoming=document.querySelector("#upcoming");
upcoming.addEventListener("click",displayUpcoming);

const missed=document.querySelector("#missed");
missed.addEventListener("click",displayMissed);

const deleteProjectButton=document.querySelector("#delete-project");
deleteProjectButton.addEventListener("click",deleteProject);

export {arrayTodo,arrayProjects,updateArrayTodo,updateArrayTodoID,updateArrayProjects};



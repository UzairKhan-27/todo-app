import './style.css';
import {createTodo} from './createTodo' ;
import { addProject } from './addProject';
import { handleDialogSubmission } from './dialogSubmission';
import { changeCompleteStatus } from './changeCompleteStatus';
import { displayTodo } from './displayTodo';
import { resetDialog } from './handleDialog';
import { displayCompleteTodo } from './displayCompleteTodo';
import { displayToday } from './displayToday';
import { displayUpcoming } from './displayUpcoming.js';
import { displayMissed } from './displayMissed';
import { updateProjectDropdown } from './updateProjectDropdown.js';
import { createNewProject } from './createNewProject.js';
import { displayProject } from './displayProject.js';


let arrayTodo=[];
let arrayProjects=["Default","Daily"];

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
export {arrayTodo,arrayProjects};
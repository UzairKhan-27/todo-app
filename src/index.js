import './style.css';
import {createTodo} from './createTodo' ;
import { addProject } from './addProject';
import { handleDialogSubmission } from './dialogSubmission';
import { changeCompleteStatus } from './changeCompleteStatus';
import { displayTodo } from './displayTodo';
import { resetDialog } from './handleDialog';
import { displayCompleteTodo } from './displayCompleteTodo';
import { displayToday } from './displayToday';
import { displayUpcoming } from './displayUpcoming';
import { displayMissed } from './displayMissed';

let arrayTodo=[];
let arrayProjects=["default"];
const projectButton=document.querySelector("#projects");
projectButton.addEventListener("click",addProject);

const submitButton=document.querySelector("#submit");
submitButton.addEventListener("click",handleDialogSubmission);

const inbox=document.querySelector("#inbox");
inbox.addEventListener("click", ()=>displayTodo(arrayTodo));

document.querySelector('dialog').addEventListener('close', resetDialog);
// const main=document.querySelector(".main");
// main.addEventListener("click",changeCompleteStatus);

const completed=document.querySelector("#completed");
completed.addEventListener("click",displayCompleteTodo)

const today=document.querySelector("#today");
today.addEventListener("click",displayToday);

const upcoming=document.querySelector("#upcoming");
upcoming.addEventListener("click",displayUpcoming);

const missed=document.querySelector("#missed");
missed.addEventListener("click",displayMissed);
export {arrayTodo,arrayProjects};
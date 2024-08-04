import './style.css';
import {createTodo} from './createTodo' ;
import { addProject } from './addProject';
import { handleDialogSubmission } from './dialogSubmission';
import { changeCompleteStatus } from './changeCompleteStatus';
import { displayTodo } from './displayTodo';
import { resetDialog } from './handleDialog';

let arrayTodo=[];

const projectButton=document.querySelector("#projects");
projectButton.addEventListener("click",addProject);

const submitButton=document.querySelector("#submit");
submitButton.addEventListener("click",handleDialogSubmission);

const inbox=document.querySelector("#inbox");
inbox.addEventListener("click",displayTodo);

document.querySelector('dialog').addEventListener('close', resetDialog);
// const main=document.querySelector(".main");
// main.addEventListener("click",changeCompleteStatus);

export {arrayTodo};
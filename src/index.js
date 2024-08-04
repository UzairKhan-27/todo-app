import './style.css';
import {createTodo} from './createTodo' ;
import { addProject } from './addProject';
import { handleDialogSubmission } from './dialogSubmission';
import { changeCompleteStatus } from './changeCompleteStatus';
let arrayTodo=[];

const projectButton=document.querySelector("#projects");
projectButton.addEventListener("click",addProject);

const submitButton=document.querySelector("#submit");
submitButton.addEventListener("click",handleDialogSubmission);

// const main=document.querySelector(".main");
// main.addEventListener("click",changeCompleteStatus);

export {arrayTodo};
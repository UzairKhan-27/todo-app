import { arrayProjects, arrayTodo, updateArrayTodo } from ".";
import { displayTodo } from "./displayTodo";
let string="";
function deleteProject(event)
{
    console.log(event.target.id)
    const dialog=document.querySelector("#delete-project-dialog");
    const form=document.querySelector("#delete-project-form");
    const deleteButton=document.createElement("button");
    deleteButton.setAttribute("type","submit");
    deleteButton.setAttribute("id","#submit-delete-project");
    deleteButton.textContent="Delete Selected Projects";
    form.textContent="";


    arrayProjects.forEach((item)=>
    {
        const input=document.createElement("input");
        const label=document.createElement("label");
        const lineBreak=document.createElement("br");

        input.setAttribute("type","checkbox");
        input.setAttribute("id",item);
        input.setAttribute("value",item);
        label.setAttribute("for",item);
        label.textContent=item;

        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(lineBreak);
        console.log(item);
        console.log(input.checked);
    })
    form.appendChild(deleteButton);
    // const submitDeleteProjectButton=document.querySelector("#submit-delete-project");
    deleteButton.addEventListener("click",submitDeleteProject);

    dialog.showModal();
}
function submitDeleteProject(event)
{
    // console.log(event.target.id);    
    event.preventDefault();

    const dialog=document.querySelector("#delete-project-dialog");
    const form=document.querySelector("#delete-project-form");
    const options=form.querySelectorAll("input");
    let newArrayTodo;
    options.forEach((option)=>{
        console.log(option.id+option.checked);
        string=option.id;
        if(option.checked===true)
            newArrayTodo=arrayTodo.filter(removeSelectedProjectTasks);
    })
    dialog.close();
    updateArrayTodo(newArrayTodo);
    console.log(event.target.id);
    displayTodo(arrayTodo);
}
function removeSelectedProjectTasks(todo)
{
    return string!==todo.project
}
export{deleteProject,submitDeleteProject}
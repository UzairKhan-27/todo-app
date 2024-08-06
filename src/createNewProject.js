import { arrayProjects } from ".";
import { displayProjectList } from "./displayProjectList";
import { updateProjectDropdown } from "./updateProjectDropdown";

function createNewProject(event)
{
    let user=prompt("Enter New Project Name");
    if (user.trim()===""||user===null)
        return;
    arrayProjects.push(user);
    displayProjectList();
    // const li=document.createElement("li");
    // const list= document.querySelector(".lists")
    // li.setAttribute("id",`list${arrayProjects.length-1}`)
    // li.textContent=user;
    // list.appendChild(li);
    // console.log(arrayProjects);
    // updateProjectDropdown();
}
export{createNewProject}
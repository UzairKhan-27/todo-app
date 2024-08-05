import { arrayProjects } from ".";

function updateProjectDropdown()
{
    // for(let i=1;i<arrayProjects.length;i++)
    // {
        const projectList=document.querySelector("#option-project");
        const option=document.createElement("option");
        option.textContent=arrayProjects[arrayProjects.length-1];
        projectList.appendChild(option);
    // }
}


// function updateProjectDropdown()
// {
//     for(let i=1;i<arrayProjects.length;i++)
//     {
//         const projectList=document.querySelector("#option-project");
//         const option=document.createElement("option");
//         option.textContent=arrayProjects[i];
//         projectList.appendChild(option);
//     }
// }
export{updateProjectDropdown}
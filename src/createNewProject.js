import { arrayProjects } from ".";

function createNewProject(event)
{
    let user=prompt("val");
    arrayProjects.push(user);
    const li=document.createElement("li");
    const plus=document.createElement("span");
    plus.textContent="\t\t\t+";
    // plus.style.display="inline";
    const list= document.querySelector(".lists")
    li.setAttribute("id",`list${arrayProjects.length-1}`)
    li.textContent=user;
    list.appendChild(li);
    li.appendChild(plus);
    // list.appendChild(plus);
    console.log(arrayProjects);
}
export{createNewProject}
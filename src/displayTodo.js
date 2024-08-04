import { arrayTodo } from "."
import { changeCompleteStatus } from "./changeCompleteStatus";
function displayTodo()
{
    const mainContent=document.querySelector(".main");
    mainContent.textContent="";
    let i=0;
    arrayTodo.forEach(item => {
        const div=document.createElement("div");
        div.classList.add("items");
        div.setAttribute("id",i);
        i++;
        mainContent.appendChild(div);
        for(let key in item)
        {
            if(key==="complete")
            {
                if(item[key]===true)
                {
                    div.style.color="green";
                    div.classList.add("complete");
                }
                continue;
            }
            const div2=document.createElement("div");
            div2.classList.add(key);
            div2.textContent=item[key];
            div.appendChild(div2);

        }
    })

    const items=document.querySelectorAll(".items");
    items.forEach(item =>
    {
        item.addEventListener("click",changeCompleteStatus);
    });

}

export {displayTodo}
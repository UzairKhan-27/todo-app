import { arrayTodo } from "."
import { changeCompleteStatus } from "./changeCompleteStatus";
function displayTodo()
{
    const mainContent=document.querySelector(".main");
    mainContent.textContent="";


    let i=0;
    arrayTodo.forEach(item => {
        const div=document.createElement("div");
        
        const checkMark=document.createElement("button");
        checkMark.classList.add("complete-mark");
        checkMark.textContent="✓";
        checkMark.setAttribute("id",`complete-${i}`);
        
        div.classList.add("items");
        div.setAttribute("id",i);
        i++;
        
        div.appendChild(checkMark);
        mainContent.appendChild(div);
        
        for(let key in item)
        {
            if(key==="complete")
            {
                if(item[key]===true)
                {
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

    callCheckMarkEventListener();

}

function callCheckMarkEventListener()
{
    const items=document.querySelectorAll(".complete-mark");
    items.forEach(item =>
    {
        item.addEventListener("click",changeCompleteStatus);
    });
}

export {displayTodo}
import { arrayTodo } from "."
function displayTodo()
{
    const mainContent=document.querySelector(".main");
    mainContent.textContent="";
    arrayTodo.forEach(item => {
        const div=document.createElement("div");
        div.classList.add("items");
        mainContent.appendChild(div);
        for(let key in item)
        {
            const div2=document.createElement("div");
            div2.classList.add(key);
            div2.textContent=item[key];
            div.appendChild(div2);

        }
    })
}
export {displayTodo}
function createTodo(title,description,priority,dueDate,project,id,complete=false)
{
    let setProject=(string)=>
    {
        project=string;
    }
    let getProject=()=>project;
    return{title,description,priority,dueDate,complete,id,project};
}
export{createTodo};
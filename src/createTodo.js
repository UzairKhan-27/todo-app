function createTodo(title,description,priority,dueDate,project,complete=false)
{
    let setProject=(string)=>
    {
        project=string;
    }
    let getProject=()=>project;
    return{title,description,priority,dueDate,complete,project};
}
export{createTodo};
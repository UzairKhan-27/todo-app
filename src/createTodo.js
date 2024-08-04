function createTodo(title,description,priority,dueDate,complete=false)
{
    let completeStatus=false;
    return{title,description,priority,dueDate,complete};
}
export{createTodo};
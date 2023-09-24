// for adding the task
export const addTask = (task, description) =>{
    return{

        
        type:"ADD_TASK",
        payload:{
            id: new Date().getTime().toString(),
            task : task,
            description:description
        }
    }
}

//for deleting the task
export const deleteTask = (id) =>{
    return{
        type:"DELETE_TASK",
        id
    }
}


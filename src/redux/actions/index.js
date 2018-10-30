export const addToDo = (todos) =>{
    return{
        type:"ADD_TODOS",
        payload:{
            todos
        }
    }
}

export const deleteToDo = (id) =>{
    return{
        type:"DELETE_TODO",
        payload:{
            id
        }
    }
}
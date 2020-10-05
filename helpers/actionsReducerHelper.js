
export const reducerActionsHelper = (dispatch)=>{

    const handleAddTodo= (newTodo) =>{
        
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete= todoId =>{
        // crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        }
        //dispatch
        dispatch(action)
    }

    const handleToggle=(todoId)=>{

        dispatch({
            type:'toggle',
            payload:todoId 
        })
    }

    return {handleAddTodo,handleDelete,handleToggle}

}
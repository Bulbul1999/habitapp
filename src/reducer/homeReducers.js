const initialData ={
    list : []
}

const todoReducers = (state = initialData, action) =>{

    switch(action.type){
        //for adding the habit
        case "ADD_TASK":
            const {id, task, description} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                      id:id,
                      task : task,
                      description:description
                    }
                ]
            }

            //for deleting the habit
            case "DELETE_TASK":
               const newList = state.list.filter((elem) => elem.id !== action.id)
                return{
                    ...state,
                    list: newList
                }
        default : return state;  
    }
}
export default todoReducers;
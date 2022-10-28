const initialState ={
    todos: []
}

const TodoReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'SAVE_ENTRY':
            return{
                ...state,
                //A new array with old first then new values
                todos:[...state.todos, action.userData]
            }
        case 'DELETE_ENTRY':
            return{
                // if the index does not equal the provided index, filter it (gets me a shallow copy of arr)
                todos: state.todos.filter((_, index) => index !== action.dataIndex)
            }
            default:
                return state;
    }
}
export default TodoReducer;
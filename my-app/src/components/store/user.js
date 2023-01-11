const INITIAL_STATE = {
    user:"saad@gmail.com",
    todo: ['saad'],
};

export default ( state = INITIAL_STATE, action)=>{
    console.log(action);
    switch (action.type) {
        case 'ADD':
        return{
            ...state,
            todo:[...state.todo,action.value],
        };
        case 'EDIT':
            var old_todo = [...state.todo];
            let new_value = prompt("Enter new value",action.old_value);
            old_todo.splice(action.index,1,new_value);
            return{
                ...state,
                todo: old_todo,
            };
            case 'DELETE':
                var old_todo = [...state.todo];
                old_todo.splice(action.index,1);
                return{
                    ...state,
                    todo: old_todo,
                };
            case "DELETEALL":
                return{
                    ...state,
                    todo:[],
                }
        default:
            return state;
    }
};


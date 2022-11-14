import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions";

const initialState=[
    {id: 1, 
    todo: 'Buy Egg', 
    completed: false},
    {id: 2, 
    todo: 'Buy Milk', 
    completed: false},
];

export const todosReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            const newToDo = [...state, action.payload];
            return newToDo;
        case REMOVE_TODO:
            const filteredToDo = state.filter((todo) => todo.id !== action.payload)
            return filteredToDo;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;
        default:
            return state;
    }
};

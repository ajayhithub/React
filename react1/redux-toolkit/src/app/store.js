import {configureStore} from '@reduxjs/toolkit';
import  todoReducer from '../feature/todo/todoSlice'

// todoReducer ===  todosSlice.reducer
export const store = configureStore({
    reducer: todoReducer
});


 



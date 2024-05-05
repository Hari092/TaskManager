import { createSlice } from "@reduxjs/toolkit";

const inputsSlice = createSlice({
    name: "inputs",
    initialState:{
        tasks:[]
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.unshift({...action.payload});
            if(state.tasks.length > 10){
                state.tasks.pop();
            }
        },
        removeAllTask: (state) => {
            state.tasks = [];
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id!== action.payload);
        },
        toggleCheckbox: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if(task.id === action.payload){
                    task.checked =!task.checked;
                }
                return task;
            })
        }
    }
})

export const {addTask, removeAllTask,removeTask,toggleCheckbox} = inputsSlice.actions;
export default inputsSlice.reducer;
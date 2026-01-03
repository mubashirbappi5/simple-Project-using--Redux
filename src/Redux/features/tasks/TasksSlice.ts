
import type { RootState } from "@/Redux/store";
import type { ITask } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



interface initialState {
    task:ITask[]
}


const initialState ={
    task:[

]
}

const tasksSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<ITask>)=>{
            state.task.push(action.payload)
        }
    }
})


export const SelectTask = (state:RootState)=>{
    return state.todo.task

}
export const {addTask} = tasksSlice.actions
export default tasksSlice.reducer;
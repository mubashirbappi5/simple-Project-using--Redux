
import type { RootState } from "@/Redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";



interface initialState {
    task:ITask[]
}


const initialState ={
    task:[{
        id:'sdff',
        title:'init frontend',
        description:'cretate home page and routing',
        dueDate:'2026-1-01',
        isCompleted: false,
        priority:'high'
    }


]
}

const tasksSlice = createSlice({
    name:"task",
    initialState,
    reducers:{}
})


export const SelectTask = (state:RootState)=>{
    return state.todo.task

}

export default tasksSlice.reducer;
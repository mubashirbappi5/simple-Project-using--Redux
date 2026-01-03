
import type { RootState } from "@/Redux/store";
import type { ITask } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";




interface initialState {
    task:ITask[]
}


const initialState: initialState ={
    task:[

]
}

type DraftTask= Pick<ITask, "title" | "description" | "dueDate" | "priority">; 

const CreateTask = (taskData:DraftTask):ITask=>{
    return{id:nanoid(), isCompleted:false,...taskData}
}




const tasksSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<ITask>)=>{

           const taskData = CreateTask(action.payload)
            state.task.push(taskData)
        },

        toggleCompletion:(state, action:PayloadAction<string>)=>{

            state.task.forEach((task)=>{
                if(task.id === action.payload){
                    task.isCompleted = !task.isCompleted
                }

            })


        },

        deleteTask:(state,action:PayloadAction<string>)=>{
            state.task = state.task.filter((task)=>task.id !== action.payload)
        }
    }
})


export const SelectTask = (state:RootState)=>{
    return state.todo.task

}

export const {addTask, toggleCompletion, deleteTask} = tasksSlice.actions
export default tasksSlice.reducer;
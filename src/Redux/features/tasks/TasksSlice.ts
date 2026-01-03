
import type { RootState } from "@/Redux/store";
import type { ITask } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";




interface initialState {
    task:ITask[]
}


const initialState: initialState ={
    task:[
         {
    id: "1",
    title: "Finish React Project",
    description: "Complete the React project by integrating Redux and TailwindCSS.",
    dueDate: "2026-01-10",
    isCompleted: false,
    priority: "High",
  },
  {
    id: "2",
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and milk for the week.",
    dueDate: "2026-01-05",
    isCompleted: true,
    priority: "Low",
  },

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
        },

        updateTask:(state,action:PayloadAction<ITask>)=>{
            const {id,title,description,dueDate,priority} = action.payload;

            const existingTask = state.task.find((task)=>task.id === id);
            if(existingTask){
                existingTask.title = title;
                existingTask.description = description;
                existingTask.dueDate = dueDate;
                existingTask.priority = priority;
            }
        }
    }
})


export const SelectTask = (state:RootState)=>{
    return state.todo.task

}

export const {addTask, toggleCompletion, deleteTask, updateTask} = tasksSlice.actions
export default tasksSlice.reducer;
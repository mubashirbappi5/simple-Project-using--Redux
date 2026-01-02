import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { SelectTask } from "@/Redux/features/tasks/TasksSlice";
import { useAppSelector } from "@/Redux/hooks";
import type { ITask } from "@/type";


const Tasks = () => {

    const tasks= useAppSelector(SelectTask)

    console.log(tasks)
    return (
        <div className="max-w-7xl mx-auto">
           <div className="">
           
           

           <div className="flex justify-between items-center mt-5">
            <h1 className="text-2xl font-semibold">Task List</h1>
             <AddTaskModal/>

           </div>
              </div>
          <div className="flex flex-col gap-5 my-10 ">
            {tasks.map((task)=>( <TaskCard tasks={task as ITask} key={task.id}/>))}
            
          </div>
            
        </div>
    );
};

export default Tasks;
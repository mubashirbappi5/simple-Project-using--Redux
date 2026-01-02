import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { SelectTask } from "@/Redux/features/tasks/TasksSlice";
import { useAppSelector } from "@/Redux/hooks";
import type { ITask } from "@/type";


const Tasks = () => {

    const tasks= useAppSelector(SelectTask)

    console.log(tasks)
    return (
        <div className="max-w-6xl mx-auto">
            <h1>task</h1> 

            <AddTaskModal/>

          <div className="flex flex-col gap-5 my-10 ">
            {tasks.map((task)=>( <TaskCard tasks={task as ITask}/>))}
            
          </div>
            
        </div>
    );
};

export default Tasks;
import { SelectTask } from "@/Redux/features/tasks/TasksSlice";
import { useAppSelector } from "@/Redux/hooks";


const Tasks = () => {

    const tasks= useAppSelector(SelectTask)

    console.log(tasks)
    return (
        <div>
            <h1>task</h1>
            
        </div>
    );
};

export default Tasks;
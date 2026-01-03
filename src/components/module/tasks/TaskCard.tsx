import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { toggleCompletion } from "@/Redux/features/tasks/TasksSlice";
import { useAppDispatch } from "@/Redux/hooks";
import type { ITask } from "@/type";


interface Iprops{
    tasks:ITask;
}


const TaskCard = ({tasks}:Iprops) => {
  
    const dispatch = useAppDispatch(); 



    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full",{
                        "bg-green-500":tasks.priority ==="Low",
                        "bg-red-500":tasks.priority === "High"
                    })}></div>
                    <h1 className={cn("text-2xl font-semibold",
                        {"line-through text-gray-500":tasks.isCompleted}
                    )}>{tasks.title}</h1>

             </div> 

             <div className="flex gap-3 items-center"> 

                <Checkbox onClick={()=>dispatch(toggleCompletion(tasks.id))} />
                <Button variant={"link"} className="p-0 text-red-500">
                    delete
                    </Button>



             </div>





            </div>

            <p className="mt-5">{tasks.description}</p>


            
        </div>
    );
};

export default TaskCard;
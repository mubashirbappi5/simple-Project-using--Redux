import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ITask } from "@/type";


interface Iprops{
    tasks:ITask;
}


const TaskCard = ({tasks}:Iprops) => {
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full",{
                        "bg-green-500":tasks.priority ==="Low",
                        "bg-red-500":tasks.priority === "High"
                    })}></div>
                    <h1 className="text-2xl font-semibold">{tasks.title}</h1>

             </div> 

             <div className="flex gap-3 items-center">
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
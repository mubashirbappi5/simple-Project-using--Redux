import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompletion } from "@/Redux/features/tasks/TasksSlice";
import { useAppDispatch } from "@/Redux/hooks";
import type { ITask } from "@/type";
import { AddTaskModal } from "./AddTaskModal"; // make sure this import is correct

interface Iprops {
  tasks: ITask;
}

const TaskCard = ({ tasks }: Iprops) => {
  const dispatch = useAppDispatch(); 
  const [isEditOpen, setIsEditOpen] = useState(false); // modal open state

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("w-3 h-3 rounded-full", {
              "bg-green-500": tasks.priority === "Low",
              "bg-red-500": tasks.priority === "High",
            })}
          ></div>
          <h1
            className={cn("text-2xl font-semibold", {
              "line-through text-gray-500": tasks.isCompleted,
            })}
          >
            {tasks.title}
          </h1>
        </div> 

        <div className="flex gap-3 items-center">
          <Checkbox
            checked={tasks.isCompleted}
            onClick={() => dispatch(toggleCompletion(tasks.id))}
          />
          <Button
            onClick={() => dispatch(deleteTask(tasks.id))}
            variant={"link"}
            className="p-0 text-red-500"
          >
            Delete
          </Button>

          {/* Edit Button */}
          <Button
            onClick={() => setIsEditOpen(true)}
            variant={"outline"}
            className="p-0 text-blue-500"
          >
            Edit
          </Button>
        </div>
      </div>

      <p className="mt-5">{tasks.description}</p>

      {/* AddTaskModal in edit mode */}
      {isEditOpen && (
        <AddTaskModal
          taskToEdit={tasks}        // pass current task for preview/edit
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </div>
  );
};

export default TaskCard;

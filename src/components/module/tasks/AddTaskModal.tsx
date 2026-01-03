import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addTask, updateTask } from "@/Redux/features/tasks/TasksSlice";
import { useAppDispatch } from "@/Redux/hooks";
import type { ITask } from "@/type";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface AddTaskModalProps {
  taskToEdit?: ITask; // if passed, modal is in edit mode
  onClose?: () => void;
}

export function AddTaskModal({ taskToEdit, onClose }: AddTaskModalProps) {
  const dispatch = useAppDispatch();

  const form = useForm<Partial<ITask>>({
    defaultValues: {
      title: taskToEdit?.title || "",
      description: taskToEdit?.description || "",
      priority: taskToEdit?.priority || "Low",
      dueDate: taskToEdit?.dueDate || null,
    },
  });

  // Reset form when taskToEdit changes
  useEffect(() => {
    if (taskToEdit) {
      form.reset({
        title: taskToEdit.title,
        description: taskToEdit.description,
        priority: taskToEdit.priority,
        dueDate: taskToEdit.dueDate,
      });
    }
  }, [taskToEdit]);

  const onSubmit: SubmitHandler<Partial<ITask>> = (data) => {
    if (taskToEdit) {
      dispatch(updateTask({ ...taskToEdit, ...data } as ITask));
    } else {
      dispatch(addTask(data as ITask));
    }
    onClose?.();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-400">{taskToEdit ? "Edit Task" : "Add Task"}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>{taskToEdit ? "Edit Task" : "Add Task"}</DialogTitle>
            <DialogDescription>
              {taskToEdit
                ? "Update the task information and save changes."
                : "Add a new task here."}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Priority */}
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || "Low"}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Due Date */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className="justify-between font-normal">
                          {field.value ? format(new Date(field.value), "PPP") : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">{taskToEdit ? "Save Changes" : "Add Task"}</Button>
            </DialogFooter>
          </Form>
        </form>
      </DialogContent>
    </Dialog>
  );
}

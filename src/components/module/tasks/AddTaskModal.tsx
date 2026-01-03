import { Button } from "@/components/ui/button"
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
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addTask } from "@/Redux/features/tasks/TasksSlice";
import { useAppDispatch } from "@/Redux/hooks";
import type { ITask } from "@/type";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddTaskModal() {

    const form = useForm();

    const dispatch = useAppDispatch()

    
      
  

    const onsubmit:SubmitHandler<FieldValues> = (data ) => {
      console.log(data);
      dispatch(addTask(data as ITask));
    };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-green-400">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>

           <form onSubmit={form.handleSubmit(onsubmit)}>
         <FormField
    control={form.control}
    name="title"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input {...field} value={field.value || ""}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />



         <FormField
    control={form.control}
    name="description"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
         <Textarea {...field} value={field.value || ""} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />


         <FormField
    control={form.control}
    name="priority"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <FormControl>
         <Select
         onValueChange={field.onChange}
         defaultValue={field.value}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Priority" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Low">Low</SelectItem>
    <SelectItem value="High">High</SelectItem>
  </SelectContent>
</Select>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />



         <FormField
    control={form.control}
    name="dueDate"
    render={({ field }) => (
      <FormItem>
         <FormLabel>Due Date</FormLabel>
         <Popover >
        <PopoverTrigger asChild>
        <FormControl>
        
       
          <Button
            variant="outline"
            id="date"
            className=" justify-between font-normal"
          >
            {field.value? (format(field.value, "PPP")): (<span>Select date</span>)}
            <ChevronDownIcon />
          </Button>
        </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            captionLayout="dropdown"
            onSelect={field.onChange}
          />
        </PopoverContent>
    
      
          
          </Popover>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

  <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>

           </form>


          
            </Form>
          
        </DialogContent>
      </form>
    </Dialog>
  )
}

import { Button } from "@/components/ui/button"
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
import { useForm } from "react-hook-form"

export function AddTaskModal() {

    const form = useForm();

    const onsubmit = (data) => {
        console.log(data)
    }
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
        <FormLabel />
        <FormControl>
          
          <Input {...field}/>
        </FormControl>
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

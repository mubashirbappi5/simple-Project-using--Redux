import App from "@/App";
import Home from "@/Pages/Home";
import Tasks from "@/Pages/Tasks";
import User from "@/Pages/User";
import { createBrowserRouter } from "react-router";

const router =  createBrowserRouter([
    {
     path:'/',
    Component :App,
    children:[
        {
          index:true,
        Component:Home,
        },
        {
            path:'users',
            Component:User,
        },
        {
            path:'tasks',
            Component:Tasks,
        }
    ]

}
]);
export default router;
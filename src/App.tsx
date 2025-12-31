import { Outlet } from "react-router";
import Navbar from "./components/layout/Navber";

const App = () => {
  return (
    <div>

      <Navbar/>

      <Outlet/>
     


    </div>
  );
};

export default App;
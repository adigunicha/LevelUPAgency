import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
const Mainlayouts = () => {
    return ( 
      <div>
       <Navbar/>
  
        <div className=" ">
      <Outlet/>
        </div>

      </div>
     );
}
 
export default Mainlayouts;
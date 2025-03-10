import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body=()=>{
    return <div className=" relative flex w-[100vw]  ">
        <SideBar/>
        <Outlet/>
       
    </div> 
}
export default Body;
import { Outlet } from "react-router-dom";
import Header from "../share/Header";
import MainSidebar from "./sidebar/MainSidebar";
import Dashboard from "./sidebar/pages/dashboard/Dashboard";



const Home = () => {
    return (
        <div>
          <Header></Header>
         <MainSidebar></MainSidebar>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;
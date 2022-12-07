import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div
      style={{
        padding: "50px 50px 10px 370px",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;

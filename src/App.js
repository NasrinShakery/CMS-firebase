import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
   const router = useRoutes(routes);
   return (
      <>
         <TopBar />
         <div className="container">
            <Sidebar />
            {router}
         </div>
      </>
   );
};
export default App;

import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
const App = () => {
   const router = useRoutes(routes);
   return (
      <>
         <TopBar/>
         {router}
      </>
   );
};
export default App;

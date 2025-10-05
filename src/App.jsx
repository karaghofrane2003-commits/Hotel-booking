import React from "react";
import Navbar from "./components/navbar";
import { useLocation } from "react-router-dom";
const App=() => {
   const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  return (
    <div >
   {!isOwnerPath && <Navbar/>}
    </div>
  );
}

export default App;

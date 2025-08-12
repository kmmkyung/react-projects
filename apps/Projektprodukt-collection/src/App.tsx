import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Loader from "./components/Loader";

function App() {
  const { pathname } = useLocation();
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  return (
    <>
      <Loader />
      <Outlet />
    </>
  )
}

export default App

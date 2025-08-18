import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  // useEffect(() => {
  //   if (showLoader) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [showLoader]);

  return (
    <>
      {/* {showLoader ? 
        <Loading onFinished={() => setShowLoader(false)} />
        :
        <>
        <Header />
        <Outlet />
        <Footer/>
        </>
      } */}
      <>
      <Header />
      <Outlet />
      <Footer/>
      </>
    </>
  )
}

export default App

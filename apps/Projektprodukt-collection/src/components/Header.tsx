import { Link, useNavigate } from "react-router-dom";
import imageData from "../data/imageData";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [ showMenu, setShowMenu ] = useState(false);
  const [ isNavVisible, setIsNavVisible ] = useState(true);
  const [ showBlur, setShowBlur] = useState(false);
  const lastScrollY = useRef(0);

  function menuVisible(deltaY: number, scrollY: number) {
    if(scrollY <= 100){
      setIsNavVisible(true)
      setShowBlur(false);
      return;
    }
    if (deltaY > 0) {
      setShowBlur(false);
      setIsNavVisible(false);
    }
    else {
      setShowBlur(true);
      setIsNavVisible(true);
    }
  }

  useEffect(()=>{
    if(showMenu) {
      document.body.style.overflow = "hidden";
    }
    else { document.body.style.overflow = "auto"; }
    return () => { document.body.style.overflow = "auto"; }
  },[showMenu])

  useEffect(()=>{
    function onWheel(event: WheelEvent) {
      const scrollTop = window.scrollY;
      menuVisible(event.deltaY, scrollTop);
      lastScrollY.current = scrollTop;
    };

    function onScroll() {
      const scrollTop = window.scrollY;
      const delta = scrollTop - lastScrollY.current;
      if(Math.abs(delta) > 4) {
        menuVisible(delta, scrollTop);
        lastScrollY.current = scrollTop;
      }
    }

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  },[]);

  return(
    <>
    <header className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300
      ${isNavVisible ? "translate-y-0" : "-translate-y-full"}
      ${showBlur ? "backdrop-blur-md" : "bg-transparent backdrop-blur-0"}
    `}>
      <div className="inner">
        <div className="h-20 flex items-center justify-between">
          <img className="h-4 w-auto cursor-pointer" src={imageData.logo} alt="logo" onClick={()=>navigate('/')} />
          <button className="text-base font-ppSans ppBold" onClick={() => {setShowMenu(true);}}>menu</button>
        </div>
      </div>
    </header>

    {showMenu && (
      <div className="fixed top-0 left-0 z-10 w-full h-full bg-neutral-900/50"
        onClick={(e) => { if (e.target === e.currentTarget) setShowMenu(false); }}/>
      )}
      <nav
      className={`fixed z-20 top-0 right-0 h-full backdrop-blur-md bg-black/40 transform transition-transform duration-300 ease-in-out *:text-white flex flex-col gap-5 justify-between w-screen md:w-[500px] px-[min(3.5vw,50px)]
        ${showMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="h-20 text-right text-base font-ppSans ppBold" onClick={() => setShowMenu(false)}>close</button>
        <ol className={`flex flex-col gap-5 pb-10 transform transition-all duration-500 ease-out
              ${showMenu ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
          <li><Link to="/About" className="text-5xl hover:underline" onClick={() => setShowMenu(false)}>About</Link></li>
          <li><Link to="/Product" className="text-5xl hover:underline" onClick={() => setShowMenu(false)}>Product</Link></li>
          <li><Link to="/Collection" className="text-5xl hover:underline" onClick={() => setShowMenu(false)}>Collection</Link></li>
        </ol>
      </nav>
    </>
  )
}
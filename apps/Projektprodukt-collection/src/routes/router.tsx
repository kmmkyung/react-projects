import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Product from "./Products";
import About from "./About";
// import Home from "./Home/Home";
// import NotFound from "./NotFound/NotFound";

const Router = createBrowserRouter([
  {
    path: "/", element: (<App/>),
    children:[
      {path:'', element: <Home/> },
      {path:'Project/:projectId', element: <Product/>},
      {path:'about', element: <About/>},
    ],
    // {/* errorElement: <NotFound/> */}
  },
],
{/* { basename: import.meta.env.BASE_URL } */}
)

export default Router;
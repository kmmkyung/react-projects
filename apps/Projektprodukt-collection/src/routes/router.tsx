import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import NotFound from "./NotFound.tsx";
import ProductDetail from "./ProductDetail.tsx";

const Router = createBrowserRouter([
  {
    path: "/", element: (<App/>),
    children:[
      {path:'', element: <Home/> },
      {path:'Products', element: <Products/>},
      { path: "products/:productName", element: <ProductDetail/> },
      {path:'About', element: <About/>},
    ],
    errorElement:  <NotFound/>
  },
],
{/* { basename: import.meta.env.BASE_URL } */}
)

export default Router;
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./LayOut/Root";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";
import AuthProvider from "./Component/Provider/AuthProvider";
import Vagetable from "./Component/Menu/vagetable/Vagetable";
import Pizza from "./Component/Menu/Pizza/Pizza";
import Cart from "./Component/Cart/Cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     {
      path: '/',
      element: <Home></Home>
     },
     {
      path: '/vagetable',
      element: <Vagetable></Vagetable>
     },
     {
      path: '/Pizza',
      element: <Pizza></Pizza>
     },
     {
      path: '/cart',
      element: <Cart></Cart>,
      loader: () => fetch("menu.json")
     }
    ],
  },
  {
    path: '/login',
    element: <Login></Login>
   },
   {
    path:'/registration',
    element: <Registration></Registration>
   },
   
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);

import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Home from './Components/Home/Home.jsx';
import ProductComponent from './AdminPages/ProductComponent/ProductComponent.jsx';
import GetProducts from './AdminPages/GetProducts/GetProducts.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/app",
    Component: App,
  },
  {
    path: "/product",
    Component: ProductComponent
  },
  {
    path: "/getproducts",
    Component: GetProducts
  },
  {
    path: "/contact",
    Component: Contact
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />

  </StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/public/auth/Login";
import { Signup } from "./components/public/auth/Signup";
import { Product } from "./components/admin/Product.js";
import { Layout } from "./components/common/Layout";
import React from "react";
import { Home } from "./components/public";
import { ErrorPage } from "./components/common/ErrorPage";
const isLogin = localStorage.getItem('isLogin')
const pulbicpath = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
]
const privatePath = [

  {
    path: '/product',
    element: <Product />
  }

]
export const Routes = createBrowserRouter([
  {
    element: <Layout />,
    children: isLogin ? privatePath : pulbicpath,
    errorElement: <ErrorPage />
  },
])
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthMiddleware from "../authentification/AuthMiddleware";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/page";
import Login from "../authentification/page";
import Report from "../Report/page";
import Arrangement from "../Arrangement/page";
import ArrangementChild from "../Arrangement/arrangementChild/page";
import Supers from "../Supers/page";
import Users from "../Users/page";
import Userform from "../Users/components/AddQrCode";

import Dishes from "../Dishes/page";
import DashboardCompany from "../Coompany/page";
import DemoPageOrders from "../Orders/page";
import UserList from "../tasks/page";

// Higher-order component to apply middleware
const withAuth = (element) => <AuthMiddleware>{element}</AuthMiddleware>;

export const routes = [
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: withAuth(<Layout />),
    children: [
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Report", element: <Report /> },
      {
        path: "Arrangement",
        element: <Arrangement />,
        children: [{ path: ":id", element: <ArrangementChild /> }],
      },
      { path: "Users", element: <Users /> },
      { path: "Supers", element: <Supers /> },
      { path: "Users/AddUser", element: <Userform /> },
      { path: "Restos", element: <Dishes /> },
      // { path: "userList", element: <DemoPageOrders /> },
      { path: "userList", element: <UserList /> },
      { path: "DashboardCompany", element: <DashboardCompany /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

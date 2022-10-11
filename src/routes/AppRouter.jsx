import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UsersPage, UserPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },

  {
    path: "/:userId",
    element: <UserPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;

import React from 'react';
import { Users } from './Users';
import CardXL from './CardXL';


import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>,
  },

  {
    path: "/:userId",
    element: <CardXL/>,
  },
]);

const App = () => (
  <RouterProvider router={router} />
)

export default App
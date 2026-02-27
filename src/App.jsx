import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import React from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
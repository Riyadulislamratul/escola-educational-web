import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import React from 'react'
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicePage from "./pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      {path: "about", Component: AboutUsPage},
      {path: "contact", Component: ContactUsPage},
      {path: "service", Component: ServicePage},
      {path: "*", Component: NotFoundPage}
      
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { App, Astroid, RandomAstroid, Home } from "./pages";
import AstroidContextProvider from "./context/AstroidContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="astroid/:id" element={<Astroid />} />
      <Route path="random-astroid" element={<RandomAstroid />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AstroidContextProvider>
      <RouterProvider router={router} />
    </AstroidContextProvider>
  </>
);

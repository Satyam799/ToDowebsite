import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import All from "./Screen/All.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Checkelement from "./Comnponent/Checkelement.tsx";
import Inprogress from "./Screen/Inprogress.tsx";
import Done from "./Screen/Done.tsx";
import Donecheck from "./Comnponent/Donecheck.tsx";
import { Provider } from "react-redux";
import store from "./Store/stor.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<All />} />
      <Route path="" element={<Checkelement />}>
        <Route path="/inprogress" element={<Inprogress />} />
      </Route>
      <Route path="" element={<Donecheck />}>
        <Route path="/done" element={<Done />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

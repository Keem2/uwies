import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Create from "./routes/create";
import View from "./routes/view";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./routes/protectedroute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
   },
   {
      path: "/create",
      element: (
         <ProtectedRoute>
            <Create />
         </ProtectedRoute>
      ),
   },
   {
      path: "/view",
      element: (
         <ProtectedRoute>
            <View />
         </ProtectedRoute>
      ),
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);

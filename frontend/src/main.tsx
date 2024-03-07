import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Create from "./routes/create";
import View from "./routes/view";
import ScheduleDetails from "./routes/scheduledetails";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./routes/protectedroute";
import supabase from "./utils/supabaseClient";
import { SessionContextProvider } from "@supabase/auth-helpers-react"; // session context
<<<<<<< HEAD
import { CurrentScheduleContextProvider } from "./context/currentScheduleContext";
=======
import { CurrentScheduleContextProvider } from "../context/currentScheduleContext";
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194

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
   {
      path: "view/:id",
      element: (
         <ProtectedRoute>
            <ScheduleDetails />
         </ProtectedRoute>
      ),
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <SessionContextProvider supabaseClient={supabase}>
         <CurrentScheduleContextProvider>
            <RouterProvider router={router} />
         </CurrentScheduleContextProvider>
      </SessionContextProvider>
   </React.StrictMode>
);

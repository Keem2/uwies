import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Create from "./routes/create";
import View from "./routes/view";
import Edit from "./routes/edit";
import ScheduleDetails from "./routes/scheduledetails";
import ErrorBoundary from "./components/errorBoundary";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./routes/protectedroute";
import supabase from "./utils/supabaseClient";
import { SessionContextProvider } from "@supabase/auth-helpers-react"; // session context
import { CurrentScheduleContextProvider } from "./context/currentScheduleContext";
import PrivacyPolicy from "./routes/privacypolicy";
import Terms from "./routes/terms";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorBoundary />,
   },
   {
      path: "/create",
      element: (
         <ProtectedRoute>
            <Create />
         </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
   },
   {
      path: "/view",
      element: (
         <ProtectedRoute>
            <View />
         </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
   },
   {
      path: "view/:id",
      element: (
         <ProtectedRoute>
            <ScheduleDetails />
         </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
   },
   {
      path: "edit/:id",
      element: (
         <ProtectedRoute>
            <Edit />
         </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
   },
   {
      path: "/privacy",
      element: <PrivacyPolicy />,
      errorElement: <ErrorBoundary />,
   },
   {
      path: "/terms",
      element: <Terms />,
      errorElement: <ErrorBoundary />,
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

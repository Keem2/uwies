import { useEffect, useState } from "react";
import Unauthorized from "../components/unauthorized";
import MultiStepForm from "../components/form/form";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
   import.meta.env.VITE_SUPABASE_UWIES_URL,
   import.meta.env.VITE_SUPABASE_UWIES_ANON_PUBLIC
);

const Create = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   //function checking if user already has a session active (is logged in)
   useEffect(() => {
      async function getSessionData() {
         const {
            data: { session },
         } = await supabase.auth.getSession();

         session === null ? setIsLoggedIn(false) : setIsLoggedIn(true);
      }
      getSessionData();
   }, []);

   return <>{isLoggedIn ? <MultiStepForm /> : <Unauthorized />}</>;
};

export default Create;

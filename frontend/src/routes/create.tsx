import { useEffect, useState } from "react";
import Unauthorized from "../components/unauthorized";
import MultiStepForm from "../components/form/form";
import supabase from "../utils/supbaseClient";
import { userContext } from "../context/userContext";
import Navbar from "../components/navbar";

const Create = () => {
   //user context being passed
   const [user, setUser] = useState({});
   const userData = { user, setUser };
   //logged in state for user access
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

   return (
      <>
         {isLoggedIn ? (
            <userContext.Provider value={userData}>
               <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
                  <Navbar />
                  <MultiStepForm />{" "}
               </section>
            </userContext.Provider>
         ) : (
            <Unauthorized />
         )}
      </>
   );
};

export default Create;

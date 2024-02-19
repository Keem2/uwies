import { useState } from "react";
import { userContext } from "../context/userContext";
import Navbar from "../components/navbar";
import ScheduleList from "../components/schedulelist";

const Create = () => {
   //user context being passed
   const [user, setUser] = useState({});
   const userData = { user, setUser };
   return (
      <>
         <userContext.Provider value={userData}>
            <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
               <Navbar />
               <ScheduleList />
            </section>
         </userContext.Provider>
      </>
   );
};

export default Create;

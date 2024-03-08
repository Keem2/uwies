import Navbar from "../components/navbar";
import MultiStepEditForm from "../components/form/editForm";
import { useEffect, useState } from "react";
import supabase from "../utils/supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";
import { useParams } from "react-router-dom";

const Edit = () => {
   const [isCorrectSchedule, setisCorrectSchedule] = useState(false);
   const session = useSession();
   const { id } = useParams();

   useEffect(() => {
      //check to see if schedule details is truly theirs
      const isTheirSchedule = async () => {
         const { data } = await supabase
            .from("schedule")
            .select()
            .eq("userid", session?.user.id)
            .eq("id", id);

         if (data !== null) {
            setisCorrectSchedule(true);
         }
      };
      isTheirSchedule();
   }, [id]);

   if (!isCorrectSchedule) {
      //if isCorrectSchedule state stays false, show loading
      return (
         <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
            <Navbar />
            <div className="ml-5 md:ml-5 mt-7">
               <span className="loading loading-dots loading-lg bg-black dark:bg-white"></span>
            </div>
         </section>
      );
   }

   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
         <Navbar />
         <MultiStepEditForm />
      </section>
   );
};

export default Edit;

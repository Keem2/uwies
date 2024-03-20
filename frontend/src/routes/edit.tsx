import Navbar from "../components/navbar";
import MultiStepEditForm from "../components/form/editForm";
import { useEffect, useState } from "react";
import supabase from "../utils/supabaseClient";
import { useParams } from "react-router-dom";
import { CurrentScheduleContext } from "../context/currentScheduleContext";
import { useContext } from "react";

const Edit = () => {
   const [isCorrectSchedule, setisCorrectSchedule] = useState(false);
   const { currentSchedule, setCurrentSchedule } = useContext(
      CurrentScheduleContext
   );
   //url params
   const { id } = useParams();

   useEffect(() => {
      //check to see if schedule is truly theirs
      const isTheirSchedule = async () => {
         const { data: schedule } = await supabase
            .from("schedule")
            .select("*")
            .eq("userid", currentSchedule.userid)
            .eq("id", id);

         if (schedule !== null) {
            setisCorrectSchedule(true);
            setCurrentSchedule(schedule[0]);
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

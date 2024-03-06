import { CurrentScheduleContext } from "../context/currentScheduleContext";
import { useContext } from "react";
import Navbar from "../components/navbar";

type ScheduleDetails = {
   currentSchedule: {
      name: string;
      id: string;
      courses: {
         course: string;
         date: string;
         description: string;
         hours: string;
         location: string;
         room: string;
         time: string;
      }[];
   };
};
const ScheduleDetails = () => {
   const { currentSchedule }: ScheduleDetails = useContext(
      CurrentScheduleContext
   );
   console.log(currentSchedule);
   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
         <Navbar />
         <div className="ml-1 md:ml-5 mt-7">
            <h1 className="capitalize dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 text-3xl md:text-4xl">
               {currentSchedule.name}
            </h1>
         </div>
      </section>
   );
};

export default ScheduleDetails;

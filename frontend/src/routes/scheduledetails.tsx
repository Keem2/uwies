import { CurrentScheduleContext } from "../context/currentScheduleContext";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import supabase from "../utils/supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";
import { useParams } from "react-router-dom";

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

type Course = {
   course: string;
   date: string;
   description: string;
   hours: string;
   location: string;
   room: string;
   time: string;
};

const ScheduleDetails = () => {
   const session: any = useSession();
   let { id }: any = useParams();
   const [isCorrectSchedule, setisCorrectSchedule] = useState(false);
   const { currentSchedule }: any = useContext(CurrentScheduleContext);

   let scheduleList = currentSchedule.courses
      .sort((a: Course, b: Course) => {
         /** Sorts schedules by date and time created
          * With earliest showing first*/
         return Date.parse(a.date) - Date.parse(b.date);
      })
      //reducing to sort by date value as a key
      .reduce((r: any, a: any) => {
         r[a.date] = r[a.date] || [];
         r[a.date].push(a);
         return r;
      }, Object.create(null));

   useEffect(() => {
      //check to see if schedule details is truly theirs
      const isTheirSchedule = async () => {
         const { data } = await supabase
            .from("schedule")
            .select()
            .is("userid", session?.user.id)
            .is("id", id);

         if (data !== null) {
            setisCorrectSchedule(true);
         }
      };
      isTheirSchedule();
   }, [id]);

   if (isCorrectSchedule) {
      //if isCorrectSchedule state stays false, show nothing
      return <></>;
   }

   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
         <Navbar />
         <div className="ml-1 md:ml-5 mt-7">
            <h1 className=" dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 text-3xl md:text-4xl">
               {currentSchedule.name}
            </h1>
            {Object.keys(scheduleList).map((date) => {
               let results = scheduleList[date];
               return (
                  <div className="ml-4 md:ml-1 mb-8">
                     <p className="dark:text-white font-semibold text-base md:text-lg bg-slate-50 py-2 dark:bg-gray-900 z-10">
                        {date}
                     </p>
                     {results.map((course: Course) => (
                        <div className="overflow-x-auto">
                           <table
                              key={date}
                              className="table table-sm 
                        md:table-md dark:text-white"
                           >
                              <thead>
                                 <tr className="bg-slate-100 dark:bg-gray-800 text-xs text-gray-600 md:text-base dark:text-white">
                                    <td>Course Code</td>
                                    <td>Course Name</td>
                                    <td>Time</td>
                                    <td>Length</td>
                                    <td>Location</td>
                                    <td>Room</td>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr key={date}>
                                    <td>{course.course}</td>
                                    <td>{course.description}</td>
                                    <td>{course.time}</td>
                                    <td>{course.hours}</td>
                                    <td>{course.location}</td>
                                    <td>{course.room}</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     ))}
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default ScheduleDetails;

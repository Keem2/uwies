import { CurrentScheduleContext } from "../context/currentScheduleContext";
import { Fragment, useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import supabase from "../utils/supabaseClient";
import { useParams } from "react-router-dom";

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
   //url params
   let { id } = useParams();
   const [isCorrectSchedule, setisCorrectSchedule] = useState(false);
   //cuurent schedule's context
   const { currentSchedule } = useContext(CurrentScheduleContext);

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
            .select("*")
            .eq("userid", currentSchedule.userid);

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
         <div className="ml-1 md:ml-5 mt-7">
            <h1 className="text-slate-900  dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 text-3xl md:text-4xl">
               {currentSchedule.name}
            </h1>
            <div className="ml-4 md:ml-1 mb-8">
               {Object.keys(scheduleList).map((date, index) => {
                  let results = scheduleList[date];
                  return (
                     <Fragment key={date + index}>
                        <p className="dark:text-white text-black font-semibold text-base md:text-lg bg-slate-50 py-2 dark:bg-gray-900 z-10">
                           {date}
                        </p>

                        {results.map((course: Course, index: number) => (
                           <div className="overflow-x-auto">
                              <table
                                 key={date}
                                 className="table table-sm 
                        md:table-md dark:text-white text-black"
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
                                    <tr key={index}>
                                       <td key={course.course}>
                                          {course.course}
                                       </td>
                                       <td key={course.description}>
                                          {course.description}
                                       </td>
                                       <td key={course.time}>{course.time}</td>
                                       <td key={course.hours}>
                                          {course.hours}
                                       </td>
                                       <td key={course.location}>
                                          {course.location}
                                       </td>
                                       <td key={course.room}>{course.room}</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        ))}
                     </Fragment>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default ScheduleDetails;

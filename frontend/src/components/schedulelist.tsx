import { useState, useEffect } from "react";
import supabase from "../utils/supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";

type ScheduleCard = {
   courses: { course: string; description: string }[] | null;
   id: string;
   name: string | null;
   userid: string;
};
const ScheduleList = () => {
   const session: any = useSession();
   const [schedule, setSchedule] = useState<any>([]);
   const [isLoading, setIsLoading] = useState(true);

   const getSchedules = async () => {
      let { data: schedule, error } = await supabase
         .from("schedule")
         .select("*")
         .eq("userid", session?.user.id);

      if (error) console.log(error);

      if (schedule !== null) {
         setSchedule(schedule);
      }
      setIsLoading(false);
   };

   useEffect(() => {
      getSchedules();
   }, [isLoading]);

   return (
      <section className="ml-1 md:ml-5 mt-7">
         <h1 className="capitalize dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 text-3xl md:text-4xl">
            Your Schedules
         </h1>
         {/**Card Container*/}
         <div className="flex flex-col items-center md:items-stretch flex-wrap gap-8 md:flex-row mb-8">
            {/**Card Style & Content*/}
            {!isLoading ? (
               <>
                  {schedule.length === 0 ? (
                     <></>
                  ) : (
                     schedule.map((schedule: ScheduleCard, index: number) => (
                        <div
                           className="card w-80 bg-slate-200 dark:bg-gray-700 text-primary-content cursor-pointer shadow"
                           key={index}
                        >
                           <div className="card-body">
                              <h2 className="card-title text-neutral-700 dark:text-slate-300">
                                 {schedule.name}
                              </h2>
                              <ul className="pt-3 text-base break-words text-gray-500 dark:text-gray-400 list-none">
                                 {schedule.courses?.map((courses) => (
                                    <li
                                       key={courses.description}
                                       className="mb-3"
                                    >
                                       {courses.course} - {courses.description}
                                    </li>
                                 ))}
                              </ul>

                              <div className="card-actions justify-end mt-auto pt-8 gap-8">
                                 {/**Pen Icon for Editing ScheduleCard */}
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="black"
                                    className="w-6 h-6 hover:stroke-blue-500
                         dark:stroke-white dark:hover:stroke-blue-500"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                    <title>Edit Schedule</title>
                                 </svg>
                                 {/**Trash Icon for Deleting ScheduleCard */}
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="black"
                                    className="w-6 h-6 hover:stroke-red-500
                         dark:stroke-white dark:hover:stroke-red-500"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                    <title>Delete Schedule</title>
                                 </svg>
                              </div>
                           </div>
                        </div>
                     ))
                  )}
               </>
            ) : (
               <span className="loading loading-dots loading-lg bg-black dark:bg-white"></span>
            )}
         </div>
      </section>
   );
};
export default ScheduleList;

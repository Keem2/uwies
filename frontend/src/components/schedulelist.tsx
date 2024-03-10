import { useState, useEffect, Fragment, useContext } from "react";
import supabase from "../utils/supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentScheduleContext } from "../context/currentScheduleContext";

//type for schedule information
type ScheduleCard = {
   courses: { course: string; description: string }[] | null;
   id: string;
   name: string | null;
   userid: string;
   created_at: string;
};
const ScheduleList = () => {
   const { setCurrentSchedule } = useContext(CurrentScheduleContext);
   const navigate = useNavigate();
   const session = useSession();
   const [schedule, setSchedule] = useState<any>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [isDeleting, setisDeleting] = useState(false);
   const [isDeleteError, setIsDeleteError] = useState(false);

   //function to get user schedules from supabase, placing them in a state array
   const getSchedules = async () => {
      let { data: schedule } = await supabase
         .from("schedule")
         .select("*")
         .eq("userid", session?.user.id);

      if (schedule) {
         setSchedule(schedule);
      }
      setIsLoading(false);
   };

   const deleteSchedule = async (id: string) => {
      const { error } = await supabase.from("schedule").delete().eq("id", id);

      if (error) {
         //if error occured, close modal and show toast
         setisDeleting(false);
         setIsDeleteError(true);
      } else {
         navigate(0);
         setisDeleting(false);
      }
   };

   //hide error toast after 5 seconds
   useEffect(() => {
      setTimeout(function () {
         setIsDeleteError(false);
      }, 2000);
   }, [isDeleteError]);

   /**re-renders component when function is ran. isLoading as dependency since schedule
    * state array was resetting on reload
    */
   useEffect(() => {
      getSchedules();
   }, [isLoading]);

   return (
      <section className="ml-1 md:ml-5 mt-7">
         <h1 className="text-slate-900 capitalize dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 text-3xl md:text-4xl">
            Your Schedules
         </h1>
         {/**Card Container*/}
         <div className="flex flex-col items-center md:items-stretch flex-wrap gap-8 md:flex-row mb-8">
            {/**Card Style & Content*/}
            {/*If component is not loading, show either JSX whenschedule state 
            is empty or schedules from supabase */}
            {!isLoading ? (
               <>
                  {/**If error occurs trying
                   * to delete, toast appears
                   */}
                  {isDeleteError && (
                     <div className="toast z-10">
                        <div className="alert alert-error">
                           <span>An error occurred. Please try again.</span>
                        </div>
                     </div>
                  )}

                  {schedule.length === 0 ? (
                     <div className="flex flex-col justify-center w-full">
                        <p className="text-slate-500 dark:text-slate-300 italic text-center mt-20 text-md">
                           You have not created a schedule...yet
                        </p>
                        <Link
                           to={`/create`}
                           className="btn mx-auto my-8 bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                           </svg>
                           Create schedule
                        </Link>
                     </div>
                  ) : (
                     schedule
                        .sort((a: ScheduleCard, b: ScheduleCard) => {
                           /** Sorts schedules by date and time created
                            * With most recent showing first*/
                           return (
                              Date.parse(b.created_at) -
                              Date.parse(a.created_at)
                           );
                        })
                        .map((schedule: ScheduleCard, index: number) => (
                           <Fragment key={index}>
                              <div
                                 className="card w-80 bg-slate-200 dark:bg-gray-700 text-primary-content cursor-pointer shadow"
                                 key={index}
                                 onClick={(e) => {
                                    //set current schedule to shedule context & navigate
                                    e.stopPropagation();
                                    setCurrentSchedule(schedule);
                                    navigate(`/view/${schedule.id}`);
                                 }}
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
                                             {courses.course} -{" "}
                                             {courses.description}
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
                                          onClick={(e) => {
                                             e.stopPropagation();
                                             setCurrentSchedule(schedule);
                                             navigate(`/edit/${schedule.id}`);
                                          }}
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
                                          onClick={(e) => {
                                             e.stopPropagation();
                                             let modal =
                                                document.getElementById(
                                                   schedule.id as any
                                                ) as HTMLDialogElement;
                                             modal.showModal();
                                          }}
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
                              {!isDeleteError && (
                                 <dialog
                                    id={schedule.id as any}
                                    className="modal"
                                    key={schedule.id}
                                 >
                                    <div className="modal-box dark:bg-neutral dark:text-white">
                                       <h3 className="font-semibold text-lg">
                                          Delete {schedule.name}
                                       </h3>
                                       <p className="py-4">
                                          Are you sure you want to delete this
                                          schedule?
                                       </p>
                                       {isDeleting ? (
                                          <div className="modal-action">
                                             {/* if there is a button in form, it will close the modal */}
                                             <p className="btn btn-error text-white">
                                                <span className="loading loading-spinner"></span>
                                                Deleting...
                                             </p>
                                          </div>
                                       ) : (
                                          <div className="modal-action">
                                             <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <p
                                                   className="btn btn-error mr-5 text-white"
                                                   onClick={() => {
                                                      setisDeleting(true);
                                                      deleteSchedule(
                                                         schedule.id
                                                      );
                                                   }}
                                                >
                                                   Delete
                                                </p>
                                                <button className="btn">
                                                   Cancel
                                                </button>
                                             </form>
                                          </div>
                                       )}
                                    </div>
                                 </dialog>
                              )}
                           </Fragment>
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

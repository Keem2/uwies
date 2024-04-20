//DaisyUI table
import Divider from "./ui/divider";
import Searchbar from "./ui/searchbar";
import { Fragment, useEffect, useState } from "react";
import React from "react";
import supabase from "../utils/supabaseClient";

type Exam = {
   date: string;
   code: string;
   title: string;
   time: string;
   hours: string;
   location: string;
   room: string;
};
const Table = () => {
   const [hasLoaded, setHasLoaded] = useState(false);
   const [loadingError, setLoadingError] = useState(false);
   const [search, setSearch] = useState("");
   const [result, setResult] = useState<any>([]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   /**Get Table data from Supabase, store in result state variable
    * and set hasLoaded to true, displaying the table
    */
   const getTableData = async () => {
      let { data: exams, error } = await supabase.from("exams").select("*");

      if (exams) {
         let examListGrouped = exams.reduce(
            (result: any, currentValue: any) => {
               (result[currentValue["date"]] =
                  result[currentValue["date"]] || []).push(currentValue);
               return result;
            },
            {}
         );
         setResult(examListGrouped);
         setHasLoaded(true);
      }

      if (error) {
         setLoadingError(true);
      }
   };

   //load exams from supabase DB every time hasLoaded changes
   useEffect(() => {
      getTableData();
   }, [hasLoaded]);

   //Table data returned
   return (
      <>
         {loadingError && (
            <div className="toast z-20 md:mr-4">
               <div className="alert alert-error">
                  <span>The exam list could not be loaded.</span>
               </div>
            </div>
         )}

         <div className="w-100 mb-8">
            <Searchbar
               placeholder="Search by code name or code"
               onChange={handleChange}
               value={search}
               disabled={!hasLoaded}
            />
         </div>
         {hasLoaded === false ? (
            <div className="flex flex-col items-center mb-10">
               {loadingError ? (
                  <p className="mb-3 font-semibold text-lg">No exam data.</p>
               ) : (
                  <>
                     <p className="mb-3 font-semibold text-lg">
                        Loading exam list...
                     </p>
                     <span className="loading loading-dots loading-lg"></span>
                  </>
               )}
            </div>
         ) : (
            <>
               {" "}
               {Object.keys(result).map((date) => {
                  {
                     /**Variable filterResults stores returned exam info corresponding to user input into an array */
                  }
                  let filterResults = result[date].filter((exam: Exam) => {
                     return search.toLowerCase() === ""
                        ? exam
                        : exam.title
                             .toLowerCase()
                             .includes(search.toLowerCase()) ||
                             exam.code
                                .toLowerCase()
                                .includes(search.toLowerCase());
                  });
                  return (
                     <Fragment key={date}>
                        {filterResults.length > 0 && (
                           <>
                              <p
                                 className={
                                    "dark:text-white font-semibold text-base md:text-lg sticky -top-4 bg-slate-50 py-2 dark:bg-gray-900 z-10"
                                 }
                              >
                                 {date}
                              </p>
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
                                       {filterResults.map(
                                          (exam: Exam, index: number) => {
                                             return (
                                                <tr key={index}>
                                                   <td>{exam.code}</td>
                                                   <td>{exam.title}</td>
                                                   <td>{exam.time}</td>
                                                   <td>{exam.hours}</td>
                                                   <td>{exam.location}</td>
                                                   <td>{exam.room}</td>
                                                </tr>
                                             );
                                          }
                                       )}
                                    </tbody>
                                 </table>
                              </div>
                              <Divider />
                           </>
                        )}
                     </Fragment>
                  );
               })}
            </>
         )}
      </>
   );
};

export default Table;

//DaisyUI table
import result from "../data/examlist";
import Divider from "./ui/divider";
import Searchbar from "./ui/searchbar";
import { Fragment, useState } from "react";
import React from "react";

type Exam = {
   course: string;
   description: string;
   time: string;
   hours: string;
   location: string;
   room: string;
};
const Table = () => {
   const [search, setSearch] = useState("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   //Setting table data
   const tabledata = (
      <>
         {Object.keys(result).map((date) => {
            {
               /**Variable filterResults stores returned exam info corresponding to user input into an array */
            }
            let filterResults = result[date].filter((exam: Exam) => {
               return search.toLowerCase() === ""
                  ? exam
                  : exam.description
                       .toLowerCase()
                       .includes(search.toLowerCase()) ||
                       exam.course.toLowerCase().includes(search.toLowerCase());
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
                                             <td key={exam.course}>
                                                {exam.course}
                                             </td>
                                             <td key={exam.description}>
                                                {exam.description}
                                             </td>
                                             <td key={exam.time}>
                                                {exam.time}
                                             </td>
                                             <td key={exam.hours}>
                                                {exam.hours}
                                             </td>
                                             <td key={exam.location}>
                                                {exam.location}
                                             </td>
                                             <td key={exam.room}>
                                                {exam.room}
                                             </td>
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
   );

   //Table data returned
   return (
      <>
         <div className="w-100 mb-8">
            <Searchbar
               placeholder="Search by course name or code"
               onChange={handleChange}
               value={search}
            />
         </div>
         {tabledata}
      </>
   );
};

export default Table;

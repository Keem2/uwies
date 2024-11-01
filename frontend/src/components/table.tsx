//DaisyUI table
import result from "../data/examlist";
import Divider from "./ui/divider";
import Searchbar from "./ui/searchbar";
import { Fragment, useState } from "react";
import React from "react";

type Exam = {
   code: string;
   title: string;
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
            // changing date format to long date for client
            let dateSplit = date.split("/").map(Number);
            let newDate = new Date(
               Date.UTC(dateSplit[2], dateSplit[1] - 1, dateSplit[0] + 1)
            );
            let formattedDate = new Intl.DateTimeFormat("en-GB", {
               dateStyle: "long",
            }).format(newDate);

            {
               /**Variable filterResults stores returned exam info corresponding to user input into an array */
            }
            let filterResults = result[date].filter((exam: Exam) => {
               return search.toLowerCase() === ""
                  ? exam
                  : exam.title.toLowerCase().includes(search.toLowerCase()) ||
                       exam.code.toLowerCase().includes(search.toLowerCase());
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
                           {formattedDate}
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
                                             <td key={exam.code}>
                                                {exam.code}
                                             </td>
                                             <td key={exam.title}>
                                                {exam.title}
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

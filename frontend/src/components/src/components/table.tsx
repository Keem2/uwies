//DaisyUI table
//heigh in div is fixed. Was having overflow issue
import result from "../data/examlist";
import Divider from "./ui/divider";
import Searchbar from "./form/searchbar";
import { useState } from "react";

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

   const tabledata = (
      <>
         {Object.keys(result).map((date) => {
            {
               /**Variable filterResults stores returned exam info corresponding to user input into an array */
            }
            let filterResults = result[date].filter((exam: Exam) => {
               return search.toLowerCase() === ""
                  ? exam
                  : exam.description.toLowerCase().includes(search) ||
                       exam.course.toLowerCase().includes(search);
            });
            return (
               <>
                  {filterResults.length > 0 && (
                     <>
                        <p
                           className={
                              "dark:text-white font-semibold text-base md:text-lg"
                           }
                           key={date}
                        >
                           {date}
                        </p>
                        <div className="overflow-x-auto">
                           <table
                              className="table table-sm 
       md:table-md dark:text-white"
                           >
                              <thead>
                                 <tr className="bg-slate-100 dark:bg-gray-800 text-xs md:text-base dark:text-white">
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
                                    (exam: Exam, index: any) => {
                                       return (
                                          <tr key={index}>
                                             <td>{exam.course}</td>
                                             <td>{exam.description}</td>
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
               </>
            );
         })}
      </>
   );

   return (
      <>
         <div className="w-100 mb-8">
            <Searchbar
               placeholder="Search by course name or code"
               onChange={handleChange}
               value={search}
            />
         </div>
         <section>{tabledata}</section>
      </>
   );
};

export default Table;

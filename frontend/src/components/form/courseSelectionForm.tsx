import FormWrapper from "./formWrapper";
import courses from "../../data/courselist";
import { useState } from "react";
import Searchbar from "../ui/searchbar";

type Course = {
   course: string;
   description: string;
};

const CourseSelectionForm = () => {
   const [search, setSearch] = useState("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   return (
      <FormWrapper>
         <ul className="steps justify-center mb-16">
            <li className="step step-primary dark:text-white">Enter name</li>
            <li className="step step-primary dark:text-white ">
               Choose courses
            </li>
         </ul>
         <div className="w-100 mb-8">
            <Searchbar
               placeholder="Search by course name or code"
               onChange={handleChange}
               value={search}
            />
         </div>
         <div className="overflow-x-auto h-48">
            <table
               className="table table-sm 
       md:table-md dark:text-white table-pin-cols"
            >
               <thead>
                  <tr className="bg-slate-100 dark:bg-gray-800 text-xs text-gray-600 md:text-base dark:text-white">
                     <td>Course Code</td>
                     <td>Course Name</td>
                     <th className="bg-slate-100 dark:bg-gray-800"></th>
                  </tr>
               </thead>
               <tbody>
                  {courses
                     .filter((course: Course) => {
                        return search.toLowerCase() === ""
                           ? course
                           : course.description
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                                course.course
                                   .toLowerCase()
                                   .includes(search.toLowerCase());
                     })
                     .map((course: Course, index: any) => (
                        <tr key={index}>
                           <td>{course.course}</td>
                           <td>{course.description}</td>
                           <th className="bg-slate-50 dark:bg-gray-900">
                              <div className="flex justify-center">
                                 <button
                                    type="button"
                                    className="btn w-16
                                    md:w-18
                          bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                                 >
                                    Add
                                 </button>
                              </div>
                           </th>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </FormWrapper>
   );
};

export default CourseSelectionForm;

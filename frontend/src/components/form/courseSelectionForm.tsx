import FormWrapper from "./formWrapper";
import courses from "../../data/courselist";
import { useEffect, useState } from "react";
import Searchbar from "../ui/searchbar";

type Course = {
   course: string;
   description: string;
   time: string;
   hours: string;
   location: string;
   room: string;
   date: string;
};

type ScheduleData = {
   chosenCourses: {
      course: string;
      description: string;
      time: string;
      hours: string;
      location: string;
      room: string;
      date: string;
   }[];
};

//ScheduleData & makes this combiine the ScheduleData type and this type
type CourseSelectionFormProps = ScheduleData & {
   updateFields: (fields: Partial<ScheduleData>) => void;
};

const CourseSelectionForm = ({
   chosenCourses,
   updateFields,
}: CourseSelectionFormProps) => {
   const [search, setSearch] = useState("");

   const [courseSelection, setCourseSelection] = useState(chosenCourses);
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   //updates chosenCourses when state form is updated
   useEffect(() => {
      updateFields({
         chosenCourses: [...courseSelection],
      });
   }, [courseSelection]);

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
                     .map((exam: Course, index: any) => (
                        <tr key={index}>
                           <td>{exam.course}</td>
                           <td>{exam.description}</td>
                           <th className="bg-slate-50 dark:bg-gray-900">
                              <div className="flex justify-center">
                                 <button
                                    type="button"
                                    className="btn w-16
                                    md:w-18
                          bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                                    onClick={() => {
                                       setCourseSelection([
                                          ...courseSelection,
                                          {
                                             course: exam.course,
                                             description: exam.description,
                                             time: exam.time,
                                             hours: exam.hours,
                                             location: exam.location,
                                             room: exam.room,
                                             date: exam.date,
                                          },
                                       ]);
                                    }}
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
         {chosenCourses.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-300 italic text-center mt-20 text-md">
               Courses you add will appear here!
            </p>
         ) : (
            <>
               <h1 className="dark:text-slate-300 font-extrabold mt-10 text-xl">
                  Course Selection
               </h1>
               <div className="overflow-x-auto">
                  <table
                     className="table table-sm 
       md:table-md dark:text-white table-pin-cols"
                  >
                     <thead>
                        <tr className="bg-slate-100 dark:bg-gray-800 text-xs text-gray-600 md:text-base dark:text-white">
                           <td>Course Code</td>
                           <td>Course Name</td>
                           <td>Time</td>
                           <td>Length</td>
                           <td>Location</td>
                           <td>Room</td>
                           <td>Date</td>
                           <th className="bg-slate-100 dark:bg-gray-800"></th>
                        </tr>
                     </thead>
                     <tbody>
                        {courseSelection.map(
                           (course: Course, index: number) => {
                              return (
                                 <tr key={index}>
                                    <td>{course.course}</td>
                                    <td>{course.description}</td>
                                    <td>{course.time}</td>
                                    <td>{course.hours}</td>
                                    <td>{course.location}</td>
                                    <td>{course.room}</td>
                                    <td>{course.date}</td>
                                    <th className="bg-slate-50 dark:bg-gray-900">
                                       <div className="flex justify-center">
                                          <button
                                             type="button"
                                             className="btn w-16
                                    md:w-18
                          bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                                             onClick={() => {}}
                                          >
                                             Remove
                                          </button>
                                       </div>
                                    </th>
                                 </tr>
                              );
                           }
                        )}
                     </tbody>
                  </table>
               </div>
            </>
         )}
      </FormWrapper>
   );
};

export default CourseSelectionForm;

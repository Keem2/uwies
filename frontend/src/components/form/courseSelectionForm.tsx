import FormWrapper from "./formWrapper";
import { SetStateAction, useEffect, useState } from "react";
import Searchbar from "../ui/searchbar";
import supabase from "../../utils/supabaseClient";
import { Dispatch } from "react";

type Course = {
   code: string;
   title: string;
};

type ScheduleData = {
   chosenCourses: string[];
};

//ScheduleData & makes this combiine the ScheduleData type and this type
type CourseSelectionFormProps = ScheduleData & {
   isEmpty: boolean;
   updateFields: (fields: Partial<ScheduleData>) => void;
   setIsDisabled: Dispatch<SetStateAction<boolean>>;
};

const CourseSelectionForm = ({
   chosenCourses,
   isEmpty,
   updateFields,
   setIsDisabled,
}: CourseSelectionFormProps) => {
   const [search, setSearch] = useState("");
   const [courses, setCourses] = useState<any>([]);
   const [gotCourses, setGotCourses] = useState(false);
   //course selection when user clicks add
   const [courseSelection, setCourseSelection] = useState<Course[]>([]);
   //array of course codes to be uploaded to supabase
   const [uploadSelection, setUploadSelection] = useState(chosenCourses);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   const getCourses = async () => {
      setIsDisabled(true);
      let { data: exams, error } = await supabase
         .from("exams")
         .select("code,title");

      if (exams) {
         let courseListSorted = exams.sort((a, b) => {
            if (a.code < b.code) {
               return -1;
            }
            if (a.code > b.code) {
               return 1;
            }
            return 0;
         });
         setCourses(courseListSorted);
         setGotCourses(true);
         setIsDisabled(false);
      }

      if (error) {
      }
   };

   //load courses from supabase DB every time hasLoaded changes
   useEffect(() => {
      getCourses();
   }, [gotCourses]);

   //updates chosenCourses when state form is updated
   useEffect(() => {
      updateFields({
         chosenCourses: [...uploadSelection],
      });
   }, [courseSelection]);

   return (
      <FormWrapper>
         <ul className="steps justify-center mb-16">
            <li className="step step-primary dark:text-white text-black">
               Enter name
            </li>
            <li className="step step-primary dark:text-white text-black">
               Choose courses
            </li>
         </ul>
         {/**Error shown if courses selected are empty */}
         {isEmpty && (
            <div role="alert" className="alert alert-error mb-10 md:w-96">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
               </svg>
               <span>Your schedule must have a code in it.</span>
            </div>
         )}
         {gotCourses === false ? (
            <div className="flex flex-col items-center mb-10 text-black dark:text-white">
               <p className="mb-3 font-semibold text-lg">
                  Getting course list...
               </p>
               <span className="loading loading-dots loading-lg"></span>
            </div>
         ) : (
            <>
               <div className="w-100 mb-8">
                  <Searchbar
                     placeholder="Search by code name or code"
                     onChange={handleChange}
                     value={search}
                  />
               </div>
               <div className="overflow-x-auto h-48">
                  <table
                     className="table table-sm 
       md:table-md dark:text-white text-black table-pin-cols"
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
                           .filter((code: Course) => {
                              return search.toLowerCase() === ""
                                 ? code
                                 : code.title
                                      .toLowerCase()
                                      .includes(search.toLowerCase()) ||
                                      code.code
                                         .toLowerCase()
                                         .includes(search.toLowerCase());
                           })
                           .map((exam: Course, index: number) => (
                              <tr key={index}>
                                 <td>{exam.code}</td>
                                 <td>{exam.title}</td>
                                 <th className="bg-slate-50 dark:bg-gray-900">
                                    <div className="flex justify-center">
                                       {/**If code has been added to courseSelection state array, change from add button to added */}
                                       {courseSelection!.filter(
                                          (code) => code.title === exam.title
                                       ).length > 0 ? (
                                          <p className="border border-black dark:border-white p-2 rounded-md">
                                             Added
                                          </p>
                                       ) : (
                                          <button
                                             type="button"
                                             className="btn w-16
                                    md:w-18
                          bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                                             onClick={() => {
                                                setCourseSelection([
                                                   ...courseSelection,
                                                   {
                                                      code: exam.code,
                                                      title: exam.title,
                                                   },
                                                ]);
                                                setUploadSelection([
                                                   ...uploadSelection,
                                                   exam.code,
                                                ]);
                                             }}
                                          >
                                             Add
                                          </button>
                                       )}
                                    </div>
                                 </th>
                              </tr>
                           ))}
                     </tbody>
                  </table>
               </div>
            </>
         )}

         {/**Course Selection Table  */}
         {courseSelection.length === 0 ? (
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
       md:table-md dark:text-white text-black table-pin-cols"
                  >
                     <thead>
                        <tr className="bg-slate-100 dark:bg-gray-800 text-xs text-gray-600 md:text-base dark:text-white">
                           <td>Course Code</td>
                           <td>Course Name</td>
                           <th className="bg-slate-100 dark:bg-gray-800"></th>
                        </tr>
                     </thead>
                     <tbody>
                        {courseSelection.map(
                           (course: Course, index: number) => {
                              return (
                                 <tr key={index}>
                                    <td>{course.code}</td>
                                    <td>{course.title}</td>

                                    <th className="bg-slate-50 dark:bg-gray-900">
                                       <div className="flex justify-center">
                                          <button
                                             type="button"
                                             className="btn w-16
                                    md:w-18
                          bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                                             onClick={() => {
                                                //Remove from courseSelection array
                                                setCourseSelection(
                                                   courseSelection.filter(
                                                      (exam) =>
                                                         exam.title !==
                                                         course.title
                                                   )
                                                );
                                                setUploadSelection(
                                                   uploadSelection.filter(
                                                      (exam) =>
                                                         exam !== course.code
                                                   )
                                                );
                                             }}
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

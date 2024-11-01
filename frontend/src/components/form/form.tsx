//Form that user will submit to add schedule to database
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import ScheduleNameForm from "./scheduleNameForm";
import CourseSelectionForm from "./courseSelectionForm";
import LoadingButton from "../ui/loadingbutton";
import { FormEvent, useState } from "react";
import ScheduleCreated from "./scheduleCreated";
import supabase from "../../utils/supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";
import FormError from "./formError";

type FormData = {
   scheduleName: string;
   chosenCourses: {
      code: string;
      title: string;
      time: string;
      hours: string;
      location: string;
      room: string;
      date: string;
   }[];
};
//initial form data
const INITIAL_FORM_DATA: FormData = {
   scheduleName: "",
   chosenCourses: [],
};
const MultiStepForm = () => {
   //user context
   const session = useSession();

   //form data state
   const [data, setData] = useState(INITIAL_FORM_DATA);
   const [isEmpty, setIsEmpty] = useState({
      name: false,
      courseList: false,
   });

   //isLoading state for create button
   const [isLoading, setIsLoading] = useState(false);

   const updateFields = (fields: Partial<FormData>) => {
      //partial type allows you to pass in specific properties of a chosen type, instead of all

      //overriding current values with new ones
      setData((currentData) => {
         return { ...currentData, ...fields };
      });
   };

   //{...data} is to use pass state data to components
   const {
      step,
      currentStep,
      isFirstStep,
      isLastStep,
      nextStep,
      prevStep,
      goToStep,
   } = useMultiStepForm([
      <ScheduleNameForm
         {...data}
         updateFields={updateFields}
         isEmpty={isEmpty.name}
      />,
      <CourseSelectionForm
         {...data}
         updateFields={updateFields}
         isEmpty={isEmpty.courseList}
      />,
      <ScheduleCreated />,
      <FormError />,
   ]);

   //function when submitting form to validate
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!isLastStep)
         if (data.scheduleName === "") {
            setIsEmpty({ name: true, courseList: false });
         } else {
            setIsEmpty({ name: false, courseList: false });
            return nextStep();
         }
      else if (data.chosenCourses.length === 0) {
         setIsEmpty({ name: false, courseList: true });
      } else if (
         isLastStep &&
         data.scheduleName != "" &&
         data.chosenCourses.length !== 0
      ) {
         setIsEmpty({ name: false, courseList: false });
         createSchedule();
      }
   };

   //function to insert schedule details to database
   const createSchedule = async () => {
      setIsLoading(true);
      const { error } = await supabase
         .from("schedule")
         .insert([
            {
               userid: session?.user.id,
               name: data.scheduleName,
               courses: data.chosenCourses,
            },
         ])
         .single();
      if (error) {
         setIsLoading(false);
         goToStep(3);
      } else {
         setIsLoading(false);
         goToStep(2);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="ml-7 mt-7">
            {currentStep !== 2 && (
               <h1 className="capitalize dark:text-slate-300 text-black font-extrabold mb-10 text-3xl md:text-4xl">
                  Create Schedule
               </h1>
            )}

            {/**Current step's Component */}
            {step}
            <div className=" flex justify-between mt-20 -ml-4">
               {currentStep < 2 && (
                  <>
                     {!isFirstStep && (
                        <button
                           type="button"
                           className="btn w-24 bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                           onClick={prevStep}
                        >
                           Back
                        </button>
                     )}
                     {isLoading ? (
                        <LoadingButton
                           title="Creating..."
                           styles="btn btn-ghost mb-12 px-4 py-1.5 text-base dark:text-white text-black"
                        />
                     ) : (
                        <button
                           type="submit"
                           className="btn w-24 mb-12 bg-black dark:bg-slate-100 text-white dark:text-black hover:bg-neutral-600 dark:hover:bg-slate-300"
                        >
                           {isLastStep ? "Create" : "Next"}
                        </button>
                     )}
                  </>
               )}
            </div>
         </div>
      </form>
   );
};

export default MultiStepForm;

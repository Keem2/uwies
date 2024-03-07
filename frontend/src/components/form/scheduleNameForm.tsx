import TextInput from "./textinput";
import FormWrapper from "./formWrapper";

type ScheduleData = {
   scheduleName: string;
};

//ScheduleData & makes this combiine the ScheduleData type and this type
type ScheduleNameFormProps = ScheduleData & {
   isEmpty: boolean;
   updateFields: (fields: Partial<ScheduleData>) => void;
};

//scheduleName destructured from parent data state
const ScheduleNameForm = ({
   scheduleName,
   isEmpty,
   updateFields,
}: ScheduleNameFormProps) => {
   return (
      <FormWrapper>
         <ul className="steps justify-center mb-16">
            <li className="step step-primary dark:text-white">Enter name</li>
            <li className="step dark:text-white ">Choose courses</li>
         </ul>
         {/**Error shown if schedule's name is empty */}
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
               <span>Your schedule must have a name.</span>
            </div>
         )}
         <TextInput
            placeholder="Enter here..."
            label="Enter your schedule's name"
            value={scheduleName}
            onChange={(e) => updateFields({ scheduleName: e.target.value })}
         />
      </FormWrapper>
   );
};

export default ScheduleNameForm;
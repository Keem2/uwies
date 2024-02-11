import TextInput from "./textinput";
import FormWrapper from "./formWrapper";

type ScheduleData = {
   scheduleName: string;
};

//ScheduleData & makes this combiine the ScheduleData type and this type
type ScheduleNameFormProps = ScheduleData & {
   updateFields: (fields: Partial<ScheduleData>) => void;
};

//scheduleName destructured from parent data state
const ScheduleNameForm = ({
   scheduleName,
   updateFields,
}: ScheduleNameFormProps) => {
   return (
      <FormWrapper>
         <ul className="steps justify-center mb-16">
            <li className="step step-primary dark:text-white">Enter name</li>
            <li className="step dark:text-white ">Choose courses</li>
         </ul>
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

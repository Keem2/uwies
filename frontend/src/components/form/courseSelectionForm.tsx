import FormWrapper from "./formWrapper";

const CourseSelectionForm = () => {
   return (
      <FormWrapper>
         <ul className="steps justify-center mb-16">
            <li className="step step-primary dark:text-white">Enter name</li>
            <li className="step step-primary dark:text-white ">
               Choose courses
            </li>
         </ul>
      </FormWrapper>
   );
};

export default CourseSelectionForm;

import MultiStepForm from "../components/form/form";

import Navbar from "../components/navbar";

const Create = () => {
   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
         <Navbar />
         <MultiStepForm />{" "}
      </section>
   );
};

export default Create;

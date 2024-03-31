import Navbar from "../components/navbar";
import ScheduleList from "../components/schedulelist";

const Create = () => {
   return (
      <>
         <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-dvh overflow-x-hidden">
            <Navbar />
            <ScheduleList />
         </section>
      </>
   );
};

export default Create;

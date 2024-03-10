import { Link } from "react-router-dom";
import error from "../../assets/error.svg";

const FormUpdateError = () => {
   return (
      <section className="text-center -ml-5">
         <div className="flex justify-center">
            <img src={error} className="w-52 h-52" />
         </div>
         <p className="mt-1 text-xl md:text-2xl dark:text-white font-semibold">
            An error occurred.
         </p>

         <div className="flex mx-12 md:mx-32 lg:mx-96 mt-12 gap-10 justify-center flex-col">
            <Link
               to={"/view"}
               className="border-gray-600 rounded-lg border py-3 dark:text-white text-black dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-90"
            >
               Back to schedules
            </Link>
            <Link
               to={"/"}
               className="border-gray-600 rounded-lg border py-3 dark:text-white text-black dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-90"
            >
               Back to home
            </Link>
         </div>
      </section>
   );
};

export default FormUpdateError;

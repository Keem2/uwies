import Navbar from "./navbar";
import { Link } from "react-router-dom";

const ErrorBoundary = () => {
   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
         <Navbar />
         <div className="ml-5 md:ml-5 mt-20 text-center">
            <h1 className="text-3xl md:text-4xl dark:text-white font-semibold italic">
               Uh oh!
            </h1>
            <p className="text-slate-500 dark:text-slate-300 text-lg mt-6">
               Something went wrong...🤔
            </p>
            <p className="text-slate-500 dark:text-slate-300 text-lg mt-6">
               Try going back to the{" "}
               <Link to={`/`} className="text-black dark:text-white underline">
                  home page
               </Link>
            </p>
         </div>
      </section>
   );
};

export default ErrorBoundary;

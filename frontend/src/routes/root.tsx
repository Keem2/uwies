import Navbar from "../components/navbar";
import Heading from "../components/heading";
import LinkButton from "../components/ui/linkbutton";
import BookmarkIcon from "../assets/bookmark.svg";
import AddIcon from "../assets/add.svg";
import Divider from "../components/ui/divider";
import Table from "../components/table";
import Footer from "../components/footer";
import { useSession, useSessionContext } from "@supabase/auth-helpers-react";

const Root = () => {
   //if app is loading, don't show app (prevents flicker)
   const { isLoading } = useSessionContext();
   //context for user object
   const session = useSession();

   if (isLoading) {
      return <></>;
   }

   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-dvh overflow-x-hidden text-black dark:text-white">
         <Navbar />

         <header className="text-center">
            <Heading semester={"Two"} semesterYear={"2023-2024"} />
         </header>
         {session ? (
            <section className="flex justify-center gap-x-6 mt-10">
               <LinkButton
                  title={"Create your schedule"}
                  svgSrc={AddIcon}
                  link={`create`}
                  alt={"Create Icon"}
               />

               <LinkButton
                  title={"View saved schedules"}
                  svgSrc={BookmarkIcon}
                  link={`view`}
                  alt={"Saved Icon"}
               />
            </section>
         ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-14">
               Log in to create or view your schedule!
            </p>
         )}

         <h2 className="text-2xl md:text-3xl font-bold mt-14 md:ml-8 dark:text-white">
            Exam Timetable
         </h2>

         <section className="md:ml-8">
            <Divider />
            <Table />
         </section>
         <Footer />
      </section>
   );
};

export default Root;

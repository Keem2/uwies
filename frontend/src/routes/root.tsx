import Navbar from "../components/navbar";
import Heading from "../components/heading";
import LinkButton from "../components/ui/linkbutton";
import BookmarkIcon from "../assets/bookmark.svg";
import AddIcon from "../assets/add.svg";
import Divider from "../components/ui/divider";
import Table from "../components/table";
import { useState } from "react";
import { userContext } from "../context/userContext";

//context for user object, to share witihin whole app

const Root = () => {
   const [user, setUser] = useState({});
   const userData = { user, setUser };

   return (
      <userContext.Provider value={userData}>
         <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
            <Navbar />

            <header className="text-center dark:text-white">
               <Heading semester={"II"} semesterYear={"2023-2024"} />
            </header>
            {Object.keys(user).length !== 0 ? (
               <section className="flex justify-center gap-x-6 mt-10">
                  <LinkButton
                     title={"Create your schedule"}
                     svgSrc={AddIcon}
                     link={`create`}
                  />

                  <LinkButton
                     title={"View saved schedules"}
                     svgSrc={BookmarkIcon}
                     link={`view`}
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
         </section>
      </userContext.Provider>
   );
};

export default Root;

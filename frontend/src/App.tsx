import Navbar from "./components/navbar";
import Heading from "./components/heading";
import LinkButton from "./components/ui/linkbutton";
import BookmarkIcon from "./assets/bookmark.svg";
import AddIcon from "./assets/add.svg";
import Divider from "./components/ui/divider";
import Table from "./components/table";

const App = () => {
   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden">
         <Navbar />

         <header className="text-center dark:text-white">
            <Heading semester={"II"} semesterYear={"2023-2024"} />
         </header>

         <section className="flex justify-around gap-x-6 mt-10 sm:justify-center md:ml-10">
            <LinkButton title={"Create your schedule"} svgSrc={AddIcon} />

            <LinkButton title={"View saved schedule"} svgSrc={BookmarkIcon} />
         </section>

         <h2 className="text-2xl md:text-3xl font-bold mt-14 md:ml-8 dark:text-white">
            Exam Timetable
         </h2>

         <section className="md:ml-8" key={""}>
            <Divider />
            <Table />
         </section>
      </section>
   );
};

export default App;

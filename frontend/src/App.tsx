import Navbar from "./components/navbar";
import Heading from "./components/heading";
import LinkButton from "./components/ui/linkbutton";
import BookmarkIcon from "./assets/bookmark.svg";
import AddIcon from "./assets/add.svg";

const App = () => {
   return (
      <div className="mx-7 mt-5 body-color font-body-font">
         <Navbar />

         <div className="text-center">
            <Heading semester={"II"} semesterYear={"2023-2024"} />
         </div>

         <div className="flex justify-around gap-x-6 mt-10 sm:justify-center lg:ml-10">
            <LinkButton title={"Create your schedule"} svgSrc={AddIcon} />

            <LinkButton title={"View saved schedule"} svgSrc={BookmarkIcon} />
         </div>
      </div>
   );
};

export default App;

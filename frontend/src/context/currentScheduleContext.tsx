import { Dispatch, SetStateAction, createContext } from "react";
import { useSessionStorage } from "@uidotdev/usehooks";

interface ScheduleContext {
   currentSchedule: {
      userid: string;
      name: string;
      id: string;
      courses: {
         course: string;
         date: string;
         description: string;
         hours: string;
         location: string;
         room: string;
         time: string;
      }[];
   };
   setCurrentSchedule: Dispatch<SetStateAction<{} | null>>;
}
const CurrentScheduleContext = createContext<ScheduleContext>({
   currentSchedule: { userid: "", name: "", id: "", courses: [] },
   setCurrentSchedule: () => {},
});

const CurrentScheduleContextProvider = ({ children }: any) => {
   const [currentSchedule, setCurrentSchedule] = useSessionStorage<any>(
      "currentSchedule",
      null
   );

   return (
      <CurrentScheduleContext.Provider
         value={{ currentSchedule, setCurrentSchedule }}
      >
         {children}
      </CurrentScheduleContext.Provider>
   );
};

export { CurrentScheduleContext, CurrentScheduleContextProvider };

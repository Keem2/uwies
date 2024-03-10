import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const CurrentScheduleContext = createContext<any>({
   currentSchedule: {},
   setCurrentSchedule: () => {},
});

const CurrentScheduleContextProvider = ({ children }: any) => {
   const [currentSchedule, setCurrentSchedule] = useLocalStorage<any>(
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

import { createContext } from "react";
import { useSessionStorage } from "@uidotdev/usehooks";

const CurrentScheduleContext = createContext<any>({
   currentSchedule: {},
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

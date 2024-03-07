import { useState, createContext } from "react";

const CurrentScheduleContext = createContext<any>({
   currentSchedule: {},
   setCurrentSchedule: () => {},
});

const CurrentScheduleContextProvider = ({ children }: any) => {
   const [currentSchedule, setCurrentSchedule] = useState<any>({});

   return (
      <CurrentScheduleContext.Provider
         value={{ currentSchedule, setCurrentSchedule }}
      >
         {children}
      </CurrentScheduleContext.Provider>
   );
};

export { CurrentScheduleContext, CurrentScheduleContextProvider };

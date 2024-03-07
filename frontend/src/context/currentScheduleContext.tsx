<<<<<<< HEAD
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
=======
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
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194

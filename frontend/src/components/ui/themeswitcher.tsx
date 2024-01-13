import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

const ThemeSwitcher = () => {
   //UseLocalStorage hook to set initial value of theme in LocalStorage
   const [theme, setTheme] = useLocalStorage("theme", "light");

   //value to change style of switch based on state variable 'theme'
   let isChecked = theme === "light" ? false : true;

   //toggling Tailwind's dark class
   useEffect(() => {
      theme === "dark"
         ? document.documentElement.classList.add("dark")
         : document.documentElement.classList.remove("dark");
   }, [theme]);

   return (
      <>
         {/** Toggle Switch from daisyui */}
         <label className="flex cursor-pointer gap-2">
            {/** Sun Icon */}
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <circle cx="12" cy="12" r="5" />
               <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
               type="checkbox"
               value="synthwave"
               className="toggle theme-controller"
               checked={isChecked}
               onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
               }
               readOnly
            />
            {/** Moon Icon */}
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
         </label>
      </>
   );
};

export default ThemeSwitcher;

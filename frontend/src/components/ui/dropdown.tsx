//DaisyUI dropdown - Used in navbar
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/google.svg";
import SignOutIcon from "../../assets/signout.svg";
import UserIcon from "../../assets/user-circle.svg";
import { useEffect, useState } from "react";

//supabase connection. ! is Non-null assertion operator in TS
const supabase = createClient(
   import.meta.env.VITE_SUPABASE_UWIES_URL,
   import.meta.env.VITE_SUPABASE_UWIES_ANON_PUBLIC
);

const MenuDropdown = () => {
   //user object
   const [user, setUser]: any = useState({});

   const navigate = useNavigate();

   //hides dropdown menu onclick
   const handleLinkClick = () => {
      const elem = document.activeElement;
      if (elem instanceof HTMLElement) {
         elem.blur();
      }
   };

   //navigate if signed in or signed out
   useEffect(() => {
      supabase.auth.onAuthStateChange(async (event) => {
         if (event == "SIGNED_IN") {
            navigate("/");
         }

         //navigates to the "/" route and refreshes it
         if (event == "SIGNED_OUT") {
            navigate("/");
            navigate(0);
         }
      });
   }, []);

   //try to get user data on initial load
   useEffect(() => {
      async function getUserData() {
         await supabase.auth.getUser().then((value: any) => {
            if (value.data?.user) {
               console.log(value.data.user);
               setUser(value.data.user);
            }
         });
      }
      getUserData();
   }, []);

   //function to sign out user
   async function signOutUser() {
      await supabase.auth.signOut();
   }

   //if user state object is empty, show log in button. Else, show button with name
   return (
      <>
         {Object.keys(user).length === 0 ? (
            <div className="dropdown dropdown- -mt-4">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost m-1 px-4 py-3 transition-transform dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
               >
                  <div className="flex">
                     <img
                        src={UserIcon}
                        alt="User Icon"
                        className="w-6 h-6 dark:invert"
                     />
                     <p className="px-1.5 text-base">Log In</p>
                  </div>
               </div>

               <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 dark:bg-gray-800"
               >
                  <li
                     onClick={() => {
                        handleLinkClick();
                        supabase.auth.signInWithOAuth({
                           provider: "google",
                        });
                     }}
                  >
                     <a className="text-sm">
                        <img
                           src={GoogleIcon}
                           alt="Google Icon"
                           className="w-5 h-5"
                        />
                        Continue with Google
                     </a>
                  </li>
               </ul>
            </div>
         ) : (
            <div className="dropdown dropdown- -mt-4 ">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost m-1 px-4 py-3 transition-transform dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 w-max"
               >
                  <div className="flex max-w-40 md:max-w-none">
                     <p className="px-1.5 text-base">
                        Hello,{" "}
                        {user.user_metadata.full_name.substring(
                           0,
                           user.user_metadata.full_name.indexOf(" ")
                        )}
                     </p>
                  </div>
               </div>

               <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 dark:bg-gray-800"
               >
                  <li
                     onClick={() => {
                        handleLinkClick();
                        signOutUser();
                     }}
                  >
                     <a className="text-sm">
                        <img
                           src={SignOutIcon}
                           alt="Google Icon"
                           className="w-5 h-5 dark:invert"
                        />
                        Sign Out
                     </a>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
};

export default MenuDropdown;

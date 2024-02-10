//DaisyUI dropdown - Used in navbar

import supabase from "../../utils/supbaseClient";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/google.svg";
import SignOutIcon from "../../assets/signout.svg";
import UserIcon from "../../assets/user-circle.svg";
import { useEffect, useContext, useState } from "react";
import { userContext } from "../../context/userContext";
import LoadingButton from "./loadingbutton";

const MenuDropdown = () => {
   //user object. any is used as type for response object
   const { user, setUser }: any = useContext(userContext);

   //loggingIn and loggingOut states for dropdown button
   const [isLoggingIn, setIsLoggingIn] = useState(false);
   const [isLoggingOut, setIsLoggingOut] = useState(false);

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
            setIsLoggingIn(false);
         }

         //navigates to the "/" route and refreshes it
         if (event == "SIGNED_OUT") {
            setIsLoggingOut(false);
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
         {Object.keys(user).length !== 0 ? (
            //If user is logging out, show loading button. Else,
            //show button with user credentials
            isLoggingOut ? (
               <LoadingButton
                  title="Logging out..."
                  styles="btn btn-ghost px-4 py-1.5 -mt-2 text-base dark:text-white dark:hover:bg-gray-800"
               />
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
                           setIsLoggingOut(true);
                           signOutUser();
                        }}
                     >
                        <button className="text-sm">
                           <img
                              src={SignOutIcon}
                              alt="Google Icon"
                              className="w-5 h-5 dark:invert"
                           />
                           Log Out
                        </button>
                     </li>
                  </ul>
               </div>
            )
         ) : //If user is logging in, show loading button. Else,
         //show log in button
         isLoggingIn ? (
            <LoadingButton
               title="Logging in..."
               styles="btn btn-ghost px-4 py-1.5 -mt-2 text-base dark:text-white dark:hover:bg-gray-800"
            />
         ) : (
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
                        setIsLoggingIn(true);
                        supabase.auth.signInWithOAuth({
                           provider: "google",
                        });
                     }}
                  >
                     <button className="text-sm">
                        <img
                           src={GoogleIcon}
                           alt="Google Icon"
                           className="w-5 h-5"
                        />
                        Continue with Google
                     </button>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
};

export default MenuDropdown;

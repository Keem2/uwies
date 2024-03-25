//DaisyUI dropdown - Used in navbar
import { NavLink } from "react-router-dom";
import supabase from "../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/google.svg";
import { useEffect, useState, useContext } from "react";
import LoadingButton from "./loadingbutton";
import { useSession } from "@supabase/auth-helpers-react";
import { CurrentScheduleContext } from "../../context/currentScheduleContext";

const MenuDropdown = () => {
   //session hook which provides session details
   const session = useSession();

   //loggingIn and loggingOut states for dropdown button
   const [isLoggingIn, setIsLoggingIn] = useState(false);
   const [isLoggingOut, setIsLoggingOut] = useState(false);
   const [isLoginError, setIsLoginError] = useState(false);

   const navigate = useNavigate();

   const { setCurrentSchedule } = useContext(CurrentScheduleContext);

   //hides dropdown menu onclick
   const handleLinkClick = () => {
      const elem = document.activeElement;
      if (elem instanceof HTMLElement) {
         elem.blur();
      }
   };

   //sign in function
   const googleSignIn = async () => {
      const { error } = await supabase.auth.signInWithOAuth({
         provider: "google",
         options: {
            redirectTo: window.location.origin,
         },
      });
      if (error) {
         setIsLoggingIn(false);
         setIsLoginError(true);
      }
   };

   //hide error toast after 5 seconds
   useEffect(() => {
      const timer = setTimeout(function () {
         setIsLoginError(false);
      }, 5000);
      return () => {
         clearTimeout(timer);
      };
   }, [isLoginError]);

   //logic if user is signed in or signed out
   useEffect(() => {
      supabase.auth.onAuthStateChange(async (event) => {
         if (event == "SIGNED_IN") {
            setIsLoggingIn(false);
         }

         //navigates to the "/" route
         if (event == "SIGNED_OUT") {
            setIsLoggingOut(false);
            navigate("/");
         }
      });
   }, []);

   //function to sign out user
   async function signOutUser() {
      const { error } = await supabase.auth.signOut();
      if (error) {
         setIsLoggingOut(false);
         setIsLoginError(true);
      }
      setCurrentSchedule(null);
   }

   return (
      <>
         {isLoginError && (
            <div className="toast z-20">
               <div className="alert alert-error">
                  <span>Something went wrong. Please try again.</span>
               </div>
            </div>
         )}
         {session === null ? (
            //If user is logging in, show loading button. Else, show log in button
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
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                           />
                        </svg>

                        <p className="px-1.5 text-base">Log In</p>
                     </div>
                  </div>

                  <ul
                     tabIndex={0}
                     className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 rounded-box w-60 dark:bg-gray-800"
                  >
                     <li
                        onClick={() => {
                           handleLinkClick();
                           setIsLoggingIn(true);
                           googleSignIn();
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
            )
         ) : //If user is logging out, show loading button. Else,
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
                        {session.user.user_metadata.name.substring(
                           0,
                           session.user.user_metadata.name.indexOf(" ")
                        )}
                     </p>
                  </div>
               </div>

               <ul
                  tabIndex={0}
                  className="dropdown-content z-[10] menu p-2 shadow bg-slate-100 rounded-box w-40 dark:bg-gray-800"
               >
                  <li className="dark:hover:bg-gray-700 rounded-lg dark:text-white mb-2">
                     <NavLink
                        to={`/`}
                        style={({ isActive }) => {
                           /**returns daisyui
                            * active style if link is active*/
                           return isActive ? {} : {};
                        }}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-5 h-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                           />
                        </svg>
                        Home
                     </NavLink>
                  </li>
                  <li className="active dark:hover:bg-gray-700 rounded-lg dark:text-white mb-2">
                     <NavLink
                        to={`/view`}
                        style={({ isActive }) => {
                           return isActive ? {} : {};
                        }}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-5 h-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                           />
                        </svg>
                        Schedules
                     </NavLink>
                  </li>
                  <li
                     onClick={() => {
                        handleLinkClick();
                        setIsLoggingOut(true);
                        signOutUser();
                     }}
                     className="dark:hover:bg-gray-700 rounded-lg dark:text-white"
                  >
                     <button className="text-sm">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-5 h-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                           />
                        </svg>
                        Log Out
                     </button>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
};

export default MenuDropdown;

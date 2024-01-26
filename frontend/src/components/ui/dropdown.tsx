//DaisyUI dropdown - Used in navbar

import GoogleIcon from "../../assets/google.svg";
import UserIcon from "../../assets/user-circle.svg";

const MenuDropdown = () => {
   //hides dropdown menu onclick
   const handleLinkClick = () => {
      const elem = document.activeElement;
      if (elem instanceof HTMLElement) {
         elem.blur();
      }
   };

   return (
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
               }}
            >
               <a className="text-sm">
                  <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
                  Continue with Google
               </a>
            </li>
         </ul>
      </div>
   );
};

export default MenuDropdown;

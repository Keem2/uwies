const SubmitButton = () => {
   return (
      <button className="btn border-1 border-gray-300 bg-gray-200 text-black hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:stroke-white"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
         </svg>
         Search
      </button>
   );
};

export default SubmitButton;

<<<<<<< HEAD
type Props = {
   placeholder: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar = ({ placeholder, onChange }: Props) => {
   return (
      <input
         type="text"
         className="w-full bg-slate-100 text-black p-4 border border-slate-400 outline-none rounded-lg placeholder-gray-500 focus:ring-1 ring-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-300 dark:focus:ring-gray-300"
         placeholder={placeholder}
         onChange={onChange}
      />
   );
};

export default Searchbar;
=======
type Props = {
   placeholder: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar = ({ placeholder, onChange }: Props) => {
   return (
      <input
         type="text"
         className="w-full bg-slate-100 text-black p-4 border border-slate-400 outline-none rounded-lg placeholder-gray-500 focus:ring-1 ring-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-300 dark:focus:ring-gray-300"
         placeholder={placeholder}
         onChange={onChange}
      />
   );
};

export default Searchbar;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194

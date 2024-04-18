type Props = {
   placeholder: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   disabled?: boolean;
};

const Searchbar = ({ placeholder, onChange, disabled }: Props) => {
   return (
      <input
         type="text"
         className="w-full bg-slate-100 text-black p-4 border border-slate-400 outline-none rounded-lg placeholder-gray-500 focus:ring-1 ring-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-300 dark:focus:ring-gray-300"
         placeholder={placeholder}
         onChange={onChange}
         disabled={disabled}
      />
   );
};

export default Searchbar;

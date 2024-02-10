type Props = {
   placeholder?: string;
   label?: string;
};

const TextInput = (props: Props) => {
   return (
      <>
         <label
            htmlFor="Schedule Name"
            className="block text-sm mb-3 dark:text-white"
         >
            {props.label}
         </label>
         <input
            type="text"
            placeholder={props.placeholder}
            className="w-80 md:w-96 outline-none bg-inherit px-3 py-2 border-gray-300  border-b dark:border-gray-500 rounded-md focus:border-black dark:text-white dark:focus:border-white"
         />
      </>
   );
};

export default TextInput;

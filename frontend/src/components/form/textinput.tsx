import { ChangeEventHandler } from "react";
type Props = {
   placeholder?: string;
   label?: string;
   value: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = (props: Props) => {
   return (
      <>
         <label
            htmlFor="Schedule Name"
            className="block text-base mb-3 dark:text-white font-semibold"
         >
            {props.label}
         </label>
         <input
            type="text"
            placeholder={props.placeholder}
            className="w-full outline-none bg-inherit px-3 py-2 border-gray-300  border-b dark:border-gray-500 rounded-md  focus:border-black dark:text-white dark:focus:border-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            value={props.value}
            onChange={props.onChange}
         />
      </>
   );
};

export default TextInput;

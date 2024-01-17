type Props = {
   placeholder?: string;
};

const TextInput = (props: Props) => {
   return (
      <input
         type="text"
         placeholder={props.placeholder}
         className="border border-black focus:border-blue-300"
      />
   );
};

export default TextInput;

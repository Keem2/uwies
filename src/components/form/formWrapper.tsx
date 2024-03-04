import { ReactNode } from "react";

//to wrap form styles around so they do not bug out
type FormWrapperProps = {
   children: ReactNode;
};
const FormWrapper = ({ children }: FormWrapperProps) => {
   return <div className="flex flex-col -ml-4">{children}</div>;
};

export default FormWrapper;

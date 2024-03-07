<<<<<<< HEAD
//Button from DaisyUI
type Props = {
   title: string;
   styles: string;
};

const LoadingButton = (props: Props) => {
   return (
      <button className={props.styles} aria-disabled="true">
         <span className="loading loading-spinner"></span>
         {props.title}
      </button>
   );
};

export default LoadingButton;
=======
//Button from DaisyUI
type Props = {
   title: string;
   styles: string;
};

const LoadingButton = (props: Props) => {
   return (
      <button className={props.styles} aria-disabled="true">
         <span className="loading loading-spinner"></span>
         {props.title}
      </button>
   );
};

export default LoadingButton;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194

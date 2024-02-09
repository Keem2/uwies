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

type Props = {
   title: String;
   svgSrc: any;
};

const LinkButton = ({ title, svgSrc }: Props) => {
   return (
      <a className="font-light text-gray-600 text-center px-5 py-8 rounded-xl border border-gray-400 md:px-12 text-lg block w-100 transition-all cursor-pointer hover:bg-gray-200">
         <img src={svgSrc} className="w-10 m-auto mb-3" alt="Icon" />
         {title}
      </a>
   );
};

export default LinkButton;

type Props = {
   title: String;
   svgSrc: any;
};

const LinkButton = ({ title, svgSrc }: Props) => {
   return (
      <a className="font-light bg-gray-100 text-center px-4 py-8 rounded-md border border-gray-300 md:px-12 text-xl block w-100 transition-all cursor-pointer hover:bg-gray-300">
         <img src={svgSrc} className="w-10 m-auto mb-3" alt="Icon" />
         {title}
      </a>
   );
};

export default LinkButton;
